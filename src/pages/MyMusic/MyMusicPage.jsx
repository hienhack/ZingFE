import { Outlet, useNavigate } from 'react-router-dom';
import { BsFillPlayFill } from 'react-icons/bs';
import { IoIosAdd } from "react-icons/io";
import Tooltip from '../../components/Tooltip';
import PlaylistSection from '../../components/PlaylistSection';
import Song from '../../components/Song/Song';
import { useState } from 'react';
import { BiAlbum } from "react-icons/bi";

const playlist = [
  {
    id: 1,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/7/b/7e7b8f07e9af15dc2fa3424d237bfff7.jpg',
    description: 'Lắc lư cùng những giai điệu cực cuốn',
    artists: [
      { id: 1, name: 'Alan Walker' },
      { id: 2, name: 'K-391' },
      { id: 4, name: 'Emelie' },
      { id: 5, name: 'Hollow' },
    ],
  },
  {
    id: 2,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/1/3/8/f138a02472481738a6660e97421ceff2.jpg',
    description: 'Lắc lư cùng những giai điệu cực cuốn',
    artists: [
      { id: 1, name: 'Alan Walker' },
      { id: 2, name: 'K-391' },
      { id: 4, name: 'Emelie' },
      { id: 5, name: 'Hollow' },
    ],
  },
  {
    id: 3,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/4/7/9/64797af5fc5fa8aee8660d85a8cb3816.jpg',
    description: 'Lắc lư cùng những giai điệu cực cuốn',
    artists: [
      { id: 1, name: 'Alan Walker' },
      { id: 2, name: 'K-391' },
      { id: 4, name: 'Emelie' },
      { id: 5, name: 'Hollow' },
    ],
  },
  {
    id: 4,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/5/f/a/55fa8c513461bef6c8e37f188347e0eb.jpg',
    description: 'Lắc lư cùng những giai điệu cực cuốn',
    artists: [
      { id: 1, name: 'Alan Walker' },
      { id: 2, name: 'K-391' },
      { id: 4, name: 'Emelie' },
      { id: 5, name: 'Hollow' },
    ],
  },
  {
    id: 5,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/c/e/6/4ce668d112622c6aae0b4257a5071025.jpg',
    description: 'Lắc lư cùng những giai điệu cực cuốn',
    artists: [
      { id: 1, name: 'Alan Walker' },
      { id: 2, name: 'K-391' },
      { id: 4, name: 'Emelie' },
      { id: 5, name: 'Hollow' },
    ],
  },
  {
    id: 6,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-playlist-zmp3.zmdcdn.me/s2/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rrDF9mmYVS3K0HjrZkD-m1LLsQ7EO-j3W47PjfXYgi8NGKstJsDhmXA377VCSlz0m5EE8TwdxHKJ09_bZgC_XvC1N-REelfILPG9iuzsReT1GPrcsI8wHq5L26OPOgvIGi2TfXbnx9OMmumocwCy144HMI3Fi6yLXK5TibymUXM5WKYrd_TkbD33oA2UTAyLqGE9TSkXxjNHruirNs1vmGL2sVUF8VhGaS0B9nrsQ0M3b5Xq3B8u0D44s61CilWKbiIVOOop-CFMXmkZ3V3v5fV7t_UDypfLrf4VzywcEH12GCjqtq&size=thumb/240_240',
    description: 'Lắc lư cùng những giai điệu cực cuốn',
    artists: [
      { id: 1, name: 'Alan Walker' },
      { id: 2, name: 'K-391' },
      { id: 4, name: 'Emelie' },
      { id: 5, name: 'Hollow' },
    ],
  },
  {
    id: 7,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-playlist-zmp3.zmdcdn.me/s2/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rrDF9mmYVS3K0HjrZkD-m1LLsQ7EO-j3W47PjfXYgi8NGKstJsDhmXA377VCSlz0m5EE8TwdxHKJ09_bZgC_XvC1N-REelfILPG9iuzsReT1GPrcsI8wHq5L26OPOgvIGi2TfXbnx9OMmumocwCy144HMI3Fi6yLXK5TibymUXM5WKYrd_TkbD33oA2UTAyLqGE9TSkXxjNHruirNs1vmGL2sVUF8VhGaS0B9nrsQ0M3b5Xq3B8u0D44s61CilWKbiIVOOop-CFMXmkZ3V3v5fV7t_UDypfLrf4VzywcEH12GCjqtq&size=thumb/240_240',
    description: 'Lắc lư cùng những giai điệu cực cuốn',
    artists: [
      { id: 1, name: 'Alan Walker' },
      { id: 2, name: 'K-391' },
      { id: 4, name: 'Emelie' },
      { id: 5, name: 'Hollow' },
    ],
  },
];

const song = [
  {
    id: 1,
    title: 'Nhạc Hot Tiktok',
    thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/7/b/7e7b8f07e9af15dc2fa3424d237bfff7.jpg",
    describe: "Lắc lư cùng những giai điệu cực cuốn",
    artist: ["Adele"],
    album: 'Living Without You (Single)'

  },
  {
    id: 1,
    title: 'Nhạc Hot Tiktok',
    thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/7/b/7e7b8f07e9af15dc2fa3424d237bfff7.jpg",
    describe: "Lắc lư cùng những giai điệu cực cuốn",
    artist: ["Adele"],
  },
  {
    id: 1,
    title: 'Nhạc Hot Tiktok',
    thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/7/b/7e7b8f07e9af15dc2fa3424d237bfff7.jpg",
    describe: "Lắc lư cùng những giai điệu cực cuốn",
    artist: ["Adele"],
    album: 'Living Without You (Single)'

  },
]
function MyMusicPage() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState('song');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    navigate(`/mymusic/${button}`);
  };

  return (
    <div className="px-[--padding-section] pt-10">
      <div className='flex items-center'>
        <div className="text-white text-[40px] font-bold">Thư viện</div>
        <button className="ml-3 rounded-full border bg-white text-black w-[36px] h-[36px] flex justify-center items-center border-[#9b4de0]">
          <BsFillPlayFill size={28} className="ml-[2px]" />
        </button>
      </div>
      <div className='flex mt-5'>
        <div className='text-white text-[20px] font-bold'>PLAYLIST</div>
        <Tooltip content="Tạo playlist mới">
          <button className='ml-2 text-center rounded-[999px] bg-[hsla(0,0%,100%,0.1)] border-0 p-0.5 '>
            <IoIosAdd className="text-white font-bold" size={25} />
          </button>
        </Tooltip>
      </div>
      <PlaylistSection
        className="mt-2"
        listPlaylist={playlist.slice(0, 5)}
        title
        artist
        size="grid-cols-5"
      />
      <div className="text-white mt-5">
        <div className="flex gap-8 border-b border-solid border-[hsla(0,0%,100%,0.05)] ">
          {/* <button className="border-[var(--purple-primary)] border-b border-solid " onClick={() => navigate('/mymusic/song')}>
            BÀI HÁT
          </button> */}
          <button
            className={`${selectedButton === 'song' ? 'border-[var(--purple-primary)] border-b-2 border-solid ' : ''
              }`}
            onClick={() => handleButtonClick('song')}
          >
            BÀI HÁT
          </button>
          {/* <button className="" onClick={() => navigate('/mymusic/album')}>
            ALBUM
          </button> */}
          <button
            className={`${selectedButton === 'album' ? 'border-[var(--purple-primary)] border-b-2 border-solid' : ''
              }`}
            onClick={() => handleButtonClick('album')}
          >
            ALBUM
          </button>
        </div>
        {selectedButton === 'song' &&
          <>
            <div className='flex items-center border-b border-solid border-[hsla(0,0%,100%,0.05)] p-5 text-[12px] text-[hsla(0,0%,100%,0.5)]'>
              <div className='w-[50%] ml-5'>BÀI HÁT</div>
              <div className='flex grow'>ALBUM</div>
              <div>THỜI GIAN</div>
            </div>
            {song.map((song, index) => (
              <div className="" key={index}>
                <Song song={song} isIcon />
              </div>
            ))
            }
          </>
        }

        < Outlet />
      </div>
    </div>
  );
}

export default MyMusicPage;
