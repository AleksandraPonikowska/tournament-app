import React, {useState} from "react";
import Brackets from "./Brackets";
import Duel from "./Duel";


function Contest({contestants, setContestants}) {

  const [view, setView] = useState("brackets");
  const [duelId, setDuelId] = useState(contestants.length);

  function handleDuelStart(id) {
    setDuelId(id);
    setView("duel")
  }

  function handleDuelEnd(winner) {
    contestants[duelId] = winner;
    setView("brackets")
  }

  return (
    <>
      {view === "brackets" && <Brackets contestants={contestants} onDuelStart = {handleDuelStart}/>}
      {view === "duel" && <Duel rivals = {[contestants[duelId*2],contestants[duelId*2+1]]} onDuelEnd = {handleDuelEnd} />}
    </>
  );
}

export default Contest;
