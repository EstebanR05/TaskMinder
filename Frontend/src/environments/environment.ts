
export const environment = {
    production: false,
    app: {
      apiBaseUrl: 'http://localhost/TaskMinder/api/v1',
    },
    auth: {
      JWT: localStorage.getItem('token'),
      userId: localStorage.getItem('userId')
    },
  };