import React, { useState } from "react";

function Setup() {
  const [count, setCount] = useState(0);  // 0 to wartość początkowa

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Setup;
