export default function createServer({
  json,
  urlencoded,
  app,
  cors,
  compression,
  helmet,
  logger,
}) {
  return Object.freeze({ server });

  function server({ port, hostName, routes }) {
    app.use(helmet());
    app.options("*", cors({ credentials: true, origin: true }));
    app.use(cors());
    app.use(compression());
    app.use(json());
    app.use(urlencoded({ extended: true }));

    for (let route of routes) {
      app[route.method](`${route.path}`, route.component);
    }

    app.listen(port, hostName, () => {
      logger.info(`[EXPRESS] Server running at http://${hostName}:${port}/`);
    });
  }
}
