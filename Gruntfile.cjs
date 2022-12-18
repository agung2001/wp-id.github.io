module.exports = function(grunt) {

    /** Configuration */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /** Compile TailwindCSS - Cross Platform */
        shell: {
            sveltekit: { command: `npm run build` },
            npm_tailwind: { command:
                    `npx tailwindcss build assets/css/tailwind/style.css -o static/css/tailwind.min.css --silent && ` +
                    `node tailwindcsssupport.js`
            },
            sass: { command:
                    `sass assets/css/styles/style.scss static/css/style.min.css --style compressed`
            }
        },

        /** CSS Minify */
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    "static/css/tailwind.min.css" : "static/css/tailwind.min.css"
                }
            }
        },

        /** Configure watch task */
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: [
                    'assets/css/**/*.scss',
                    'assets/css/**/*.css',
                    'layouts/**/*.html',
                    'content/**/*.md',
                ],
                tasks: ['build-css']
            }
        },
    });

    /** Load Plugin */
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    /** Register Tasks */
    grunt.registerTask('default', ['watch', 'shell:npm_tailwind']);
    grunt.registerTask('build-css', ['shell:npm_tailwind', 'cssmin', 'shell:sass']);
    grunt.registerTask('build-js', ['shell:sveltekit']);
    grunt.registerTask('build', ['build-css', 'build-js']);

};