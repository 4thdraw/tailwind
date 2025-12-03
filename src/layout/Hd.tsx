import { Link } from 'react-router-dom'

export default function Hd() {
  return (
    <header className='fixed top-0 start-0 w-full border-bottom 
                      flex justify-between align-center px-4 py-[35px]'>
        <h1><a href="/" className='text-white'>WORKOUT</a></h1>
        <nav>
            <ul className='flex gap-4'>
                <li>
                    <Link to="/about"  className='text-white' >회사소개</Link>
                </li>
                <li>
                    <Link to="/product"  className='text-white' >제품소개</Link>
                </li>
                <li>
                    <Link to="/board" className='text-white'>커뮤니티</Link>
                </li>                
            </ul>
        </nav>
    </header>
  )
}
