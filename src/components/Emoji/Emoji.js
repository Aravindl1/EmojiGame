import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import WinorLose from '../WinorLose/WinorLose'
import './Emoji.css'


class Emoji extends Component {
  state = {clickedEmojiList:[], topScore:'', isGameProgress:true}

  shuffleEmojiList = () => {
    const {emojiLists} = this.props
    return emojiLists.sort(() => Math.random() - 0.5)
  }

  getShuffleList = () => {
    const shuffleList = this.shuffleEmojiList()

    return (
       <ul className='shuffle-card'>
        {shuffleList.map(each => (
          <Card 
            key={each.id}
            onEmoji={this.onEmoji}
            emojiDetails={each}
          />
        ))}
       </ul>
    )
  }

  resetGame = () => {
    this.setState({clickedEmojiList:[],isGameProgress:true})
  }

  getScoreCard = () => {
     const {emojiLists} = this.props
     const {clickedEmojiList} = this.state
     const isWon = clickedEmojiList.length === emojiLists.length

     return (
      <WinorLose 
        isWon={isWon}
        score = {clickedEmojiList.length}
        onClickPlayAgain = {this.resetGame}
      />
     )
  }
   
  finishGame = currentScore => {
     const {topScore} = this.state

     let newScore = topScore

     if (currentScore > newScore) {
      newScore = currentScore
     }
     this.setState({topScore: newScore, isGameProgress: false})
  }

  onEmoji = id => {
    const {emojiLists} = this.props
    const {clickedEmojiList}  = this.state

    const isEmojiClicked = clickedEmojiList.includes(id)
    const clickedEmojiLength = clickedEmojiList.length

    if (isEmojiClicked) {
      this.finishGame(clickedEmojiLength)
    } else {
      if (clickedEmojiLength === emojiLists.length - 1) {
        this.finishGame(emojiLists.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList,id]
      }))
    }
  }

  render() {
    const {clickedEmojiList,topScore,isGameProgress} = this.state

  return (
    <div className='emoji-container'>
      <Navbar
        currentScore={clickedEmojiList.length}
        topScore={topScore}
        isGameProgress={isGameProgress} 
      />
      <div className='shuffle-container'>
        {isGameProgress? this.getShuffleList() : this.getScoreCard()}
      </div>
    </div>
   )
  }
}

export default Emoji