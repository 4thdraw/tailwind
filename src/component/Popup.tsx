import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface PopupProps {
  setIsPopShow: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Popup({ setIsPopShow }: PopupProps) {
  return (
    <div className="fixed top-0 w-full h-full start-0 bg-black/70 z-[100000] 
                    flex flex-col justify-center items-center popup px-4">

        <div className='text-white flex justify-between items-center w-full md:max-w-[600px] pb-2 px-2'>
            <p>
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
            <SwiperSlide>
                <img src="/popup/1.jpg" className='w-full'></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/popup/2.jpg" className='w-full'></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/popup/3.jpg" className='w-full'></img>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
