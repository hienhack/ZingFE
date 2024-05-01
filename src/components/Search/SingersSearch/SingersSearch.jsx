
import searchResult from '../search.json'

import { ArtistSearchItem } from '../SingersSearch';

function SingersSearch() {
    

    return (
        <div
            className={`w-full flex flex-col px-[59px] `}
        >
            {searchResult?.artists && (
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-5">Nghệ Sĩ/OA</h3>
                    <div className="flex flex-wrap items-start mx-[-14px]">
                        {searchResult?.artists?.map((artist) => (
                            <ArtistSearchItem key={artist.id} item={artist} />
                        ))}
                    </div>
                </div>
            )}
            {searchResult?.artists ? (
                ''
            ) : (
                <div className="w-full h-[250px] text-[#FFFFFF80] rounded-lg bg-[#542E4B] flex items-center justify-center">
                    Không có kết quả được tìm thấy, hãy thử lại...
                </div>
            )}
        </div>
    );
}

export default SingersSearch;