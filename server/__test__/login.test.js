const app = require('../app')
const request = require('supertest')
const { sequelize, User } = require('../models')
const queryInterface = sequelize.queryInterface
const { hashPassword } = require('../helpers/index')


beforeAll(async () => {
    let dataUser = require('../data/user.json')
    dataUser.forEach(el => {
        el.password = hashPassword(el.password)
        el.createdAt = el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert("Users", dataUser, {});
})

afterAll(async () => {
    await User.destroy({
        restartIdentity: true,
        truncate: true,
        cascade: true
    })
})


describe('Feature Login User POST /users/login', () => {
    test('200 - Success login', async () => {
        let input = {
            email: 'brian@mail.com',
            password: 'brian123',
        }
        const response = await request(app)
            .post('/users/login')
            .send(input)

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
    })

    test('400 - Failed Login - Email/Password Required', async () => {
        let input = {
            email: '',
            password: 'brian123',
        }
        const response = await request(app)
            .post('/users/login')
            .send(input)

        expect(response.status).toBe(401)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Email/Password Invalid')
    })

    test('400 - Failed Login - Invalid Credentials', async () => {
        let input = {
            email: 'risanto@mail.com',
            password: 'brian123',
        }
        const response = await request(app)
            .post('/users/login')
            .send(input)

        expect(response.status).toBe(401)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Email/Password Invalid')
    })

    test('400 - Failed Login - Invalid Credentials', async () => {
        let input = {
            email: 'brian@mail.com',
            password: 'brian123454',
        }
        const response = await request(app)
            .post('/users/login')
            .send(input)

        expect(response.status).toBe(401)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Email/Password Invalid')
    })
})