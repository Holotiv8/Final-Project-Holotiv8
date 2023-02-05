const axios = require("axios");

const youtubeFunction = async (youtubeId) => {
  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/channel/videos/",
    params: { id: youtubeId, filter: "streams_latest", hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": "4d7ec34579msh01e41d823cb9416p13d6e6jsne35744429b63",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };
  const { data } = await axios.request(options);
  return data.contents;
};

module.exports = youtubeFunction;
