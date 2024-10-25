import React, { useState } from "react";

// custom Hooks

function useCounter() {
  const [count, Setcount] = useState(0);
  function increament() {
    Setcount((c) => c + 1);
  }
  return{
    count,
    increament
  }
}

export default function App() {
  const {count,increament } = useCounter()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increament}>Increase The Value</button>
    </div>
  );
}
