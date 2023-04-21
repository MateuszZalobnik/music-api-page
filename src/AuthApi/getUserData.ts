import { useAppDispatch } from '@/store/hooks';
import { logout, userData } from '@/store/slice/userSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { API_URL } from './URL';


export const getUserData = () => {
  const dispatch = useAppDispatch();
  let accessToken: string | null = null;
  let refreshToken: string | null = null;
  useEffect(() => {
    accessToken = localStorage.getItem('access_token');
    refreshToken = localStorage.getItem('refresh_token');

    if (accessToken && refreshToken) {
      axios
        .get(`${API_URL}/getData`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          dispatch(userData(response.data));
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
                    dispatch(userData(response.data));
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
    }
    // else {
    //   dispatch(logout());
    // }
  }, []);
};
