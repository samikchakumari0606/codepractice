import React,{useRef} from 'react'

const UseRef = () => {
   const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Direct DOM access
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

export default UseRef
