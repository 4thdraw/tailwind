import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface PopupProps {
  setIsPopShow: React.Dispatch<React.SetStateAction<boolean>>;
} 

export default function Popup({ setIsPopShow }: PopupProps) {

  useEffect(() => {
    const hideUntil = localStorage.getItem("hidePopupUntil");
    if (hideUntil && new Date().getTime() < Number(hideUntil)) {
      setIsPopShow(false);
    }
  }, [setIsPopShow]);

  const handleCloseForDay = () => {
    const tomorrow = new Date();
    tomorrow.setHours(23, 59, 59, 999); // 오늘 하루 끝 시간
    localStorage.setItem("hidePopupUntil", tomorrow.getTime().toString());
    setIsPopShow(false);
 }

  return (
    <div className="fixed top-0 w-full h-full start-0 bg-black/70 z-[100000] 
                    flex flex-col justify-center items-center popup px-4">

        <div className='text-white flex justify-between items-center w-full md:max-w-[600px] pb-2 px-2'>
            <p  onClick={handleCloseForDay} >
                오늘 하루 닫기            
            </p>
            <button onClick={ () => setIsPopShow(false) }>닫기</button>
        </div>

        <Swiper
          className='md:max-w-[600px] w-full  rounded-[30px]  overflow-hidden'
          spaceBetween={0}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{
            type: 'fraction',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            }}
          loop={true}
        >
          {
            [1, 2, 3].map((v)=><SwiperSlide>
                <img src={`/popup/${v}.jpg`} className='w-full'></img>
            </SwiperSlide>)
          }          
           
        </Swiper>
    </div>
  )
}
