export default function Match(formData){
    return(
        <div className="flex flex-row h-14 items-center space-x-8 ">
            <div className="flex flex-row space-x-2">
                <h1 className="font-bold">{formData.teamOne}</h1>
                <p>vs.</p>
                <h1 className="font-bold">{formData.teamTwo}</h1>
            </div>    
            <div className="flex flex-row space-x-2">
                <h2>Data:</h2>
                <h2 className="font-bold">{formData.date}</h2>
                <h2>Godzina:</h2>
                <h2 className="font-bold">{formData.time}</h2>
                <h2>Miejsce:</h2>
                <h2 className="font-bold">{formData.location}</h2>
            </div>
            <div className="flex flex-row space-x-2">
                <button>Edytuj</button>
                <button className="bg-red-500">Usuń</button>
            </div>
        </div>
    )
}