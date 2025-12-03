import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Board from './Board';

export default function Content() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/board" element={<Board />} />
        </Routes>       
    </div>
  )
}
