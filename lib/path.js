var path = require('path')

var p = {}

Object.keys(path).forEach(function (key) {
  p[key] = path[key]
})

path = p

path.replaceExt = require('replace-ext')

path.normalizeTrim = function (str) {
  var escapeRegexp = require('escape-string-regexp')
  return path.normalize(str).replace(new RegExp(escapeRegexp(path.sep) + '$'), '')
}

path.base = function (str, includeExt) {
  if (includeExt) {
    return path.basename(str)
  } else {
    return path.basename(str, path.extname(str))
  }
}

path.removeExt = function (str) {
  return str.slice(0, -path.extname(str).length)
}

module.exports = path
