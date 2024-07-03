import { createLogger, format, transports } from "winston";

const { combine, timestamp, label, printf, colorize, errors } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

export const logger = createLogger({
  level: "info",
  format: combine(
    label({ label: "user-service" }),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    errors({ stack: true }),
    colorize({ level: true }),
    logFormat
  ),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new transports.Console({ level: "info" }),
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
  ],
});
