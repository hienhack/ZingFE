import React from 'react'

const Contact = () => {
  return (
    <div className='ml-[16.67%] text-[14px]'>
        <div >
            <figure className='mt-[3.1875rem] mb-[1.875rem]' >
                <img src="//static-zmp3.zmdcdn.me/skins/zmp3-v5.1/images/group-279.svg" alt=""/>
            </figure>
            <div >
                <div className='mb-[1.5623rem]' >
                    <h4 className='mb-[1.25rem] font-medium'>LIÊN HỆ VỚI CHÚNG TÔI</h4>
                    <p>
                        Chúng tôi luôn ghi nhận các đóng góp ý kiến của bạn để cải tiến và nâng cấp sản phẩm Zing MP3
                        ngày một hoàn thiện và hữu ích hơn. Đừng ngại chia sẻ ý tưởng cho chúng tôi.
                    </p>
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium !text-[16px]'>Chọn vấn đề bạn đang cần hỗ trợ: <span className='text-red-500'>*</span></label>
                    <select name="contact_type" class="mt-[8px] px-[15px] py-[12px] border" id="contact_type">
                        <option value="-1">Chọn vấn đề cần liên hệ</option>
                        <option value="1">Báo lỗi</option>
                        <option value="2">Góp ý sản phẩm</option>
                        <option value="3">Gia hạn, nâng cấp tài khoản Plus/ Premium</option>
                        <option value="4">Phát hành nội dung</option>
                        <option value="5">Hợp tác nội dung</option>
                        <option value="6">Tài khoản người dùng</option>
                        <option value="6">Vấn đề khác</option>
                    </select>
                    <p ></p>
                    <label className='mt-[20px] font-medium !text-[16px]'>Nội dung: <span className='text-red-500'>*</span></label>
                    <textarea className="mb-[20px]  px-[15px] py-[12px] h-[120px] border " placeholder="Nhập nội dung cần giúp đỡ" name="content"></textarea>
                    <label className=' font-medium !text-[16px]'> Họ tên: <span className='text-red-500'>*</span></label>
                    <input className='mb-[20px]  px-[15px] py-[12px] border' type="text" name="name"/>
                    <label className=' font-medium !text-[16px]'> Email: <span className='text-red-500'>*</span></label>
                    <input className='mb-[20px]  px-[15px] py-[12px] border' type="email" name="email"/>
                    <label className=' font-medium !text-[16px]'> Số điện thoại: <span className='text-red-500'>*</span> </label>
                    <input className='mb-[20px]  px-[15px] py-[12px] border' type="number" name="phone_number"/>
                    <div className='pr-[12px] flex'>
                                
                                
                                <button className='border rounded-md w-[33.33%] mb-[10px] px-[15px] py-[15px] bg-[#65509d] text-white text-[14px]'>GỬI</button>
                      </div>
                </div>
            </div>
        </div>
    </div>

  )

}

export default Contact
