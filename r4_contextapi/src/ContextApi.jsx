import React, { useContext, useState, createContext } from "react";

const BulbContext = createContext();

export default function App() {
  const [bulbon, setBulbon] = useState(true); // Corrected capitalization for state setter

  return (
    <BulbContext.Provider value={{ bulbon, setBulbon }}>
      <div>
        <LightBulb />
      </div>
    </BulbContext.Provider>
  );
}

function LightBulb() {
  const { bulbon, setBulbon } = useContext(BulbContext); // Use context directly
  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  );
}

function BulbState() {
  const { bulbon } = useContext(BulbContext);
  return <div>{bulbon ? "Bulb on" : "Bulb off"}</div>; // Fixed typo
}

function ToggleBulbState() {
  const { bulbon, setBulbon } = useContext(BulbContext); // Use context directly

  function toggle() {
    setBulbon(!bulbon); // Corrected capitalization for state setter
  }

  return (
    <div>
      <button onClick={toggle}>Toggle The Bulb</button>
    </div>
  );
}
