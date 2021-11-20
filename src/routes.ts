const host = 'https://front-test.beta.aviasales.ru';

export default {
  search: () => ({
    baseURL: host,
    method: 'get',
    url: 'search',
  }),
  tickets: (searchId: string) => ({
    baseURL: host,
    method: 'get',
    url: 'tickets',
    params: {
      searchId,
    },
  }),
};
