import React, {useState} from 'react'
import useCounter from './useCounter'

export default function CounterOne(){
    const[count,increment,decrement,reset] = useCounter()

    return (
        <div>
            <h2> Count = {count} </h2>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>decrement</button>
            <button onClick = {reset}>reset</button>
        </div>
    )
} 