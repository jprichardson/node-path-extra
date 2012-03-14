(function() {
  var os, path;

  os = require('os');

  path = require('path');

  if (path.tempdir == null) {
    path.tempdir = function() {
      var ost;
      ost = os.type().toLowerCase();
      if (ost.indexOf('lin') === 0) {
        return '/tmp';
      } else if (ost.indexOf('darwin') === 0) {
        return '/tmp';
      } else if (ost.indexOf('win') === 0) {
        return process.env['TEMP'];
      } else {
        return null;
      }
    };
  }

  module.exports = path;

}).call(this);
