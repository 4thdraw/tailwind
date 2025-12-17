import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import mainData from '../json/data.json';
import type { MainBannerJson } from '../types/banner';

import Productset from '../component/Productset';
import Productnew from '../component/Productnew';

export default function Home() {
  
const banners = mainData.mainBanner as MainBannerJson['mainBanner'];

  return (
    <div className="">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        // effect="fade"
        // fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        loop={true}
       
      >
      {
        banners.map((v, i)=> <SwiperSlide 
        className={`!h-[800px] bg-cover`} style={{ backgroundImage: `url(${v.imgurl})` }} key={i} >
          <div className="flex justify-center items-center h-full bg-black/30">
              <div className='flex flex-col gap-[10px] text-white items-center'>
                <h2 className=" text-[30px] 
                                uppercase 
                                font-extrabold 
                                tracking-[-0.028] 
                                leading-[1.01]">
                    {v.title}
                </h2>
                <p className="text-[24px] font-bold uppercase">
                    {v.subtitle}
                </p>
              </div>
          </div>
        </SwiperSlide> )
      }
       
      </Swiper>
      <Productset></Productset> 
      <Productnew></Productnew> 
    </div>
  )
}
