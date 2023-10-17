import * as express from "express";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
import * as helmet from "helmet";
import createServer from "./libs/express";
import { logger } from "../../libs/logger";
import { ECDH } from "crypto";

const app = express();
const json = express.json;
const urlencoded = express.urlencoded;

const server = ({ port, hostName }) =>
  createServer({
    json,
    urlencoded,
    handler: {},
    app,
    cors,
    compression,
    helmet,
    logger,
  }).server({ port, hostName });

export { server };
