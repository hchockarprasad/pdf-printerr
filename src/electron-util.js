'use strict';

const isElectron = 'electron' in process.versions;

const isUsingAsar = isElectron && process.mainModule && process.mainModule.filename.includes('app.asar');

export const fixPathForAsarUnpack = (path) => {
  return isUsingAsar ? path.replace('app.asar', 'app.asar.unpacked') : path;
};
