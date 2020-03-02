const winston = require('winston');
require('winston-logstash');

winston.add(winston.transports.Logstash,
    {
        port: 5601,
        host: 'localhost',
        ssl_enable: true,
        max_connect_retries: -1,
    }
);

winston.error('This is a test error log message', { custom: 'my custom field', Environment: 'local' });
winston.log("This is a standard log message");
winston.info("This is an info log message");
winston.warn("This is a warning log message");