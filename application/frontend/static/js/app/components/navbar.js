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
                $("#navbar").html(can.view('/static/views/navbar.mustache', {
                    data: this.data
                }));
            }
        });
        var navbar = new NavBar();
        return navbar;
    });