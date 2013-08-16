define(['jquery', 'can', 'app/models/filter_user_current', 'can/view/mustache'],
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
            },
            'refresh/navbar route': function (param) {
                this.load();
                window.location.hash = '#!'+param.url;
                window.location.pathname = "/";
            }
        });
        var navbar = new NavBar();
        return navbar;
    });