import React, { useState } from "react";

function Setup({onStart}) {
  const [contestants, setContestants] = useState("miau miau\nkotek\ntruskawka\nhopsa hopsa");

    const handleSubmit = (e) =>{
        e.preventDefault();

        const list2 = contestants.split("\n")
        const list1 = Array(list2.length).fill("???");
        
        onStart(Array.prototype.concat(list1, list2));
    }
  return (
    <div>
      <h2>ENTER CONTESTANTS</h2>
      <form onSubmit={handleSubmit}>
        <label>
            <textarea
                type="text"
                rows = {8}
                value={contestants}
                onChange={(e) => setContestants(e.target.value)}
                placeholder=""
            />
        </label>
        <p>
          <button type="submit">Submit</button>
        </p>

        </form>
    </div>
  );
}

export default Setup;
