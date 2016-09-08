Node.js: path-extra
===================

This module simply modifies the Node.js 'path' object with extra methods. It is a drop in replacement for the `path` module.



Installation
------------

    $ npm install path-extra



Usage
-----

```javascript
var path = require('path-extra');
```

You can still use all of the vanilla Node.js path methods.

## Methods:

### `tempdir()`

Returns a temporary directory that is operating system specific.

Example on Linux:

```js
path.tempdir()
// => /tmp
```

### `homedir()`

Returns the user's home directory

Example on Linux:

```js
path.homedir()
// => /home/username
```

### `datadir(appname)`

Returns a directory to store data in for an app with the given name.

Example on Linux:

```js
path.datadir('sampleapp')
// => /home/ryan/.config/sampleapp
```

### `replaceExt(filePath, extension)`

Replaces the extension from path with extension and returns the updated path string.

From the module [`replace-ext`](https://github.com/gulpjs/replace-ext).

Example:

```js
path.replaceExt('dir/file.md', '.html')
// => 'dir/file.html'
```

### `normalizeTrim(filePath)`

A `path.normalize()` that trims trailing slashes. Useful for comparing file paths.

Example:

```js
path.normalize('/foo/bar//baz/asdf/quux/../')
// => /foo/bar/baz/asdf/
path.normalizeTrim('/foo/bar//baz/asdf/quux/../')
// => /foo/bar/baz/asdf
```

### `base(filePath, [includeExt])`

A smart wrapper for `path.basename()`.

- When `includeExt` is `false`, returns the basename without an extension (`path.basename(filePath, path.extname(filePath))`).
- When `includeExt` is `true`, works like `path.basename(filePath)`.
- `includeExt` is `false` by default.

Example:

```js
path.base('path/to/file.md')
// => file
path.base('path/to/file.md', false)
// => file
path.base('path/to/file.md', true)
// => file.md
```

License
-------

(The MIT License)

Copyright (c) 2011-2015 JP Richardson
