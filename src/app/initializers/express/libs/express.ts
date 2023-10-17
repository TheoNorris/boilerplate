export default function createServer({
  json,
  urlencoded,
  app,
  handler,
  cors,
  compression,
  helmet,
  logger,
}) {
  return Object.freeze({ server });

  function server({ port, hostName }) {
    const routes = handler.routes;
    app.use(helmet());
    app.options("*", cors({ credentials: true, origin: true }));
    app.use(cors());
    app.use(compression());
    app.use(json());
    app.use(urlencoded({ extended: true }));

    app.get("/", (req, res) => {
      res.json({ data: "Hello world!" });
    });

    app.listen(port, hostName, () => {
      logger.info(`[EXPRESS] Server running at http://${hostName}:${port}/`);
    });
  }
}
