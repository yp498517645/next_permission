import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

export class User {
  /**
   * 这是注册
   * @param username
   * @param password
   * @returns
   */
  async usrRegister(username: string, password: string) {
    try {
      const res = await axios.post("/users/register", {
        username,
        password,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async usrLogin(username: string, password: string) {
    if (username !== "admin") {
      try {
        const res = await axios.post("/users/login", {
          username,
          password,
        });
        return res;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios.post("/users/adminlogin", {
          username,
          password,
        });
        return res;
      } catch (error) {
        console.log(error);
      }
    }
  }

  async findAllUsers() {
    try {
      const res = await axios.get("/users/findAllUser");
      return res;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async deleteOneUser(username: string) {
    try {
      const res = await axios.post("/users/delete", { username });
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}
