/**
 *
 * @type {com.IndexPage}
 */
    
    var Form = require('../pages/form.js');
    var fs = require('fs');

describe('Test user registration page', function () {

    var form = new Form();

    beforeEach(function() {
        form.get();
    });
    
	function writeScreenShot(data, filename) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

    it('Success creating', function () {
        form.getRowsCount().then(function(items) {
            var rowsCount = items.length;
            form.fillAndSubmitUserForm("user_test_create", "address_test_create", "email_test_create@test.com");
            form.getRowsCount().then(function(items) {
                browser.takeScreenshot().then(function (png) {
                    writeScreenShot(png, 'test_create.png');
                });
                expect(items.length).toBe(rowsCount + 1);
            });
        });
    });

    it('Success not creating', function () {
        form.fillUserForm("user_test_create", "address_test_create", "email_test_create");
        form.isBtnSubmitDisabled().then(function(result) {
            expect(result).toBeTruthy();
        });
    });

    it('Success delete', function () {
        form.getRowsCount().then(function(items) {
            var rowsCount = items.length;
            form.removeUser();
            form.getRowsCount().then(function(items) {
                browser.takeScreenshot().then(function (png) {
                    writeScreenShot(png, 'test_delete.png');
                });
                expect(items.length).toBe(rowsCount - 1);
            });
        });
    });

    it('Success edit', function(){
        var nameValue = "User1";
        form.editAndSubmitUserForm(nameValue);
        expect(form.getResultName()).toEqual(nameValue);
    });
    
    it('Show remove window', function(){
        expect(form.removeWindowIsShow()).toBe(true);
    });

    it('Close remove window', function(){
        expect(form.removeWindowIsClose()).toBe(true);
    });
    

});
