const { Idol, Branch } = require("../models");
const axios = require("axios");
const { Op } = require("sequelize");

class IdolController {
  static async showAll(req, res, next) {
    const { filter } = req.query;
        const paramQuerySQL = {
            include: [
                {
                    model: Branch,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                }
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            order: [['id', 'asc']]
        };

        // filtering by category
        if (filter !== '' && typeof filter !== 'undefined') {
            const query = filter.branch.split(',').map((item) => ({
                [Op.eq]: item,
            }));

            paramQuerySQL.where = {
                BranchId: { [Op.or]: query },
            };
        }
    try {
      const data = await Idol.findAll(paramQuerySQL);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async showIdolById(req, res, next) {
    try {
      let { id } = req.params;
      const data = await Idol.findOne({
        include: [
          {
            model: Branch,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        where: { id },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async showBranches(req, res, next) {
    try {
      const data = await Branch.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static idolSpotify(req, res, next) {
    let {spotifyId}= req.params
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/artist_singles/",
      params: { id: spotifyId , offset: "0", limit: "20" },
      headers: {
        "X-RapidAPI-Key": "37f62bd33cmshc44f509dac943b4p140114jsn4a30c69863c7",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        let songs = response.data.data.artist.discography.singles.items;
        res.status(200).json(songs);
      })
      .catch(function (error) {
        next(error);
      });
  }
  static idolYoutube(req, res, next) {
    let {youtubeId}= req.params
    const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/channel/videos/',
        params: {id: youtubeId, filter: 'streams_latest',hl: 'en', gl: 'US'},
        headers: {
          'X-RapidAPI-Key': '37f62bd33cmshc44f509dac943b4p140114jsn4a30c69863c7',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      };
      

    axios
      .request(options)
      .then(function (response) {
        let videos = response.data.contents
        res.status(200).json(videos);
      })
      .catch(function (error) {
        next(error);
      });
  }
  static idolLiveYoutube(req, res, next) {
    let {youtubeId}= req.params
    const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/channel/videos/',
        params: {id: youtubeId, filter: 'live_now',hl: 'en', gl: 'US'},
        headers: {
          'X-RapidAPI-Key': '37f62bd33cmshc44f509dac943b4p140114jsn4a30c69863c7',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      };
      

    axios
      .request(options)
      .then(function (response) {
        let videos = response.data.contents
        res.status(200).json(videos);
      })
      .catch(function (error) {
        next(error);
      });
  }
}

module.exports = IdolController;
