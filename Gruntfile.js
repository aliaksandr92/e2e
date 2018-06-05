module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        protractor_webdriver: {
            start: {
                options: {
                    keepAlive:true,
                    command: 'webdriver-manager start'
                }
            }
        },
        protractor: {
            e2e: {
                options: {
                    keepAlive: true,
                    configFile: 'conf/protractor.conf.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');

    grunt.registerTask('test', [
        'protractor_webdriver:start',
        'protractor:e2e'
    ]);
};