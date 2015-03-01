var path = require('../lib/path')
var fs = require('fs')
var assert = require('assert')

/* global describe, it */

describe('path', function () {
  describe('+ tempdir()', function () {
    it('should return a temporary directory', function () {
      var tmpDir = path.tempdir()
      assert(tmpDir)

      var testFile = 'TEST-path-ext-#{Date.now()}'
      testFile = path.join(tmpDir, testFile)

      var testString = 'SOME STRING'

      fs.writeFileSync(testFile, testString)
      var retString = fs.readFileSync(testFile).toString()

      assert(retString === testString)
    })
  })

  describe('+ homedir()', function () {
    it('should return the users homde directory', function () {
      var homeDir = path.homedir()
      assert(homeDir)
    })
  })

  describe('+ path.sep', function () {
    it('should set path separator', function () {
      assert(path.sep)
    })
  })
})
