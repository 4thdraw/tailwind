import type { ProductItem } from '../types/banner';
import { Link } from 'react-router-dom';


interface ProductItemProps {
  v: ProductItem;
}

export default function Productinfo({ v }: ProductItemProps ) {

  const discountRate = Math.round((1 - v.판매가 / v.정가) * 100);

  return (
    <Link to={`/product/${v.productid}`} className='grid  grid-cols-[repeat(15,minmax(0,1fr))] md:flex md:flex-col'>
        <img src={v.이미지} className='rounded-[20px] 
               col-span-4   sm:col-span-3    md:w-full  object-cover'></img>
        <div className='flex flex-col gap-[12px] mt-[12px] font-kr 
               col-span-11  sm:col-span-12   md:w-full   ps-[20px] '>
            <p className='xl:text-xs  text-[clamp(12px,2.2vw,15px)]   font-400 text-gray'>{v.브랜드}</p>
            <p className='mb-2 xl:text-small text-[clamp(18px,3vw,20px)]  font-500'>{v.상품명}</p>
            <p className='flex gap-4 items-end font-600  md:mt-auto  xl:text-small  text-[clamp(18px,3vw,20px)]  '> 
           { discountRate > 0 && <span className='font-700 text-main font-en'>{discountRate}%</span> }
            <span className='font-en'>{v.판매가.toLocaleString()}원</span> 
           { v.판매가 !== v.정가 && <span className='text-gray font-en'>{v.정가.toLocaleString()}원</span> }
            </p>
        </div>
    </Link>
  )
}
