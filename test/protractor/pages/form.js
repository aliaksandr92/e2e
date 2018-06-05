/**
 *
 * @constructor
 * @memberOf com
 */
var Form = function() {

    var that = this;

    var name = element(by.id("uname"));

    var resultName = element.all(by.binding("u.userName")).first();

    var address = element(by.id("address"));
    var email = element(by.id("email"));
    var submit = element(by.id("submit"));
    var edit = element.all(by.id("edit")).first();
    var remove = element.all(by.id("remove")).last();

    var okBtn = element.all(by.css(".btn-primary")).first();
    var cancelBtn = element.all(by.css(".btn-warning")).first();


    that.get = function() {
        browser.get('http://localhost:8080/TestAppExample/index');
    };

    that.fillName = function (value) {
        name.sendKeys(value);
    };

    that.fillAddress = function (value) {
        address.sendKeys(value);
    };

    that.fillEmail = function (value) {
        email.sendKeys(value);
    };

    that.fillUserForm = function (nameValue, addressValue, emailValue) {
        that.fillName(nameValue);
        that.fillAddress(addressValue);
        that.fillEmail(emailValue);
    };

    that.fillAndSubmitUserForm = function (nameValue, addressValue, emailValue) {
        that.fillUserForm(nameValue, addressValue, emailValue);
        submit.click();
    };
    
    that.editAndSubmitUserForm = function (nameValue) {
        edit.click();
        name.clear();
        that.fillName(nameValue);
        submit.click();
    }; 

    that.removeWindowIsShow = function() {
        remove.click();
        return remove.isDisplayed();
    }

    that.removeWindowIsClose = function() {
        remove.click();
        cancelBtn.click();
        return remove.isDisplayed();
    }

    that.removeUser = function () {
        remove.click();
        okBtn.click();
    }

    that.getRowsCount = function () {
        return element.all(by.repeater("u in controller.users"));
    };

    that.isBtnSubmitDisabled = function () {
        return submit.getAttribute('disabled');
    }; 

    that.getResultName = function () {
    	return resultName.getText();
    }
};

module.exports = Form;