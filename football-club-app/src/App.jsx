
import { useState } from "react";
import Match from "./components/Match"
import NewMatchForm from "./components/NewMatchForm";

function App() {
  const [newMatch, setNewMatch] = useState(null);

  const handleFormSubmit = (data) => {
    setNewMatch(data);
    console.log(data);
  };

  return (
    <>
    <NewMatchForm onFormSubmit={handleFormSubmit}/>
    <Match newMatch={newMatch}/>
    </>
  )
}

export default App
