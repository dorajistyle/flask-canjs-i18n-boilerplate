define(['can', 'app/models/role', 'utils', 'i18n', 'jquery', 'jquery.bootstrap'], function (can, Role, utils, i18n, $) {
    'use strict';


    /**
     * Instance of Admin Contorllers.
     * @private
     */
    var create_role, update_role, destroy_role, show_role;

    var ShowRole = can.Control({
        init: function () {
            utils.logInfo('*admin.roles/ShowRole', 'Initialized');
        },
        load: function(page) {
            Role.findAll({'page': page}, function (roles_data) {
                var template_data = new can.Observe({
                    roles: roles_data.roles,
                    has_prev: roles_data.has_prev,
                    has_next: roles_data.has_next,
                    prev_page: roles_data.current_page-1,
                    next_page: roles_data.current_page+1
                });
                show_role.roles_data = template_data;
                $("#admin-role").html(
                    can.view('/static/views/admin/admin_role.mustache', show_role.roles_data)
                );
                }
            );
        },
        reload: function(page) {
            utils.logDebug('reload','performed');
            Role.findAll({'page': page}, function (roles_data) {
                    show_role.roles_data.attr('has_prev',roles_data.has_prev);
                    show_role.roles_data.attr('has_next',roles_data.has_next);
                    show_role.roles_data.attr('prev_page',roles_data.current_page-1);
                    show_role.roles_data.attr('next_page',roles_data.current_page+1);
                     show_role.roles_data.roles.length = 0;
                    show_role.roles_data.roles.attr(roles_data.roles.attr());
                }
            );
        }
    });
    /**
     * Control for CreateRole
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name admin#CreateRole
     * @constructor
     */
    var CreateRole = can.Control({
        init: function () {
            utils.logInfo('*admin.roles/CreateRole', 'Initialized');
        },
        '.create-role click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.createRole();
            return false;
        },

        '.create-new-role-form click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var $create_btn = $(this.element.find('.create-role'));
            var $update_btn = $(this.element.find('.update-role'));
            var name = this.element.find('#name');
            var description = this.element.find('#description');
            name.val('');
            description.val('');
            $create_btn.removeClass('hidden');
            $update_btn.addClass('hidden');
            return false;
        },

       /**
         * Validate a form.
         * @memberof admin#CreateRole
         */
        validate: function () {
            return utils.minLength('name', 1, 'admin.role.nameValidation')
        },
        /**
         * Perform create role action.
         * @memberof admin#CreateRole
         */
        createRole: function () {
            if (this.validate()) {
                var form = this.element.find('#adminRoleForm');
                var values = can.deparam(form.serialize());
                var $form = $(form);
                if (!$form.data('submitted')) {
                    $form.data('submitted', true);
                    var create_btn = this.element.find('.create-role');
                    create_btn.attr('disabled', 'disabled');
                    can.when(Role.create(values)).then(function (result) {
                        utils.logJson('register', result);
                        create_btn.removeAttr('disabled');
                        $form.data('submitted', false);
                        if(utils.isHashNow('admin/role/1')) show_role.reload();
                        utils.showSuccessMsg(i18n.t('admin.role.create.success'));
                    }, function (xhr) {
                        create_btn.removeAttr('disabled');
                        $form.data('submitted', false);
                        utils.showErrorMsg(i18n.t('admin.role.create.failed'));
                    });
                }
            } else {
                utils.showMessages();
            }
        }


    });
    /**
     * Control for CreateRole
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name admin#UpdateRole
     * @constructor
     */
    var UpdateRole = can.Control({
        init: function () {
            utils.logInfo('*admin.roles/UpdateRole', 'Initialized');
        },
        '.update-role click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.updateRole();
            return false;
        },
        '.select-role click': function (el, ev) {
//            ev.preventDefault();
//            ev.stopPropagation();
            this.role_id = utils.getId(ev);
            this.showForm();
//            return false;
        },

       /**
         * Validate a form.
         * @memberof admin#UPdateRole
         */
        validate: function () {
            return utils.minLength('name', 1, 'admin.role.nameValidation')
        },

        /**
         * Show update form of selected role.
         * @memberof admin#UPdateRole
         */
        showForm: function() {
                var form = this.element.find('#adminRoleForm');
                var name = this.element.find('#name');
                var description = this.element.find('#description');
                var $create_btn = $(this.element.find('.create-role'));
                var $update_btn = $(this.element.find('.update-role'));
                var $form = $(form);
                $create_btn.addClass('hidden');
                $update_btn.removeClass('hidden');
                can.when(Role.findOne({id: update_role.role_id})).then(function (result) {
                    utils.logJson('load',result);
                    name.val(result.role.name);
                    description.val(result.role.description);
                });
        },

        /**
         * perform Update role action.
         * @memberof admin#UpdateRole
         */
        updateRole: function () {
            if (this.validate()) {
                var form = this.element.find('#adminRoleForm');
                var values = can.deparam(form.serialize());
                var $form = $(form);
                if (!$form.data('submitted')) {
                    $form.data('submitted', true);
                    var update_btn = this.element.find('.create-role');
                    update_btn.attr('disabled', 'disabled');
                    utils.logJson('updateRole', values);
                    can.when(Role.update(update_role.role_id, {name: values.name, description: values.description})).then(function (result) {
                        utils.logJson('register', result);
                        update_btn.removeAttr('disabled');
                        $form.data('submitted', false);
                        if(utils.isHashNow('admin/role/1')) show_role.reload();
                        utils.showSuccessMsg(i18n.t('admin.role.update.success'));
                    }, function (xhr) {
                        update_btn.removeAttr('disabled');
                        $form.data('submitted', false);
                        utils.showErrorMsg(i18n.t('admin.role.update.failed'));
                    });
                }
            } else {
                utils.showMessages();
            }
        }


    });


    /**
     * Control for DestroyRole
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name admin#DestroyRole
     * @constructor
     */
    var DestroyRole = can.Control({
        init: function () {
            this.isConfirmed = false;
            utils.logInfo('*admin/DestroyRole', 'Initialized');
        },
        '.delete-role-confirm click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.role_id = utils.getId(ev);
            this.performConfirm();
            return false;
        },
        '.delete-role-final click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.isConfirmed = true;
            can.when($('#deleteRoleConfirm').modal('hide')).then(this.performDestroy());
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
            $('#deleteRoleConfirm').modal();
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
                var destroy_btn = this.element.find('.delete-role-final');
                destroy_btn.attr('disabled', 'disabled');
                can.when(Role.destroy(destroy_role.role_id)).then(function () {
                    utils.showSuccessMsg(i18n.t('admin.role.delete.success'));
                    destroy_btn.removeAttr('disabled');
                    $form.data('submitted', false);
                    if(utils.isHashNow('admin/role/1')) show_role.reload();
                }, function (xhr) {
                    destroy_btn.removeAttr('disabled');
                    $form.data('submitted', false);
                    utils.showErrorMsg(i18n.t('admin.role.delete.failed'));
                });

            }
        }
    });


    /**
     * Router for Roles.
     * @author dorajistyle
     * @param {string} target
     * @function Router
     * @name admin#Router
     * @constructor
     */
    var Router = can.Control({
        defaults: {}
    }, {
        init: function () {
            show_role = undefined;
            create_role = undefined;
            update_role = undefined;
            destroy_role = undefined;
            utils.logInfo('*admin/Router', 'Initialized')

        },
        load: function(page) {
            if(show_role == undefined) {
                var $app = utils.getFreshDiv('admin-role');
                show_role = new ShowRole($app);
                create_role = new CreateRole($app);
                update_role = new UpdateRole($app);
                destroy_role = new DestroyRole($app);
            }
            if(show_role.roles_data == undefined || page == undefined){
                show_role.load(page);
                return false;
            }
            show_role.reload(page);
        }
    });

    return Router;
});