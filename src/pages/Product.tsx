import Title from "../ui/Title"

export default function Product() {
    interface Product {
      name: string;
      price: number;
      img :string;
    }

    const products: Product[] = [
      { name: "무선 이어폰", price: 89000, img : "5.jpg" },
      { name: "블루투스 스피커", price: 129000, img : "6.jpg" },
      { name: "기계식 키보드", price: 99000, img : "7.jpg" },
      { name: "게이밍 마우스", price: 45000, img : "8.jpg" },
      { name: "노트북 거치대", price: 32000, img : "9.jpg" },
      { name: "스마트워치", price: 199000, img : "10.jpg" },
      { name: "휴대용 보조배터리", price: 27000, img : "5.jpg" },
      { name: "모니터 27인치", price: 289000, img : "8.jpg" },
      { name: "USB C 허브", price: 39000, img : "5.jpg" },
      { name: "데스크 매트", price: 21000, img : "5.jpg" },
    ];
  return (
    <section className="px-5">
      <Title bigtitle="제품소개" subtitle="25년 업체 최초 인증제품을 소개합니다." ></Title>
       <ul className="grid  md:grid-cols-3  gap-[clamp(15px,5vw,30px)] grid-cols-2 max-w-[1024px] w-full  mx-auto mt-[clamp(2.5rem,3.8vw,10rem)]">
            {
              // products.map(()=>())
              // products.map(()=>{ return() })

              products.map((v)=>(
                                <li className="bg-white">
                                    <div>
                                      <img src={`/product/${v.img}`} className=" rounded-[20px] " ></img>
                                    </div>
                                    <div className="flex flex-col md:flex-row text-[clamp(18px,3vw,20px)] font-kr  md:justify-between py-4">
                                        <p >{v.name}</p>
                                        <p className="price text-[#ff5722] font-en">
                                          {v.price}
                                          <span className="text-[#999] font-400 text-[0.9em]">원</span>
                                        </p>
                                    </div>
                                </li>
                                )
                          )
            }
        </ul>
    </section>
  )
}
