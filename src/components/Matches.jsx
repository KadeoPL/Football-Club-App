import { Link, Route, Routes } from 'react-router-dom';
import Match from './Match';
import AddMatch from './AddMatch';
import { useState } from 'react';

export default function Matches() {
  const [formData, setFormData] = useState({
    teamOne: '',
    teamTwo: '',
    date: '',
    time: '',
    location: '',
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  }
  
  return (
    <div className="flex flex-col">
        <div className='flex flex-row items-center'>
            <h1 className='text-6xl'>Mecze</h1>
            <Link to="addmatch" className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Dodaj mecz</Link>
        </div>
      
      <Routes>
        <Route path="addmatch" element={<AddMatch onFormSubmit={handleFormSubmit}/>} />
      </Routes>

      <Match formData={formData}/>
    </div>
  );
}
