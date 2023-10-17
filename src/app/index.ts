import * as dotenv from "dotenv";
dotenv.config();

import { server } from "./initializers/express";
import { logger } from "./libs/logger";

const name = process.env.NAME;
const hostName = process.env.NODE_HOSTNAME;
const port = process.env.NODE_PORT;

try {
  logger.info(`[${name}] Bootstrapping micro service`);
  server({ port, hostName });
} catch (error) {
  logger.error(`[${name}] caught exception: ${error.message}`);
}
