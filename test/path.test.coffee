path = require('../lib/path')
fs = require('fs')
assert = require('assert')

T = (val) -> assert(val)

describe 'path', ->
  describe '+ tempdir()', ->
    it 'should return a temporary directory', ->
      tmpDir = path.tempdir()
      T tmpDir?
      
      testFile = "TEST-path-ext-#{Date.now()}"
      testFile = path.join(tmpDir, testFile)

      testString = 'SOME STRING'

      fs.writeFileSync(testFile, testString)
      retString = fs.readFileSync(testFile).toString()

      T retString is testString

      