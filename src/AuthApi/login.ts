import axios from 'axios';
import { API_URL } from './URL';

export const ApiLogin = async (
  emailOrUsername: string,
  password: string
): Promise<{success: boolean, message: string}> => {
  try {
    const { data } = await axios.post(
      `${API_URL}/login`,
      {
        emailOrUsername: emailOrUsername,
        password: password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    localStorage.setItem('access_token', data.accessToken);
    localStorage.setItem('refresh_token', data.refreshToken);
    console.log(data);
    return data;
  } catch (err: any) {
    return err.data;
  }
};
