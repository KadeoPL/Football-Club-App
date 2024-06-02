import { useState } from "react";

export default function AddMatch() {
    const [formData, setFormData] = useState({
        teamOne: '',
        teamTwo: '',
        date: '',
        time: '',
        location: '',
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }));
    };

    function handleSubmit(){

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Pierwsza drużyna
                <input type="text" name="teamOne" value={formData.teamOne} onChange={handleChange}/>
            </label>
            <label>
                Druga drużyna
                <input type="text" name="teamTwo" value={formData.teamTwo} onChange={handleChange}/>
            </label>
            <label>
                Data meczu
                <input type="date" name="firstTeam" value={formData.date} onChange={handleChange}/>
            </label>
            <label>
                Godzina meczu
                <input type="time" name="time" value={formData.time} onChange={handleChange}/>
            </label>
            <label>
                Miejsce meczu
                <input type="text" name="location" value={formData.location} onChange={handleChange}/>
            </label>
            <button type="submit">Dodaj mecz</button>
        </form>
    )
}