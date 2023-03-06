import winston from 'winston';

// =========================== Set up logger ============================================
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'your-service-name' },
    transports: [
      //
      // - Write to all logs with level `info` and below to `quick-start-combined.log`.
      // - Write all logs error (and below) to `quick-start-error.log`.
      //
      new winston.transports.Console(),
    ],
  });
  
  export default function logger()
  