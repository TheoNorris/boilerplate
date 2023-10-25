export default function createWriteToFile({ writeFile, logger }) {
  return Object.freeze({ writeToFile });
  async function writeToFile({ content, filePath, fileName }) {
    try {
      logger.info(
        `[DATA-ACCESS][WRITE-TO-FILE] Writing to ${fileName} - START`
      );
      const newContent = JSON.stringify(content);
      await writeFile(filePath, newContent);
      logger.info(`[DATA-ACCESS][WRITE-TO-FILE] Writing to ${fileName} - END`);
      return;
    } catch (e) {
      throw e;
    }
  }
}
