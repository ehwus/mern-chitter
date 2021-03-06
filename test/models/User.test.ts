import User from '../../models/User';
import {
  connectTestDatabase,
  destroyTestDatabase,
  clearTestDatabase,
} from '../db-handler';

beforeAll(async () => await connectTestDatabase());
afterEach(async () => await clearTestDatabase());
afterAll(async () => await destroyTestDatabase());

describe('User', () => {
  it('Allows the creation of a user with an email, username and password', async () => {
    let testUser = new User({
      username: 'test',
      email: 'test@test.com',
      password: 'secret123',
    });
    let savedUser = await testUser.save();
    let allUsers = await User.find();
    expect(allUsers[0].id).toEqual(savedUser.id);
  });
});
