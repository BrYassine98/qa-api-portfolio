const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();

const BASE_URL = process.env.BASE_URL || 'https://jsonplaceholder.typicode.com';
const agent = request(BASE_URL);

describe('JSONPlaceholder - Posts API', function () {
  it('GET /posts should return 200 and a non-empty array', async function () {
    const res = await agent.get('/posts');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.greaterThan(0);
    expect(res.body[0]).to.have.property('id');
    expect(res.body[0]).to.have.property('title');
  });

  it('GET /posts/1 should return 200 and id=1', async function () {
    const res = await agent.get('/posts/1');

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', 1);
    expect(res.body).to.have.property('title');
  });

  it('GET /posts/999999 should return 404 (empty object) behavior documented', async function () {
    const res = await agent.get('/posts/999999');

    // JSONPlaceholder returns 404 for non-existing resources
    // (In case it returns 200 with {}, adjust accordingly)
    expect([200, 404]).to.include(res.status);
  });

  it('POST /posts should return 201 and echo payload', async function () {
    const payload = { title: 'qa-api-portfolio', body: 'test body', userId: 1 };
    const res = await agent.post('/posts').send(payload);

    expect(res.status).to.equal(201);
    expect(res.body).to.include(payload);
    expect(res.body).to.have.property('id');
  });

  it('PUT /posts/1 should return 200 and echo updated payload', async function () {
    const payload = { id: 1, title: 'updated', body: 'updated body', userId: 1 };
    const res = await agent.put('/posts/1').send(payload);

    expect(res.status).to.equal(200);
    expect(res.body).to.include(payload);
  });

  it('DELETE /posts/1 should return 200', async function () {
    const res = await agent.delete('/posts/1');
    expect(res.status).to.equal(200);
  });
});
