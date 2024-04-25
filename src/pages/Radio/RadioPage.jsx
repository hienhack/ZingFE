import React from "react"
import { useSelector} from 'react-redux'
import {Radio_Live} from './RadioSection'

function RadioPage() {
    return (

      <div className="px-[--padding-section]">
      <h1 className="text-white mt-[110px] font-bold text-[40px] mb-[25px]"> Radio</h1>
      <Radio_Live className="w-[1178px] "></Radio_Live>
      </div>
      
    );
  }

export default RadioPage;
