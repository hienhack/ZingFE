import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineUserAdd } from "react-icons/ai";
import Song from '../../components/Song/Song';
import DiscoveryBtn from '../../components/DiscoveryBtn/DiscoveryBtn';
import PlaylistSection from '../../components/PlaylistSection';

const song = [
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
  },
]
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
    year: '2016',
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
    year: '2016',

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
    year: '2016',

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
    year: '2016',

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
    year: '2016',

  },
  // { id: 2, title: 'Nhạc Hot Tiktok', thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/1/3/8/f138a02472481738a6660e97421ceff2.jpg", description: "Lắc lư cùng những giai điệu cực cuốn", artist: "Alan Walker, K-391, Emelie, Hollow" },
  // { id: 3, title: 'Nhạc Hot Tiktok', thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/4/7/9/64797af5fc5fa8aee8660d85a8cb3816.jpg", description: "Lắc lư cùng những giai điệu cực cuốn", artist: "Alan Walker, K-391, Emelie, Hollow" },
  // { id: 4, title: 'Nhạc Hot Tiktok', thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/5/f/a/55fa8c513461bef6c8e37f188347e0eb.jpg", description: "Lắc lư cùng những giai điệu cực cuốn", artist: "Alan Walker, K-391, Emelie, Hollow" },
  // { id: 5, title: 'Nhạc Hot Tiktok', thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/c/e/6/4ce668d112622c6aae0b4257a5071025.jpg", description: "Lắc lư cùng những giai điệu cực cuốn", artist: "Alan Walker, K-391, Emelie, Hollow" },
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
    year: '2016',

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
const artist = {
  name: 'Adele',
  thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/6/d/3/c6d323a06f7154a8e05056cb435889ea.jpg',
  thumbnailM: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/avatars/c/6/d/3/c6d323a06f7154a8e05056cb435889ea.jpg',
  description: `Năm 2008, Adele nổi tiếng khi phát hành album đầu tay "19". Album được đón nhận và giành nhiều giải thưởng, nổi bật là giải Grammy cho "Nghệ Sĩ Mới Xuất Sắc Nhất " và "Trình Diễn Pop Nữ Xuất Sắc Nhất".
    Năm 2011, album thứ hai có tên "21" ra mắt còn thành công hơn trước với vô số những giải thưởng lớn, trong đó có kỷ lục Guinness và 6 giải Grammy. Độ phủ sóng của âm nhạc Adele lan rộng toàn cầu với nhiều ca khúc nổi bật như "Rolling In The Deep", "Someone Like You" và "Set Fire To The Rain".
    Năm 2015, album thứ ba "25" là sự trở lại ngoạn mục của Adele sau 4 năm vắng bóng, với 5 giải Grammy cho album và ca khúc "Hello" nằm trong album.`,
  fan: 27.258,
};
function ArtistPage() {

  return (
    <>
      <div className="relative mt-[-70px] mb-[30px] pt-[135px] flex items-end h-[19rem] z-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden" style={{ 'left': '-118px', 'right': '-118px' }}>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-no-repeat bg-center bg-cover blur-[50px] bg-[url('https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/avatars/c/6/d/3/c6d323a06f7154a8e05056cb435889ea.jpg')]">
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full z-1 bg-purple-900 bg-opacity-80">
          </div>
        </div>
        <div className="relative z-2 w-full h-full flex items-end">
          <div className="left flex flex-1">
            <img className="rounded-full w-[140px] h-[140px] ml-14 mb-7 mr-8" src={artist.thumbnail} />
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="text-[60px] font-bold	text-white">{artist.name}</div>
                <button className="ml-5 rounded-full border w-[52px] h-[52px] flex justify-center items-center bg-[#9b4de0] border-[#9b4de0]">
                  <BsFillPlayFill size={35} className="text-white ml-[5px] " />
                </button>
              </div>
              <div className="flex items-centermt mt-2">
                <div className="text-white font-bold text-[14px] mr-5">{artist.fan} người quan tâm</div>
                <button className="m-0 rounded-full border border-solid border-[var(--border-primary)] text-[var(--text-primary)] h-7 w-32  text-xs flex items-center justify-center">
                  <AiOutlineUserAdd className='mr-2 text-[16px]' />
                  <span className='text-[12px] text-bold'> QUAN TÂM</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[--padding-section]">
        <div className="mb-5 flex justify-between items-center">
          <h3 className="text-xl font-bold text-[--text-primary]">Bài Hát Nổi Bật</h3>
          <DiscoveryBtn />
        </div>
        <div className='flex flex-wrap'>
          {song.map((song, index) => (
            <div className="w-1/2" key={index}>
              <Song song={song} />
            </div>
          ))}
        </div>
        <PlaylistSection
          sectionTitle="Single & EP"
          className="mt-12 mb-12"
          listPlaylist={playlist.slice(0, 5)}
          title
          year
          size="grid-cols-5"
        />
        <h3 className="text-xl font-bold text-[--text-primary]">Về {artist.name}</h3>
        <div className='flex mb-5 mt-5'>
          <div className='w-[25rem] h-[14.5rem] mr-7'>
            <img className='object-cover w-[100%] h-[100%] rounded-s-lg	' src={artist.thumbnailM} style={{ 'object-position': '50% 20%' }} />
          </div>
          <div className='flex flex-col w-[23rem]'>
            <span className='text-[--text-secondary] text-[14px] mb-10'>
              {`${artist.description.slice(0, 300)}...`}
              <span className="text-[--text-primary] cursor-pointer">
                Xem thêm
              </span>
            </span>
            <div className='text-white font-bold text-[20px]'>{artist.fan}</div>
            <div className="text-[--text-secondary] text-[14px] mr-5"> Người quan tâm</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArtistPage;
