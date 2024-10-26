import React from "react";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/counter/counter";
// Assuming counterAtom is defined elsewhere
// export const counterAtom = atom({
//   key: 'counterAtom', // unique ID (with respect to other atoms/selectors)
//   default: 0, // default value
// });

// useRecoilValue => to access the value
// useSetRecoilState =>to change the value

export default function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom); // Accessing the atom
  return <div>{count}</div>;
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom); // Accessing the setter to change the value
  function increase() {
    setCount((c) => c + 1);
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom); // Accessing the setter
  function decrease() {
    setCount((c) => c - 1);
  }
  return (
    <div>
      <button onClick={decrease}>Decrease</button> {/* Corrected label */}
    </div>
  );
}
