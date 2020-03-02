'use strict';
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'debug',
    format: format.combine(format.colorize(), format.simple()),
    transports: [new transports.Console()]
});

logger.error('error message');
logger.warn('warn message');
logger.info('info message');
logger.verbose('verbose message');
logger.debug('debug message');
logger.silly('silly message');