import Counter from "./Counter";



export default function useffect() {

//useEffect , dependency array , cleanups
useffect(()=>{
  console.log("Mount"); // mounting logic 
  return function(){
    console.log("Unmount") //unmount
  }
},[])


  return (
    <div><Counter/></div>
  )
}
