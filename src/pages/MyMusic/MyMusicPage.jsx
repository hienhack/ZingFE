import { Outlet, useNavigate } from 'react-router-dom';

function MyMusicPage() {
  const navigate = useNavigate();

  return (
    <div className="text-white">
      <div className="text-white">This is MyMusicPage</div>
      <div className="flex gap-2">
        <button className="bg-blue-300" onClick={() => navigate('/mymusic/song')}>
          Song
        </button>
        <button className="bg-blue-300" onClick={() => navigate('/mymusic/mv')}>
          MV
        </button>
        <button className="bg-blue-300" onClick={() => navigate('/mymusic/album')}>
          Album
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default MyMusicPage;
