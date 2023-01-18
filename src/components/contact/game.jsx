import React from 'react'
import stats from '/Users/User/projects/portfolio/src/assets/IMG_6304.PNG'

const Game = () => {
  return (
    <div className='mt-6'>
      <div><p className="text-white text-2xl font-bold">Game with me</p>
      <p className="text-white text-base opacity-50">Fancy a 1v1 or br match with me? IDN: colshotg.</p></div>
<img src={stats} className="mt-2 rounded-[5px]" alt="cod" />
    </div>
  )
}

export default Game