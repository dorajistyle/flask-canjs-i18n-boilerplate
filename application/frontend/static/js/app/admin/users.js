define(['jquery', 'can', 'app/models/user/user', 'app/models/user/user_admin', 'app/models/user/role', 'app/models/user/user_role',
    'settings', 'utils', 'i18n', 'jquery.bootstrap', 'jquery.typeahead'],
    function ($, can, User, UserAdmin, Role, UserRole, settings, utils, i18n) {
    'use strict';

    /**
     * Instance of Admin Contorllers.
     * @private
     */
    var create_user_role, destroy_user, show_user, destroy_user_role, toggle_active_user;

    var ShowUser = can.Control.extend({
        init: function () {
            utils.logInfo('*admin/ShowUser', 'Initialized');

        },
        searchFilter: function(data) {
            var users = [];
                $.each(users, function(i, obj) {
                    users.push({email: obj.email});
                });
            return users;
        },
        searchInit: function() {
            var $searchUser = $('#searchUser');
            $searchUser.typeahead('destroy');
            $searchUser.typeahead({
              name: 'users',
              valueKey: 'email',
              template: '<p><strong>{{email}}</strong></p>',
              remote: {url: settings.api_path+'/users/list/email/%QUERY',
                       filter: function(resp, status, jqXhr) {
                           var users = [];
                           $.each(resp.users, function(i, obj) {
                               users.push({id: obj.id, email: obj.email});
                           });
                           return users;
                       }
              },
              engine: utils.getEngine()

            });
            $searchUser.bind('typeahead:selected', function(obj, datum) {
                create_user_role.user_id = datum.id;
                create_user_role.showForm();
            });

        },
        load: function(page) {
            UserAdmin.findAll({page: page}, function (users_data) {
                Role.findAll({}, function (roles_data) {
                    var template_data = new can.Observe({
                        users: users_data.users,
                        has_prev: users_data.has_prev,
                        has_next: users_data.has_next,
                        prev_page: users_data.current_page-1,
                        next_page: users_data.current_page+1,
                        roles: roles_data.roles
                    });
                    show_user.users_data = template_data;
                    $("#admin-user").html(
                        can.view('views_admin_admin_user_mustache', show_user.users_data)
                    );
                    show_user.searchInit();
                });
            });
        },
        reload: function(page) {
            UserAdmin.findAll({page: page}, function (users_data) {
                Role.findAll({}, function (roles_data) {
                    show_user.users_data.attr('has_prev',users_data.has_prev);
                    show_user.users_data.attr('has_next',users_data.has_next);
                    show_user.users_data.attr('prev_page',users_data.current_page-1);
                    show_user.users_data.attr('next_page',users_data.current_page+1);
                    show_user.users_data.users.length = 0;
                    show_user.users_data.users.attr(users_data.users.attr());
                    show_user.users_data.roles.attr(roles_data.roles.attr());
                    show_user.searchInit();
                });
            });
        }
    });
    /**
     * Control for CreateUser
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name admin#CreateUser
     * @constructor
     */
    var CreateUserRole = can.Control.extend({
        init: function () {
            utils.logInfo('*admin/CreateUser', 'Initialized');
        },



        '.select-user click': function (el, ev) {
//            ev.preventDefault();
//            ev.stopPropagation();
            this.user_id = utils.getId(ev);
            this.showForm();
//            return false;
        },

        '.add-role-to-user click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.addRoleToUser();
            return false;
        },

       /**
         * Validate a form.
         * @memberof admin#Users
         */
        validate: function() {
            return utils.minLength('roleName', 1, 'admin.role.nameValidation')
        },
        hideForm: function() {
            $(this.element.find('#adminUserForm')).addClass('hidden');
        },
        showForm: function() {
                var form = this.element.find('#adminUserForm');
                var email = this.element.find('#adminUserEmail');
                var $form = $(form);
                var roles = [];
                var $roleName = $('#roleName');
                var $select = $(this.element.find('#adminUserRoles'));
//                var userRoles = $('#roleItems'+create_user_role.user_id).find('.role-name');
                var options = '';
//                userRoles.each(function () {
//                  options+='<option>'+this.innerHTML+'</option>';
//                });
                $.each(show_user.users_data.roles, function(i, obj) {
                    roles.push({name: obj.name, description: obj.description});
                });
                $roleName.typeahead('destroy');
                $roleName.typeahead({
                  name: 'roles',
                  valueKey: 'name',
                  template: '<p><strong>{{name}}</strong> - {{description}}</p>',
                  local: roles,
                  engine: utils.getEngine()
                });

                can.when(UserAdmin.findOne({id: create_user_role.user_id})).then(function (result) {
                    utils.logJson('load',result);
                    $form.removeClass('hidden');
                    email.val(result.user.email);

                    options+='<option>'+i18n.t('admin.user.hasRole', {count: result.user.roles.length})+'</option>';
                    result.user.roles.each(function (){
                        options+='<option>'+this.name+' - '+this.description+'</option>';
                    });
                    $select.html(options);
                });
        },

        /**
         * perform Admin action.
         * @memberof admin#Users
         */
        addRoleToUser: function () {
            if (this.validate()) {
                var form = this.element.find('#adminUserForm');
                var values = can.deparam(form.serialize());
                utils.logDebug('addRoleToUser',values);
                var $form = $(form);
                if (!$form.data('submitted')) {
                    $form.data('submitted', true);
                    var add_role_btn = this.element.find('.add-role-to-user');
                    add_role_btn.attr('disabled', 'disabled');
                    can.when(UserRole.create({user_id: create_user_role.user_id, role_name: values.roleName})).then(function (result) {
                        add_role_btn.removeAttr('disabled');
                        $form.data('submitted', false);
                        if(utils.isHashNow('admin/user/1')) show_user.reload();
                        create_user_role.showForm();
                        utils.showSuccessMsg(i18n.t('admin.user.addRole.success'));
                    }, function (xhr) {
                        add_role_btn.removeAttr('disabled');
                        $form.data('submitted', false);
                        utils.showErrorMsg(i18n.t('admin.user.addRole.failed'));
                    });
                }
            } else {
                 utils.showMessages();
            }
        }


    });


    var DestroyUserRole = can.Control.extend({
        init: function () {
            this.isConfirmed = false;
            utils.logInfo('*admin/DestroyRole', 'Initialized');
        },
        '.delete-role-from-user-confirm click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.role_id = utils.getId(ev);
            this.user_id = $(ev.target.parentNode.parentNode.parentNode).data('id');
            this.performConfirm();
            return false;
        },
        '.delete-role-from-user-final click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.isConfirmed = true;
            can.when($('#deleteRoleFromUserConfirm').modal('hide')).then(this.performDestroy());
            return false;
        },
        '.cancel-confirm click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.isConfirmed = false;
            return false;
        },

        /**
         * Show confirm modal.
         * @memberof admin#DestroyRole
         */
        performConfirm: function () {
            $('#deleteRoleFromUserConfirm').modal();
        },
        /**
         * perform Destory action.
         * @memberof admin#DestroyRole
         */
        performDestroy: function () {
            var item = this.element.find('#deleteRoleConfirm');
            var $form = $(item);
            if (!$form.data('submitted')) {
                $form.data('submitted', true);
                var destroy_btn = this.element.find('.delete-role-from-user');
                destroy_btn.attr('disabled', 'disabled');
                can.when(UserRole.update(destroy_user_role.user_id, {'role_id': destroy_user_role.role_id})).then(function () {
                    utils.showSuccessMsg(i18n.t('admin.user.role.delete.success'));
                    destroy_btn.removeAttr('disabled');
                    $form.data('submitted', false);
                    if(utils.isHashNow('admin/user/1')) show_user.reload();
                }, function (xhr) {
                    destroy_btn.removeAttr('disabled');
                    $form.data('submitted', false);
                    utils.showErrorMsg(i18n.t('admin.user.role.delete.failed'));
                });

            }
        }
    });

    /**
     * Control for DestroyUser
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name admin#DestroyUser
     * @constructor
     */
    var ToggleActiveUser = can.Control.extend({
        init: function () {
            this.isConfirmed = false;
            utils.logInfo('*admin/ToggleActiveUser', 'Initialized');
        },
        '.toggle-active click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.user_id = utils.getId(ev);
            this.active = ev.target.checked ? 1 : 0;
            this.performToggleActive();
            return false;
        },

        /**
         * perform Destory action.
         * @memberof admin#DestroyUser
         */
        performToggleActive: function () {
                utils.logDebug('performToggleActive',toggle_active_user.active);
                can.when(User.update(toggle_active_user.user_id,{active: toggle_active_user.active})).then(function (result) {
                    utils.logJson('performToggleActive',result);
                    utils.showSuccessMsg(i18n.t('admin.user.toggleActive.success'));
                    if(utils.isHashNow('admin/user/1')) show_user.reload();
                }, function (xhr) {
                    utils.showErrorMsg(i18n.t('admin.user.toggleActive.failed'));
                });

        }
    });

    /**
     * Control for DestroyUser
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name admin#DestroyUser
     * @constructor
     */
    var DestroyUser = can.Control.extend({
        init: function () {
            this.isConfirmed = false;
            utils.logInfo('*admin/DestroyUser', 'Initialized');
        },
        '.delete-user-confirm click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.user_id = utils.getId(ev);
            this.performConfirm();
            return false;
        },
        '.delete-user-final click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.isConfirmed = true;
            can.when($('#deleteUserConfirm').modal('hide')).then(this.performDestroy());
            return false;
        },
        '.cancel-confirm click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.isConfirmed = false;
            return false;
        },

        /**
         * Show confirm modal.
         * @memberof admin#DestroyUser
         */
        performConfirm: function () {
            $('#deleteUserConfirm').modal();
        },
        /**
         * perform Destory action.
         * @memberof admin#DestroyUser
         */
        performDestroy: function () {
            var item = this.element.find('#deleteUserConfirm');
            var $form = $(item);
            if (!$form.data('submitted')) {
                $form.data('submitted', true);
                var destroy_btn = this.element.find('.delete-user-final');
                destroy_btn.attr('disabled', 'disabled');
                can.when(User.destroy(destroy_user.user_id)).then(function () {
                    utils.showSuccessMsg(i18n.t('admin.user.delete.success'));
                    destroy_btn.removeAttr('disabled');
                    $form.data('submitted', false);
                    if(utils.isHashNow('admin/user/1')) show_user.reload();
                }, function (xhr) {
                    destroy_btn.removeAttr('disabled');
                    $form.data('submitted', false);
                    utils.showErrorMsg(i18n.t('admin.user.delete.failed'));
                });

            }
        }
    });


    /**
     * Router for user.
     * @author dorajistyle
     * @param {string} target
     * @function Router
     * @name admin#Router
     * @constructor
     */
    var Router = can.Control.extend({
        defaults: {}
    }, {
        init: function () {
            show_user = undefined;
            create_user_role = undefined;
            destroy_user_role = undefined;
            toggle_active_user = undefined;
            destroy_user = undefined;
            utils.logInfo('*admin/Router', 'Initialized')
        },
         allocate: function () {
            var $app = utils.getFreshDiv('admin-user');
            show_user = new ShowUser($app);
            create_user_role = new CreateUserRole($app);
            destroy_user_role = new DestroyUserRole($app);
            toggle_active_user = new ToggleActiveUser($app);
            destroy_user = new DestroyUser($app);
        },
        load: function(page) {
            utils.allocate(this, show_user);
            if(show_user.users_data == undefined || page == undefined){
                show_user.load(page);
                return false;
            }
            show_user.reload(page);
        }
    });

    return Router;
});