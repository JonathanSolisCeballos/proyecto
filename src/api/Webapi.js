import axios from "axios";

export default class Webapi {
  currentTime = undefined;
  constructor() {
    this.getCurrentDate();
  }
  async getCurrentDate() {
    try {
      this.currentTime = await axios.get(
        "http://worldtimeapi.org/api/timezone/America/Mexico_City"
      );
      return this.currentTime;
    } catch (err) {
      console.log(err);
    }
  }
}
