define(["can/view/mustache"], function(can) { can.view.preloadStringRenderer('views_admin_admin_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
"<h1 id=\"pageTitle\">");___v1ew.push(
can.view.txt(
1,
'h1',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.title')));___v1ew.push(
"</h1>\n<div>\n    <div id=\"adminNav\" class=\"admin-nav col-md-3\">\n        <ul class=\"nav nav-pills nav-stacked\">\n            <li class=\"active role-tab\">\n                <a href=\"#\" class=\"role\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.title')));___v1ew.push(
"</a>\n            </li>\n            <li class=\"user-tab\">\n                <a href=\"#\" class=\"user\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.title')));___v1ew.push(
"</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"admin-text col-md-6\">\n        <div id=\"adminWrapper\" class=\"admin-wrapper well col-md-12\">\n            <div id=\"admin-role\"></div>\n            <div id=\"admin-user\" class=\"hidden\"></div>\n        </div>\n    </div>\n    <div class=\"col-md-5\">\n    </div>\n</div>\n");; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_admin_admin_role_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
"<h2>");___v1ew.push(
can.view.txt(
1,
'h2',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.title')));___v1ew.push(
"</h2>\n<hr/>\n<table class='table'>\n    <thead>\n    <tr>\n        <th class=\"col-md-1\"></th>\n        <th class=\"col-md-4\">");___v1ew.push(
can.view.txt(
1,
'th',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.name')));___v1ew.push(
"</th>\n        <th class=\"col-md-6\">");___v1ew.push(
can.view.txt(
1,
'th',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.description')));___v1ew.push(
"</th>\n        <th class=\"col-md-1 center\"></th>\n    </tr>\n    </thead>\n    <!--<tfoot>-->\n    <!--<tr>-->\n        <!--<td>count</td>-->\n        <!--<td>1</td>-->\n    <!--</tr>-->\n    <!--</tfoot>-->\n    <tbody>");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'tbody',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"roles"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"    <tr>\n        <td class=\"col-md-1\"><input name='selectRole' type=\"radio\" class=\"select-role\" data-id=\"");___v1ew.push(
can.view.txt(
true,
'input',
'data-id',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"id"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
"</td>\n        <td class=\"col-md-4\">");___v1ew.push(
can.view.txt(
1,
'td',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"name"})));___v1ew.push(
"</td>\n        <td class=\"col-md-6\">");___v1ew.push(
can.view.txt(
1,
'td',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"description"})));___v1ew.push(
"</td>\n        <td class=\"col-md-1 center\">\n                <i class=\"delete-");___v1ew.push(
can.view.txt(
true,
'i',
'class',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"name"})));___v1ew.push(
" delete-role-confirm fa fa-times fa-lg\" data-id='");___v1ew.push(
can.view.txt(
true,
'i',
'data-id',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"id"})));___v1ew.push(
"'",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
"</i>\n        </td>\n    </tr>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"    </tbody>\n</table>\n<ul class=\"pager\">");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"has_prev"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"    <li class=\"previous\"><a href=\"/#!admin/role/");___v1ew.push(
can.view.txt(
true,
'a',
'href',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"prev_page"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
"&larr; ");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'page.previous')));___v1ew.push(
"</a></li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"  ");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"has_next"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"\n    <li class=\"next\"><a href=\"/#!admin/role/");___v1ew.push(
can.view.txt(
true,
'a',
'href',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"next_page"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'page.next')));___v1ew.push(
" &rarr;</a></li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"</ul>\n<button type=\"button\" class=\"btn btn-primary create-new-role-form\">\n            ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.showNewForm')));___v1ew.push(
"\n        </button>\n<hr/>\n<form id=\"adminRoleForm\" name=\"adminRoleForm\" method=\"put\" class=\"form-horizontal\">\n    <h4>");___v1ew.push(
can.view.txt(
1,
'h4',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.formTitle')));___v1ew.push(
"</h4>\n    <div class=\"role-name-wrapper form-group col-md-12\">\n        <label for=\"name\" class=\"col-md-4\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.name')));___v1ew.push(
"</label>\n        <input id=\"name\" name=\"name\" type=\"text\"\n               placeholder=\"");___v1ew.push(
can.view.txt(
true,
'input',
'placeholder',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.enterName')));___v1ew.push(
"\" class=\"role-name form-control col-md-12\" tabindex=\"1\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n    </div>\n    <div class=\"role-description-wrapper form-group col-md-12\">\n        <label for=\"description\" class=\"col-md-4\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.description')));___v1ew.push(
"</label>\n        <input id=\"description\" name=\"description\" type=\"text\"\n               placeholder=\"");___v1ew.push(
can.view.txt(
true,
'input',
'placeholder',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.enterDescription')));___v1ew.push(
"\" class=\"role-description form-control col-md-12\" tabindex=\"2\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n    </div>\n    <div class=\"create-role-wrapper form-group col-md-12\">\n        <button type=\"submit\" class=\"btn btn-primary update-role hidden pull-right\" tabindex=\"3\">\n            ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.update.title')));___v1ew.push(
"\n        </button>\n        <button type=\"submit\" class=\"btn btn-primary create-role pull-right\" tabindex=\"4\">\n            ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.submit')));___v1ew.push(
"\n        </button>\n    </div>\n</form>\n <div class=\"modal\" id=\"deleteRoleConfirm\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close cancel-confirm\" data-dismiss=\"modal\"\n                            aria-hidden=\"true\">&times;</button>\n                    <h4 class=\"modal-title\">");___v1ew.push(
can.view.txt(
1,
'h4',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.confirm.title')));___v1ew.push(
"</h4>\n                </div>\n                <div class=\"modal-body\">\n                    ");___v1ew.push(
can.view.txt(
1,
'div',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.confirm.content')));___v1ew.push(
"\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" data-dismiss=\"modal\"\n                            class=\"btn cancel-confirm\">");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.confirm.close')));___v1ew.push(
"</button>\n                    <button type=\"button\"\n                            class=\"btn delete-role-final btn-inverse\">");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.role.confirm.submit')));___v1ew.push(
"</button>\n                </div>\n            </div>\n            <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n    </div>\n    <!-- /.modal -->");; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_admin_admin_user_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
"<h2>");___v1ew.push(
can.view.txt(
1,
'h2',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.title')));___v1ew.push(
"</h2>\n        <input id=\"searchUser\" name=\"searchUser\" type=\"text\"\n               class=\"search-user form-control pull-right col-md-6\" tabindex=\"1\"/>\n<hr/>\n<table class='table'>\n    <thead>\n    <tr>\n        <th class=\"col-md-1\"></th>\n        <th class=\"col-md-6\">");___v1ew.push(
can.view.txt(
1,
'th',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.email')));___v1ew.push(
"</th>\n        <th class=\"col-md-3 center\">");___v1ew.push(
can.view.txt(
1,
'th',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.roles')));___v1ew.push(
"</th>\n        <th class=\"col-md-1 center\">");___v1ew.push(
can.view.txt(
1,
'th',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.active')));___v1ew.push(
"</th>\n        <th class=\"col-md-1 center\"></th>\n    </tr>\n    </thead>\n    <!--<tfoot>-->\n    <!--<tr>-->\n        <!--<td>count</td>-->\n        <!--<td>1</td>-->\n    <!--</tr>-->\n    <!--</tfoot>-->\n    <tbody>");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'tbody',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"users"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"    <tr>\n        <td class=\"col-md-1\"><input name='selectUser' type=\"radio\" class=\"select-user\" value=\"");___v1ew.push(
can.view.txt(
true,
'input',
'value',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"active"})));___v1ew.push(
"\" data-id=\"");___v1ew.push(
can.view.txt(
true,
'input',
'data-id',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"id"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
"</td>\n        <td class=\"col-md-6\">");___v1ew.push(
can.view.txt(
1,
'td',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"email"})));___v1ew.push(
"</td>\n        <td class=\"col-md-3 center\" id=\"roleItems");___v1ew.push(
can.view.txt(
true,
'td',
'id',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"id"})));___v1ew.push(
"\" data-id=\"");___v1ew.push(
can.view.txt(
true,
'td',
'data-id',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"id"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'td',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"if"},{get:"roles"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"            <ul class=\"list-unstyled\">");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"roles"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"                    <li>\n                         <span class='role-name'>");___v1ew.push(
can.view.txt(
1,
'span',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"name"})));___v1ew.push(
"</span>&nbsp;<i data-id=\"");___v1ew.push(
can.view.txt(
true,
'i',
'data-id',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"id"})));___v1ew.push(
"\" class=\"fa fa-times-circle delete-role-from-user-confirm\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
"</i></li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"            </ul>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"            ");___v1ew.push(
can.view.txt(
0,
'td',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"^",{get:"roles"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"\n                -");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"        </td>\n        <td class=\"col-md-1 center\"><label><input type=\"checkbox\" class=\"toggle-active\" data-id=\"");___v1ew.push(
can.view.txt(
true,
'input',
'data-id',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"id"})));___v1ew.push(
"\"");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'input',
1,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"active"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"                    checked");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"                ",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"</label></td>\n        <td class=\"col-md-1 center\">\n                <i class=\"delete-user-confirm fa fa-times fa-lg\" data-id='");___v1ew.push(
can.view.txt(
true,
'i',
'data-id',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"id"})));___v1ew.push(
"'",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
"</i>\n        </td>\n    </tr>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"    </tbody>\n</table>\n<ul class=\"pager\">");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"has_prev"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"    <li class=\"previous\"><a href=\"/#!admin/user/");___v1ew.push(
can.view.txt(
true,
'a',
'href',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"prev_page"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
"&larr; ");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'page.previous')));___v1ew.push(
"</a></li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"  ");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"has_next"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"\n    <li class=\"next\"><a href=\"/#!admin/user/");___v1ew.push(
can.view.txt(
true,
'a',
'href',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"next_page"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'page.next')));___v1ew.push(
" &rarr;</a></li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"</ul>\n<form id=\"adminUserForm\" name=\"adminUserForm\" method=\"put\" class=\"form-horizontal hidden\">\n    <h4>");___v1ew.push(
can.view.txt(
1,
'h4',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.formTitle')));___v1ew.push(
"</h4>\n    <input id=\"id\" name=\"id\" type=\"hidden\"/>\n    <div class=\"user-email-wrapper form-group col-md-12\">\n        <label for=\"adminUserEmail\" class=\"col-md-4\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.email')));___v1ew.push(
"</label>\n        <input id=\"adminUserEmail\" name=\"adminUserEmail\" type=\"text\"\n               class=\"user-email form-control col-md-12\" tabindex=\"2\" disabled=\"disabled\"/>\n    </div>\n    <div class=\"user-roles-wrapper form-group col-md-12\">\n        <label for=\"adminUserRoles\" class=\"col-md-4\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.roles')));___v1ew.push(
"</label>\n        <select id=\"adminUserRoles\" name=\"adminUserRoles\"\n               class=\"user-roles form-control col-md-12\">\n       </select>\n    </div>\n    <div class=\"role-name-label-wrapper form-group col-md-12\">\n        <label for=\"roleName\" class=\"col-md-4\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.searchRole')));___v1ew.push(
"</label>\n    </div>\n    <div class=\"add-role-wrapper form-group col-md-12\">\n        <input id=\"roleName\" name=\"roleName\" type=\"text\"\n               class=\"role-name form-control col-md-8\" tabindex=\"3\"/>\n        <button type=\"submit\" class=\"btn btn-primary add-role-to-user pull-right col-md-4\" tabindex=\"4\">\n            ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.submit')));___v1ew.push(
"\n        </button>\n    </div>\n</form>\n<div class=\"modal\" id=\"deleteRoleFromUserConfirm\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close cancel-confirm\" data-dismiss=\"modal\"\n                            aria-hidden=\"true\">&times;</button>\n                    <h4 class=\"modal-title\">");___v1ew.push(
can.view.txt(
1,
'h4',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.role.confirmDelete.title')));___v1ew.push(
"</h4>\n                </div>\n                <div class=\"modal-body\">\n                    ");___v1ew.push(
can.view.txt(
1,
'div',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.role.confirmDelete.content')));___v1ew.push(
"\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" data-dismiss=\"modal\"\n                            class=\"btn cancel-confirm\">");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.role.confirmDelete.close')));___v1ew.push(
"</button>\n                    <button type=\"button\"\n                            class=\"btn delete-role-from-user-final btn-inverse\">");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.role.confirmDelete.submit')));___v1ew.push(
"</button>\n                </div>\n            </div>\n            <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n    </div>\n    <!-- /.modal -->\n<div class=\"modal\" id=\"deleteUserConfirm\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close cancel-confirm\" data-dismiss=\"modal\"\n                            aria-hidden=\"true\">&times;</button>\n                    <h4 class=\"modal-title\">");___v1ew.push(
can.view.txt(
1,
'h4',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.confirmDelete.title')));___v1ew.push(
"</h4>\n                </div>\n                <div class=\"modal-body\">\n                    ");___v1ew.push(
can.view.txt(
1,
'div',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.confirmDelete.content')));___v1ew.push(
"\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" data-dismiss=\"modal\"\n                            class=\"btn cancel-confirm\">");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.confirmDelete.close')));___v1ew.push(
"</button>\n                    <button type=\"button\"\n                            class=\"btn delete-user-final btn-inverse\">");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'admin.user.confirmDelete.submit')));___v1ew.push(
"</button>\n                </div>\n            </div>\n            <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n    </div>\n    <!-- /.modal -->\n");; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_main_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
"<div id=\"index\" class=\"jumbotron\">\n    <h1 id=\"pageTitle\">");___v1ew.push(
can.view.txt(
1,
'h1',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'main.title')));___v1ew.push(
"</h1>\n    <p>");___v1ew.push(
can.view.txt(
1,
'p',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'main.description')));___v1ew.push(
"</p>\n</div>\n    ");___v1ew.push(
can.view.txt(
0,
'undefined',
0,
this,
function(){ return can.Mustache.renderPartial('views_share_user_list',scope,options)}));
___v1ew.push(
"\n");; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_navbar_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
"<div>\n    <div class=\"navbar navbar-inverse navbar-fixed-top\">\n            <div class=\"container\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\">\n                  <span class=\"fa fa-bar\"></span>\n                  <span class=\"fa fa-bar\"></span>\n                  <span class=\"fa fa-bar\"></span>\n                </button>\n                <a href=\"/#!\" title=\"");___v1ew.push(
can.view.txt(
true,
'a',
'title',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'service.name')));___v1ew.push(
"\" class=\"navbar-brand\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
"\n                    <i class=\"fa fa-home\"></i>&nbsp; ");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'service.name')));___v1ew.push(
"\n                </a>\n                <div class=\"nav-collapse collapse navbar-responsive-collapse\">\n                    <ul class=\"nav navbar-nav pull-right\">");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"data"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"                            ");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"^",{get:"user"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"\n                                <li class=\"active\"><a href=\"/#!login\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'navbar.login')));___v1ew.push(
"</a></li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"                            ");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"user"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"\n                                <li class=\"dropdown\">\n                                    <a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">\n                                        ");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"email"})));___v1ew.push(
"\n                                        <b class=\"caret\"></b>\n                                    </a>\n                                    <ul class=\"dropdown-menu\">\n                                        <li class=\"dropdown-header\">");___v1ew.push(
can.view.txt(
1,
'li',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'navbar.myAccount')));___v1ew.push(
"</li>");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"has_admin"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"                                            <li><a href=\"/#!admin/role\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'navbar.admin')));___v1ew.push(
"</a></li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"                                        <li><a href=\"/#!profile/");___v1ew.push(
can.view.txt(
true,
'a',
'href',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"id"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'navbar.profile')));___v1ew.push(
"</a></li>\n                                        <li><a href=\"/#!setting/basic\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'navbar.setting')));___v1ew.push(
"</a></li>\n                                        <li><a href=\"/#!logout\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'navbar.logout')));___v1ew.push(
"</a></li>\n                                    </ul>\n                                </li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"                        ");return ___v1ew.join("");}}])));___v1ew.push(
"\n                        <li class=\"dropdown\">\n                            <a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">\n                                ");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'navbar.aboutUs')));___v1ew.push(
"\n                                <b class=\"caret\"></b>\n                            </a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"/#!sitemap\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'navbar.sitemap')));___v1ew.push(
"</a>\n                                </li>\n                                <li><a href=\"/#!how_it_works\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'navbar.howItWorks')));___v1ew.push(
"</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"dropdown\">\n                            <a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">\n                                ");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'navbar.languages')));___v1ew.push(
"\n                                <b class=\"caret\"></b>\n                            </a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"/locales/en\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'navbar.english')));___v1ew.push(
"</a>\n                                </li>\n                                <li><a href=\"/locales/ko\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'navbar.korean')));___v1ew.push(
"</a>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n    </div>\n</div>");; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_setting_basic_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
can.view.txt(
0,
'',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"user"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"   <form id=\"updateBasicForm\" name=\"updateBasicForm\" method=\"put\" class=\"form-horizontal\">\n      <fieldset>\n        <h4>");___v1ew.push(
can.view.txt(
1,
'h4',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.basic.title')));___v1ew.push(
"</h4>\n        <hr/>\n        <input type=\"hidden\" id=\"id\" name=\"id\" value=\"");___v1ew.push(
can.view.txt(
true,
'input',
'value',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"user.id"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n        <div class=\"email form-group col-md-12\">\n            <label for=\"email\" class=\"col-md-4\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'user.email')));___v1ew.push(
"</label>\n            <input id=\"email\" name=\"email\" readonly type=\"email\" class=\"email form-control col-md-8\" value=\"");___v1ew.push(
can.view.txt(
true,
'input',
'value',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"user.email"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n        </div>\n      </fieldset>\n    </form>");return ___v1ew.join("");}}])));; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_setting_connection_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
"<h4>");___v1ew.push(
can.view.txt(
1,
'h4',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.connection.title')));___v1ew.push(
"</h4>\n<hr/>\n<h5>");___v1ew.push(
can.view.txt(
1,
'h5',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'facebook.title')));___v1ew.push(
"</h5>");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'undefined',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"has_facebook_connection"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"    <div class=\"disconnect-to-facebook-wrapper\">\n        <button type=\"button\"\n                class=\"btn btn-small pull-right disconnect-to-facebook\">");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'facebook.disconnect')));___v1ew.push(
"</button>\n    </div>\n    <form id=\"sendToFacebookForm\" name=\"sendToFacebookForm\" class=\"form-horizontal\">\n        <div class=\"send-to-facebook-textarea-wrapper form-group\">\n            <textarea id=\"content\" name=\"content\" class=\"form-control\" rows=\"3\"\n                      placeholder=\"");___v1ew.push(
can.view.txt(
true,
'textarea',
'placeholder',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},"facebook.messagePlaceholder")));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
"</textarea>\n        </div>\n        <div class=\"send-to-facebook-wrapper form-group\">\n            <button type=\"button\" class=\"btn btn-info send-to-facebook pull-right\" tabindex=\"1\">\n                ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'facebook.sendMessage')));___v1ew.push(
"\n            </button>\n        </div>\n    </form>\n    <div class=\"connect-to-facebook-wrapper hidden\">\n        <a href=\"/connections/facebook\" type=\"button\" class=\"btn btn-primary pull-right\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'facebook.connect')));___v1ew.push(
"</a>\n    </div>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
can.view.txt(
0,
'undefined',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"^",{get:"has_facebook_connection"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"\n    <div class=\"connect-to-facebook-wrapper\">\n        <a href=\"/connections/facebook\" type=\"button\" class=\"btn btn-primary pull-right\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'facebook.connect')));___v1ew.push(
"</a>\n    </div>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"<br/>\n");; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_setting_leave_our_service_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
"<form id=\"leaveOurServiceForm\" name=\"leaveOurServiceForm\" method=\"delete\" class=\"form-horizontal\">\n  <fieldset>\n    <h4>");___v1ew.push(
can.view.txt(
1,
'h4',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.leaveOurService.title')));___v1ew.push(
"</h4>\n    <hr/>\n    <input type=\"hidden\" id=\"id\" name=\"id\" value=\"");___v1ew.push(
can.view.txt(
true,
'input',
'value',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"user.id"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n    <div class=\"thank-you-wrapper form-group\">\n        <pre>");___v1ew.push(
can.view.txt(
1,
'pre',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.leaveOurService.thankYou')));___v1ew.push(
"</pre>\n    </div>\n    <div class=\"open-confirm form-group\">\n        <button type=\"button\" class=\"btn btn-default leave-our-service-confirm pull-right\" tabindex=\"3\">\n            ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.leaveOurService.wantToLeave')));___v1ew.push(
"\n        </button>\n    </div>\n    <div class=\"modal\" id=\"leaveOurServiceConfirm\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close cancel-confirm\" data-dismiss=\"modal\"\n                            aria-hidden=\"true\">&times;</button>\n                    <h4 class=\"modal-title\">");___v1ew.push(
can.view.txt(
1,
'h4',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.leaveOurService.confirm.title')));___v1ew.push(
"</h4>\n                </div>\n                <div class=\"modal-body\">\n                    ");___v1ew.push(
can.view.txt(
1,
'div',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.leaveOurService.confirm.content')));___v1ew.push(
"\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" data-dismiss=\"modal\"\n                            class=\"btn btn-default cancel-confirm\">");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.leaveOurService.confirm.close')));___v1ew.push(
"</button>\n                    <button type=\"button\"\n                            class=\"btn btn-default leave-our-service-final btn-inverse\">");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.leaveOurService.confirm.submit')));___v1ew.push(
"</button>\n                </div>\n            </div>\n            <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n    </div>\n    <!-- /.modal -->\n    <br/>\n  </fieldset>\n</form>");; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_setting_password_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
can.view.txt(
0,
'',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"user"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"    <form id=\"passwordForm\" name=\"passwordForm\" method=\"put\" class=\"form-horizontal\">\n      <fieldset>\n        <h4>");___v1ew.push(
can.view.txt(
1,
'h4',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.password.title')));___v1ew.push(
"</h4>\n        <hr/>\n        <input type=\"hidden\" id=\"id\" name=\"id\" value=\"");___v1ew.push(
can.view.txt(
true,
'input',
'value',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"user.id"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n        <div class=\"email form-group\">\n            <label for=\"email\" class=\"col-md-2\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'user.email')));___v1ew.push(
"</label>\n            <input id=\"email\" name=\"email\" readonly type=\"email\" class=\"form-control col-md-10\" value=\"");___v1ew.push(
can.view.txt(
true,
'input',
'value',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"user.email"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n        </div>\n        <div class=\"current-password form-group\">\n            <label for=\"currentPassword\" class=\"col-md-4\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.password.currentPassword')));___v1ew.push(
"</label>\n            <input id=\"currentPassword\" name=\"currentPassword\" type=\"password\"\n                   placeholder=\"");___v1ew.push(
can.view.txt(
true,
'input',
'placeholder',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.password.enterCurrentPassword')));___v1ew.push(
"\" class=\"password form-control col-md-8\"\n                   tabindex=\"1\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n        </div>\n        <div class=\"new-password form-group\">\n            <label for=\"newPassword\" class=\"col-md-4\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.password.newPassword')));___v1ew.push(
"</label>\n            <input id=\"newPassword\" name=\"newPassword\" type=\"password\"\n                   placeholder=\"");___v1ew.push(
can.view.txt(
true,
'input',
'placeholder',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.password.enterNewPassword')));___v1ew.push(
"\" class=\"password form-control col-md-8\" tabindex=\"1\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n        </div>\n        <div class=\"new-password-confirm form-group\">\n            <label for=\"newPasswordConfirm\" class=\"col-md-4\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.password.newPasswordConfirm')));___v1ew.push(
"</label>\n            <input id=\"newPasswordConfirm\" name=\"newPasswordConfirm\" type=\"password\"\n                   placeholder=\"");___v1ew.push(
can.view.txt(
true,
'input',
'placeholder',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.password.enterNewPasswordConfirm')));___v1ew.push(
"\" class=\"password form-control col-md-8\"\n                   tabindex=\"2\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n        </div>\n        <div class=\"submit form-group\">\n            <button type=\"submit\" class=\"btn btn-info update-user-password pull-right\" tabindex=\"3\">\n                ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.password.submit')));___v1ew.push(
"\n            </button>\n        </div>\n      </fieldset>\n    </form>");return ___v1ew.join("");}}])));; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_setting_setting_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
"<h1 id=\"pageTitle\">");___v1ew.push(
can.view.txt(
1,
'h1',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'user.setting')));___v1ew.push(
"</h1>\n<div>\n    <div id=\"settingNav\" class=\"setting-nav col-md-3\">\n        <ul class=\"nav nav-pills nav-stacked\">\n            <li class=\"active basic-tab\">\n                <a href=\"#\" class=\"basic\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.basic.title')));___v1ew.push(
"</a>\n            </li>\n            <li class=\"password-tab\">\n                <a href=\"#\" class=\"password\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.password.title')));___v1ew.push(
"</a>\n            </li>\n            <li class=\"connection-tab\">\n                <a href=\"#\" class=\"connection\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.connection.title')));___v1ew.push(
"</a>\n            </li>\n            <li class=\"leave-our-service-tab\">\n                <a href=\"#\" class=\"leave-our-service\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'setting.leaveOurService.title')));___v1ew.push(
"</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"setting-text col-md-6\">\n        <div id=\"settingWrapper\" class=\"setting-wrapper well well-lg col-md-12\">\n            <div id=\"setting-basic\"></div>\n            <div id=\"setting-password\" class=\"hidden\"></div>\n            <div id=\"setting-connection\" class=\"hidden\"></div>\n            <div id=\"setting-leave-our-service\" class=\"hidden\"></div>\n        </div>\n    </div>\n    <div class=\"col-md-5\">\n    </div>\n</div>\n");; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_share_error_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
"<div id=\"index\" class=\"jumbotron\">\n    <h1 id=\"pageTitle\">");___v1ew.push(
can.view.txt(
1,
'h1',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'error.incorrectAccessDetected')));___v1ew.push(
"</h1>\n    <p>");___v1ew.push(
can.view.txt(
1,
'p',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'error.pleaseCheckTheURL')));___v1ew.push(
" ");___v1ew.push(
can.view.txt(
1,
'p',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'error.or')));___v1ew.push(
" <a href=\"/#!login\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'error.loginPlease')));___v1ew.push(
"</a></p>\n</div>\n");; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_share_user_list_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
can.view.txt(
0,
'',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"if"},{get:"users"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"<div class=\"user-wrapper well col-md-4\">\n    <h3>");___v1ew.push(
can.view.txt(
1,
'h3',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'main.users')));___v1ew.push(
" (");___v1ew.push(
can.view.txt(
1,
'h3',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"users.length"})));___v1ew.push(
")</h3>\n    <ul>");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"users"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"            <li>\n                <a href=\"#profile/");___v1ew.push(
can.view.txt(
true,
'a',
'href',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"id"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"email"})));___v1ew.push(
"</a>\n            </li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"    </ul>\n</div>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_user_login_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
"<div class=\"login-text col-md-8 col-lg-8\">\n    <div class=\"jumbotron\">\n        <h1 id=\"pageTitle\">");___v1ew.push(
can.view.txt(
1,
'h1',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'welcome.login.title')));___v1ew.push(
"</h1>\n        <p>");___v1ew.push(
can.view.txt(
1,
'p',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'welcome.login.content')));___v1ew.push(
"</p>\n    </div>\n</div>\n<div class=\"col-md-4 col-lg-4\">");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'div',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"unless"},{get:"registration_message"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"        <div class=\"login-wrapper well well-lg col-md-12\">\n            ");___v1ew.push(
can.view.txt(
0,
'div',
0,
this,
function(){ return can.Mustache.renderPartial('views_user_login_form',scope,options)}));
___v1ew.push(
"\n        </div>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"    <div class=\"register-wrapper well col-md-12\">\n        ");___v1ew.push(
can.view.txt(
0,
'div',
0,
this,
function(){ return can.Mustache.renderPartial('views_user_registration_form',scope,options)}));
___v1ew.push(
"\n    </div>\n</div>\n");; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_user_login_form_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
"<form id=\"loginForm\" name=\"loginForm\" method=\"post\" class=\"form-horizontal\">\n    <div class=\"email form-group col-md-12\">\n        <input id=\"loginEmail\" name=\"loginEmail\" type=\"email\" placeholder=\"");___v1ew.push(
can.view.txt(
true,
'input',
'placeholder',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'login.enterEmail')));___v1ew.push(
"\"\n               class=\"email form-control col-md-12\" autocomplete=\"on\" tabindex=\"1\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n        <label for=\"loginEmail\" class=\"hidden\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'login.enterEmail')));___v1ew.push(
"</label>\n    </div>\n    <div class=\"password form-group col-md-12\">\n        <input id=\"loginPassword\" name=\"loginPassword\" type=\"password\"\n               placeholder=\"");___v1ew.push(
can.view.txt(
true,
'input',
'placeholder',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'login.enterPassword')));___v1ew.push(
"\" class=\"password form-control col-md-12\" tabindex=\"2\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n        <label for=\"loginPassword\" class=\"hidden\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'login.enterPassword')));___v1ew.push(
"</label>\n    </div>\n    <div class=\"remember-forgot form-group col-md-12\">\n        <label class=\"remember inline\">\n            <input class=\"inline-item\" type=\"checkbox\" value=\"1\" id=\"rememberMe\" name=\"rememberMe\" tabindex=\"3\">\n            <span>");___v1ew.push(
can.view.txt(
1,
'span',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'login.rememberMe')));___v1ew.push(
"</span>\n        </label>\n        <span class=\"separator inline\">·</span>\n        <a class=\"forgot inline\" href=\"/reset\">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'login.forgotPassword')));___v1ew.push(
"?</a>\n    </div>\n    <div class=\"perform-login-wrapper form-group col-md-12\">\n        <button type=\"submit\" class=\"btn btn-primary perform-login pull-right\" tabindex=\"4\">\n            ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'login.submit')));___v1ew.push(
"\n        </button>\n    </div>\n</form>\n<form action=\"/oauth/login/facebook\" method=\"POST\" class=\"form-horizontal oauth-login-form\">\n    <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary pull-right\" tabindex=\"5\">");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'user.view.oauth.login.prefix')));___v1ew.push(
" ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'user.view.oauth.facebook')));___v1ew.push(
" ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'user.view.oauth.login.postfix')));___v1ew.push(
"</button>\n    </div>\n</form>");; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_user_profile_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
"<h1 id=\"pageTitle\">");___v1ew.push(
can.view.txt(
1,
'h1',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'profile.title')));___v1ew.push(
"</h1>");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'undefined',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"user_data"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"    <div class=\"user-wrapper well col-md-4\">\n    <ul class=\"list-unstyled\">");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"user"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"            <li><img alt=\"");___v1ew.push(
can.view.txt(
true,
'img',
'alt',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"email"})));___v1ew.push(
"\" src=");___v1ew.push(
can.view.txt(
1,
'img',
1,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"gravatar"})));___v1ew.push(
"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"</li>\n            <li>");___v1ew.push(
can.view.txt(
1,
'li',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'user.email')));___v1ew.push(
" : ");___v1ew.push(
can.view.txt(
1,
'li',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"email"})));___v1ew.push(
"</li>\n            <li>");___v1ew.push(
can.view.txt(
1,
'li',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'user.id')));___v1ew.push(
" : ");___v1ew.push(
can.view.txt(
1,
'li',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"id"})));___v1ew.push(
"</li>\n            <li>");___v1ew.push(
can.view.txt(
1,
'li',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'profile.following.title')));___v1ew.push(
" : ");___v1ew.push(
can.view.txt(
1,
'li',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"following_cnt"})));___v1ew.push(
"</li>");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"if"},{get:"following"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"                <li>\n                    <ul id=\"followingList\">");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"following"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"                            <li><a href=\"#profile/");___v1ew.push(
can.view.txt(
true,
'a',
'href',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"id"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"email"})));___v1ew.push(
"</a></li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"                    </ul>\n                </li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"            ");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"following_flag.has_next"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"\n                <li>\n                    <div class=\"show-more-following-wrapper\">\n                        <button type=\"button\" class=\"btn btn-default btn-mini show-more-following\" tabindex=\"2\">\n                            ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'profile.following.more')));___v1ew.push(
"\n                        </button>\n                    </div>\n                </li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"            <li>  ");___v1ew.push(
can.view.txt(
1,
'li',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'profile.followers.title')));___v1ew.push(
" : ");___v1ew.push(
can.view.txt(
1,
'li',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"followers_cnt"})));___v1ew.push(
" </li>");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"if"},{get:"followers"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"                <li>\n                    <ul>");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"followers"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"                            <li><a href=\"#profile/");___v1ew.push(
can.view.txt(
true,
'a',
'href',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"id"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),">");___v1ew.push(
can.view.txt(
1,
'a',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"email"})));___v1ew.push(
"</a></li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"                    </ul>\n                </li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"            ");___v1ew.push(
can.view.txt(
0,
'ul',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"followers_flag.has_next"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"\n                <li>\n                    <div class=\"show-more-followers-wrapper\">\n                        <button type=\"button\" class=\"btn btn-default btn-mini show-more-followers\" tabindex=\"2\">\n                            ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'profile.followers.more')));___v1ew.push(
"\n                        </button>\n                    </div>\n                </li>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"        </ul>");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'div',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"^",{get:"is_current"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"                <form id=\"followersForm\" name=\"followersForm\">\n                    <input type=\"hidden\" id=\"id\" name=\"id\" value=\"");___v1ew.push(
can.view.txt(
true,
'input',
'value',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"user.id"})));___v1ew.push(
"\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'form',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"^",{get:"is_following"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"                        <div class=\"perform-follow-wrapper\">\n                            <button type=\"button\" class=\"btn btn-success perform-follow pull-right\" tabindex=\"1\">\n                                ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'profile.follow.title')));___v1ew.push(
"\n                            </button>\n                        </div>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"                    ");___v1ew.push(
can.view.txt(
0,
'form',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"is_following"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"\n                        <div class=\"perform-unfollow-wrapper\">\n                            <button type=\"button\" class=\"btn btn-default perform-unfollow pull-right\" tabindex=\"2\">\n                                ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'profile.unfollow.title')));___v1ew.push(
"\n                            </button>\n                        </div>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"                </form>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"        ");return ___v1ew.join("");}}])));___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'div',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"^",{get:"user"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"            :(");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"    </div>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));; return ___v1ew.join('') }));
can.view.preloadStringRenderer('views_user_registration_form_mustache',can.Mustache(function(scope,options) { var ___v1ew = [];___v1ew.push(
"<form id=\"registrationForm\" name=\"registrationForm\" method=\"post\" class=\"form-horizontal\">\n  <fieldset>\n    <h4>\n        ");___v1ew.push(
can.view.txt(
1,
'h4',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'registration.title')));___v1ew.push(
"\n    </h4>\n    <hr/>");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'fieldset',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"if"},{get:"registration_message"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"        <div class=\"form-group\">\n            <label class=\"text-info text-center\"><small>");___v1ew.push(
can.view.txt(
1,
'small',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"registration_message"})));___v1ew.push(
"</small></label>\n        </div>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));___v1ew.push(
"    <div class=\"email form-group col-md-12\">\n        <input id=\"registrationEmail\" name=\"registrationEmail\" type=\"email\"\n               placeholder=\"");___v1ew.push(
can.view.txt(
true,
'input',
'placeholder',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'registration.enterEmail')));___v1ew.push(
"\" class=\"email form-control col-md-12\" autocomplete=\"off\" tabindex=\"5\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n        <label for=\"registrationEmail\" class=\"hidden\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'registration.enterEmail')));___v1ew.push(
"</label>\n    </div>\n    <div class=\"password form-group col-md-12\">\n        <input id=\"registrationPassword\" name=\"registrationPassword\" type=\"password\"\n               placeholder=\"");___v1ew.push(
can.view.txt(
true,
'input',
'placeholder',
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'registration.enterPassword')));___v1ew.push(
"\" class=\"password form-control col-md-12\" tabindex=\"6\"",can.view.pending({scope: scope,options: options}),"/>");___v1ew.push(
"\n        <label for=\"registrationPassword\" class=\"hidden\">");___v1ew.push(
can.view.txt(
1,
'label',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'registration.enterPassword')));___v1ew.push(
"</label>\n    </div>\n    <div class=\"register-user-wrapper form-group col-md-12\">\n        <button type=\"submit\" class=\"btn btn-warning register-user pull-right\" tabindex=\"7\">\n            ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'registration.submit')));___v1ew.push(
"\n        </button>\n    </div>\n  </fieldset>\n</form>");___v1ew.push(
"\n");___v1ew.push(
can.view.txt(
0,
'undefined',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
"#",{get:"unless"},{get:"registration_message"},[

{fn:function(scope,options){var ___v1ew = [];___v1ew.push(
"    <form action=\"/oauth/login/facebook\" method=\"POST\" class=\"form-horizontal\">\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-warning pull-right\" tabindex=\"10\">");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'user.view.oauth.registration.prefix')));___v1ew.push(
" ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'user.view.oauth.facebook')));___v1ew.push(
" ");___v1ew.push(
can.view.txt(
1,
'button',
0,
this,
can.Mustache.txt(
{scope:scope,options:options},
null,{get:"i18n"},'user.view.oauth.registration.postfix')));___v1ew.push(
"</button>\n        </div>\n    </form>");___v1ew.push(
"\n");return ___v1ew.join("");}}])));; return ___v1ew.join('') })); });