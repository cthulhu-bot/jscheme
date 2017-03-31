import * as fs from 'fs';
import * as types from './types';

const fileRead = (filePath) => {
    return types.Box(filePath)
	.map(filePath => fs.readFileSync(filePath, 'utf8'))
        .fold(fileContents => types.fileInputType(fileContents));
};

module.exports = {
    fileRead,
};
