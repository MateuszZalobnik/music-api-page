import axios from 'axios';
import { API_URL } from './URL';

export const ApiLogout = async (): Promise<boolean> => {
  const refreshToken = localStorage.getItem('refresh_token');
  try {
    const response = await axios.delete(`${API_URL}/logout`, {
      data: {
        token: refreshToken,
      },
    });
    // console.log(response);
    return response.data.success;
  } catch (error) {
    console.error(error);
    return false;
  }
};
