import { Link, Route, Routes } from 'react-router-dom';
import AddMatch from './AddMatch';
import MatchesList from './MatchesList';
import { useEffect, useState } from 'react';

export default function Matches() {
  const [matches, setMatches] = useState([]);

  const handleFormSubmit = (newMatch) => {
    setMatches(prevMatches => [...prevMatches, newMatch]);
  }

  useEffect(() => {
    console.log(matches);
  }, [matches]);

  return (
    <div className="flex flex-col">
        <div className='flex flex-row items-center'>
            <h1 className='text-6xl'>Mecze</h1>
            <Link to="addmatch" className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Dodaj mecz</Link>
        </div>
      
      <Routes>
        <Route path="addmatch" element={<AddMatch onFormSubmit={handleFormSubmit}/>} />
      </Routes>

      <MatchesList matches={matches} />
    </div>
  );
}
