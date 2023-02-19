import React from "react";
import { useState } from 'react';
import { bet } from "../../Components/Web3components/Interaction";

function Live () {

  const [homeTeam, setHT] = useState();
  const [awayTeam, setAT] = useState();
  const [startTime, setST] = useState();

  //get team and amount as an input 
  const placeBet = async (team,amount)=>{
    await bet(team,0,amount);
  }

  return (
    <div>
    <h1>Live Matches</h1>
    <h2>Live</h2>
    <h2>Live Matches</h2>
    <h2>Live Matches</h2>
    {/* take value input */}
    <button onClick={placeBet}>Place Bet</button>
    </div>
  )
}

export default Live;