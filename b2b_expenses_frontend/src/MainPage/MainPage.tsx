import { Navigate, useOutlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import { useUserStore } from '../store/useUserStore';

function MainPage() {
  const outlet = useOutlet();
  const { user } = useUserStore();

  if (!user || !user.role) {
    return <Navigate to="/unauthorized" />;
  }

  if (!outlet) {
    return null;
  }

  return (
    <main className="flexible ">
      <Sidebar />
      {outlet}
    </main>
  );
}
export default MainPage;
