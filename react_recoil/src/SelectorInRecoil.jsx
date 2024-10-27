import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/counter/counter";

export default function SelectorInRecoil() {
  return (
    <div>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount(c => c + 1);
  }
  function decrease() {
    setCount(c => c - 1);
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Increase</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

function IsEven() {
  const even = useRecoilValue(evenSelector);
  return <div>{even ? "Even " : "Odd"}</div>;
}
