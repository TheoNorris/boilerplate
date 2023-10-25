import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import config from "../../config";
import { logger } from "../../libs/logger";
import makeCheckDir from "./check-dir";
import makeWriteToFile from "./write-to-file";
import makeReadFromFile from "./read-from-file";

const checkDir = ({ fileDirPath, fileDirName }) =>
  makeCheckDir({ access, mkdir, logger }).checkDir({
    fileDirPath,
    fileDirName,
  });

const writeToFile = ({ content, filePath, fileName }) =>
  makeWriteToFile({ writeFile, logger }).writeToFile({
    content,
    filePath,
    fileName,
  });

const readFromFile = ({ filePath, fileName }) =>
  makeReadFromFile({ readFile, logger }).readFromFile({ filePath, fileName });

export { checkDir, writeToFile, readFromFile };
