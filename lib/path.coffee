os = require('os')

tempdir = ->
  ost = os.type().toLowerCase()
  if ost.indexOf('lin') is 0
    return '/tmp'
  else if ost.indexOf('darwin') is 0
    return '/tmp'
  else if ost.indexOf('win') is 0
    return process.env['TEMP']
  else
    return null;

module.exports.tempdir = tempdir