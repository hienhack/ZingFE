import { Link } from "react-router-dom";
import React, { useEffect,useState , useRef } from "react";
import { FaChevronRight,FaChevronLeft } from "react-icons/fa6";
import {getArrSlider} from './getArrSlider'
import sliderdata from './dataslider.json'

export function Slider() {
    useEffect(() => {
        const sliderEls = document.getElementsByClassName('banner_pics')
        let min = 0
        let max = 2
        const intervalId = setInterval(() => {
            const list = getArrSlider(min, max, sliderEls.length - 1)
            for (let i = 0; i < sliderEls.length; i++) {
                // Delete classnames (css)
                sliderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20')
                sliderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10')
                sliderEls[i]?.classList?.remove('animate-slide-left2', 'order-2', 'z-10')

                // Hide or Show images
                if (list.some(item => item === i)) {
                    sliderEls[i].style.cssText = `display: block`
                } else {
                    sliderEls[i].style.cssText = `display: none`
                }
            }
            // Add animation by adding classnames
            list.forEach(item => {
                if (item === max) {
                    sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-10')
                } else if (item === min) {
                    sliderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-20')
                } else {
                    sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-20')
                }
            })
            min = (min === sliderEls.length - 1) ? 0 : min + 1
            max = (max === sliderEls.length - 1) ? 0 : max + 1
        }, 5000)
        return () => {
            intervalId && clearInterval(intervalId)
        }
    }, [])
  
    return (
    <div className='w-full overflow-hidden'>
        <div className='flex w-full gap-8 mt-8'>
            {sliderdata?.map((item, index) => (
                <img
                    key={item.encodeId}
                    src={item.banner}
                    className={`banner_pics flex-1 object-contain w-[30%] rounded-lg ${index <= 2 ? 'block' : 'hidden'}`}
                >
                    
                </img>
            ))}
        </div>
    </div>
      
    );
  }
  
  