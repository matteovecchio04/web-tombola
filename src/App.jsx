import { useState } from 'react'

export default function Tombola() {

  // Create the array with a for cycle
  const createNumbers = () => {
    const numbers = []
    for (let i = 1; i <= 90; i++) {
      numbers.push(i)
    }
    return numbers
  }

  const numbers = createNumbers()

  return (
    <>
      {numbers.map((number) => (
        <div key={number}>
          {number}
        </div>
      ))}
    </>
  )
}