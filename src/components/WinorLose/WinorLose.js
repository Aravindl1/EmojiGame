import React from 'react'
import './WinorLose.css'


const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'


const WinorLose = (props) => {
   const {isWon, score, onClickPlayAgain} = props
   const imgUrl = isWon ? wonImage : loseImage
   const gameStatus = isWon ? 'You Won' : 'You Lose'
   const scoreText = isWon ? 'Best Score' : 'Score'

  return (
    <div className='result-container'>
       <div className='Score-container'>
        <h1 className='result-heading'>{gameStatus}</h1>
        <p className='result-score'>{scoreText}</p>
        <p className='result'>{score}</p>
        <button type='button' className='play-button' onClick={onClickPlayAgain}>
          Play Again
        </button>
       </div>
       <div>
        <img src={imgUrl} className='WinLoseImg' alt='Win or Lose'/>
       </div>
    </div>
  )
}

export default WinorLose