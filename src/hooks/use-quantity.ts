import {useState} from "react";

export function useQuantity (){
    const [counter, setCounter] = useState(0)

    const increment = ()=>{
        setCounter(counter + 1)
    }
    const decrement = () =>{
        (counter - 1) >= 0 ? setCounter(counter - 1) : setCounter(0)
    }
    return {counter, increment, decrement}
}