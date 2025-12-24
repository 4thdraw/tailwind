import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Board from './Board';
import Product from './Product';
import Detail from './Detail';

export default function Content() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/board" element={<Board />} />
            <Route path="/product/:no" element={<Detail />} />
        </Routes>       
    </div>
  )
}
