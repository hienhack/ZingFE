import { useSelector } from 'react-redux';
import { PlayingIndicator } from '../Indicator';
import { FaPlay } from 'react-icons/fa';
import clsx from 'clsx';
import { useContext } from 'react';
import { AudioContext } from '../../Context/AudioContext';

function Thumbnail({ song, active, size = '40px' }) {
  const isPlaying = useSelector((state) => state.status.isPlaying);
  const { loadSong, play } = useContext(AudioContext);

  function handlePlay() {
    if (active) {
      play();
    } else {
      loadSong(song);
    }
  }

  return (
    <div
      className={clsx(
        'relative overflow-x-hidden rounded mr-2.5',
        'size-[' + size + ']',
        'min-w-[' + size + ']'
      )}
    >
      <img className={`size-full object-cover`} src={song.thumbnail}></img>
      <div
        className={clsx(
          'h-full w-full flex items-center justify-center cursor-pointer absolute top-0 left-0 bg-[--dark-alpha-50] group-[:hover]:visible',
          !active && 'invisible'
        )}
      >
        {(!isPlaying || (isPlaying && !active)) && (
          <button>
            <FaPlay className="text-white size-4" onClick={handlePlay} />
          </button>
        )}
        {isPlaying && active && <PlayingIndicator />}
      </div>
    </div>
  );
}

export default Thumbnail;
