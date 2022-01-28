import axios from 'axios';

export const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? '',
});

Api.interceptors.request.use(config => {
  return {
    ...config,
    params: {
      ...config.params,
      token: process.env.REACT_APP_API_TOKEN ?? '',
    },
  };
});
