import { useState, useEffect } from 'react';
import { Link,  useLocation } from 'react-router-dom'
import { Swiper , SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Hd() {

  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();
  const isRoot : boolean = location.pathname === "/";


  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled( window.scrollY > 50 ); // 50px 이상 스크롤 시 true
    };
    window.addEventListener('scroll', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <header className={`fixed top-0 start-0 w-full border-bottom 
                        z-[1000] font-kr
                      ${ scrolled ? " bg-white/10  backdrop-blur  " : "" }
                      `}>
                        <div className={`
                             bg-black text-white text-center py-2 
                             ${ scrolled ? " hidden  " : "" }
                          `}>
                            <Swiper 
                               slidesPerView={1}
                               modules={[Autoplay, EffectFade]}
                               effect="fade"
                               fadeEffect={{ crossFade: true }}
                               autoplay={{
                                  delay: 3000,
                                  disableOnInteraction: false,
                                }}
                               loop={true}
                               >
                                <SwiperSlide>
                                  [EVENT] 신규회원 혜택 1만원 적립금!
                                </SwiperSlide>
                                <SwiperSlide>
                                  [EVENT] 5만원이상 무료배송 + 적립금
                                </SwiperSlide>
                            </Swiper>                            
                        </div>
                        <div className='flex justify-between align-center px-4 py-[35px]'>
                          <h1>
                              <a href="/" className='text-white font-en'>
                                <img src="/logo.svg" className={`w-[180px]    ${ isRoot ?  scrolled  ?  ""  :  "filter  invert" : "" }` }></img>
                              </a>
                          </h1>
                          <nav>
                              <ul className='flex gap-6 '>
                                  <li>
                                      <Link to="/about"  className={` ${  isRoot ? scrolled ? "" : "text-white" : "" }  hover:text-main hover:border-b-2 text-navi font-500`} >회사소개</Link>
                                  </li>
                                  <li>
                                      <Link to="/product"   className={` ${ isRoot ? scrolled ? "" : "text-white" : "" }  hover:text-main hover:border-b-2 text-navi font-500`} >제품소개</Link>
                                  </li>
                                  <li>
                                      <Link to="/board"  className={` ${ isRoot ?  scrolled ? "" : "text-white" : "" }  hover:text-main hover:border-b-2 text-navi font-500`}>커뮤니티</Link>
                                  </li>                
                              </ul>
                          </nav>
                        </div>
    </header>
  )
}
