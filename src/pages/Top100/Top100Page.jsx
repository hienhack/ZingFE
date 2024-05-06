import PlaylistSection from '../../components/PlaylistSection';

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
    </div>
  );
}

export default Top100Page;
