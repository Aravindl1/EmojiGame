import React from 'react'
import './Navbar.css'


const Navbar = (props) => {
  const {currentScore,topScore,isGameProgress} = props

  return (
    <nav className='nav'>
      <div className='nav-left'>
        <img 
         src='https://assets.ccbp.in/frontend/react-js/game-logo-img.png'
         alt='emoji'
         className='nav-logo'
        />
        <h1 className='game-name'>Emoji Game</h1>
      </div>
        {isGameProgress && (
          <div className='nav-score'>
            <p>{`Score: ${currentScore}`}</p>
            <p>{`Top Score: ${topScore}`}</p>
          </div>
        )}     
    </nav>
  )
}

export default Navbar