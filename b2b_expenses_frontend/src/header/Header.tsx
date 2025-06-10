import { useEffect, useState } from 'react';
import './Header.css';
import axios from 'axios';

interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
}

function Header() {
  const [user, setUser] = useState<UserData | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users/3');
        const user: UserData = response.data;
        setUser(user);
      } catch (err) {
        setError('Не удалось загрузить данные');
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <header>
      <div className="header container">
        <span className="header-logo">
          <img src="/logo.svg" alt="Logo" />
        </span>
        <div className="header-second">
          {error ? (
            error
          ) : (
            <span className="default-font">
              {user?.firstName}&nbsp;
              {user?.lastName}
            </span>
          )}
          {error ? '' : <img src={user?.image} alt="" height={24} width={24} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
