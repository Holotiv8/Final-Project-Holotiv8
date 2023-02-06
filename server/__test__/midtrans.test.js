const app = require('../app')
const request = require('supertest')
const { sequelize, User } = require('../models')
const queryInterface = sequelize.queryInterface
const { hashPassword } = require('../helpers/index')
let access_token


beforeAll(async () => {
    let dataUser = require('../data/user.json')
    dataUser.forEach(el => {
        el.password = hashPassword(el.password)
        el.createdAt = el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert("Users", dataUser, {})
    let response = await request(app).post("/users/login").send({
        email : "brian@mail.com", 
        password: "brian123"
    })
    access_token = response.body.access_token
})

afterAll(async () => {
    await User.destroy({
        restartIdentity: true,
        truncate: true,
        cascade: true
    })
})



jest.mock("../helpers/payment", () => {
    return jest.fn((_)=>{
        return {
            "token": "4628df68-a6fd-49f4-a62f-90c097c894b2",
            "redirect_url": "https://app.sandbox.midtrans.com/snap/v3/redirection/4628df68-a6fd-49f4-a62f-90c097c894b2"
        }
    })
})

describe('Feature Generate Token Midtrans /payments', () => {
    test('200 - Success Generate Token Midtrans', async () => {

        const response = await request(app)
        .post('/payments')
        .set('access_token', access_token)
        

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
    })

    test('404 - Already Subscribe',async()=>{
        const response = await request(app)
        .patch('/payments').set('access_token',access_token)

    expect(response.status).toBe(404)
    // expect(response.body).toHaveProperty("message","You already a subscriber")
    // expect(response.body).toBeInstanceOf(Object)
    })
})
