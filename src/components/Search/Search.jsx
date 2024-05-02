import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

function Search() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q');

  const nonActiveStyle =
    'mx-5 py-[15px] cursor-pointer text-sm font-medium text-[#DADADA] truncate hover:text-white';
  const activeStyle =
    'mx-5 py-[15px] cursor-pointer text-sm font-medium text-[#DADADA] truncate hover:text-white border-b-[1px] border-[#CA4974]';
  return (
    <div className={`w-full`}>
      <div className="border-b-[0.5px] border-gray-800  bg-[#180c24]">
        <div className={`w-full flex h-[50px] items-center px-[59px] `}>
          <h3
            className={`pr-5 text-2xl font-bold border-r-[1px] border-[#5D3953] block text-white`}
          >
            Kết Quả Tìm Kiếm
          </h3>
          <div className="flex items-center">
            <NavLink
              to={`/tim-kiem/tat-ca?q=` + query}
              className={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
            >
              TẤT CẢ
            </NavLink>
            <NavLink
              to={`/tim-kiem/bai-hat?q=` + query}
              className={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
            >
              BÀI HÁT
            </NavLink>
            <NavLink
              to={`/tim-kiem/playlist?q=` + query}
              className={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
            >
              PLAYLIST/ALBUM
            </NavLink>
            <NavLink
              to={`/tim-kiem/nghe-si?q=` + query}
              className={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
            >
              NGHỆ SĨ/OA
            </NavLink>
          </div>
        </div>
      </div>
      <>
        <Outlet />
      </>
    </div>
  );
}

export default Search;
