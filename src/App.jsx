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

  const [gameOver, setGameOver] = useState(false)
  const endGame = () => {
    setGameOver(true)
    setExtractedNumbers([])
    setLastExtracted(null)
  }


  return (
    <>

      <div className='container mt-3'>
        <h1 className='text-center mb-3 text-light'>TOMBOLA</h1>
        <div className='d-flex justify-content-center'>
          <div className='number-grid mb-3 me-3'>
            {numbers.map((number) => {

              let classe = "number"

              if (number === lastExtracted) {
                classe = "last"
              } else if (extractedNumbers.includes(number)) {
                classe = "extracted"
              }

              return (
                <div key={number} className={classe}>
                  {number}
                </div>
              )
            })}
          </div>

          <div className='d-flex flex-column min-width'>
            <div className='mb-2 text-center'>
              Ultimo numero <div className='font'>{lastExtracted ? lastExtracted : "-"}</div>
            </div>

            <hr />

            <button className='btn btn-warning mb-2' onClick={extractNumber}>
              Estrai
            </button>

            <button className='btn btn-danger mb-2' onClick={endGame}>
              Termina Gioco
            </button>
          </div>
        </div>
      </div >
    </>
  )
}