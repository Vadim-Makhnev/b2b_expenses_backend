import { useOutlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

function MainPage() {
  const outlet = useOutlet();

  if (!outlet) {
    return null;
  }

  return (
    <main className="flexible container">
      <Sidebar />
      <div className="content">{outlet}</div>
    </main>
  );
}
export default MainPage;
