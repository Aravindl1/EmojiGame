import React from 'react'
import './Card.css'


const Card = (props) => {
   const {emojiDetails,onEmoji} = props
   const {id,emojiName,emojiUrl} = emojiDetails

   const onClickEmoji = () => {
     onEmoji(id)
   }

  return (
    <li className='emoji-card'>
      <button className='card-button' type='button' onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className='card-emoji'/>
      </button>
    </li>
  )
}

export default Card