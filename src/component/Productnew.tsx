import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import { useRef, useEffect } from 'react'; 

import mainData from '../json/data.json';
import type {  MainProductResponse } from '../types/banner';


import Productinfo from './Productinfo';

import 'swiper/css';
import 'swiper/css/navigation'; // Add navigation styles
import { Swiper as SwiperInstance } from 'swiper';

export default function Productset() {

 const products = mainData.mainProduct as MainProductResponse['mainProduct'];
 const slideWidth = (1550 - 16 * 4) / 5; 

 

  const swiperRef = useRef<SwiperInstance | null>(null); // Typing the Swiper ref
  const prevBtnRef = useRef<HTMLButtonElement | null>(null); // Typing the prev button ref
  const nextBtnRef = useRef<HTMLButtonElement | null>(null); // Typing the next button ref

 useEffect(()=>{
  if(swiperRef.current && prevBtnRef.current && nextBtnRef.current){
      const swiper = swiperRef.current.swiper; // Access the underlying Swiper instance
      if (swiper) {
        swiper.params.navigation.prevEl = prevBtnRef.current;
        swiper.params.navigation.nextEl = nextBtnRef.current;
        swiper.navigation.update();
      }
  }
 }, [])

  return (
       <section className='max-w-1550 mx-auto  pb-[clamp(30px,8vw,100px)]  px-5 xl:px-0'>
        <h2 className='text-[clamp(22px,3vw,30px)] font-600 mb-[30px] 
                      flex justify-between items-center'>
          { products.섹션명.split("|")[1] }
          <div className='flex gap-3'>
            <button className='prevbtn' ref={prevBtnRef} >prev</button>
            <button className='nextbtn' ref={nextBtnRef} >next</button>
          </div>          
        </h2>
        <Swiper
          ref={swiperRef} 
          spaceBetween={16} // Space between slides
          slidesPerView="auto" // Auto width for each slide
          loop={true} // Infinite loop
          autoplay={{
            delay: 3000, // Auto-play interval (3 seconds)
            disableOnInteraction: false, // Keep autoplay even after user interaction
          }}
          navigation={{
            nextEl: '.nextbtn', // Specify the class of the next button
            prevEl: '.prevbtn', // Specify the class of the prev button
          }}
          modules={[ Autoplay, Navigation]}
         >
          {
            
              products.상품목록
              .filter( (v) => v.노출 )
              .sort((a, b) => new Date(b.등록날짜).getTime() - new Date(a.등록날짜).getTime())
              .slice(0, 5).map((v, i)=>{
               // v.등록날짜가 문자열임 "2025-12-10" 신상품 노출조건추가
                  return(
                    <SwiperSlide key={i} className='flex flex-col' style={{ width: `${slideWidth}px` }}>
                      <Productinfo v={v}></Productinfo>
                    </SwiperSlide>
                  )  
              })
          }
        </Swiper>        
      </section>
  )
}
