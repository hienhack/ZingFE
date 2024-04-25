/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { BsChevronRight } from "react-icons/bs";
import { SongItem } from './SongItem';
// import paths from '../../configs';
import newRelease from './newRelease.json'


function NewRelease() {
    

    const [songType, setSongType] = useState(0);
    const [songContent, setSongContent] = useState([]);

    useEffect(() => {
        if (songType === 0) {
            setSongContent(newRelease?.items?.all);
        } else if (songType === 1) {
            setSongContent(newRelease?.items?.vPop.reverse());
        } else if (songType === 2) {
            setSongContent(newRelease?.items?.others);
        }
    }, [songType, newRelease]);

    return (
        <div
            className={`w-full overflow-hidden mt-12 flex flex-col `}
        >
            <h3 className=" mb-5 text-left font-bold text-xl capitalize text-white">
                {newRelease?.title}
            </h3>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => {
                            setSongType(0);
                        }}
                        className={`py-1.5 px-6 outline-none text-center rounded-full border leading-[14px] text-white text-xs ${
                            songType === 0
                                ? 'border-transparent font-semibold bg-purple-500 hover:bg-purple-600'
                                : 'border-gray-700 font-medium bg-primary-color-2 hover:text-slate-200'
                        }`}
                    >
                        TẤT CẢ
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setSongType(1);
                        }}
                        className={`py-1 px-6 outline-none text-center rounded-full border leading-[14px] text-white text-xs ${
                            songType === 1
                                ? 'border-transparent font-semibold bg-purple-500 hover:bg-purple-600'
                                : 'border-gray-700 font-medium bg-primary-color-2 hover:text-slate-200'
                        }`}
                    >
                        VIỆT NAM
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setSongType(2);
                        }}
                        className={`py-1 px-6 outline-none text-center rounded-full border leading-[14px] text-white text-xs ${
                            songType === 2
                                ? 'border-transparent font-semibold bg-purple-500 hover:bg-purple-600'
                                : 'border-gray-700 font-medium bg-primary-color-2 hover:text-slate-200'
                        }`}
                    >
                        QUỐC TẾ
                    </button>
                </div>
                <Link
                    // to={paths.NEW}
                    className="text-text-color-3 gap-1 cursor-pointer hover:text-purple-500 hidden md:flex items-center text-slate-400"
                >
                    <span className="text-xs font-medium mr-0.5">TẤT CẢ</span>
                    <span className="mb-1">
                        <BsChevronRight size={18} />
                    </span>
                </Link>
            </div>
            <div className="flex w-full flex-wrap mx-[-15px]">
                {songContent
                    ?.filter((item, index) => index < 12)
                    ?.map((item) => (
                        <SongItem key={item?.encodeId} data={item} />
                    ))}
            </div>
        </div>
    );
}

export default NewRelease;