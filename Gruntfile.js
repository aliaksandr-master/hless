"use strict";

module.exports = require('grunto')(function(grunt) {

	return {
		less: {
			compile: {
				files: [
					{
						expand: true,
						cwd: 'test',
						dest: '.tmp',
						src: '**/*.less',
						ext: '.css'
					}
				]
			}
		}
	};
});
