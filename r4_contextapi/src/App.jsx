import React, { useState } from "react";

export default function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const[bulbOn, SetbulbOn] = useState(true)
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState bulbOn={bulbOn} SetbulbOn={SetbulbOn} />
    </div>
  );
}

function BulbState({bulbOn}) {
  return <div>{
    bulbOn?"Bulb on":"Bulb of"
    }</div>;
} 

function ToggleBulbState({bulbOn,SetbulbOn}) {
  function toggle(){
    SetbulbOn(!bulbOn)
  }
  return (
    <div>
      <button onClick={toggle}>Toggle The Bulb</button>
    </div>
  );
}
