import React, { useEffect,useState , useRef, memo } from "react";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";

export function Sectionitem({srcpic}) {
    const [isHover,setIsHover] = useState(false)
    const imageRef = useRef()
    

    const handleHover = () => {
        setIsHover(true)
        imageRef.current.classList?.remove('animate-scale-down-image')
        imageRef.current.classList?.add('animate-scale-up-image')
    }
    const handleLeaver = () => {
        setIsHover(false)
        imageRef.current.classList?.remove('animate-scale-up-image')
        imageRef.current.classList?.add('animate-scale-down-image')
    }
    return (
        <div className="relative h-[144.567px] w-[144.567px] overflow-hidden rounded-[999px] border-4 border-[#ff4b4a] border-rounded-[999px]"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeaver}
        >
            <button className=""> 
            {isHover && <div className='absolute top-0 bottom-0 left-0 right-0 z-20 bg-black bg-opacity-25 rounded-[999px] text-white flex items-center justify-center'>
            <span className="p-1.5 border border-white rounded-full hover:text-slate-200 hover:border-slate-200"><BsFillPlayFill  size={33}/></span>
            </div>}
            <img 
            ref={imageRef}
            className='object-cover object-center rounded-[999px] h-[144.567px] w-[144.567px]'
            src={srcpic} alt="Picture"
            />
            <Link to='/'></Link>
            </button>
        </div>
        
    );
  }
