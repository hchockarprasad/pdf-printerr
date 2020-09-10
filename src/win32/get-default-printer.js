'use strict';

const execAsync = require('../execAsync');

const getDefaultPrinter = () => {
  const stdoutHandler = (stdout) => {
    const printers = stdout
      .trim()
      .split(/\s*[\r\n]+/)
      .slice(1);
    const defaultPrinter = printers.filter((e) => e.indexOf('TRUE') === 0);
    if (defaultPrinter.length === 0) {
      return '';
    }
    return defaultPrinter[0].replace(/TRUE\s+/, '');
  };

  return execAsync('wmic', ['printer', 'get', 'name,default'], stdoutHandler);
};

module.exports = getDefaultPrinter;
