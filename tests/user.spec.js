import axios from 'axios';

// TODO: Create function to reset database before & after running test
// TODO: Create test to login, update, remove a user
// TODO: Create test to create, update, remove a review
// TODO: Create test to create, update, remove a site

describe('User resolvers', () => {
  test('getAllUsers', async () => {
    const response = await axios.post('http://localhost:8080/graphql', {
      query: `
        query {
          getAllUsers {
            id
            username
            email
          }
        }
      `,
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        getAllUsers: [],
      },
    });
  });

  test('register user', async () => {
    const response = await axios.post('http://localhost:8080/graphql', {
      query: `
        mutation {
          registerUser(username: "testuser", email: "testuser@ascend.com", password: "testuser123") {
            ok
            errors {
              path
              message
            }
          }
        }
      `,
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        registerUser: {
          ok: true,
          errors: null,
        },
      },
    });
  });
});
