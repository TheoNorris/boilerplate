import * as dotenv from "dotenv";
dotenv.config();

import config from "./config";
import { server } from "./initializers/express";
import { logger } from "./libs/logger";

try {
  logger.info(`[${config.APP_NAME}] Bootstrapping micro service`);
  server({ port: config.NODE_PORT, hostname: config.NODE_HOSTNAME });
} catch (error) {
  logger.error(`[${config.APP_NAME}] caught exception: ${error.message}`);
}
