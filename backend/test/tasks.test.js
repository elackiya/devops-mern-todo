const request = require('supertest');
const {app,server} = require('../index');
const mongoose = require('mongoose');
//test suite
describe('GET api/tasks', ()=>{
it("it should return 200 ok", async()=>{
    const res = await request(app).get('/api/tasks')
    expect(res.statusCode).toBe(200);
})
})

afterAll(async()=>{
    await server.close();
    await mongoose.connection.close();
})