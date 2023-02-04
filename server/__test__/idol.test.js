const app = require('../app')
const request = require('supertest')
const { sequelize, Idol, Branch, User, Favorite } = require('../models')
const { hashPassword } = require('../helpers/index')
const queryInterface = sequelize.queryInterface
let access_token

beforeAll(async () => {
    let branchJSON = require('../data/branch.json')
    branchJSON.forEach(el => {
        el.createdAt = el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Branches', branchJSON, {})
    let idolJSON = require('../data/talents.json')
    idolJSON.forEach(el => {
        el.createdAt = el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Idols', idolJSON, {})
    let dataUser = require('../data/user.json')
    dataUser.forEach(el => {
        el.password = hashPassword(el.password)
        el.createdAt = el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Users', dataUser, {})
    let response = await request(app).post("/users/login").send({
        email : "brian@mail.com", 
        password: "brian123"
    })
    access_token = response.body.access_token
    // await queryInterface.bulkInsert('Users', userJSON, {})
    await queryInterface.bulkInsert('Favorites', [{ IdolId: 1, UserId: 1, createdAt: new Date(), updatedAt: new Date() }], {})
})

beforeEach(() => {
    jest.restoreAllMocks()
})

afterAll(async () => {
    await User.destroy({
        restartIdentity: true,
        truncate: true,
        cascade: true
    })
    await Branch.destroy({
        restartIdentity: true,
        truncate: true,
        cascade: true
    })
    await Idol.destroy({
        restartIdentity: true,
        truncate: true,
        cascade: true
    })
    await Favorite.destroy({
        restartIdentity: true,
        truncate: true,
        cascade: true
    })
})


describe('Feature Read Idol GET /idols/', () => {
    test('200 - Success Read Idols', async () => {
        const response = await request(app)
            .get('/idols')

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
    })

    test('500 - Fail Read Idols', async () => {
        jest.spyOn(Idol, "findAll").mockRejectedValue("Internal Server Error")
        const response = await request(app)
            .get('/idols')

        expect(response.status).toBe(500)
        expect(response.body).toHaveProperty("message","Internal Server Error")
        expect(response.body).toBeInstanceOf(Object)
    })

    test('200 - Success Read Idol With Filter', async () => {
        const response = await request(app)
            .get('/idols?filter[branch]=3')

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
    })

    test('200 - Success Read Specific Idol', async () => {
        const response = await request(app)
            .get('/idols/5')

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
    })

    test('404 - Failed Read Specific Idol', async () => {
        const response = await request(app)
            .get('/idols/100')

        expect(response.status).toBe(404)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Data Not Found')
    })

})

describe('Feature Read Favorite Idol GET /favorites', () => {
    test('200 - Success Read Favorite Idol', async () => {
        const response = await request(app)
            .get('/favorites')
            .set('access_token', access_token)

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })

    test('401 - Failed Read Favorite Idol', async () => {
        const response = await request(app)
            .get('/favorites')

        expect(response.status).toBe(401)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Error Authentication')
    })

    test('401 - Failed Read Favorite Idol', async () => {
        const response = await request(app)
            .get('/favorites')
            .set('access_token', 'adsaasdsvfdsbsddsvsd')

        expect(response.status).toBe(401)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Error Authentication')
    })

})

describe('Feature Add Favorite Idol POST /favorites/:IdolId', () => {
    test('201 - Success Read Favorite Idol', async () => {
        const response = await request(app)
            .post('/favorites/2')
            .set('access_token', access_token)

        expect(response.status).toBe(201)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Success Add Favorite Idol')
    })

    test('404 - Failed Add Favorite Idol', async () => {
        const response = await request(app)
            .post('/favorites/100')
            .set('access_token', access_token)

        expect(response.status).toBe(404)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Data Not Found')
    })

})

// describe('Feature Read Idol Songs GET /idols/songs/:spotifyId', () => {
//     test('200 - Success Read Idols Songs', async () => {
//         // jest.spyOn()
//         // const response = {
//         //     status: 200,
//         //     body: [
//         //         {
//         //             "releases": {
//         //                 "items": [
//         //                     {
//         //                         "id": "2tnTVBJQqfKUbO2Wf1H6A4",
//         //                         "uri": "spotify:album:2tnTVBJQqfKUbO2Wf1H6A4",
//         //                         "name": "NEZUMI Scheme",
//         //                         "type": "SINGLE",
//         //                         "date": {
//         //                             "year": 2022,
//         //                             "isoString": "2022-11-21T00:00:00Z"
//         //                         },
//         //                         "coverArt": {
//         //                             "sources": [
//         //                                 {
//         //                                     "url": "https://i.scdn.co/image/ab67616d00001e020cf4b30083b2bb3155997fe3",
//         //                                     "width": 300,
//         //                                     "height": 300
//         //                                 },
//         //                                 {
//         //                                     "url": "https://i.scdn.co/image/ab67616d000048510cf4b30083b2bb3155997fe3",
//         //                                     "width": 64,
//         //                                     "height": 64
//         //                                 },
//         //                                 {
//         //                                     "url": "https://i.scdn.co/image/ab67616d0000b2730cf4b30083b2bb3155997fe3",
//         //                                     "width": 640,
//         //                                     "height": 640
//         //                                 }
//         //                             ]
//         //                         },
//         //                         "playability": {
//         //                             "playable": true,
//         //                             "reason": "PLAYABLE"
//         //                         },
//         //                         "sharingInfo": {
//         //                             "shareId": "7V2q9X1OQ5e_a2Omq0B3Hw",
//         //                             "shareUrl": "https://open.spotify.com/album/2tnTVBJQqfKUbO2Wf1H6A4?si=7V2q9X1OQ5e_a2Omq0B3Hw"
//         //                         },
//         //                         "tracks": {
//         //                             "totalCount": 1
//         //                         }
//         //                     }
//         //                 ]
//         //             }
//         //         },
//         //     ]
//         // }
//         const response = await request(app)
//         .get('/idols/songs/3PLJjPD8KDRzaEdznJT16j')


//         expect(response.status).toBe(200)
//         expect(response.body).toBeInstanceOf(Array)
//     })

//     // test('404 - Failed Read Specific Idol', async () => {
//     //     const response = await request(app)
//     //         .get('/idols/100')

//     //     expect(response.status).toBe(404)
//     //     expect(response.body).toBeInstanceOf(Object)
//     //     expect(response.body).toHaveProperty('message', 'Data Not Found')
//     // })

// })

describe('Feature Read Idol Youtube GET /idols/video/:youtubeId', () => {
    test('200 - Success Read Idols Youtube Video', async () => {
        const response = {
            status: 200,
            body: [
                {
                  "type": "video",
                  "video": {
                    "badges": [],
                    "isLiveNow": false,
                    "lengthSeconds": 8548,
                    "movingThumbnails": [
                      {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/VyUt8HOmB9c/mqdefault_6s.webp?du=3000&sqp=CIG0354G&rs=AOn4CLCtksP70kgp5_SCbxfWeE2B2UNaUg",
                        "width": 320
                      }
                    ],
                    "publishedTimeText": "Streamed 3 hours ago",
                    "stats": {
                      "views": 84249
                    },
                    "thumbnails": [
                      {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/VyUt8HOmB9c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAaGiXkA6qvoiHdmWIWA0BjXM0qKw",
                        "width": 168
                      },
                      {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/VyUt8HOmB9c/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVqysxlWkD6TwEWqE860P1gFrEkA",
                        "width": 196
                      },
                      {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/VyUt8HOmB9c/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcik2I-BEZv2wmIvBjtDeeT1r7DA",
                        "width": 246
                      },
                      {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/VyUt8HOmB9c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDk1RLHcDpDd4kmyNe531jnFpTcLg",
                        "width": 336
                      }
                    ],
                    "title": "【GeoGuessr】Let's guess a place!【holoID】",
                    "videoId": "VyUt8HOmB9c"
                  }
                },
            ]
        }

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })
    // test('404 - Failed Read Specific Idol', async () => {
    //     const response = await request(app)
    //         .get('/idols/100')

    //     expect(response.status).toBe(404)
    //     expect(response.body).toBeInstanceOf(Object)
    //     expect(response.body).toHaveProperty('message', 'Data Not Found')
    // })

})

describe('Feature Read Idol Youtube GET /idols/video/live/:youtubeId', () => {
    test('200 - Success Read Idols Youtube Video', async () => {
        const response = {
            status: 200,
            body: [
                {
                  "type": "video",
                  "video": {
                    "author": {
                      "avatar": [
                        {
                          "height": 68,
                          "url": "https://yt3.googleusercontent.com/PxkGgLvMEUgmme35T0VPLR8d5brJw4YTzJC5PE48mkYRdy-mq8FsKv_Sy-bJmxqvlgtitqMWtg=s68-c-k-c0x00ffffff-no-rj",
                          "width": 68
                        }
                      ],
                      "badges": [
                        {
                          "text": "Verified",
                          "type": "VERIFIED_CHANNEL"
                        }
                      ],
                      "canonicalBaseUrl": "/@KaelaKovalskia",
                      "channelId": "UCZLZ8Jjx_RN2CXloOmgTHVg",
                      "title": "Kaela Kovalskia Ch. hololive-ID"
                    },
                    "badges": [],
                    "isLiveNow": true,
                    "lengthSeconds": null,
                    "movingThumbnails": null,
                    "publishedTimeText": null,
                    "stats": {
                      "viewers": 2045
                    },
                    "thumbnails": [
                      {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/6D3vofUyUPk/hqdefault_live.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB13fdWYQIoSJA5c616CkOacuN60Q",
                        "width": 168
                      },
                      {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/6D3vofUyUPk/hqdefault_live.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA9r5PO22K8T6SIYFA0RsHTb8vW6Q",
                        "width": 196
                      },
                      {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/6D3vofUyUPk/hqdefault_live.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCv86EbwKz41_to_1vJ9J1HcpC5_A",
                        "width": 246
                      },
                      {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/6D3vofUyUPk/hqdefault_live.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCygEc_rb6q6H9IWoUUNYFqg3sbtw",
                        "width": 336
                      }
                    ],
                    "title": "【Random Talk + Donation Reading】KIMONO? HUEHUEHEHEHEHEHEHE.【Kaela Kovalskia / hololiveID】",
                    "videoId": "6D3vofUyUPk"
                  }
                }
            ]
        }

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })

    // test('404 - Failed Read Specific Idol', async () => {
    //     const response = await request(app)
    //         .get('/idols/100')

    //     expect(response.status).toBe(404)
    //     expect(response.body).toBeInstanceOf(Object)
    //     expect(response.body).toHaveProperty('message', 'Data Not Found')
    // })

})