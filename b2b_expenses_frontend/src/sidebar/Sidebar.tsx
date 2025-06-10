import { useLocation, NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <aside className="aside">
      <div className="sidebar">
        <nav className="bar-nav">
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <img src="/House.svg" alt="house" width={16} height={16} />
              <NavLink
                to={'/main/panel'}
                className={
                  isActive('/main/panel')
                    ? 'sidebar-text active'
                    : 'sidebar-text'
                }
              >
                Панель
              </NavLink>
            </li>

            <li className="sidebar-item">
              <img src="/Table.svg" alt="house" width={16} height={16} />
              <NavLink
                to={'/main/table'}
                className={
                  isActive('/main/table')
                    ? 'sidebar-text active'
                    : 'sidebar-text'
                }
              >
                Траты
              </NavLink>
            </li>

            <li className="sidebar-item">
              <img src="/Anomalies.svg" alt="house" width={16} height={16} />
              <NavLink
                to={'/main/anomalies'}
                className={({ isActive }) =>
                  isActive ? 'sidebar-text active' : 'sidebar-text'
                }
              >
                Аномалии
              </NavLink>
            </li>

            <li className="sidebar-item">
              <img src="/Files.svg" alt="house" width={16} height={16} />
              <NavLink
                to={'/main/load'}
                className={
                  isActive('/main/load')
                    ? 'sidebar-text active'
                    : 'sidebar-text'
                }
              >
                Загрузка файлов
              </NavLink>
            </li>

            <li className="sidebar-item">
              <img src="/Optimize.svg" alt="house" width={16} height={16} />
              <a className="sidebar-text" href="#">
                Оптимизация
              </a>
            </li>

            <li className="sidebar-item">
              <img src="/Companies.svg" alt="house" width={16} height={16} />
              <a className="sidebar-text" href="#">
                Компании
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
