const axios = require("axios");


const youtubeFunction = async (youtubeId) => {
  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/channel/videos/",
    params: { id: youtubeId, filter: "streams_latest", hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": "37f62bd33cmshc44f509dac943b4p140114jsn4a30c69863c7",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };
    const {data} = await axios
    .request(options)
    return data.contents
}

module.exports = youtubeFunction