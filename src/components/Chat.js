import React from 'react'
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Jane</span>
        <div className='chatIcons'>
          <img src={"test"}></img>
          <img src={"test"}></img>
          <img src={"test"}></img>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat