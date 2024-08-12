import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

export default function HooksCakeContainer() {
    const numCakes = useSelector(state => state.cake.numCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>hooks --number of cakes-- {numCakes}</h2>
        <button onClick={()=>dispatch(buyCake())}> buy cake </button>
    </div>
  )
}