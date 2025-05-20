import React from 'react'
import { useState } from 'react'

export default function counter() {
    const [count, setCount] = useState(0)

     const increment = () => {
      setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 text-center w-72 animate-fade-in-up fle"> 
      <h1 className="text-4xl font-bold text-blue-600 mb-6 animate-bounce transition duration-300"
      key={count}

      > {count} </h1>
      <button
    onClick={decrement}
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transform hover:scale-110 transition duration-200"
  >
    -
  </button>
  <button
    onClick={reset}
    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded transform hover:scale-110 transition duration-200"
  >
    Reset
  </button>
  <button
    onClick={increment}
    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transform hover:scale-110 transition duration-200"
  >
    +
  </button>
   </div>
  )
}
