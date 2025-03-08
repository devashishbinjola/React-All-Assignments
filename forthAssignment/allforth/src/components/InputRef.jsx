import React, {useRef} from 'react'

const InputRef = () => {
    const inputRef = useRef(null);

    const showAlert=()=>{
        alert(`Input Value is : ${inputRef.current.value}`)
    };
  return (
    <div>
      <input 
      type='text'
      ref={inputRef}
      />
      <button  onClick={showAlert} >
        Show Alert
    </button>

    </div>
  )
}

export default InputRef;
