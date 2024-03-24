import axios from "axios";

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

const options = {
  params: { geo: "US", lang: "en" },
  headers: {
    "X-RapidAPI-Key": "9484010cecmsh0de90a11f54eceap1c8684jsn927faaa39869",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

export const getData = async (path) => {
  try {
    const response = await axios.get(path, options);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
