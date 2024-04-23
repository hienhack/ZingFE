import { useState } from "react";

const banner = "https://photo-zmp3.zmdcdn.me/cover/3/f/4/1/3f41f32d1ca9baeb2206137e5f2eab5c.jpg"

const topic_nations =[{
  title: "Nhạc Việt",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/9/5/8/e/958e9994c6720513cc84a7f7a478020b.jpg"
},
{
  title: "Nhạc Âu Mỹ",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/d/6/4/0/d640e486023bb0bc1bbe4d94209ff648.jpg"
},
{
  title: "Nhạc Hàn",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/9/0/c/6/90c615657364a570232d7f6e86ffa6da.jpg"
},
{
  title: "Nhạc Hoa",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/0/6/e/0/06e09e84d6c6ef29f588e0c6032d72bf.jpg"
}
]

const topic_outstanding = [{
  title: "BXH Nhạc Mới",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/d/b/e/4/dbe426a555b7d680be25232007739019.jpg"
},
{
  title: "Top 100",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/2/d/2/d/2d2d88326a507319335ffc2e2887c0b7.jpg"
},
{
  title: "Artist's Story",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/a/c/9/e/ac9e073bbfbaadea7b1cb50bd047ece0.jpg"
},
{
  title: "Nhạc Trẻ",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/6/6/3/5/6635bad85a570ca140e207910b5d44f1.jpg"
}
]

const mood_activity = [{
  title: "NGỦ NGON",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/4/a/3/b/4a3b5265ee2c9e2c84f5a88194382b5d.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/0/3/9/d0396a14b69a81d3be14837218a36cbf.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/a/b/b/dabbdb6a883c2e806ca2122c180bf9ac.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/6/2/2/f62293ddfaccb64104faac8a20d4f739.jpg"]
  },
{
  title: "WORKOUT",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/d/b/5/c/db5cf069b328c7858b2d9642cc6b4529.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/c/7/1/6c71b38b65b49236a4f8e3400e6f4e98.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/e/4/8/9e487b9bacfc5eff48b3a8e4b414da27.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/1/7/a/717a43589836d3d5e95f62feaa506fac.jpg"]
},
{
  title: "KHÚC NHẠC VUI",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/5/4/5/4/5454a8586d26bd5e5bdb7682b84dce0f.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/1/d/8/01d832968b897886b93fab140a9d9eac.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/3/7/b/637b8d95ccd7af763ad1837352ce7781.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/c/e/3/0ce316dcb5f5fb0875b3b7164ffe448b.jpg"]

},
{
  title: "DINNER",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/1/c/c/8/1cc8ae9704ae8fb7e34487ce744083a9.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/9/5/5/2955d83bfa5d429dc8309951335cae24.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/8/5/b/b85be414ba667f9f4f7d032206e172ae.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/5/4/d/554dd404c9de99f821040b84881a8017.jpg"]
}
,
{
  title: "CHƠI GAME",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/4/d/f/4/4df44f0a15edb254717c383cf256b193.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/7/c/7/97c7e9f277edf5cdb3269426c5b00ad2.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/6/1/6/3616446a76fe23c9cb858d4fe4308964.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/a/1/1/fa116477fb11d4e67d06781ad271d060.jpg"]
},
{
  title: "TIỆC TÙNG",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/0/8/7/8/0878113f776f53892e91935f0913cc0b.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/6/4/456422fcfdcb519b7f89c8749bdbd4b3.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/b/9/3/4b931c5c8088ec828841ece777f5d0b7.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/2/0/d/c20d0f3e9ab122ec414775be6c8e759e.jpg"]
},
{
  title: "CÀ PHÊ",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/b/b/b/0/bbb0a8963e9ed3b81974613b52b9476c.jpg",
  img : ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/f/8/7/2f873dca46b41e1378c27b0a2d1d54d2.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/4/c/2/64c261bc77496d3b0096598360eee691.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/2/e/c/a2ec98c2c4951bbfd13f5ff4114f3675.jpg"]
},
{
  title: "NHỮNG CHUYẾN ĐI",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/8/e/4/a/8e4a3346be739dc204d16d1729e0c74e.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/5/f/a/55fa8c513461bef6c8e37f188347e0eb.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/e/8/d/1e8d03653cef922247dc8a8e48cfbb23.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/c/e/6/4ce668d112622c6aae0b4257a5071025.jpg"]
},

{
  title: "SPA - YOGA",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/d/0/d/7/d0d772a6c3e35b3e768d5c3ebf644ecd.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/1/8/1/e1816afeb2430de9cb47a4076d6a5f87.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/5/5/4/f5544d2947e814adeb5bcf43cc767b68.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/e/e/6/9ee63f3b032e05217d1b7dd4639cc998.jpg"]
},
{
  title: "CHILL/THƯ GIẢN",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/5/d/9/b/5d9b3a5de0e11982a0207c92b7ac4c5a.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/4/f/8/f4f86a8154d7632e4b1fa04b3050aff5.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/e/a/3/8ea332ffd37fac937d81ea72eb24ee69.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg"]
},
{
  title: "GIAI ĐIỆU BUỒN",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/8/9/0/b/890bea85e09d0f17c414cce6ee9f9214.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/b/7/6/8b761d27ea9eb2272497d6d2eeb8bf96.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/5/f/a/05fa76e277da24382463a0375f162a54.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/4/e/d/64ed736a37e22fe957c45b135051c3e2.jpg"]
},
{
  title: "LOFI",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/7/a/0/0/7a00dbc39931345b369fdf61889302f6.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/0/9/8309cbe078ac096917f0a0e61bfdbfd7.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/3/d/8/e3d8e5b02fbb8c04ae2f4e8e96a3f2a1.jpg"]
},
{
  title: "TẬP TRUNG",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/3/b/c/0/3bc090f304669e0a01bc5cccdbc0715a.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/2/1/f/f21f484b734a87ac7ea7cb26778c8fe7.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/7/4/5/a745d23073791f45d120a8db418ac4ed.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/5/4/7/f547039d777138c2624fdc18b0a2823a.jpg"]
},
{
  title: "TÌNH YÊU",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/b/7/7/5/b775816ff23ba94ed879a6282162f011.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/e/8/f/ee8fe5cea3078cde4cb5e79e4e02f0cd.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/a/f/9/caf97d4c039272a76739f4ba43b25ecc.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/9/a/c/a9ac17299632e085189e9fab90889d70.jpg"]
},
{
  title: "RUNNING",
  thumbnail:"https://photo-zmp3.zmdcdn.me/cover/8/5/d/1/85d1cfedf63d33e676e85071ab023f66.jpg",
  img: ["https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/d/6/4/ed64ee9c261713572ee78258bb88cd80.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/d/e/2/6de26b797ab9c72bb63b7b65ece05255.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/0/e/6/30e6ddc54f8a6bb8dba095d90c294335.jpg"]
}

]


function TopicPage() {
  const [showmore, setShowmore] = useState(false);
  const [active, setActive] = useState(true);

  return (
    <div className="px-[--padding-section] ">
      <div className="">
        {/* banner */}
        <div className="pt-[20px]  flex     ">
          <img src={banner} alt=""  className="rounded-md cursor-pointer"/>
        </div>

        {/* outstanding */}
        <div className="mt-12 mb-[-30px] ">
              <h3 className="mb-5 text-white text-[20px]  font-bold ">Nổi Bật</h3>
              <div className="mx-[-15px] flex">
                  {
                    topic_outstanding.map((outstanding) => (
                      <div className="w-[25%] px-[14px] mb-[30px] relative   ">
                        <div className="cursor-pointer overflow-hidden rounded-lg group  ">
                            <div className="w-[100%] h-auto  "> 
                              <img src={outstanding.thumbnail} alt="" className="transform transition duration-1000 group-hover:scale-[1.1]" />
                            </div>
                          <div className="absolute left-[50%] top-[50%]  z-1 w-[100%] items-center  flex  ">
                            <div className="     top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
                              <h3 className="text-white text-[26px]  font-bold">{outstanding.title}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
              </div>
        </div>

        {/* nations */}
        <div className="mt-12 mb-[-30px] ">
              <h3 className="mb-5 text-white text-[20px]  font-bold ">Quốc Gia</h3>
              <div className="mx-[-15px] flex">
                {
                  topic_nations.map((nation) => (
                    <div className="w-[25%] px-[14px] mb-[30px] relative ">
                      <div className="cursor-pointer overflow-hidden rounded-lg group  ">
                        <div className="w-[100%] h-auto "> 
                          <img src={nation.thumbnail} alt="" className="transform transition duration-1000 group-hover:scale-[1.1]" />
                        </div>
                        <div className="absolute left-[50%] top-[50%]  z-1 w-[100%] items-center  flex  ">
                          <div className="     top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
                            <h3 className="text-white text-[26px]  font-bold">{nation.title}</h3>
                          </div>
                        </div>
                      </div>
                  </div>
                  ))
                }
                  
              </div>

        </div>
        
        {/* mood_activity */}
        <div className="mt-12 mb-[-30px] ">
            <h3 className="mb-5 text-white text-[20px]  font-bold "> Tâm Trạng Và Hoạt Động</h3>
            <div>
              <div>
                {/* element */}
                <div className="mx-[-15px]  flex flex-wrap">
                  {mood_activity.filter((item,index)=>index<8).map((mood) => (
                    <div className="px-[15px] w-[25%] mb-0 relative">
                      <a class="" title={mood.title} href="">
                          <div className="block relative overflow-hidden rounded-md group mb-[15px]">
                              <figure >
                                <img src={mood.thumbnail} alt="" className="transform transition duration-1000 group-hover:scale-[1.1]"/>
                              </figure>
                              <div className="w-[100%] h-[100%] absolute top-0 left-0 flex flex-col justify-end pb-[15px] pl-[15px] ">
                                <h3 className="text-white text-[18px] mb-[10px] font-bold">{mood.title}</h3>
                                <div className="flex ">
                                  <div className="w-[20%] h-[100%] rounded-md overflow-hidden mr-[3px] border-[1px]-solid" >
                                    <figure >
                                      <img src={mood.img[0]} alt=""/>
                                    </figure>
                                  </div>
                                  <div className="w-[20%] h-[100%] rounded-md overflow-hidden mr-[3px] border-[1px]-solid" >
                                    <figure class="image is-48x48">
                                      <img src={mood.img[1]} alt=""/>
                                    </figure>
                                  </div>
                                  <div className="w-[20%] h-[100%] rounded-md overflow-hidden mr-[3px] border-[1px]-solid" >
                                    <figure >
                                      <img src={mood.img[2]} alt=""/>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            
                          </div>
                        
                      </a>

                      

                      
                      
                    
                  </div>
                  ))}
                </div>

                <div className="flex justify-center items-center flex-wrap">
                  {showmore ?
                  <div className="mx-[-15px]  flex flex-wrap">
                      {mood_activity.filter((item,index)=>index>=8).map((mood) => (
                        <div className="px-[15px] w-[25%] mb-0 relative">
                          <a class="" title={mood.title} href="">
                              <div className="block relative overflow-hidden rounded-md group mb-[15px]">
                                  <figure >
                                    <img src={mood.thumbnail} alt="" className="transform transition duration-1000 group-hover:scale-[1.1]"/>
                                  </figure>
                                  <div className="w-[100%] h-[100%] absolute top-0 left-0 flex flex-col justify-end pb-[15px] pl-[15px] ">
                                    <h3 className="text-white text-[18px] mb-[10px] font-bold">{mood.title}</h3>
                                    <div className="flex ">
                                      <div className="w-[20%] h-[100%] rounded-md overflow-hidden mr-[3px] border-[1px]-solid" >
                                        <figure >
                                          <img src={mood.img[0]} alt=""/>
                                        </figure>
                                      </div>
                                      <div className="w-[20%] h-[100%] rounded-md overflow-hidden mr-[3px] border-[1px]-solid" >
                                        <figure class="image is-48x48">
                                          <img src={mood.img[1]} alt=""/>
                                        </figure>
                                      </div>
                                      <div className="w-[20%] h-[100%] rounded-md overflow-hidden mr-[3px] border-[1px]-solid" >
                                        <figure >
                                          <img src={mood.img[2]} alt=""/>
                                        </figure>
                                      </div>
                                    </div>
                                  </div>
                                
                              </div>
                            
                          </a>

                          

                          
                          
                        
                      </div>
                      )) } 

                  

                  
                  </div> : null}
                  { active &&

                  (<button className=" font-medium text-[12px] text-white py-[9px] px-[24px] border border-[hsla(0,0%,100%,0.1)] rounded-[999px]"
                          onClick={()=> {setShowmore(!showmore) ,setActive(!active)}} >
                    {/* hide button when click button */}

                    {showmore ? null : "TẤT CẢ"}
                  </button>)
                  }
                </div>
                {/* ----------- */}
              </div>

            </div>

        </div>
      </div>
    </div>
  );
}

export default TopicPage;
