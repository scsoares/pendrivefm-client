import axios from 'axios';


export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getUserTopData = async (user, method, period) => {
  try {
    const response = await apiClient.get('/pendrive', {
      params: {
        user,
        method,
        period,
      },
      timeout: 5000,
    });

    let data = response.data;

    if (method === 'user.gettopalbums') {
      data = response.data.topalbums.album;
    } else if (method === 'user.gettoptracks') {
      data = response.data.toptracks.track;
    } else if (method === 'user.gettopartists') {
      data = response.data.topartists.artist;
    }

    return data;
  } catch (error) {
    console.error('Error fetching user top data:', error);
    throw error;
  }
};

export default getUserTopData;
