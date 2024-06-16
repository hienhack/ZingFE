import { BiAlbum } from 'react-icons/bi';

function Album() {
    return (
        <div className='flex flex-col items-center mt-5'>
            <BiAlbum size={100} />
            <div className='text-[hsla(0,0%,100%,0.5)] mt-5 mb-5'>Chưa có album trong thư viện cá nhân</div>
        </div>
    );
}

export default Album;
