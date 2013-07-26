// grunt-docco
// https://github.com/DavidSouther/grunt-docco
//
// Copyright (c) 2012 David Souther
// Licensed under the MIT license.

module.exports = function(grunt) {
  "use strict";
  grunt.registerMultiTask('docco', 'Docco processor.', function() {
    var docco = require('docco'),
      params = this.data.options || {},
      done = this.async();

    params.args = grunt.file.expand(this.data.src);
    if (this.data.dest) {
      params.output = this.data.dest;
    }
    docco.document(params,done);
  });
};
