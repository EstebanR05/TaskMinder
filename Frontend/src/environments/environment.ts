
export const environment = {
    production: false,
    app: {
      apiBaseUrl: 'http://localhost:3000/api',
    },
    auth: {
      JWT: localStorage.getItem('token'),
    },
  };