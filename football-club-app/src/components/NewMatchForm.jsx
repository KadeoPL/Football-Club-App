import { useState } from "react";

export default function NewMatchForm({onFormSubmit}){

    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit({ team1, team2 });
        setTeam1('');
        setTeam2('');
      };
    
    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Team Name:</label>
            <input 
              type="text" 
              value={team1} 
              onChange={(e) => setTeam1(e.target.value)} 
            />
          </div>
          <div>
            <label>Second Team Name:</label>
            <input 
              type="text" 
              value={team2} 
              onChange={(e) => setTeam2(e.target.value)} 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      );
    
}