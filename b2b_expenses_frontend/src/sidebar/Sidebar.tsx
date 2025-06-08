import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="aside">
      <div className="sidebar">
        <nav className="bar-nav">
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <img src="House.svg" alt="house" width={16} height={16} />
              <a className="sidebar-text active" href="#">
                Панель
              </a>
            </li>

            <li className="sidebar-item">
              <img src="Table.svg" alt="house" width={16} height={16} />
              <a className="sidebar-text" href="#">
                Траты
              </a>
            </li>

            <li className="sidebar-item">
              <img src="Anomalies.svg" alt="house" width={16} height={16} />
              <a className="sidebar-text" href="#">
                Аномалии
              </a>
            </li>

            <li className="sidebar-item">
              <img src="Files.svg" alt="house" width={16} height={16} />
              <a className="sidebar-text" href="#">
                Загрузка файлов
              </a>
            </li>

            <li className="sidebar-item">
              <img src="Optimize.svg" alt="house" width={16} height={16} />
              <a className="sidebar-text" href="#">
                Оптимизация
              </a>
            </li>

            <li className="sidebar-item">
              <img src="Companies.svg" alt="house" width={16} height={16} />
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
