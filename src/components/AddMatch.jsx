import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMatch({ onFormSubmit }) {
    const [formData, setFormData] = useState({
        teamOne: '',
        teamTwo: '',
        date: '',
        time: '',
        location: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }));
    };

    function handleSubmit(){
        onFormSubmit(formData);
        navigate('/matches');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Pierwsza drużyna
                <input 
                    className="mr-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                    type="text"
                    name="teamOne"
                    value={formData.teamOne}
                    onChange={handleChange}
                />
            </label>
            <label>
                Druga drużyna
                <input
                    className="mr-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                    name="teamTwo"
                    value={formData.teamTwo}
                    onChange={handleChange}
                />
            </label>
            <label>
                Data meczu
                <input
                    className="mr-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />
            </label>
            <label>
                Godzina meczu
                <input
                    className="mr-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                />
            </label>
            <label>
                Miejsce meczu
                <input
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                />
            </label>
            <button className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Dodaj mecz</button>
        </form>
    )
}