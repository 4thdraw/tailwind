import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Hd() {

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled( window.scrollY > 50 ); // 50px 이상 스크롤 시 true
    };
    window.addEventListener('scroll', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <header className={`fixed top-0 start-0 w-full border-bottom 
                      flex justify-between align-center px-4 py-[35px] z-[1000] font-kr
                      ${ scrolled ? " bg-white/10  backdrop-blur  " : "" }
                      `}>
        <h1>
            <a href="/" className='text-white font-en'>
              <img src="/logo.svg" className={`w-[180px]  ${ scrolled ?  ""  :  "filter  invert" } `}></img>
            </a>
        </h1>
        <nav>
            <ul className='flex gap-6 '>
                <li>
                    <Link to="/about"  className={` ${ scrolled ? "" : "text-white"}  hover:text-main hover:border-b-2 text-navi font-500`} >회사소개</Link>
                </li>
                <li>
                    <Link to="/product"   className={` ${ scrolled ? "" : "text-white"}  hover:text-main hover:border-b-2 text-navi font-500`} >제품소개</Link>
                </li>
                <li>
                    <Link to="/board"  className={` ${ scrolled ? "" : "text-white"}  hover:text-main hover:border-b-2 text-navi font-500`}>커뮤니티</Link>
                </li>                
            </ul>
        </nav>
    </header>
  )
}
