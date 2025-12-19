import Title from "../ui/Title"

export default function About() {
  return (
    <section className="flex flex-col items-center max-w-1550 mx-auto about">
        <img src="/ooo.png" className="mt-[200px]"></img>
        <img src="/logo.svg" className="w-[600px] mt-[100px]" alt="" />
        <Title bigtitle="Premium Life Style Platform" subtitle="" ></Title>

        <div className="content font-400  
        text-base leading-[28px] flex flex-col gap-4 text-center font-kr">
          <p>
            포랩은 고유한 감도와 차별화된 아이덴티티를 지닌 글로벌 프리미엄 브랜드를 국내에 수입·유통하는 '프리미엄 라이프스타일 플랫폼'입니다.<br></br>
            현재 영국의 HUNTER, 캐나다의 ALDO, 이탈리아의 BLIPERS, COLORS OF CALIFORNIA, COLMAR 등
            전 세계 각국의 시즌별 패션 & 라이프스타일 브랜드를 선별하여 소개하고 있습니다.
          </p> 
          <p>
            포랩은 단순한 유통을 넘어, 브랜드의 정체성을 온라인과 오프라인에서 정교하게 구현하고
            고객과의 깊이 있는 접점을 만들어가는 것을 목표로 합니다.
          </p>
          <p>
            포랩은 변화하는 시즌과 트렌드에 발맞춰 더욱 다양한 글로벌 브랜드를 발굴·소개하며,
            라이프스타일 플랫폼으로서의 방향성을 꾸준히 확장하고 있습니다.
          </p>
        </div>
        <div className="content font-500  mt-[80px]
                text-base leading-[28px] flex flex-col gap-4 text-center font-en">
                <p>
                  FOURLAB is a premium lifestyle platform that imports and distributes<br />
                  global brands with distinctive identities and refined sensibilities.
                </p>
                <p>
                  We currently curate and introduce a selection of seasonal fashion and lifestyle brands from around the world,<br />
                  including HUNTER (UK), ALDO (Canada), and BLIPERS, COLORS OF CALIFORNIA, and COLMAR (Italy).
                </p>
                <p>
                  Beyond distribution, FOURLAB is committed to precisely delivering each brand’s identity<br />
                  across both online and offline channels,
                  with the goal of fostering deeper, more meaningful connections with customers.
                </p>
                <p>
                  As trends and seasons continue to evolve, FOURLAB consistently expands its portfolio of global brands,<br />
                reinforcing its direction and presence as a leading lifestyle platform.
                </p>
        </div>

        <div className="brandlist bg-[#fafafa] py-[100px] w-full">
           <h2 className=" max-w-[1024px]  mx-auto text-title font-en font-600">BRAND</h2>
           <ul className="grid grid-cols-2 gap-5 max-w-[1024px]  mx-auto mt-10">
              <li><img src="/brand0.jpg" alt="" /></li>
              <li><img src="/brand1.jpg" alt="" /></li>
              <li><img src="/brand2.jpg" alt="" /></li>
              <li><img src="/brand3.jpg" alt="" /></li>
              <li><img src="/brand4.jpg" alt="" /></li>
              <li><img src="/brand5.jpg" alt="" /></li>
           </ul>
        </div>
    </section>
  )
}
