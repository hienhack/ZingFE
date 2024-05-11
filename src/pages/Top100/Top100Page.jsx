import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { SongMenu } from '../../components/Menu';
import PlaylistSection from '../../components/PlaylistSection';
import Tooltip from '../../components/Tooltip';

const testPlaylist = {
  id: '231adf',
  title: 'US UK Hay Nhat Thap Ki',
  description: 'Khong co des vi khong biet viet gi',
  thumbnail:
    'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/0/7/b/607bcce19478bfe83079fecff2bce0be.jpg',
  artists: [
    {
      id: '1',
      name: 'Adele',
    },
    {
      id: '2',
      name: 'Taylor Swift',
    },
    {
      id: '3',
      name: 'Enimen',
    },
  ],
};

const testSong = {
  title: 'Chua quen nguoi yeu cũ',
  artist: {
    id: 1,
    name: 'Ha Nhi',
  },
  played: 15300000,
  liked: 20000,
  thumbnail:
    'https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/f/a/2/5fa229dc30ca9b5e680f1755afdab812.jpg',
  distributor: {
    id: 'asfasd23',
    name: 'The Ochard',
  },
  genres: [
    { id: '12', name: 'Việt Nam' },
    { id: '123', name: 'V-POP' },
  ],
};

function Top100Page() {
  // For testing only
  const listPlaylist = [testPlaylist, testPlaylist, testPlaylist, testPlaylist, testPlaylist];

  return (
    <div className="text-white h-[1000px] px-[59px]">
      <PlaylistSection
        sectionTitle={'Nhac bat hu'}
        listPlaylist={listPlaylist}
        title={true}
        artist
      />
      <div className="size-24 bg-white group relative">
        <div className="absolute w-full h-full items-center justify-center bg-black bg-opacity-20 hidden group-[:hover]:flex z-1">
          <SongMenu song={testSong} onHide={() => {}} onShow={() => {}}>
            <Tooltip content="Khác">
              <button className="size-9 bg-[--alpha-bg] flex items-center justify-center text-[--primary-text] rounded-full hover:filter-none">
                <HiOutlineDotsHorizontal />
              </button>
            </Tooltip>
          </SongMenu>
        </div>
      </div>
    </div>
  );
}

export default Top100Page;
