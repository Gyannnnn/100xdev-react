import React, { useContext, useState, createContext } from "react";

const BulbContext = createContext();

export default function App() {
  const [bulbon, setBulbon] = useState(true); 

  return (
    <BulbContext.Provider value={{ bulbon, setBulbon }}>
      <div>
        <LightBulb />
      </div>
    </BulbContext.Provider>
  );
}

function LightBulb() {
  const { bulbon, setBulbon } = useContext(BulbContext); 
  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  );
}

function BulbState() {
  const { bulbon } = useContext(BulbContext);
  return <div>{bulbon ? "Bulb on" : "Bulb off"}</div>; 
}

function ToggleBulbState() {
  const { bulbon, setBulbon } = useContext(BulbContext); 

  function toggle() {
    setBulbon(!bulbon); 
  }

  return (
    <div>
      <button onClick={toggle}>Toggle The Bulb</button>
    </div>
  );
}
