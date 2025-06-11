import { useUserStore } from '../store/useUserStore';
import axios from 'axios';

export async function fetchProfile() {
  try {
    const res = await axios.get('http://localhost:4000/users/profile', {
      withCredentials: true,
    });
    useUserStore.setState({ user: res.data });
    return res.data;
  } catch (err) {
    console.error(err);
    useUserStore.setState({ user: null });
    return null;
  }
}
