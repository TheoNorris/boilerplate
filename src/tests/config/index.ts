import * as path from "path";
const APP_NAME = "AUTH-MS-TEST";
const NODE_ENV = "test";
const FILE_FOLDER_NAME = "data";
const FILE_FOLDER_PATH = path.join(__dirname, "/data/");
const FILE_DB_NAME = "users.json";
const FILE_DB_PATH = `${FILE_FOLDER_PATH}/${FILE_DB_NAME}`;
const ERROR_MSG = {
  post: {
    MISSING_PARAMETER: "missing parameter",
    EXISTING_USER: "user already exists",
  },
};
const TEST_DATA = {
  user1: {
    username: "user1",
    password: "password1",
  },
  user2: {
    username: "user2",
    password: "password2",
  },
};

export default Object.freeze({
  APP_NAME,
  ERROR_MSG,
  NODE_ENV,
  FILE_FOLDER_NAME,
  FILE_FOLDER_PATH,
  FILE_DB_NAME,
  FILE_DB_PATH,
  TEST_DATA,
});
