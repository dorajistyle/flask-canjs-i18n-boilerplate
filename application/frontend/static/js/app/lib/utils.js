define(['loglevel', 'i18n', 'can', 'settings', 'app/components/navbar'], function (log, i18n, can, settings, Navbar) {
    /**
     * A set for general purpose utilities.
     * @author dorajistyle
     * @module utils
     */
    var RULE_REGEX = /^(.+?)\[(.+)\]$/,
        NUMERIC_REGEX = /^[0-9]+$/,
        INTEGER_REGEX = /^\-?[0-9]+$/,
        DECIMAL_REGEX = /^\-?[0-9]*\.?[0-9]+$/,
        EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&amp;'*+\-\/=?\^_`{|}~\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z0-9\-]+)*$/,
        ALPHA_REGEX = /^[a-z]+$/i,
        ALPHA_NUMERIC_REGEX = /^[a-z0-9]+$/i,
        ALPHA_DASH_REGEX = /^[a-z0-9_\-]+$/i,
        NATURAL_REGEX = /^[0-9]+$/i,
        NATURAL_NO_ZERO_REGEX = /^[1-9][0-9]*$/i,
        IP_REGEX = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
        BASE64_REGEX = /[^a-zA-Z0-9\/\+=]/i,
        NUMERIC_DASH_REGEX = /^[\d\-\s]+$/,
        URL_REGEX = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
    var messages = new Array();
    return {
        /**
         * @param {string} name of param.
         * @returns {string} return param value.
         * @example <caption>
         * var lang =utils.getParam('lang');
         * </caption>
         */
        getParam: function (name) {
            var value = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
            return value != null ? value[1] : undefined;
        },

        /**
         * Check user's browser that less than IE8.
         * @returns {*|jQuery}
         */
        isLessThanIE8: function () {
            return $('html').hasClass('lt-ie8');
        },

        /**
         * stringify JSON if browser greater than IE7.
         * @param obj
         * @returns {*}
         */
        stringify: function (obj) {
            if(this.isLessThanIE8()) return i18n.t('utils.stringify.notSupport');
            return JSON.stringify(obj);
        },

        /**
         * Get id data from event target.
         * @param ev
         * @returns {*}
         */
        getId: function (ev) {
          return this.getData(ev, 'id');
        },
        /**
         * Get data from event target.
         * @param ev
         * @param name
         * @returns {*|jQuery}
         */
        getData: function(ev, name) {
          return $(ev.target).data(name);
        },
        /**
         * Refresh page title to h1#pageTitle's content.
         */
        refreshTitle: function() {
          var $page_title = document.getElementById('pageTitle');
          var title = '';
          if($page_title != null) title = $page_title.innerHTML + ' - ';
          document.title = title + i18n.t('service.name');
        },
         /**
         * Replace hash to route
         * @param route
         */
        replaceHash: function (route){
          window.location.hash='#!'+route;
//          this.logError('hash',window.location.hash);
//          window.location.pathname = "/";
        },
        /**
         * Set wrapper information of control.
         * @param control
         * @param wrapper_name
         */
        setWrapperInfo: function (control, wrapper_name) {
          var $wrapper = $('#'+wrapper_name);
          control.wrapper = $wrapper.html();
          control.wrapper_id = $wrapper.prop('id');
          control.wrapper_class = $wrapper.prop('class');
        },
        /**
         * Replace wrapper information of control.
         * @param control
         * @param wrapper_name
         */
        replaceWrapper: function (control, wrapper_name) {
          var $wrapper = $('#'+wrapper_name);
          $wrapper.replaceWith('<div id="'+control.wrapper_id+'" class="'+control.wrapper_class+'">'+control.wrapper+'</div>');
        },

        /**
         * Allocate the view if view is undefined.
         * @param router
         * @param allocate
         */
        allocate: function (router, control) {
            if(control === undefined || control.element === null ) router.allocate();
        },
        /**
         * Enable javascript logger.
         *
         */
        enableLog: function () {
            log.enableAll();
        },
        /**
         * Disable javascript logger.
         *
         */
        disableLog: function () {
            log.disableAll();
        },
        /**
         * Disables all logging below the given level.
         * @param level
         * @private
         */
        setLogLevel: function (level) {
            log.setLevel(level);
        },
        /**
         * Log trace level message into console.
         * It works only after enable logger. {@link module:utils/enableLog}
         * @param target
         * @param msg
         */
        logTrace: function (target, msg) {
            log.trace(target + ' : ', msg);
        },
        /**
         * Log debug level message into console.
         * It works only after enable logger. {@link module:utils/enableLog}
         * @param target
         * @param msg
         */
        logDebug: function (target, msg) {
            log.debug(target + ' : ', msg);
        },
        /**
         * Log info level message into console.
         * It works only after enable logger. {@link module:utils/enableLog}
         * @param target
         * @param msg
         */
        logInfo: function (target, msg) {
            log.info(target + ' : ', msg);
        },
        /**
         * Log warn level message into console.
         * It works only after enable logger. {@link module:utils/enableLog}
         * @param target
         * @param msg
         */
        logWarn: function (target, msg) {
            log.warn(target + ' : ', msg);
        },
        /**
         * Log error level message into console.
         * It works only after enable logger. {@link module:utils/enableLog}
         * @param target
         * @param msg
         */
        logError: function (target, msg) {
            log.error(target + ' : ', msg);
        },

        /**
         * Log JSON object as debug level message into console.
         * It works only after enable logger. {@link module:utils/enableLog}
         * @param target
         * @param obj JSON object
         */
        logJson: function (target, obj) {
            log.debug(target + ' : ', this.stringify(obj));
        },

        /**
         * show message popup.
         * @param msg
         * @param type
         */
        showMessage: function (msg, type) {
            var $msg_box = $('#message' + type);
            $msg_box.html(msg);
            $msg_box.fadeIn(200).removeClass('hidden').delay(500).fadeOut(800);
        },
        /**
         * show warning message.
         * @param msg
         */
        showWarningMsg: function (msg) {
            this.showMessage(msg, 'AlertWarning');
        },
        /**
         * show error message.
         * @param msg
         */
        showErrorMsg: function (msg) {
            this.showMessage(msg, 'AlertError');
        },
        /**
         * show info message.
         * @param msg
         */
        showInfoMsg: function (msg) {
            this.showMessage(msg, 'AlertInfo');
        },
        /**
         * show success message.
         * @param msg
         */
        showSuccessMsg: function (msg) {
            this.showMessage(msg, 'AlertSuccess');
        },
        /**
         * Put message into message array.
         * @param msg
         */
        putMessage: function (msg) {
            messages[messages.length] = msg;
        },
        /**
         * Show messages that putted before.
         */
        showMessages: function () {
            this.showWarningMsg(messages.join('<br/>'));
            this.clearMessages();
        },
        /**
         * Clear message array.
         */
        clearMessages: function () {
            messages.length = 0;
        },
        /**
         * Return Template engine for typeahead
         * @returns {{}}
         */
        getEngine: function () {
           var Mustache = {};
           Mustache.compile = function (template) {
                var compile = can.view.mustache(template),
                    render = {
                        render: function (ctx) {
                            return compile.render(ctx);
                        }
                    };
                return render;
           };
           return Mustache;
        },
        /**
         * Change hash to route if hash is not identical to current hash.
         * @param route
         * @returns {boolean}
         */
        isHashNow: function (route){
          if(window.location.hash == '#!'+route){
              return true;
          }
          window.location.hash='#!'+route;
//          window.location.pathname = "/";
          return false;
        },
        /**
         * Refresh app div.
         * @param target
         * @param name
         */
        getFreshApp: function (){
          return this.getFreshDiv('app');
        },
        /**
         * Refresh div.
         * @param name
         * @returns {HTMLElement}
         */
        getFreshDiv: function (name){
          $('#'+name).replaceWith('<div id="'+name+'"></div>');
          return $('#'+name);
        },
        /**
         * handle http status codes.
         * @param xhr
         */
        handleStatus: function (xhr) {
            var utils = this;
            utils.logError('response code', xhr.status);
            switch (xhr.status) {
                case 200:
                    // OK
                    break;
                case 400:
                    // Bad Request
//                    can.route.attr('route','');
                    $(settings.app_div_id).html(can.view('/static/views/share/error.mustache', {}));
                    utils.replaceHash('');
                    break;
                case 500:
                    // Internal Server Error
                    $(settings.app_div_id).html(can.view('/static/views/share/error.mustache', {}));
                    break;
                case 201:
                    // Created
                    break;
                case 304:
                    // Not Modified
                    break;
                case 404:
                    // Not Found
                    $(settings.app_div_id).html(can.view('/static/views/share/error.mustache', {}));
                    break;
                case 401:
                    // Unauthorized
//                    can.route.attr('route', 'login');
                    Navbar.load();
                    utils.showErrorMsg(i18n.t('error.loginPlease'));
                    $(settings.app_div_id).html(can.view('/static/views/share/error.mustache', {}));
                    utils.replaceHash('login');
                    break;
                case 403:
                    // Forbidden
//                    can.route.attr('route', 'login');
                    Navbar.load();
                    utils.showErrorMsg(i18n.t('error.loginPlease'));
                    $(settings.app_div_id).html(can.view('/static/views/share/error.mustache', {}));
                    utils.replaceHash('login');
                    break;
                case 405:
                    // request method not supported by that resource
                    break;
                case 409:
                    // request could not be processed because of conflict
//                    this.replaceHash('cart');
                    break;
            }
        },

        /**
         * show error message and handle status.
         * @param xhr
         * @param message
         */
        handleStatusWithErrorMsg: function (xhr, message) {
            this.showErrorMsg(message);
            this.handleStatus(xhr);
        },
        /**
         * delete cookie
         * @param name
         * @returns {*}
         */
        deleteCookie: function (name) {
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        },

        /**
         * Validate a filed that is checked.
         * @param name
         * @param msg
         * @returns {boolean}
         */
        isChecked: function (name, msg) {
            var $field = $('input[name=' + name + ']');
            var result = $field.is(':checked');
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },
        /**
         * Validate a email field that is correct.
         * @param name
         * @returns {boolean}
         */
        validateEmail: function (name, skipFocus) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = EMAIL_REGEX.test(value);
            if (!result) {
                this.putMessage(i18n.t('validation.email'));
                if (!skipFocus) $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's length that is above the minimum Length.
         * @param name
         * @param length
         * @param msg
         * @returns {boolean}
         */
        minLength: function (name, length, msg) {
            if (!NUMERIC_REGEX.test(length)) {
                return false;
            }
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = (value.length >= parseInt(length, 10));
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a textarea's length that is above the minimum Length.
         * @param name
         * @param length
         * @param msg
         * @returns {boolean}
         */
        minLengthTextarea: function (name, length, msg) {
            if (!NUMERIC_REGEX.test(length)) {
                return false;
            }
            var $textarea = $('textarea[name=' + name + ']');
            var value = $textarea.val();
            var result = (value.length >= parseInt(length, 10));
            if (!result) {
                this.putMessage(i18n.t(msg));
                $textarea.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's length that is below the maximum Length.
         * @param name
         * @param length
         * @param msg
         * @returns {boolean}
         */
        maxLength: function (name, length, msg) {
            if (!NUMERIC_REGEX.test(length)) {
                return false;
            }
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = (value.length <= parseInt(length, 10));
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's length that is exactly same as length.
         * @param name
         * @param length
         * @param msg
         * @returns {boolean}
         */
        exactLength: function (name, length, msg) {
            if (!NUMERIC_REGEX.test(length)) {
                return false;
            }
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = (value.length <= parseInt(length, 10));
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's value that is grater than param value.
         * @param name
         * @param param
         * @param msg
         * @returns {boolean}
         */
        greaterThan: function (name, param, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = (DECIMAL_REGEX.test(value) && (parseFloat(value) > parseFloat(param)));
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's value that is less than param value.
         * @param name
         * @param param
         * @param msg
         * @returns {boolean}
         */
        lessThan: function (name, param, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = (DECIMAL_REGEX.test(value) && (parseFloat(value) < parseFloat(param)));
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's value that is alphabet.
         * @param name
         * @param msg
         * @returns {boolean}
         */
        isAlpha: function (name, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = ALPHA_REGEX.test(value);
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's value that is alphabet or Numeric.
         * @param name
         * @param msg
         * @returns {boolean}
         */
        isAlphaNumeric: function (name, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = ALPHA_NUMERIC_REGEX.test(value);
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's value that is alphabet or underbar or dash.
         * @param name
         * @param msg
         * @returns {boolean}
         */
        isAlphaDash: function (name, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = ALPHA_DASH_REGEX.test(value);
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },
        /**
         * Validate a field's value that is numeric.
         * @param name
         * @param msg
         * @returns {boolean}
         */
        isNumeric: function (name, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = DECIMAL_REGEX.test(value);
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's value that is integer.
         * @param name
         * @param msg
         * @returns {boolean}
         */
        isInteger: function (name, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = INTEGER_REGEX.test(value);
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's value that is decimal.
         * @param name
         * @param msg
         * @returns {boolean}
         */
        isDecimal: function (name, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = DECIMAL_REGEX.test(value);
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's value that is natural.
         * @param name
         * @param msg
         * @returns {boolean}
         */
        isNatural: function (name, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = NATURAL_REGEX.test(value);
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's value that is natural without zero.
         * @param name
         * @param msg
         * @returns {boolean}
         */
        isNaturalNoZero: function (name, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = NATURAL_NO_ZERO_REGEX.test(value);
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's value that is correct ip address.
         * @param name
         * @param msg
         * @returns {boolean}
         */
        validateIp: function (name, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = IP_REGEX.test(value);
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's value that is correct Base64 format.
         * @param name
         * @param msg
         * @returns {boolean}
         */
        validateBase64: function (name, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = BASE64_REGEX.test(value);
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's value that is correct Url.
         * @param name
         * @param msg
         * @returns {boolean}
         */
        validateUrl: function (name, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var result = URL_REGEX.test(value);
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },

        /**
         * Validate a field's value that is correct credit card number.
         * @param name
         * @param msg
         * @returns {boolean}
         */
        validateCreditCard: function (name, msg) {
            var $field = $('input[name=' + name + ']');
            var value = $field.val();
            var nCheck = 0, nDigit = 0, bEven = false;
            var strippedField = value.replace(/\D/g, '');
            for (var n = strippedField.length - 1; n >= 0; n--) {
                var cDigit = strippedField.charAt(n);
                nDigit = parseInt(cDigit, 10);
                if (bEven) {
                    if ((nDigit *= 2) > 9) nDigit -= 9;
                }
                nCheck += nDigit;
                bEven = !bEven;
            }
            var result = (NUMERIC_DASH_REGEX.test(value) && ((nCheck % 10) === 0));
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field.focus();
                return false;
            }
            return true;
        },
        /**
         * Validate two field's value there are identical.
         * @param name_src
         * @param name_dest
         * @param msg
         * @returns {boolean}
         */
        isIdentical: function (name_src, name_dest, msg) {
            var $field_src = $('input[name=' + name_src + ']');
            var value_src = $field_src.val();
            var $field_dest = $('input[name=' + name_dest + ']');
            var value_dest = $field_dest.val();
            var result = (value_src == value_dest);
            if (!result) {
                this.putMessage(i18n.t(msg));
                $field_dest.focus();
                return false;
            }
            return true;
        }
    };
});