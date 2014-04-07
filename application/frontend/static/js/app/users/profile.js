define(['can', 'app/models/user/user', 'app/models/user/user_current', 'app/models/user/follower', 'app/models/user/following', 'utils', 'i18n', 'jquery', 'jquery.bootstrap'],
    function (can, User, UserCurrent, Follower, Following, utils, i18n, $) {
    'use strict';


    /**
     * Instance of User Contorllers.
     * @private
     */
    var read;

    /**
     * Control for User Profile
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name users#Read
     * @constructor
     */
    var Read = can.Control.extend({
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
            this.element.html(can.view('views_user_profile_mustache', {
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
                    utils.showSuccessMsg(i18n.t('profile.follow.done', result.email));
                    read.load(values.id);
                }, function (xhr) {
                    utils.handleStatusWithErrorMsg(xhr, i18n.t('profile.follow.fail'));
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
                    utils.showSuccessMsg(i18n.t('profile.unfollow.done', result.email));
                    read.load(values.id);
                }, function (xhr) {
                    utils.handleStatusWithErrorMsg(xhr, i18n.t('profile.unfollow.fail'));
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
     * Router for profile.
     * @author dorajistyle
     * @param {string} target
     * @function Router
     * @name users#Profile_Router
     * @constructor
     */
    var Router = can.Control.extend({
        defaults: {}
    }, {
        init: function () {
            utils.logInfo('*Users/Profile/Router', 'Initialized')
        },
        'profile route': function () {
            UserCurrent.findOne({}, function (result) {
                can.route.attr('id', result.user.id);
            });
        },
        'profile/:id route': function (data) {
            read = new Read(utils.getFreshApp());
            read.load(data.id);
        }
    });

    return Router;
});