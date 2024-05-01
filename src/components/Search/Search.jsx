import { useSelector } from 'react-redux';
import { NavLink,Outlet } from 'react-router-dom';

// import { RotatingLinesLoading } from '../assets/icons/dynamicIcons';


function Search() {
    // const { isSearching, searchParams } = useSelector((state) => state.music);
    // const { screenWidthRedux } = useSelector((state) => state.app);

    const nonActiveStyle = 'mx-5 py-[15px] cursor-pointer text-sm font-medium text-[#DADADA] truncate hover:text-white' ;
        // screenWidthRedux > 480
        //     ? 'mx-5 py-[15px] cursor-pointer text-sm font-medium text-text-color-1 truncate hover:text-text-color-2'
        //     : 'mx-2 py-[15px] cursor-pointer text-sm font-medium text-text-color-1 truncate hover:text-text-color-2';
    const activeStyle = 'mx-5 py-[15px] cursor-pointer text-sm font-medium text-[#DADADA] truncate hover:text-white border-b-[1px] border-[#CA4974]' ;
        // screenWidthRedux > 480
        //     ? 'mx-5 py-[15px] cursor-pointer text-sm font-medium text-text-color-1 truncate hover:text-text-color-2 border-b-[1px] border-border-color-3'
        //     : 'mx-2 py-[15px] cursor-pointer text-sm font-medium text-text-color-1 truncate hover:text-text-color-2 border-b-[1px] border-border-color-3';
    return (
        <div
            className={`w-full relative flex flex-col mt-[70px] h-[calc(100vh-160px)] overflow-x-hidden overflow-y-auto overflow-y-overlay scrollbar max-w-full `
            // ${
            //     screenWidthRedux < 480 ? `max-w-[${screenWidthRedux}px]` : ''
            // }`
        }
        >
            {/* {isSearching && (
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-primary-color-2 z-20">
                    <div className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
                        <RotatingLinesLoading height={'50'} width={'50'} color={'#FFFFFF'} />
                    </div>
                </div>
            )} */}
            <div className="border-b-[0.5px] border-gray-800  bg-[rgba(32,15,53,0.9)]">
                <div
                    className={`w-full flex h-[50px] items-center px-[59px] `
                    
                }
                >
                    <h3
                        className={`pr-5 text-2xl font-bold border-r-[1px] border-[#5D3953] block text-white`
                        
                    }
                    >
                        Kết Quả Tìm Kiếm
                    </h3>
                    <div className="flex items-center">
                        <NavLink
                            to={`/tim-kiem/tat-ca?q=`
                            // ${searchParams}
                            }
                            className={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
                        >
                            TẤT CẢ
                        </NavLink>
                        <NavLink
                            to={`/tim-kiem/bai-hat?q=`
                            // ${searchParams}
                        }
                            className={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
                        >
                            BÀI HÁT
                        </NavLink>
                        <NavLink
                            to={`/tim-kiem/playlist?q=`
                            // ${searchParams}
                        }
                            className={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
                        >
                            PLAYLIST/ALBUM
                        </NavLink>
                        <NavLink
                            to={`/tim-kiem/artist?q=`
                            // ${searchParams}
                        }
                            className={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
                        >
                            NGHỆ SĨ/OA
                        </NavLink>
                    </div>
                </div>
            </div>
            <>
                    <Outlet/>
            </>
        </div>
    );
}

export default Search;