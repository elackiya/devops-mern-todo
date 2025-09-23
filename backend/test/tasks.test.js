const request = require('supertest');
const {app,server} = require('../index');
const mongoose = require('mongoose');
//test suite
describe('GET api/tasks', () => {
  it("it should return 200 ok", async () => {
    const res = await request(app).get('/api/tasks')
    expect(res.statusCode).toBe(200);
  })

  it('it should return object and task property ok', async () => {
    const res = await request(app).get('/api/tasks')
    expect(typeof res.body).toBe("object");
    expect(res.body).toHaveProperty("tasks")
    console.log(res.body.tasks, 'Data SEEDED')
  })
})



afterAll(async()=>{
    await server.close();
    await mongoose.connection.close();
})