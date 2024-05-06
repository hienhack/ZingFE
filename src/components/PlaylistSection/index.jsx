import DiscoveryBtn from '../DiscoveryBtn/DiscoveryBtn';
import { PlaylistCard } from '../PlaylistCard';
import PropTypes from 'prop-types';

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

function PlaylistSection({
  sectionTitle,
  listPlaylist,
  path,
  title,
  artist,
  description,
  size = 'grid-cols-5',
  className,
}) {
  return (
    <div className={className}>
      <div className="mb-5 flex justify-between items-center">
        <h3 className="text-xl font-bold text-[--text-primary]">{sectionTitle}</h3>
        {path && <DiscoveryBtn path={path} />}
      </div>

      <div className={'grid gap-7 ' + size}>
        {listPlaylist.map((p, index) => (
          <PlaylistCard
            key={index}
            playlist={p}
            title={title}
            artist={artist}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}

PlaylistSection.propTypes = {
  sectionTitle: PropTypes.string,
  listPlaylist: PropTypes.object,
  path: PropTypes.string,
  title: PropTypes.bool,
  artist: PropTypes.bool,
  description: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default PlaylistSection;
