import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Matches from './Matches';
import Home from './Home';

export default function DashboardNav(){
    return (
        <Router>
        <div className="flex min-h-screen">
          <nav className="w-32 bg-black text-white p-4">
            <ul>
            <li className='pb-4'>
                <Link to="/home">Home</Link>
              </li>
              <li className='pb-4'>
                <Link to="/matches">Mecze</Link>
              </li>  
            </ul>
          </nav>
  
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/matches" element={<Matches />} />
          </Routes>
        </div>
      </Router>
    )
}