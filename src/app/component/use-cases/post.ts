export default function createPost({
  makeInputObj,
  checkDir,
  writeToFile,
  readFromFile,
  logger,
}) {
  return Object.freeze({ post });

  async function post({
    params,
    filename,
    fileDirPath,
    fileDirName,
    filePath,
    errorMsgs,
  }) {
    let user;
    try {
      logger.info(`[POST][USE-CASE] Inserting object process - START!`);
      const userFactory = makeInputObj({ params });

      user = {
        username: userFactory.username(),
        password: userFactory.password(),
        created: userFactory.created(),
        modified: userFactory.modified(),
      };

      await checkDir({ fileDirPath, fileDirName });
      const content = await readFromFile({ filePath, filename });
      const duplicate = content.filter((el) => el.username === user.username);

      if (duplicate.length) throw new Error(errorMsgs.EXISTING_USER);
      content.push(user);
      await writeToFile({ filePath, filename, content });
      logger.info(`[POST][USE-CASE] iserting object process - DONE!`);
      return user;
    } catch (e) {
      logger.info("[POST][USE-CASE] Inserting object process - DONE!");
      throw e;
    }
  }
}
//     try {
//       if (params.username === undefined || params.password === undefined)
//         throw new Error(errorMsgs.NO_DATA);

//       logger.info(`[USE_CASE][POST] Inserting user to ${filename} - START!`);
//       await access(filePath);

//       logger.info(`[USE_CASE][POST] Reading file ${filename} - START!`);
//       const fileContents = await readFile(filePath, { encoding: "utf8" });
//       const users = JSON.parse(fileContents);
//       logger.info(`[USE_CASE][POST] reading file ${filename} - DONE!`);

//       logger.info(`[USE_CASE][POST] Validating params - START!`);

//       const existingUser = users.filter(
//         (user) => user.username === params.username
//       );
//       if (existingUser.length) throw new Error(errorMsgs.EXISTING_USER);
//       logger.info(`[USE_CASE][POST] validating params - DONE`);

//       logger.info(`[USE_CASE][POST] writing file ${filename} - START!`);
//       users.push(params);
//       await writeFile(filePath, JSON.stringify(users));
//       logger.info(`[USE_CASE][POST] writing file ${filename} - DONE!`);

//       logger.info(`[USE_CASE][POST] inserting user to ${filename} - DONE`);
//       return params;
//     } catch (e) {
//       if (
//         e.message === errorMsgs.NO_DATA ||
//         e.message === errorMsgs.EXISTING_USER
//       ) {
//         throw e.message;
//       }
//       logger.info(`[USE_CASE][POST] Creating directory ${fileDirName} - START`);
//       await mkdir(fileDirPath);
//       logger.info(`[USE_CASE][POST] Creating directory ${fileDirName} - DONE`);

//       logger.info(
//         `[USE_CASE][POST] Creating and writing to file ${filename} - START`
//       );
//       await writeFile(filePath, JSON.stringify([params]));
//       logger.info(
//         `[USE_CASE][POST] Creating and writing to file ${filename} - DONE`
//       );
//       logger.info(`[USE_CASE][POST] inserting user to ${filename} - DONE!`);
//       return params;
//     }
//   }
// }
