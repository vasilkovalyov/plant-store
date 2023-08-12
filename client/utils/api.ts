import axios from 'axios';

type ApiContentType = 'application/json' | 'multipart/form-data';

type apiPropsType = {
  contentType?: ApiContentType;
};

function api(props?: apiPropsType) {
  const apiUrl = process.env.API_URL || 'http://localhost:4000';
  return axios.create({
    baseURL: `${apiUrl}/api/`,
    withCredentials: true,
    method: 'get, post, put, delete',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': props?.contentType || 'application/json',
    },
  });
}

export default api;
