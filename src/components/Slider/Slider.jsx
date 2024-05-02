import React, { useEffect } from 'react'
import { getArrSlider } from './fn'


const banner = [
    { id: 0, banner: "https://photo-zmp3.zmdcdn.me/banner/8/b/6/1/8b6110aa6cddbece7565ba0168f3ea72.jpg" },
    { id: 1, banner: "https://photo-zmp3.zmdcdn.me/banner/1/e/d/4/1ed445615d7119557c913c2c2cb31b2e.jpg" },
    { id: 2, banner: "https://photo-zmp3.zmdcdn.me/banner/3/d/0/9/3d094286cd0a3d972f9d5f72e82514f2.jpg" },
];

const Slider = () => {
    // ainimation for banner
    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item')
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
                    sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
                } else if (item === min) {
                    sliderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10')
                } else {
                    sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10')
                }
            })
            min = (min === sliderEls.length - 1) ? 0 : min + 1
            max = (max === sliderEls.length - 1) ? 0 : max + 1
        }, 3000)
        return () => {
            intervalId && clearInterval(intervalId)
        }
    }, [])


    return (
        <div className='w-full overflow-hidden '>
            <div className='flex w-full gap-8 pt-8'>
                {banner?.map((item, index) => (
                    <img
                        key={item.encodeId}
                        src={item.banner}
                        className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${index <= 2 ? 'block' : 'hidden'}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider