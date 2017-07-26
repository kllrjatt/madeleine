const config = require('config').knex;

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    eslint: {
      target: ['Gruntfile.js', 'client/**/*.js', 'db/**/*.js', 'server/**/*.js']
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: 'babel-core/register'
        },
        src: ['server/test/**/*.js', 'client/test/.setup.js', 'client/test/*.js']
      }
    },

    pgcreatedb: {
      default: {
        connection: {
          user: 'postgres',
          password: 'postgres',
          host: process.env.DB || config.connection.host,
          port: 5432,
          database: 'template1'
        },
        name: 'thesis_devel'
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-pg');

  grunt.registerTask('default', ['eslint']);
  grunt.registerTask('test', ['mochaTest']);
};
