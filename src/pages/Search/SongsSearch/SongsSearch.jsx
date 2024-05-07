import { useSelector } from 'react-redux';
import { SongSearchItem } from '.';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { guest } from '../../../api';
function SongsSearch() {
  const { search } = useLocation();
  const [query, setQuery] = useState(new URLSearchParams(search).get('q'));
  const currentSong = useSelector((state) => state.feature.currentSong);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    guest
      .get('/music/song/search', {
        params: {
          keyword: query,
        },
      })
      .then((res) => {
        setSongs(standardize(res.data));
      })
      .catch((error) => {})
      .finally(() => {});
  }, [query]);

  function standardize(songs) {
    return songs.map((song) => {
      return { ...song, artists: song.artistsNames.split(', ').map((str) => ({ name: str })) };
    });
  }

  return (
    <div className={`w-full flex flex-col px-[59px] `}>
      {songs.length > 0 && (
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2 mt-6">Bài Hát</h3>
          <div className="flex flex-col w-full">
            {songs.map((song, index) => (
              <SongSearchItem key={index} songInfo={song} active={song.id == currentSong?.id} />
            ))}
          </div>
        </div>
      )}
      {songs.length == 0 && (
        <div className="w-full h-[250px] text-[#FFFFFF80] rounded-lg bg-[#542E4B] flex items-center justify-center">
          Không có kết quả được tìm thấy, hãy thử lại...
        </div>
      )}
    </div>
  );
}

export default SongsSearch;
