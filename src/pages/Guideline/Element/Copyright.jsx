import React from 'react'
import { GoDotFill } from "react-icons/go";


const element = [
  "Họ tên",
  "Số điện thoại",
  "Email",
  "Địa chỉ liên lạc",
  "Số CCCD/ CMND/ Hộ chiếu",
  "Ngày cấp",
  "Nơi cấp",
  "Link nội dung vi phạm"
]

const text1 = [
  "* Vui lòng cung cấp tối thiểu các loại tài liệu sau:",
  "-	Tài liệu chứng minh chủ thể quyền của người báo cáo",
  "-	Tài liệu chứng minh nội dung báo cáo là nội dung vi phạm bản quyền",
  "-	Văn bản ủy quyền trong trường hợp người báo cáo là người nhận ủy quyền từ chủ thể quyền"
]

const text2 = [
  "Bạn tuyên bố và đảm bảo rằng nội dung báo cáo vi phạm bản quyền đang được sử dụng không được phép của chủ thể quyền.",
  "Bạn tuyên bố và đảm bảo rằng tất cả các thông tin được khai báo, tài liệu cung cấp trong báo cáo vi phạm bản quyền này của bạn là hoàn toàn chính xác, hợp pháp và bạn sẵn sàng chịu mọi trách nhiệm pháp lý (bao gồm việc bồi thường thiệt hại cho các bên liên quan) liên quan đến yêu cầu của mình."]

const Copyright = () => {
  return (
    <div>
        <div >
        <div className='mb-[30px]'>
                <div className='text-[36px] font-light text-[#333]' >
                    <h3>Bản quyền</h3>
                </div>
            </div>

            <div className='text-[14px]'>
                <div >
                    <div >
                        <p className='mb-[20px]'><strong>Quy trình báo cáo vi phạm bản quyền</strong></p>
                        <p className='mb-[10px]'>Nếu bạn tin rằng bất kỳ Nội dung nào đang được phát hành thông qua Dịch vụ Zing MP3, vi phạm quyền sở hữu trí tuệ của bạn và/hoặc của bất kỳ bên thứ ba nào, vui lòng báo cáo cho chúng tôi về việc vi phạm bản quyền theo đúng yêu cầu dưới đây.</p>
                        <p className='mb-[20px]'>Chúng tôi sẽ xử lý từng thông báo vi phạm bản quyền mà chúng tôi nhận được theo quy định của Điều khoản sử dụng của Zing MP3 và quy định của pháp luật sở hữu trí tuệ và thông báo đến bạn kết quả giải quyết.</p>
                        <br/>
                        <p className='mb-[20px]'><strong>BÁO CÁO VI PHẠM BẢN QUYỀN</strong></p>

                        <div className='w-[75%]'>
                          <div className='w-[100%]'>
                            {element.map((item )=> (
                              <div className='mb-[20px] pr-[12px] flex'>
                                <div  className='pr-[12px] mb-[10px] mt-[5px] w-1/4' >{item}<span className='text-red-500'>*</span></div>
                                <input type="text"  className=' border-black border-2 pr-[12px] w-[75%] h-[35px]' />
                              </div>
                            ))}

                              <div className='mb-[20px] pr-[12px] flex'>
                                <div  className='pr-[12px] mb-[10px] mt-[5px] w-1/4' >Mô tả<span className='text-red-500'>*</span></div>
                                <input type="text"  className='border border-black border-1 pr-[12px] w-[75%] h-[94px]' />
                              </div>        
                              <div className='pr-[12px] flex'>
                                <div  className='pr-[12px] mb-[10px] mt-[5px] w-1/4' ></div>
                                
                                <button className='border w-[33.33%] mb-[10px] px-[20px] py-[10px] bg-[#721799] text-white text-[14px]'>Đính kèm tài liệu...</button>
                              </div>
                              
                      
                              <div className='mb-[20px]'>
                                {
                                  text1.map((item1) => (
                                    <div className='flex mb-[10px]'>
                                      <div  className='pr-[12px] mt-[5px] w-1/4' ></div>
                                      <p className='pr-[12px] w-[75%]'>{item1}</p>
                                    </div>
                                  ))
                                }
                                
                              </div>

                              <div  className='mb-[20px]'>
                                {
                                  text2.map((item2) => (
                                    <div className='flex mb-[30px]'>
                                      <div  className='flex pr-[12px] mb-[10px] w-1/4 justify-end ' ><GoDotFill className='text-[#a100a1] text-[40px]  ' />
</div>
                                      <p className='pr-[12px] w-[75%]'>{item2}
                                      </p>
                                    </div>
                                  ))
                                }
                                <div className='flex '>
                                            <div  className='pr-[12px] mb-[10px]  justify-end flex w-1/4' ><GoDotFill className='text-[#a100a1] text-[40px]  ' /></div>
                                            <p className='pr-[12px] w-[75%]'>Trường hợp nhận được yêu cầu từ chúng tôi, bạn vui lòng gửi đầy đủ bản cứng hợp pháp các tài liệu đã cung cấp để phục vụ mục đích đối chiếu thông tin. Địa chỉ:
                                            </p>
                                </div>
                                <div className='flex  mb-[30px]' >
                                      
                                      <div  className='pr-[12px] mb-[10px] mt-[5px] w-1/4' ></div>
                                      <p className='pr-[12px] w-[75%]'>
                                          Bộ phận Zing MP3 - Công ty Cổ phần VNG
                                          <br/>
                                          Z06 Đường số 13, phường Tân Thuận Đông, quận 7, thành phố Hồ Chí Minh, Việt Nam
                                      </p>
                                </div>
                              </div>

                              <div>
                              <div className='pr-[12px] flex'>
                                <div  className='pr-[12px] mb-[10px] mt-[5px] w-1/4' ><span></span></div>
                                
                                <button className='border w-[33.33%] mb-[10px] px-[20px] py-[10px] bg-[#721799] text-white text-[14px]'>Gửi</button>
                              </div>
                              </div>
                          </div>
                        </div>
                      


                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Copyright