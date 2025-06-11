import './Header.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/useUserStore';
import { useEffect } from 'react';

function Header() {
  const navigate = useNavigate();

  const { user, setUser } = useUserStore();

  useEffect(() => {
    const loadUser = async () => {
      if (!user) {
        try {
          const res = await axios.get('http://localhost:4000/users/profile');
          setUser(res.data);
        } catch (err) {
          console.error(err);
          setUser(null);
        }
      }
    };

    loadUser();
  }, []);

  async function logoutHandler() {
    try {
      await axios.post('http://localhost:4000/auth/logout');
      setUser(null);
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <header>
      <div className="header ">
        <span className="header-logo">
          <img src="/logo.svg" alt="Logo" />
        </span>
        <div className="header-second">
          {user ? (
            <span className="default-font">{user?.displayName}</span>
          ) : (
            ''
          )}
          {user ? (
            <img src={user?.picture} alt="" height={24} width={24} />
          ) : (
            ''
          )}
          {user ? (
            <button className="h3 logout-btn" onClick={logoutHandler}>
              Logout
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
