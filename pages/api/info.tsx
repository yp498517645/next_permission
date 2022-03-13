import axios from "axios"
axios.defaults.baseURL = "http://localhost:3000";

export class Info {
  async findAllInfo(){
    try {
      const res = await axios.get("/users/findinfo");
      console.log("res",res);
      return res
      
    } catch (error) {
      console.log(error)
    }
  }
}