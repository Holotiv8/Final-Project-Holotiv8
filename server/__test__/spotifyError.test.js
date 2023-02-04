const app = require('../app')
const request = require('supertest')
const { sequelize, Idol, Branch, User, Favorite } = require('../models')
const { hashPassword } = require('../helpers/index')
const queryInterface = sequelize.queryInterface
let access_token

jest.mock("../helpers/spotify", () => {
    return jest.fn((_)=>{
        throw "error bos"
    })
})

describe('Feature Read Idol Songs GET /idols/songs/:spotifyId', () => {

    test('500 - Failed Read Spotify Idol', async () => {
        const response = await request(app)
            .get('/idols/songs/3PLJjPD8KDRzaEdznJT16j')

        expect(response.status).toBe(500)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Internal Server Error')
    })
})
