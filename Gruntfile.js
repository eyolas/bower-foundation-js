/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      version: '<%= pkg.version %>',
      banner: 
        '/*\n' + 
        ' * Foundation Responsive Library v<%= pkg.version %>\n' + 
        ' * http://foundation.zurb.com\n' + 
        ' * Copyright 2013, ZURB\n' + 
        ' * Free to use under the MIT license.\n' + 
        ' * http://www.opensource.org/licenses/mit-license.php\n' + 
        ' */\n',
    },

    concat: {
      options: {
        banner: "<%= meta.banner %>"
      },
      build: {
        src: [
          'foundation/foundation.js',
          'foundation/foundation.alerts.js',
          'foundation/foundation.clearing.js',
          'foundation/foundation.cookie.js',
          'foundation/foundation.dropdown.js',
          'foundation/foundation.forms.js',
          'foundation/foundation.joyride.js',
          'foundation/foundation.magellan.js',
          'foundation/foundation.orbit.js',
          'foundation/foundation.reveal.js',
          'foundation/foundation.section.js',
          'foundation/foundation.tooltips.js',
          'foundation/foundation.topbar.js',
          'foundation/foundation.interchange.js',
          'foundation/foundation.placeholder.js',
          'foundation/foundation.abide.js',
        ],
        dest: 'lib/foundation.js'
      }
    },

    uglify : {
      bundle : {
        src : 'lib/foundation.js',
        dest : 'lib/foundation.min.js',
        options : {
          sourceMap : 'lib/foundation.map',
          sourceMappingURL : 'foundation.map',
          sourceMapPrefix : 1
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  

  grunt.registerTask('default', ['concat', 'uglify']);

};
