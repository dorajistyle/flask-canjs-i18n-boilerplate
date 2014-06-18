module.exports = function (grunt) {
    var static_path = '../static';

    // Project configuration.
    require('time-grunt')(grunt);
    grunt.initConfig({
//        pkg: grunt.file.readJSON('./package.json'),

    shell: {
      scsscompile:{
        command: 'python2 ../css.py '+static_path,
        options: {
            stdout: true
        }
      }
    },
    cancompile: {
        dist: {
            src: [static_path+'/views/**/*.mustache'],
            out: static_path+'/js/views.build.js',
            wrapper: 'define(["can/view/mustache"], function(can) { {{{content}}} });'
        }
    },
    watch: {
      run_mustache: {
        files: [static_path+'/views/**/*.mustache'],
        tasks: ['cancompile']
      },
      run_scss: {
            files: [static_path+'/scss/**/*.scss'],
            tasks: ['shell:scsscompile']
      },
        options: { nospawn: true, livereload: true }
    }
  });

  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('mustache', ['cancompile']);
  grunt.registerTask('scss', ['shell:scsscompile']);
  grunt.registerTask('static', ['cancompile','shell:scsscompile']);

  grunt.loadNpmTasks('can-compile');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
};