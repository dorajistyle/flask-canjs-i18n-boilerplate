define(['jquery', 'can', 'app/models/user/filter_user_current', 'can/view/mustache'],
    function ($, can, FilterUserCurrent) {
        var NavBar = can.Control({
            init: function () {
            },
            load: function () {
                FilterUserCurrent.findOne({}, function (data) {
                    navbar.data = data;
                    navbar.show();
                });
            },
            show: function () {
                $("#navbar").html(can.view('/static/views/navbar.mustache', {
                    data: this.data
                }));
            }
        });
        var navbar = new NavBar();
        return navbar;
    });