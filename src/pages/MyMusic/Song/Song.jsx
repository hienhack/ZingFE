import { Outlet, useNavigate } from 'react-router-dom';

function FavoriteSong() {
  const navgigate = useNavigate();

  return (
    <div className="text-white">
      <h1>This is song</h1>
      <div className="flex gap-2">
        <button className="bg-slate-600" onClick={() => navgigate('/mymusic/song/favorite')}>
          Favorite song
        </button>
        <button className="bg-slate-600" onClick={() => navgigate('/mymusic/song/upload')}>
          Uploaded song
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default FavoriteSong;
