/**
 *
 * @constructor
 * @memberOf com
 */

var Proces = function(param) {
    
    var that = this;
    var form = param;

    that.fill = function (value, param) {
        param.sendKeys(value);
    }

    that.fillUserForm = function (nameValue, addressValue, emailValue) {
        that.fill(nameValue, form.name);
        that.fill(addressValue, form.address);
        that.fill(emailValue, form.email);
    };

    that.fillAndSubmitUserForm = function (nameValue, addressValue, emailValue) {
        that.fillUserForm(nameValue, addressValue, emailValue);
        form.buttonClick(form.submit);
    };
    
    that.editAndSubmitUserForm = function (nameValue, param) {
        form.buttonClick(form.edit);
        form.clearField(form.name);
        that.fill(nameValue, param);
        form.buttonClick(form.submit);
    }; 

    that.removeWindowIsShow = function() {
        form.buttonClick(form.remove);
        form.removeDisplay();
    }

    that.removeWindowIsClose = function() {
        form.buttonClick(form.remove);
        form.buttonClick(form.cancel);
        form.removeDisplay();
    }

    that.removeUser = function () {
        form.buttonClick(form.remove);
        form.buttonClick(form.okClick);
    }

};

module.exports = Proces;