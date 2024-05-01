import { useSelector } from 'react-redux';
import { SongSearchItem } from '../SongsSearch';

function SongsSearch() {
    
    return (
        <div
            className={`w-full flex flex-col px-[59px] `
            
        }
        >
            {searchResult?.songs && (
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-5">Bài Hát</h3>
                    <div className="flex flex-col w-full">
                        {searchResult?.songs?.map((song) => (
                            <SongSearchItem key={song.encodeId} songInfo={song} />
                        ))}
                    </div>
                </div>
            )}
            {searchResult?.songs ? (
                ''
            ) : (
                <div className="w-full h-[250px] text-[#FFFFFF80] rounded-lg bg-[#542E4B] flex items-center justify-center">
                    Không có kết quả được tìm thấy, hãy thử lại...
                </div>
            )}
        </div>
    );
}

export default SongsSearch;