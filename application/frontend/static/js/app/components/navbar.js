define(['jquery', 'can', 'app/models/user/user_current', 'can/view/mustache'],
    function ($, can, UserCurrent) {
        var NavBar = can.Control.extend({
            init: function () {
            },
            load: function () {
                UserCurrent.findOne({}, function (data) {
                    navbar.data = data;
                    navbar.show();
                });
            },
            show: function () {
                $("#navbar").html(can.view('views_navbar_mustache', {
                    data: this.data
                }));
            },
            'a:not(.dropdown-toggle) click': function () {
                $('#navbar-responsive-collapse').addClass('collapse');
            },
            '#navbar-toggle-btn click': function(el, ev) {
                $('#navbar-responsive-collapse').toggleClass('collapse');
            }
        });
        var navbar = new NavBar();
        return navbar;
    });
