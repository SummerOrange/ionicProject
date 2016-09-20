module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat:{  
			dist:{  
				src:[  
					'../../../www/js/*.js'  
				],  
				dest:'../../../www/build/appone.build.all.js'  
			}  
		},
		jshint:{
			files:'../../../www/js/*.js'
		},
		uglify: {
			options: {
			  banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
			  src: '../../../www/build/appone.build.all.js',
			  dest: '../../../www/build/appone.build.all.min.js'
			}
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint']
		},
		qunit: {
		  files: ['../../../www/index.html']
		},		
	});
    
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	  
	grunt.registerTask('default', ['concat','jshint']); 
	grunt.registerTask('watchTest', ['watch']); 
	grunt.registerTask('all', ['concat','jshint','uglify','watch']); 
}