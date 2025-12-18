export default function Ft() {
  return (
    <footer className="ft border-t-2 font-300">
       <div className="max-w-1550 gap-[60px] w-full mx-auto py-[50px] flex justify-between">
        <div className="logo">
            <img src="/logo.svg" className="w-[150px]"></img>
        </div>
        <div className="flex-1 flex gap-[50px] font-kr leading-[1.8]">
            <div className="flex-1">
                <h3 className="font-700 text-subtitle mb-5">주식회사 포랩코리아</h3>
                <div className="">
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
            </div>
            <div className="flex-1">
                <h3 className="font-700 text-subtitle mb-5">고객센터</h3>
                <div>
                  <span className="font-500">전화</span> 070-4800-3250 평일 10:00~17:00<br />
                  Break Time - 12:30~13:30 (주말, 공휴일 휴무)<br />
                  hyeongwon@fourlab.co.kr

                </div>
                

                <h3 className="font-700 text-subtitle mb-5">BANK INFO</h3>
            </div>
            <div className="flex-1 font-en">
                <h3 className="font-700 text-subtitle mb-5">HELP</h3>
            </div>
        </div>
       </div>
    </footer>
  )
}
