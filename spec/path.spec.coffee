path = require('path-extra')
fs = require('fs')

describe 'path', ->

  it 'should return a temporary directory', ->
    tmpDir = path.tempdir()
    expect(tmpDir?).toBeTruthy()
    
    testFile = "TEST-path-ext-#{Date.now()}"
    testFile = path.join(tmpDir, testFile)

    testString = 'SOME STRING'

    fs.writeFileSync(testFile, testString)
    retString = fs.readFileSync(testFile).toString()

    expect(retString).toEqual(testString)

      