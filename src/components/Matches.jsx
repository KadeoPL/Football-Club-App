import { Link, Route, Routes } from 'react-router-dom';
import Match from './Match';
import AddMatch from './AddMatch';

export default function Matches() {
  return (
    <div className="flex flex-col">
        <div className='flex flex-row items-center'>
            <h1 className='text-6xl'>Mecze</h1>
            <Link to="addmatch" className="text-blue-500">Dodaj mecz</Link>
        </div>
      
      <Routes>
        <Route path="addmatch" element={<AddMatch />} />
      </Routes>

      <Match />
    </div>
  );
}
