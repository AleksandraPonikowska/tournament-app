import React, {useState} from "react";
import Setup from "./components/Setup";
import Contest from "./components/Contest";

function App() {

  const [contestants, setContestants] = useState(null);

  const HandleStart = (contestantList) => {
    setContestants(contestantList);
  };

  return (
    <>
      {!contestants ? (
        <Setup onStart = {HandleStart}/>
      ) : (
        <Contest contestants={contestants}/>
      )
      }
    </>   
  );
}

export default App;
