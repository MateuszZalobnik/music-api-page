import axios from 'axios';

const API_URL = 'http://localhost:5050';

export const userData = (accessToken: string, refreshToken: string) => {
  axios
    .get(`${API_URL}/getData`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error.response.status === 403 && refreshToken) {
        // Use refresh token to obtain new access token
        axios
          .post(`${API_URL}/token`, { token: refreshToken })
          .then((response) => {
            const newAccessToken = response.data.accessToken;
            // Store new access token in secure storage
            localStorage.setItem('access_token', newAccessToken);
            // Retry original request with new access token
            axios
              .get(`${API_URL}/getData`, {
                headers: {
                  Authorization: `Bearer ${newAccessToken}`,
                },
              })
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        console.error(error);
      }
    });
};
