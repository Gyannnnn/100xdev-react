export default function useffect() {


useffect(()=>{
  console.log("Mount");
  return function(){
    console.log("Unmount")
  }
},[])


  return (
    <div>useffect</div>
  )
}
