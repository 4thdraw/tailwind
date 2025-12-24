
import mainData from '../json/data.json';
import type {  MainProductResponse } from '../types/banner';

import Productinfo from './Productinfo';


export default function Productset() {

 const products = mainData.mainProduct as MainProductResponse['mainProduct'];

  return (
       <section className='max-w-1550 mx-auto  pb-[clamp(30px,8vw,100px)]  px-5 xl:px-0'>
        <h2 className='text-[clamp(22px,3vw,30px)] font-600 mb-[30px]'>
          { products.섹션명.split("|")[1] }
        </h2>
         <ul className='grid grid-cols-5 gap-3 '>
          {
            
              products.상품목록
              .filter( (v) => v.노출 )
              .sort((a, b) => new Date(b.등록날짜).getTime() - new Date(a.등록날짜).getTime())
              .slice(0, 5).map((v, i)=>{
               // v.등록날짜가 문자열임 "2025-12-10" 신상품 노출조건추가
                  return(
                    <li key={i} className='flex flex-col'>
                      <Productinfo v={v}></Productinfo>
                    </li>
                  )  
              })
          }
        </ul>        
      </section>
  )
}
