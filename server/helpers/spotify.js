const axios = require("axios");


const spotifyFunction = async (spotifyId) => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/artist_singles/",
      params: { id: spotifyId, offset: "0", limit: "20" },
      headers: {
        "X-RapidAPI-Key": "37f62bd33cmshc44f509dac943b4p140114jsn4a30c69863c7",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };
    const {data} = await axios
    .request(options)
    return data.data.artist.discography.singles.items
}

module.exports = spotifyFunction;