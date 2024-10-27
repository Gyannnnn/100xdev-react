import React from 'react'
import { useRecoilState } from 'recoil'

export default function SelectorInRecoil() {
  return (
    <div>
        <Buttons/>
        <Counter/>
        <IsEven/>
    </div>
  )
}



function Buttons(){
    const setCount = useRecoilState()
    function increase(){
        setCount(c => c+1)
    }
    function decrease(){
        setCount(c => c-1)
    }
    return <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Increase</button>
    </div>
}