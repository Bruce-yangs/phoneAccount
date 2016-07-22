module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
   // pkg: grunt.file.readJSON('package.json'),
    concat: {
      build: {
        src:['js/binding.js','js/countDown.js','js/dialog.js','js/imgCode.js','js/indexForm.js','js/js.js','js/tab.js'],
        dest: 'build/dist.js'
      }
    },
    uglify:{
      myCompress:{
        src:'build/dist.js',
        dest:'public/compressed.js'
      }
    }/*,
    clean:['public/*','build/*']*/
  });

  // 引用所以来的插件 Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  //注册我们的配置的任务到node下的grunt    Default task(s).
  grunt.registerTask('default',['concat','uglify']);

};