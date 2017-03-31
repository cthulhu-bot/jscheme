'use strict';

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fileRead = function fileRead(filePath) {
    return types.Box(filePath).map(function (filePath) {
        return fs.readFileSync(filePath, 'utf8');
    }).fold(function (fileContents) {
        return types.fileInputType(fileContents);
    });
};

module.exports = {
    fileRead: fileRead
};