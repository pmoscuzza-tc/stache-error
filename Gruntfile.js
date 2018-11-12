module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-steal");

    grunt.initConfig({
        "steal-build": {
            default: {
                options: {
                    steal: {
                        main: "index",
                        config: __dirname + "/package.json!npm",
                    },
                    buildOptions: {
                        bundleAssets: true
                    }
                }
            }
        },

    });

    grunt.registerTask('default', ['steal-build']);
};
