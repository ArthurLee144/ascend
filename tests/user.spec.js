import axios from 'axios';

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
        getAllUsers: [
          {
            id: 1,
            username: 'francisngo',
            email: 'francisngo@ascend.com',
          },
          {
            id: 2,
            username: 'billyboy',
            email: 'billyboy@ascend.com',
          },
          {
            id: 3,
            username: 'redranger5',
            email: 'jasonleescott@ascend.com',
          },
          {
            id: 4,
            username: 'erqweqwe',
            email: 'qweqwe@ascend.com',
          },
          {
            id: 7,
            username: 'greenranger6',
            email: 'tommyoliver@ascend.com',
          },
          {
            id: 9,
            username: 'blueranger5',
            email: 'billycranston@ascend.com',
          },
          {
            id: 10,
            username: 'pinkranger5',
            email: 'kimberlyhart@ascend.com',
          },
        ],
      },
    });
  });
});
