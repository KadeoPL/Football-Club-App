import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Matches from './Matches';
import Home from './Home';

export default function DashboardNav(){
    return (
        <Router>
        <div>
          <nav>
            <ul>
            <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
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