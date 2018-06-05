/**
 * @namespace com
 * @type {{seleniumAddress: string, specs: string[], multiCapabilities: *[], jasmineNodeOpts: {showColors: boolean, print: exports.config.jasmineNodeOpts.print}, onPrepare: exports.config.onPrepare}}
 */
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test/protractor/specs/userForm.spec.js'],
    multiCapabilities: [{
        'browserName': 'chrome' //phantomjs
    }],
    jasmineNodeOpts: {
        showColors: true,
        print: function () {
        }
    },
    onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport: {
                resultsDir: 'allure-results'
            }
        }));

        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'specs',    // display stacktrace for each failed assertion, values: (all|specs|summary|none)
            displayFailuresSummary: true, // display summary of all failures after execution
            displayPendingSummary: true,  // display summary of all pending specs after execution
            displaySuccessfulSpec: true,  // display each successful spec
            displayFailedSpec: true,      // display each failed spec
            displayPendingSpec: false,    // display each pending spec
            displaySpecDuration: true,   // display each spec duration
            displaySuiteNumber: true,    // display each suite number (hierarchical)
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '+ ',
                failure: '- ',
                pending: '~ '
            },
            customProcessors: []
        }));

        // var JasmineConsoleReporter = require('jasmine-console-reporter');
        // var reporter = new JasmineConsoleReporter({
        //     colors: true,           // (0|false)|(1|true)|2
        //     cleanStack: 3,       // (0|false)|(1|true)|2|3
        //     verbosity: 4,        // (0|false)|1|2|(3|true)|4
        //     listStyle: 'indent', // "flat"|"indent"
        //     activity: false
        // });
        // jasmine.getEnv().addReporter(reporter);
    }
};