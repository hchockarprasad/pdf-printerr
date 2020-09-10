'use strict';

const execAsync = require('../execAsync');

const getPrinters = () => {
  const stdoutHandler = (stdout) =>
    stdout
      .trim()
      .split(/\s*[\r\n]+/)
      .slice(1);
  return execAsync('wmic', ['printer', 'get', 'name'], stdoutHandler);
};

module.exports = getPrinters;
