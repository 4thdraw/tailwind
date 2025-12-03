

export default function Home() {
  return (
    <div className="w-[1280px] mx-auto border-2 bg-white rounded-[20px] 
                    mt-[80px] p-[30px] flex justify-between ">
        <div>
            <h2 className=" text-[172px] 
                            uppercase 
                            font-extrabold 
                            tracking-[-0.028] 
                            leading-[1.01]">
                workout<br />with<br />me</h2>
            <p className="text-[16px] font-bold uppercase">
                A huge selection of health and fitness content,<br></br> 
                healthy recipes and transformation stories <br></br>
                to help you get fit and stay fit!</p>
        </div>
        <div className="w-[0px] flex justify-end pt-[150px]">
            <img src="/man.png" className="max-w-none"></img>
        </div>
    </div>
  )
}
