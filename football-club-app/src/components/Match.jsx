import { useEffect, useState } from 'react';

export default function Match({ newMatch }) {
  const [newMatchData, setNewMatchData] = useState({});

  useEffect(() => {
    if (newMatch) {
      setNewMatchData({
        firstTeam: newMatch.firstTeam,
        secondTeam: newMatch.secondTeam,
      });
    }
  }, [newMatch]);

  return (
    <>
      <div>{newMatchData.firstTeam} vs. {newMatchData.secondTeam}</div>
    </>
  );
}
