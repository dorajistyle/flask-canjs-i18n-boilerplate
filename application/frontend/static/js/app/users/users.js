define(['can', 'app/models/user/user', 'app/models/user/filter_user_current', 'app/models/user/connection_facebook', 'app/models/user/follower', 'app/models/user/following',
    'app/share/tab', 'app/components/navbar', 'utils', 'i18n', 'jquery', 'jquery.bootstrap'],
    function (can, User, FilterUserCurrent, Facebook, Follower, Following, Tab, Navbar, utils, i18n, $) {
    'use strict';


    /**
     * Instance of User Contorllers.
     * @private
     */
    var tab, read, update, destroy;

    /**
     * Control for User Profile
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name users#Read
     * @constructor
     */
    var Read = can.Control({
        init: function () {
            utils.logInfo('*User/Read', 'Initialized');
        },
        load: function (id) {
            User.findOne({id: id}, function (result) {
                read.user = result;
                Follower.findAll({id: id}, function (followers) {
                    read.followers_data = followers;
                    Following.findAll({id: id}, function (following) {
                        read.following_data = following;
                        read.show();
                        utils.refreshTitle();
                    })
                });
            });
        },
        /**
         * Show profile view.
         * @memberof users#Read
         */
        show: function () {
            utils.logJson('*User/Read.show data', this.user);


            this.following = this.following_data.following;
            this.followers = this.followers_data.followers;
            this.following_flag = {has_next: this.following_data.has_next, current_page: this.following_data.current_page};
            this.followers_flag = {has_next: this.followers_data.has_next, current_page: this.followers_data.current_page};
            this.element.html(can.view('/static/views/user/profile.mustache', {
                user_data: this.user,
                following_flag: this.following_flag,
                following: this.following,
                followers_flag: this.followers_flag,
                followers: this.followers
            }));
        },
        '.perform-follow click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.performFollow();
            return false;
        },

        '.perform-unfollow click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.performUnfollow();
            return false;
        },
        '.show-more-following click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.showMoreFollowing();
            return false;
        },
        '.show-more-followers click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.showMoreFollowers();
            return false;
        },
        performFollow: function () {
            var form = this.element.find('#followersForm');
            var values = can.deparam(form.serialize());
            var $form = $(form);
            if (!$form.data('submitted')) {
                $form.data('submitted', true);
                var follow_btn = this.element.find('.perform-unfollow');
                follow_btn.attr('disabled', 'disabled');
                can.when(Follower.create(values)).then(function (result) {
                    follow_btn.removeAttr('disabled');
                    $form.data('submitted', false);
                    utils.showSuccessMsg(i18n.t('profile.follow.success', result.email));
                    read.load(values.id);
                }, function (xhr) {
                    utils.handleStatusWithErrorMsg(xhr, i18n.t('profile.follow.failed'));
                });
            }
        },
        performUnfollow: function () {
            var form = this.element.find('#followersForm');
            var values = can.deparam(form.serialize());
            var $form = $(form);
            if (!$form.data('submitted')) {
                $form.data('submitted', true);
                var follow_btn = this.element.find('.perform-follow');
                follow_btn.attr('disabled', 'disabled');
                can.when(Follower.destroy(values.id)).then(function (result) {
                    follow_btn.removeAttr('disabled');
                    $form.data('submitted', false);
                    utils.showSuccessMsg(i18n.t('profile.unfollow.success', result.email));
                    read.load(values.id);
                }, function (xhr) {
                    utils.handleStatusWithErrorMsg(xhr, i18n.t('profile.unfollow.failed'));
                });
            }
        },
        showMoreFollowing: function () {
            var more_following_btn = this.element.find('.show-more-following');
            more_following_btn.attr('disabled', 'disabled');
            Following.findAll({id: read.user.user.id, current_page: read.following_data.current_page + 1}, function (following) {
                    following.has_next ? more_following_btn.removeAttr('disabled') : more_following_btn.addClass('hidden');
                    read.following_data.attr('current_page', following.current_page);
                    read.following_data.attr('has_next', following.has_next);
                    read.following.attr(read.following.attr().concat(following.following.attr()));
                }
            );
        },
        showMoreFollowers: function () {
            var more_followers_btn = this.element.find('.show-more-followers');
            more_followers_btn.attr('disabled', 'disabled');
            Follower.findAll({id: read.user.user.id, current_page: read.followers_data.current_page + 1}, function (followers) {
                    followers.has_next ? more_followers_btn.removeAttr('disabled') : more_followers_btn.addClass('hidden');
                    read.followers_data.attr('current_page', followers.current_page);
                    read.followers_data.attr('has_next', followers.has_next);
                    read.followers.attr(read.followers.attr().concat(followers.followers.attr()));
                }
            );
        }

    });

    /**
     * Control for User Profile
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name users#Update
     * @constructor
     */
    var Update = can.Control({
        init: function () {
            utils.logInfo('*User/Update', 'Initialized');
        },
        load: function (tab) {
            FilterUserCurrent.findOne({}, function (result) {
                update.data = result;
                Facebook.findAll({}, function (facebook){
                     update.has_facebook_connection = facebook.has_facebook_connection;
                     update.show();
                     update.selectTab(tab);
                     utils.refreshTitle();
                    }
                );

            });
        },
        /**
         * Show Setting view.
         * @memberof users#Update
         */
        show: function () {
            this.element.html(can.view('/static/views/user/setting.mustache', {
                data: this.data,
                has_facebook_connection: this.has_facebook_connection
            }));
        },
        selectTab: function (tab_name) {
            if (!tab_name) tab_name = 'basic';
            tab.activeTab(tab_name);
            switch (tab_name) {
                case 'basic':
                case 'change-password':
                case 'connection':
                case 'leave-our-service':
                    tab.showTab(tab_name);
                    break;
                default:
                    tab.showTab('basic');
                    break;
            }
        },
        '.update-user-password click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.performUpdatePassword();
            return false;
        },
        '.send-to-facebook click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.performSendToFacebook();
            return false;
        },
        '.disconnect-to-facebook click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.performDisconnectToFacebook();
            return false;
        },
        /**
         * Validate a form.
         * @memberof users#Update
         */
        validate: function () {
            return utils.minLength('currentPassword', 8, 'validation.password')
                && utils.minLength('newPassword', 8, 'validation.password')
                && utils.minLength('newPasswordConfirm', 8, 'validation.password')
                && utils.maxLength('currentPassword', 20, 'validation.password')
                && utils.maxLength('newPassword', 20, 'validation.password')
                && utils.maxLength('newPasswordConfirm', 20, 'validation.password')
                && utils.isIdentical('newPassword', 'newPasswordConfirm', 'validation.newPasswordConfirm');
        },
        validateSendtoFB: function () {
            return utils.minLengthTextarea('content', 3, 'validation.contentTooShort')
        },
        /**
         * perform Update action.
         * @memberof users#Update
         */
        performUpdatePassword: function () {
            if (this.validate()) {
                var form = this.element.find('#updatePasswordForm');
                var values = can.deparam(form.serialize());
                var $form = $(form);
                if (!$form.data('submitted')) {
                    $form.data('submitted', true);
                    var update_btn = this.element.find('.update-user-password');
                    update_btn.attr('disabled', 'disabled');
                    User.findOne({id: values.id}, function (user) {
                        user.attr(values);
                        user.save(function (result) {
                            update_btn.removeAttr('disabled');
                            $form.data('submitted', false);
                            if (result.password_incorrect) {
                                utils.showErrorMsg(i18n.t('setting.changePassword.passwordIncorrect'));
                                return false;
                            }
                            utils.showSuccessMsg(i18n.t('setting.changePassword.success'));
                        }, function (xhr) {
                            update_btn.removeAttr('disabled');
                            $form.data('submitted', false);
                            utils.handleStatusWithErrorMsg(xhr, i18n.t('setting.changePassword.failed'));
                        });
                    });
                }
            } else {
                utils.showMessages();
            }
        },
        performDisconnectToFacebook: function () {
            Facebook.destroy(function () {
                update.load('connection');
                window.location.reload(true);
//            $('#sendToFacebookForm').addClass('hidden');
//            $('.disconnect-to-facebook-wrapper').addClass('hidden');
//            $('.connect-to-facebook-wrapper').removeClass('hidden');
            });
        },
        performSendToFacebook: function () {
            if (this.validateSendtoFB()) {
                var form = this.element.find('#sendToFacebookForm');
                var values = can.deparam(form.serialize());
                var $form = $(form);
                if (!$form.data('submitted')) {
                    $form.data('submitted', true);
                    var send_btn = this.element.find('.send-to-facebook');
                    send_btn.attr('disabled', 'disabled');
                    can.when(Facebook.create(values)).then(function (result) {
                        send_btn.removeAttr('disabled');
                        $form.data('submitted', false);
                        if (result.status) {
                            utils.showSuccessMsg(i18n.t('facebook.send.success'));
                            $('#content').val('');
                        } else {
                            utils.showErrorMsg(i18n.t('facebook.send.failed'));
                        }
                    }, function () {
                        update.performDisconnectToFacebook();
                        utils.showErrorMsg(i18n.t('facebook.send.connectionFailed'));
                    });
                }
            } else {
                utils.showMessages();
            }
        }
    });

    /**
     *
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name users#Destroy
     * @constructor
     */
    var Destroy = can.Control({
        init: function () {
            this.isConfirmed = false;
            utils.logInfo('*User/Destroy', 'Initialized');
        },
        '.leave-our-service-confirm click': function (el, ev) {
            utils.logInfo('*User/Destroy', 'Confirm Clicked in users');
            ev.preventDefault();
            ev.stopPropagation();
            this.performConfirm();
            return false;
        },
        '.leave-our-service-final click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.isConfirmed = true;
            can.when($('#leaveOurServiceConfirm').modal('hide')).then(this.performDestroy());
            return false;
        },
        '.cancel-confirm click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.isConfirmed = false;
            this.performCancel();
            return false;
        },

        /**
         * Show confirm modal.
         * @memberof users#Destroy
         */
        performCancel: function () {
//            $('#leaveOurServiceConfirm').addClass('hidden');
        },

        /**
         * Show confirm modal.
         * @memberof users#Destroy
         */
        performConfirm: function () {
//            $('#leaveOurServiceConfirm').removeClass('hidden');
            $('#leaveOurServiceConfirm').modal()
        },
        /**
         * perform Destory action.
         * @memberof users#Destroy
         */
        performDestroy: function () {
            var form = this.element.find('#leaveOurServiceForm');
            var values = can.deparam(form.serialize());
            var $form = $(form);
            if (!$form.data('submitted')) {
                $form.data('submitted', true);
                var destroy_btn = this.element.find('.leave-our-service-final');
                destroy_btn.attr('disabled', 'disabled');
                can.when(User.destroy(values.id)).then(function () {
                    utils.showSuccessMsg(i18n.t('setting.leaveOurService.success'));
                    Navbar.load();
                    utils.replaceHash('');
                }, function (xhr) {
                    destroy_btn.removeAttr('disabled');
                    $form.data('submitted', false);
                    utils.showErrorMsg(i18n.t('setting.leaveOurService.failed'));
                });

            }
        }
    });


    /**
     * Router for user.
     * @author dorajistyle
     * @param {string} target
     * @function Router
     * @name users#Router
     * @constructor
     */
    var Router = can.Control({
        defaults: {}
    }, {
        init: function () {
            utils.logInfo('*Users/Router', 'Initialized')
        },
        'profile route': function () {
            FilterUserCurrent.findOne({}, function (result) {
                can.route.attr('id', result.user.id);
            });
        },
        'profile/:id route': function (data) {
            read = new Read(utils.getFreshApp());
            read.load(data.id);
        },
        'setting route': function () {
            can.route.attr('tab', 'basic');
        },
        'setting/:tab route': function (data) {
            var $app = utils.getFreshApp();
            update = new Update($app);
            tab = new Tab($app,{route: 'setting'});
            destroy = new Destroy($app);
            update.load(data.tab);
        }
    });

    return Router;
});