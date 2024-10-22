import { useEffect } from "react"

export default function Counter({counter}) {

useEffect(()=>{
console.log("Nothing changed")
},[])

useEffect(()=>{
console.log("Counter Changed");
},[counter])


  return (
    <div>Counter : {counter}</div>
  )
}
