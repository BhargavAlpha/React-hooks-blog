import { useState } from "react";
function useInputHandler(initialValue){
    const [input,setInput]=useState(initialValue);
    function handleChange(e) {
        setInput(e.target.value);
      }
    
      return {
        input,
        onChange: handleChange,
      };

}
export {useInputHandler};