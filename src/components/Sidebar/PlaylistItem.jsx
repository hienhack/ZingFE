import { HiOutlineDotsHorizontal } from 'react-icons/hi';

function PlaylistItem({ path, title }) {
  return (
    <a className="playlist" href={path}>
      <span>{title}</span>
      <button className="size-6 flex items-center justify-center rounded-full hover:bg-[--alpha-bg]">
        <HiOutlineDotsHorizontal className="text-white size-4.5" />
      </button>
    </a>
  );
}

export default PlaylistItem;
