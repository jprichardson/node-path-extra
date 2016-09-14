var path = require('../lib/path')
var assert = require('assert')

/* global describe, it */

describe('path', function () {
  describe('+ replaceExt()', function () {
    it('should replace the extension', function () {
      assert.equal(path.replaceExt('path/to/file.md', '.html')
      , 'path/to/file.html')
    })
  })

  describe('+ normalizeTrim()', function () {
    it('should normalize the path and trim a trailing slash', function () {
      assert.equal(path.normalizeTrim('/foo/bar//baz/asdf/quux/../')
      , '/foo/bar/baz/asdf')
    })
  })

  describe('+ base()', function () {
    it('should include extension when includeExt is true', function () {
      assert.equal(path.base('/foo/bar/baz/asdf/quux.ext', true)
      , 'quux.ext', true)
    })
    it('should not include extension when includeExt is false', function () {
      assert.equal(path.base('/foo/bar/baz/asdf/quux.ext', false)
      , 'quux')
    })
    it('should not include extension by default', function () {
      assert.equal(path.base('/foo/bar/baz/asdf/quux.ext')
      , 'quux')
    })
  })

  describe('+ path.sep', function () {
    it('should set path separator', function () {
      assert(path.sep)
    })
  })

  describe('+ path.delimiter', function () {
    it('should set path delimiter', function () {
      assert(path.delimiter)
    })
  })
})
