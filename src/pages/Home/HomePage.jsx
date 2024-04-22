import { useState } from 'react';
import DiscoveryBtn from '../../components/DiscoveryBtn/DiscoveryBtn';
import React from "react"
import { useSelector} from 'react-redux'
import { Link } from "react-router-dom";

import {Radio_Live} from '../Radio/RadioSection'
import { HiChevronRight } from "react-icons/hi2";
function HomePage() {
  const [open, setOpen] = useState(false);
  //const {newRelease } = useSelector (state => state.app)

  return (
    <div className="px-[--padding-section]">
      <h1 className="text-white"> This is discovery page</h1>

      <h2 className="text-white mb-[20px] text-[20px] font-bold flex"> Radio Nổi Bật
      <div className='group top-9 flex place-items-center'>
      <button className=" text-[--text-secondary] text-[12px] absolute right-[59px] group-hover:text-[#c072eb] flex leading-[18px] font-[500] content-center"  > 
                TẤT CẢ
                <HiChevronRight className="text-[--text-secondary] group-hover:text-[#c072eb] right-[59px] top-[2px] content-center ml-[5px]" size={20}/>
                    <Link to=""/>
      </button>
      </div>
      </h2>
      <Radio_Live/>
    </div>
    
    
  );
}

export default HomePage;
