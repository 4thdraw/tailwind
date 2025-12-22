import { useState, useEffect } from 'react'; //컨텐츠변경화면제어
import { Link,  useLocation } from 'react-router-dom' //주소창관련모듈
import { Swiper , SwiperSlide } from 'swiper/react'; //슬라이드
import { Autoplay, EffectFade } from 'swiper/modules'; //슬라이드 옵션
import {  Bars3Icon,   XMarkIcon } from "@heroicons/react/16/solid"; // ui모듈


import 'swiper/css'; //슬라이드 스타일
import 'swiper/css/effect-fade';

export default function Hd() {

  const [scrolled, setScrolled] = useState<boolean>(false); //스크롤판단여부
  const [ allmenu , setAllmenu ] = useState<boolean>(false); //메뉴여닫힘판단

  const location = useLocation(); //주소창분석
  const isRoot : boolean = location.pathname === "/"; //첫페이지구분

  useEffect(() => {
  setAllmenu(false); //메뉴닫힘
 }, [location.pathname]); //주소가 바뀔때마다 실행

  useEffect(() => {

    // 스크바의 위치가 50보다 커지면 true, 아니면  false
    const handleScroll = (): void => {
      setScrolled( window.scrollY > 50 ); // 50px 이상 스크롤 시 true
      setAllmenu(false);
    };

    const handleResizeEvent = () => {
       setAllmenu(false);
    };

    window.addEventListener('scroll',  handleScroll );
    window.addEventListener('resize',  handleResizeEvent );

    return (): void =>{ 
      window.removeEventListener('scroll',  handleScroll );
      window.removeEventListener('resize',  handleResizeEvent );
    }  
    // 절대 이 아래 식쓰지않기 실행안됨
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
                          <h1 className='flex flex-col items-center justify-center'>
                              <a href="/" className='text-white font-en '>
                                <img src="/logo.svg" className={`w-[180px]    ${ isRoot ?  scrolled  ?  ""  :  "filter  invert" : "" } ` }></img>
                              </a>
                          </h1>
                          <button className={`md:hidden w-[36px] ${  isRoot ? scrolled ? "" : "text-white" : "" }`}  onClick={ () => { setAllmenu(!allmenu) } } >
                            {
                              allmenu ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                            }
                          </button>
                          <nav className={` md:flex md:justify-end  ${ allmenu ? "" : "hidden" }  md:[position:unset]  absolute top-[100%] 
                                    w-full bg-black/70 md:bg-transparent start-0 py-8 md:py-0`}>
                              <ul className={`flex  flex-col  md:flex-row  items-center    md:gap-6  gap-4  `}>
                                  <li>
                                      <Link to="/about"  className={` ${  isRoot ? scrolled ? "" : "!text-white" : "" } text-white  md:text-black  hover:text-main hover:border-b-2 text-navi font-500`} >회사소개</Link>
                                  </li>
                                  <li>
                                      <Link to="/product"   className={` ${ isRoot ? scrolled ? "" : "!text-white" : "" } text-white  md:text-black  hover:text-main hover:border-b-2 text-navi font-500`} >제품소개</Link>
                                  </li>
                                  <li>
                                      <Link to="/board"  className={` ${ isRoot ?  scrolled ? "" : "!text-white" : "" } text-white  md:text-black  hover:text-main hover:border-b-2 text-navi font-500`}>커뮤니티</Link>
                                  </li>                
                              </ul>
                          </nav>
                        </div>
    </header>
  )
}
