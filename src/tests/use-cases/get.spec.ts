import { expect } from "chai";
import createGet from "../../app/component/use-cases/get";
import { after, before, describe } from "mocha";
import * as path from "path";
import { logger } from "../../app/libs/logger";
import config from "../config";
import { access, mkdir, writeFile, readFile, rm } from "node:fs/promises";

const get = (params) =>
  createGet({
    access,
    readFile,
    logger,
  }).get({
    params,
    filePath: config.FILE_DB_PATH,
    filename: config.FILE_DB_NAME,
  });

describe("get", () => {
  before(async () => {
    const usersObj = config.TEST_DATA;
    const users = [usersObj.user1, usersObj.user2];
    await mkdir(config.FILE_FOLDER_PATH);
    await writeFile(config.FILE_DB_PATH, JSON.stringify(users));
  });

  after(async () => rm(config.FILE_DB_PATH, { recursive: true }));

  it("should return a list of users", async () => {
    const results = await get({ params: undefined });
    expect(results.length).to.equal(2);
  });
});
