import { GoChevronRight } from 'react-icons/go';

function DiscoveryBtn() {
  return (
    <button className="flex items-center gap-1 text-[--text-secondary] hover:text-[--link-text-hover]">
      <span className="text-xs font-semibold ">TẤT CẢ</span>
      <GoChevronRight size="1.5rem"></GoChevronRight>
    </button>
  );
}

export default DiscoveryBtn;
