import React , {useRef} from 'react'

export default function UseRef() {
  const inputRef = useRef()
function inputFocus(){
  inputRef.current.focus()
}

  return (
    <div>Signup
      <input ref={inputRef} type="text" />
      <input type="text" />
      <button onClick={inputFocus}>Submit</button>
    </div>
  )
}
