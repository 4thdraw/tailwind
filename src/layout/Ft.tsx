import { useState } from "react";
import { Link } from "react-router-dom";


export default function Ft() {

  const [ plusarrow, setPlusarrow ] = useState<boolean>(true);
  const [ helpopen, setHelpopen ] = useState<boolean>(true);
  const [ comopen, setComopen ] = useState<boolean>(true); 

  return (
    <footer className="ft border-t-2 font-300 mt-[100px]">
       <div className="max-w-1550 px-5 gap-[60px] w-full mx-auto py-[50px] flex justify-between">
        <div className="logo hidden xl:block">
            <img src="/logo.svg" className="w-[150px]"></img>
        </div>
        <div className="flex-1  grid  grid-cols-12  font-kr leading-[1.8]">
            <div className="lg:col-span-4  md:col-span-6  col-span-12  companyinfo xl:order-first order-last">
                <h3 onClick={ ()=>{setComopen(!comopen)} } className="font-700 text-subtitle mb-3 flex justify-between border-b-2 md:border-none">주식회사 포랩코리아 
                <button className="md:hidden"  >
                  { comopen ? "+" : "-" }  
                </button></h3>
                <div className={` ${ comopen ? "hidden" : "" }  md:block`}>
                  <span className="font-500">대표 : </span> 강동균<br />
                  <span className="font-500">사업자등록번호 : </span> 578-81-03310 <a href="">[사업자정보확인]</a><br />                
                  <span className="font-500">통신판매업신고번호 : </span> 2024-서울마포-0658 호<br />
                  <span className="font-500">주소 : </span> 04056 서울 마포구 신촌로4길 22-8 4층 (동교동)<br />                
                  <span className="font-500">개인정보관리책임자 : </span> 서인석
                </div>
                <ul className="flex leading-[0.8] mt-10 font-500">
                  <li className="border-r-[1px]"><a href="" className="pe-2">회사소개</a></li>
                  <li className="border-r-[1px]"><a href="" className="px-2">이용약관</a></li>
                  <li className="border-r-[1px]"><a href="" className="px-2">개인정보정책</a></li>
                  <li><a href="" className="px-2">이용안내</a></li>                  
                </ul>
                {/* 모바일때노출되는  sns */}
                <div className="snslist  xl:hidden  flex  gap-4 items-end  mt-10">
                      <a href="" className="bg-black p-3 rounded-full">
                        <img src="/instar.svg" className="w-[24px]"></img>
                      </a>
                      <a href="" className="bg-black p-3  rounded-full">
                        <img src="/kakao.png" className="w-[24px]"></img>
                      </a>
                </div>
            </div>
            <div className="lg:col-span-8  md:col-span-6 col-span-12   flex flex-col lg:flex-row  lg:gap-[80px]">
              <div className="custominfo flex-1">
                <h3 className="font-700 text-subtitle mb-3">고객센터</h3>
                <div>
                  <span className="font-500">전화</span> 070-4800-3250 평일 10:00~17:00<br />
                  Break Time - 12:30~13:30 (주말, 공휴일 휴무)<br />
                  hyeongwon@fourlab.co.kr

                </div>
                <h3 className="font-700 text-subtitle mb-3 mt-10">BANK INFO</h3>
                <div>
                  국민은행<br />
                  032901-04-366203<br />
                  예금주 : 주식회사 포랩코리아
                </div>
              </div>
              <div className="flex-1 font-en flex flex-col  helpcontent flex-1 mt-10  lg:mt-0">
                <h3  onClick={()=>{ setHelpopen(!helpopen) }} className="font-700 text-subtitle mb-3 flex justify-between border-b-2 md:border-none">HELP  
                  <button className="md:hidden">
                    { helpopen ? "+" : "-" }
                  </button> 
                </h3>
                <div className={` ${ helpopen ? "hidden" : "" } md:block  mb-4  md:mb-0 `}>
                  <ul>
                    <li>
                      <Link to="/store">매장 안내</Link>
                    </li>
                    <li>
                      <Link to="/qna">1:1 문의</Link>
                    </li>
                    <li>
                      <Link to="/partner">입접 / 제휴문의</Link>
                    </li>
                  </ul>
                </div>
                 {/* 데스크탑에서만 노출되는   sns 패밀리컨텐츠 */}
                <div className="sns family mt-auto xl:flex hidden justify-between">
                   <div className="snslist flex gap-4 items-end">
                      <a href="" className="bg-black p-3 rounded-full">
                        <img src="/instar.svg" className="w-[24px]"></img>
                      </a>
                      <a href="" className="bg-black p-3  rounded-full">
                        <img src="/kakao.png" className="w-[24px]"></img>
                      </a>
                   </div>
                   <div className="familySite relative">
                      <button className="bg-black flex items-center justify-center gap-5 text-white 
                      h-[48px] w-[180px] rounded-full font-600" onClick={ () => { setPlusarrow(!plusarrow) } }>
                        FAMILY SITE
                        <svg className="family_icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line className="icon-line-h" x1="2" y1="6" x2="10" y2="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></line>
            { plusarrow  &&   <line className="icon-line-v" x1="6" y1="2" x2="6" y2="10" stroke="currentColor" 
                              stroke-width="1.5" stroke-linecap="round"></line> }
                        </svg>
                      </button>
                      { !plusarrow  &&   
                        <div className="familyList border bg-white rounded-[30px] px-4 py-5 
                          absolute w-full bottom-[50px] start-0 ">
                            <ul>
                              <li><a href="">포랩코리아</a></li>
                              <li><a href="">헌터코리아</a></li>
                              <li><a href="">포랩</a></li>
                              <li><a href="">블리퍼스</a></li>
                            </ul>
                        </div>
                      }
                   </div>
                </div>
              </div>                
            </div>
            
        </div>
       </div>
    </footer>
  )
}
