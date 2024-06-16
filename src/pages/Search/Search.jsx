import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Tab } from '../../components/Navbar';
import { useEffect, useState } from 'react';

function Search() {
  const { search } = useLocation();
  const [query, setQuery] = useState(new URLSearchParams(search).get('q'));

  useEffect(() => {
    setQuery(new URLSearchParams(search).get('q'));
  }, [search]);

  function getPath(path) {
    if (!query) return `/tim-kiem/${path}`;
    return `/tim-kiem/${path}?q=${query}`;
  }

  return (
    <div className={`w-full`}>
      <Navbar title="Kết Quả Tìm Kiếm" className="px-[59px]">
        <Tab content="TẤT CẢ" path={getPath('tat-ca')} />
        <Tab content="BÀI HÁT" path={getPath('bai-hat')} />
        <Tab content="PLAYLIST/ALBUM" path={getPath('playlist')} />
        <Tab content="NGHỆ SĨ/OA" path={getPath('artist')} />
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Search;
