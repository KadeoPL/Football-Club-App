import { Link, Route, Routes } from 'react-router-dom';
import Match from './Match';
import AddMatch from './AddMatch';

export default function Matches() {
  return (
    <div className="flex flex-col">
      <Link to="addmatch" className="text-blue-500">Dodaj mecz</Link>
      
      <Routes>
        <Route path="addmatch" element={<AddMatch />} />
      </Routes>

      <Match />
    </div>
  );
}
