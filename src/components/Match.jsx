export default function Match(){
    return(
        <div className="flex flex-row h-14 items-center space-x-4">
            <div className="flex flex-row ">
                <h1 className="font-bold">First Team</h1>
                <p>vs.</p>
                <h1 className="font-bold">Second Team</h1>
            </div>    
            <div className="flex flex-row">
                <h2>Data:</h2>
                <h2 className="font-bold">30.05.2024</h2>
                <h2>Godzina:</h2>
                <h2 className="font-bold">12:00</h2>
                <h2>Miejsce:</h2>
                <h2 className="font-bold">Stadion Gdów</h2>
            </div>
            <div className="flex flex-row">
                <button>Edytuj</button>
                <button>Usuń</button>
            </div>
        </div>
    )
}