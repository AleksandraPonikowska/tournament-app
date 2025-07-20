import React, { useState } from "react";

function Setup({onStart}) {
  const [contestants, setContestants] = useState("meow");

    const handleSubmit = (e) =>{
        e.preventDefault(); //przeładowywanie sie
        //alert(`${contestants}`);
        onStart(`${contestants}`);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
            <input 
                type="text"
                value={contestants}
                onChange={(e) => setContestants(e.target.value)}
                placeholder="meow"
            />
        </label>
        <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Setup;
