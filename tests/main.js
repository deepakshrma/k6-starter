import { sleep } from "k6";
import getAllUsersTest from "./getAllUsers.test.js";
import userByIdTest from "./userById.test.js";

export default function () {
  getAllUsersTest();
  sleep(1);
  userByIdTest();
}
