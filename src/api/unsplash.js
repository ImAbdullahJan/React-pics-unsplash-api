import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 14da023b49fc635f030c18689ab7ef94454b0a6e8db4e81f2e7e5deab2ed54a9"
  }
});
