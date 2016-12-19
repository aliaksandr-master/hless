"use strict";

var jitGrunt = require('jit-grunt');

module.exports = require('grunto')(function(grunt) {
    jitGrunt(grunt);

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
