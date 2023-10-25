import { log } from "console";

export default function makeReadFromFile({ readFile, logger }) {
  return Object.freeze({ readFromFile });

  async function readFromFile({ filePath, fileName }) {
    try {
      logger.info(
        `[DATA-ACCESS][READ-FROM-FILE] Reading from ${fileName} - START`
      );
      const content = await readFile(filePath, { encoding: "utf8" });
      logger.info(
        `[DATA-ACCESS][READ-FROM-FILE] reading from ${fileName} - DONE`
      );
      return content && content.length ? JSON.parse(content) : [];
    } catch (e) {
      logger.info(`[DATA-ACCESS][READ-FROM-FILE] ${fileName} Does not exist`);
      if (e.message.includes("no such file or directory")) return [];
      throw e;
    }
  }
}
