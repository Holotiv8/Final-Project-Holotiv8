const app = require('../app')
const request = require('supertest')
const { sequelize, Products, Images } = require('../models')
// const { hashPassword } = require('../helpers/index')
const queryInterface = sequelize.queryInterface
let access_token

beforeAll(async () => {
    let data = require("../data/product.json");
     data.forEach((el) => {
       el.createdAt = el.updatedAt = new Date();
     });
     await queryInterface.bulkInsert('Products', data, {})
     let dataImage = require("../data/images.json");
     dataImage.forEach((el) => {
       el.createdAt = el.updatedAt = new Date();
     });
     await queryInterface.bulkInsert('Images', dataImage, {})
    // await queryInterface.bulkInsert('Users', dataUser, {})
    // let response = await request(app).post("/users/login").send({
    //     email : "brian@mail.com", 
    //     password: "brian123"
    // })
    // access_token = response.body.access_token
    // // await queryInterface.bulkInsert('Users', userJSON, {})
})

afterAll(async () => {
    await Products.destroy({
        restartIdentity: true,
        truncate: true,
        cascade: true
    })
    await Images.destroy({
        restartIdentity: true,
        truncate: true,
        cascade: true
    })
})


describe('Feature Read Product GET /products/', () => {
    test('200 - Success Read Idols', async () => {
        const response = await request(app)
            .get('/products')

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
    })

    test('200 - Success Read Specific Product', async () => {
        const response = await request(app)
            .get('/products/5')

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
    })

    test('404 - Failed Read Specific Idol', async () => {
        const response = await request(app)
            .get('/products/100')

        expect(response.status).toBe(404)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Data Not Found')
    })

})