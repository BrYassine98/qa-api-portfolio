const { printf, format } = require('util');
const agent = { headers: { 'User-Agent': 'qa-api-portfolio' } };  
  
describe('Reqres User Spec Tests', () => {
  const request = require('supertest');
  const url = process.env.BASE_URL;  
  
  it('should get users', async () => {
    const response = await request(url)
      .get('/api/users?page=1')
      .set(agent.headers);
    expect(response.status).not.toBe(403);
    console.log(`Status: ${response.status}`);
    console.log(`Headers: ${JSON.stringify(response.headers)}`);
    console.log(`Body: ${JSON.stringify(response.body)}`);
  });
});