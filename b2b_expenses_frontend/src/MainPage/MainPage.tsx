import Panel from '../panelPage/Panel';
import Sidebar from '../sidebar/Sidebar';

function MainPage() {
  return (
    <main className="main container flexible">
      <Sidebar />
      <Panel />
    </main>
  );
}
export default MainPage;
