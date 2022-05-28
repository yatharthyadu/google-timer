import { useState, useRef } from "react";
// import { Button, Stack } from '@chakra-ui/react'

export const Timer = ()=>{
    const [timer, setTimer] = useState(0);
    const countRef = useRef(0);
    const [status, setStatus] = useState(false);

    const handleStart = ()=>{
        if(status){
            return;
        }
        countRef.current = setInterval(()=>{
            setTimer((p)=>p+1);
        },1000);
        setStatus(true);
    };

    const handleStop = ()=>{
        setStatus(false);
        return clearInterval(countRef.current);
    };

    const handleReset = ()=>{
        setStatus(false);
        clearInterval(countRef.current);
        setTimer(0);
    };

    return (
        <div>
            <h1>See Timer:{timer}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
   

    )
}