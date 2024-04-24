import React, { useEffect,useState , useRef } from "react";
import {Sectionitem} from '../../components/SectionItems/sectionitem'
import { HiOutlineChevronRight , HiOutlineChevronLeft } from "react-icons/hi2";


export function Radio_Live() {
    const leftref = useRef  (null);
    const rightref = useRef  (null);
    function rightscroll() {
        var element = document.getElementById("Radios");
        element.scrollLeft += 172;
    }
    function leftscroll() {
        var element = document.getElementById("Radios");
        element.scrollLeft -= 172;
    }

    return (
    <div className="">  
        <div id="Radios" className="flex w-full overflow-hidden "> 
            <div className="place-content-center mb-[85px] z-40">
                <button className="bg-[#ffffff] bg-[length:38px_38px] rounded-full border-[8.5px] border-white absolute left-[40px] " 
                //onClick={() => {rightref.current?.scrollIntoView()}}
                onClick={leftscroll}
                > 
                    <HiOutlineChevronLeft className="text-[#32323d]" size={22}/>
                </button>
                <button className=" bg-[#ffffff] bg-[length:38px_38px] rounded-full border-[8.5px] border-white absolute right-[40px]" 
                //onClick={() => {leftref.current?.scrollIntoView()}}
                onClick={rightscroll}
                > 
                    <HiOutlineChevronRight className="text-[#32323d]" size={22}/>
                </button>
            </div>
            <div id="first_part" className="mr-[27.5px] ml-0" ref={rightref}>
                <div className="top_content relative">
                    <Sectionitem 
                    srcpic={'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/7/8/2/7782e4acfabd4bc4d0232a44769f5e1f.jpg'}
                    />
                    <figure className="image_host">
                        <img
                        className="absolute bottom-0 right-0 z-40 w-[52.0334px] h-[52.0334px] rounded-[999px] border-2 border-solid border-black" 
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg" alt=""/>
                    </figure>
                    <figure className="live_icon flex justify-center">
                        <img 
                        className="live_icon absolute top-[135px] bottom-0 z-30"
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="live_icon"/>
                    </figure>
                </div>                        
                <div className="bot-content mt-[20px]">
                    <h3 className="text-[16px] text-center text-white font-semibold leading-[21.7667px]">XONE Radio</h3>
                    <h3 className="text-[12px] font-sans text-center text-[--text-secondary] mt-0 leading-[15.9667px]">119 đang nghe</h3>
                </div>
            </div>

            <div className="mr-[27.5px] ml-0">
                <div className="top_content relative">
                    <Sectionitem 
                    srcpic={"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg"}
                    />
                    <figure className="image_host">
                        <img
                        className="absolute bottom-0 right-0 z-40  w-[52.0334px] h-[52.0334px] rounded-[999px] border-2 border-solid border-black" 
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/4/6/b/146b49d11cc9b3bc591823bfedb8bce2.jpg" alt=""/>
                    </figure>
                    <figure className="live_icon flex justify-center">
                        <img 
                        className="live_icon absolute top-[135px] bottom-0 z-40"
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="live_icon"/>
                    </figure>
                </div>                        
                <div className="bot-content mt-[20px]">
                    <h2 className="text-[16px] text-center text-white font-semibold leading-[21.7667px]">V-POP</h2>
                    <h2 className="text-[12px] font-sans text-center  text-[--text-secondary] leading-[15.9667px]">803 đang nghe</h2>
                </div>
            </div>
            
            <div className="mr-[27.5px] ml-0">
                <div className="top_content relative">
                    <Sectionitem 
                    srcpic={"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/f/6/a/cf6abd3b7665a678354dc6001f9412ba.jpg"}
                    />
                    <figure className="image_host">
                        <img
                        className="absolute bottom-0 right-0 z-40 w-[52.0334px] h-[52.0334px] rounded-[999px] border-2 border-solid border-black" 
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/c/c/f/2ccf96f6da468b466c5f8d1188f62eee.jpg" alt=""/>
                    </figure>
                    <figure className="live_icon flex justify-center">
                        <img 
                        className="live_icon absolute top-[135px] bottom-0 z-40"
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="live_icon"/>
                    </figure>
                </div>                        
                <div className="bot-content mt-[20px]">
                    <h2 className="text-[16px] text-center text-white  font-semibold leading-[21.7667px]">Pladio</h2>
                    <h2 className="text-[12px] font-sans text-center  text-[--text-secondary] leading-[15.9667px]">68 đang nghe</h2>
                </div>
            </div>

            <div className="mr-[27.5px] ml-0">
                <div className="top_content relative">
                    <Sectionitem 
                    srcpic={"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/2/3/5/e235117d191db9f7bbc82a3d31f17e60.jpg"}
                    />
                    <figure className="image_host">
                        <img
                        className="absolute bottom-0 right-0 z-40 w-[52.0334px] h-[52.0334px] rounded-[999px] border-2 border-solid border-black" 
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/7/8/d/778d152062edfbe0e4c4abf151858bf0.jpg" alt=""/>
                    </figure>
                    <figure className="live_icon flex justify-center">
                        <img 
                        className="live_icon absolute top-[135px] bottom-0 z-40"
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="live_icon"/>
                    </figure>
                </div>                        
                <div className="bot-content mt-[20px]">
                    <h2 className="text-[16px] text-center text-white  font-semibold leading-[21.7667px]">Chạm</h2>
                    <h2 className="text-[12px] font-sans text-center  text-[--text-secondary] leading-[15.9667px]">100 đang nghe</h2>
                </div>
            </div>

            <div className="mr-[27.5px] ml-0">
                <div className="top_content relative">
                    <Sectionitem 
                    srcpic={"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg"}
                    />
                    <figure className="image_host">
                        <img
                        className="absolute bottom-0 right-0 z-40 w-[52.0334px] h-[52.0334px] rounded-[999px] border-2 border-solid border-black" 
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg" alt=""/>
                    </figure>
                    <figure className="live_icon flex justify-center">
                        <img 
                        className="live_icon absolute top-[135px] bottom-0 z-40"
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="live_icon"/>
                    </figure>
                </div>                        
                <div className="bot-content mt-[20px]">
                    <h2 className="text-[16px] text-center text-white  font-semibold leading-[21.7667px]">Bolero</h2>
                    <h2 className="text-[12px] font-sans text-center  text-[--text-secondary] leading-[15.9667px]">110 đang nghe</h2>
                </div>
            </div>
            
            <div className="mr-[27.5px] ml-0">
                <div className="top_content relative">
                    <Sectionitem 
                    srcpic={"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/4/f/f/d4ffcd5734d4dae6266fec08719324f0.jpg"}
                    />
                    <figure className="image_host">
                        <img
                        className="absolute bottom-0 right-0 z-40 w-[52.0334px] h-[52.0334px] rounded-[999px] border-2 border-solid border-black" 
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/0/d/a/b0da7c8ecd6521337682f3a86fa0170f.jpg" alt=""/>
                    </figure>
                    <figure className="live_icon flex justify-center">
                        <img 
                        className="live_icon absolute top-[135px] bottom-0 z-40"
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="live_icon"/>
                    </figure>
                </div>                        
                <div className="bot-content mt-[20px]">
                    <h2 className="text-[16px] text-center text-white  font-semibold leading-[21.7667px]">US-UK</h2>
                    <h2 className="text-[12px] font-sans text-center  text-[--text-secondary] leading-[15.9667px]">300 đang nghe</h2>
                </div>
            </div>

            <div className="mr-[27.5px] ml-0">
                <div className="top_content relative">
                    <Sectionitem 
                    srcpic={"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/c/2/1/bc2115886f2e2e9f7cf2fa28a39cda12.jpg"}
                    />
                    <figure className="image_host">
                        <img
                        className="absolute bottom-0 right-0 z-40 w-[52.0334px] h-[52.0334px] rounded-[999px] border-2 border-solid border-black" 
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/c/2/1/bc2115886f2e2e9f7cf2fa28a39cda12.jpg" alt=""/>
                    </figure>
                    <figure className="live_icon flex justify-center">
                        <img 
                        className="live_icon absolute top-[135px] bottom-0 z-40"
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="live_icon"/>
                    </figure>
                </div>                        
                <div className="bot-content mt-[20px]">
                    <h2 className="text-[16px] text-center text-white  font-semibold leading-[21.7667px]">K-POP</h2>
                    <h2 className="text-[12px] font-sans text-center  text-[--text-secondary] leading-[15.9667px]">38 đang nghe</h2>
                </div>
            </div>

            <div className="mr-[27.5px] ml-0">
                <div className="top_content relative">
                    <Sectionitem 
                    srcpic={"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/f/b/0/efb05fb9097a7057aecef6ecb62bff5a.jpg"}
                    />
                    <figure className="image_host">
                        <img
                        className="absolute bottom-0 right-0 z-40 w-[52.0334px] h-[52.0334px] rounded-[999px] border-2 border-solid border-black" 
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/9/9/3/0993b3110c60ba6518fceeba9913d20d.jpg" alt=""/>
                    </figure>
                    <figure className="live_icon flex justify-center">
                        <img 
                        className="live_icon absolute top-[135px] bottom-0 z-40"
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="live_icon"/>
                    </figure>
                </div>                        
                <div className="bot-content mt-[20px]">
                    <h2 className="text-[16px] text-center text-white  font-semibold leading-[21.7667px]">Acoustic</h2>
                    <h2 className="text-[12px] font-sans text-center  text-[--text-secondary] leading-[15.9667px]">38 đang nghe</h2>
                </div>
            </div>

            <div className="mr-[27.5px] ml-0">
                <div className="top_content relative">
                    <Sectionitem 
                    srcpic={"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/f/2/2/bf223818f85e7fe129091b415038ca6c.jpg"}
                    />
                    <figure className="image_host">
                        <img
                        className="absolute bottom-0 right-0 z-40 w-[52.0334px] h-[52.0334px] rounded-[999px] border-2 border-solid border-black" 
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/f/3/b/bf3bf87a788a5d0b8719c6feee774a2e.jpg" alt=""/>
                    </figure>
                    <figure className="live_icon flex justify-center">
                        <img 
                        className="live_icon absolute top-[135px] bottom-0 z-40"
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="live_icon"/>
                    </figure>
                </div>                        
                <div className="bot-content mt-[20px]">
                    <h2 className="text-[16px] text-center text-white  font-semibold leading-[21.7667px]">Rap Việt</h2>
                    <h2 className="text-[12px] font-sans text-center  text-[--text-secondary] leading-[15.9667px]">32 đang nghe</h2>
                </div>
            </div>

            <div className='' id="end_part" ref={leftref}>
                <div className="top_content relative">
                    <Sectionitem 
                    srcpic={"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/f/6/2/ef629460aba3bf16ced1931b951a9dc6.jpg"}
                    />
                    <figure className="image_host">
                        <img
                        className="absolute bottom-0 right-0 z-40 w-[52.0334px] h-[52.0334px] rounded-[999px] border-2 border-solid border-black" 
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/f/6/2/ef629460aba3bf16ced1931b951a9dc6.jpg" alt=""/>
                    </figure>
                    <figure className="live_icon flex justify-center">
                        <img 
                        className="live_icon absolute top-[135px] bottom-0 z-40"
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="live_icon"/>
                    </figure>
                </div>                        
                <div className="bot-content mt-[20px]">
                    <h2 className="text-[16px] text-center text-white  font-semibold leading-[21.7667px]">EDM</h2>
                    <h2 className="text-[12px] font-sans text-center  text-[--text-secondary] leading-[15.9667px]">47 đang nghe</h2>
                </div>
            </div>
        </div>
    
    </div>

    )
    
}
