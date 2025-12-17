
import mainData from '../json/data.json';
import type {  MainProductResponse } from '../types/banner';


export default function Productset() {

 const products = mainData.mainProduct as MainProductResponse['mainProduct'];

  return (
       <section className='max-w-1550 mx-auto  py-[100px]'>
        <h2 className='text-title font-600 mb-[30px]'>
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
                    <li key={i} className='border pb-5 px-5'>
                      <img src={v.이미지}></img>
                       <div className='flex flex-col gap-[8px]'>
                         <p>{v.브랜드} {v.등록날짜}</p>
                         <p className='mb-2'>{v.상품명}</p>
                         <p className='flex gap-4 items-end'> 
                            <span className='font-500 text-main'>{Math.round( (1 - v.판매가 / v.정가) * 100)}%</span>
                            <span>{v.판매가.toLocaleString()}원</span> 
                            <span>{v.정가.toLocaleString()}원</span>
                         </p>
                       </div>
                    </li>
                  )  
              })
          }
        </ul>        
      </section>
  )
}
