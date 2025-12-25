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

  const [extractedNumbers, setExtractedNumbers] = useState([]);
  const [lastExtracted, setLastExtracted] = useState(null);

  const extractNumber = () => {
    const available = numbers.filter((number) => !extractedNumbers.includes(number))

    const index = Math.floor(Math.random() * available.length)
    const n = available[index]

    setExtractedNumbers([...extractedNumbers, n])
    setLastExtracted(n)
  }

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