import { useEffect } from "react"

export default function Counter({counter}) {

useEffect(()=>{
console.log("Nothing changed")
},[])

useEffect(()=>{
console.log("Counter Changed");
return function(){
  console.log("Cleanedup")
} 
},[counter])


  return (
    <div>Counter : {counter}</div>
  )
}
