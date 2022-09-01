import { useEffect, useState } from 'react'

export const useCounter = () => {
    const [count, setCount] = useState(0);
    const Increment = () =>{
        setCount(count+1);
    }
    // const Decrement = () =>{
    //     setCount(count-1);
    // }
  return [count,Increment]
}

export const useTimer = () => {
    const [count,Increment] = useCounter();
    useEffect(()=>{
        const timer = setTimeout(()=>Increment(),1000);
        return ()=>{
            clearInterval(timer);
        }
    },[Increment])
    return count
}