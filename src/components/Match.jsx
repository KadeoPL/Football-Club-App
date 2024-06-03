import { useState } from "react";
export default function Match(formData){
    
    const [matchData, setMatchData] = useState({
        teamOne: '',
        teamTwo: '',
        date: '',
        time: '',
        location: '',
    });

    setMatchData(formData);
    
    return(
        <div className="flex flex-row h-14 items-center space-x-8 ">
            <div className="flex flex-row space-x-2">
                <h1 className="font-bold">{matchData.teamOne}</h1>
                <p>vs.</p>
                <h1 className="font-bold">{matchData.teamTwo}</h1>
            </div>    
            <div className="flex flex-row space-x-2">
                <h2>Data:</h2>
                <h2 className="font-bold">{matchData.date}</h2>
                <h2>Godzina:</h2>
                <h2 className="font-bold">{matchData.time}</h2>
                <h2>Miejsce:</h2>
                <h2 className="font-bold">{matchData.location}</h2>
            </div>
            <div className="flex flex-row space-x-2">
                <button>Edytuj</button>
                <button className="bg-red-500">Usuń</button>
            </div>
        </div>
    )
}