import { Outlet } from 'react-router-dom';
import { Navbar, Tab } from '../../components/Navbar';

function Search() {
  return (
    <div className={`w-full`}>
      <Navbar title="Kết Quả Tìm Kiếm" className="px-[59px]">
        <Tab content="TẤT CẢ" path="/tim-kiem/tat-ca" />
        <Tab content="BÀI HÁT" path="/tim-kiem/bai-hat" />
        <Tab content="PLAYLIST/ALBUM" path="/tim-kiem/playlist" />
        <Tab content="NGHỆ SĨ/OA" path="/tim-kiem/artist" />
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Search;
