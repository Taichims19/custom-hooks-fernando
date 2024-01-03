import { useState } from 'react';



export const useCounter = ( inicialValue = 10 ) => {

  const [ counter, setUseCounter] = useState( inicialValue )

  const increment = ( value = 1) => setUseCounter((current)=> current + value);
  
  const decrement = ( value = 1) => {
    if(counter === 0) return;
    
    setUseCounter((current)=> current - value );
  } 
    
  
  const reset = () => setUseCounter( inicialValue );
  

  return { 
    counter,
    increment,
    decrement,
    reset
  }

}