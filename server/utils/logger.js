import winston from "winston";

const logger = new (winston.Logger)({
    level: 'verbose',
    transports: [
        new (winston.transports.Console)({
            level: "debug"
        }),
        new (winston.transports.File)({
            filename: 'server.log',
            level: "debug"
        })
    ]
});

export default logger;