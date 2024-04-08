import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

function DefaultLayout() {
  return (
    <div className="flex bg-[var(--layout-bg)]">
      <div className="w-[240px] min-w-[240px]">
        <Sidebar />
      </div>
      <div className="scrollable-container h-screen overflow-y-scroll w-full">
        <Header></Header>
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
