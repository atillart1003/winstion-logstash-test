const Winston = require('winston');
const WinstonLogStash = require('winston3-logstash-transport');

const logger = Winston.createLogger();

logger.add(new WinstonLogStash({
    mode: 'udp',
    host: '127.0.0.1',
    port: 28777
}));
// console.log("Hello")
logger.error('Some Error');