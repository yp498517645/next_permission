import axios from "axios";
import { registerType } from "../register/index";
axios.defaults.baseURL = "http://localhost:3000";

export class User {
  /**
   * 这是注册
   * @param username
   * @param password
   * @param isAdmin
   * @returns
   */
  async usrRegister(username: string, password: string, isAdmin: boolean) {
    try {
      const res = await axios.post("/users/register", {
        username,
        password,
        isAdmin: false,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async usrLogin(username: string, password: string) {
    try {
      const res = await axios.post("/users/login", {
        username,
        password,
      });
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}
