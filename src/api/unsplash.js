import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID c8eb10359ca3950292992e117d638b17e0cb9889e215b2f37a39f860f2d941cb"
  }
});
