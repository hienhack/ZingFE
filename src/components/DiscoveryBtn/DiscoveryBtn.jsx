import { GoChevronRight } from 'react-icons/go';

function DiscoveryBtn({ path }) {
  return (
    <a
      href={path}
      className="flex w-fit items-center gap-1 text-[--text-secondary] hover:text-[--link-text-hover] cursor-pointer"
    >
      <span className="text-xs font-semibold ">TẤT CẢ</span>
      <GoChevronRight size="1.5rem"></GoChevronRight>
    </a>
  );
}

export default DiscoveryBtn;
