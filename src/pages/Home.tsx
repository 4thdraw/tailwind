import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import { PlayIcon, PauseIcon } from "@heroicons/react/16/solid"


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import mainData from '../json/data.json';
import type { MainBannerJson } from '../types/banner';
import type { Swiper as SwiperType } from 'swiper'


import Productset from '../component/Productset';
import Productnew from '../component/Productnew';
import Popup from '../component/Popup';

export default function Home() {
  
const banners = mainData.mainBanner as MainBannerJson['mainBanner'];

const [isPop, setisPopshow ] = useState<boolean>(true);

const swiperRef = useRef<SwiperType | null>(null)
const [isPlaying, setIsPlaying] = useState<boolean>(true);

const handleToggle = () => {

  if (!swiperRef.current) return

  if (isPlaying) {
    swiperRef.current.autoplay.stop()
  } else {
    swiperRef.current.autoplay.start()
  }

  setIsPlaying(prev => !prev)
}



  return (
    <div className="">
    { isPop && <Popup setIsPopShow={setisPopshow} ></Popup> }  
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className='mainSlide'
        spaceBetween={20}
        slidesPerView={3.3}
        centeredSlides={true}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        // effect="fade"
        // fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
           type: 'fraction',
          //  type: 'progressbar',
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
       <div className="flex justify-between gap-3 items-center mt-4 max-w-[980px] mx-auto">
            <div className="h-[4px] bg-gray/50 overflow-hidden flex-1">

            </div>
            <div className="cust_fraction">
               <strong>1</strong> / <span>7</span>
            </div>
            <button className="border p-3 rounded-[50%]" onClick={handleToggle}>
              {
                isPlaying ? <PauseIcon className="w-[20px] h-[20px]"></PauseIcon>
                : <PlayIcon  className="w-[20px] h-[20px]"></PlayIcon>
              }
            </button>
       </div>
      </Swiper>
      <Productset></Productset> 
      <Productnew></Productnew> 
    </div>
  )
}
