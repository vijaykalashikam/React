import React, { useState } from 'react';
import './App.css'

function Chatbot() {
  const [openChat, setOpenChat] = useState(false);
  const [chatText, setChatText] = useState('');
  const [message, setMessage] = useState([]); 
  const sendMessageHandler = () => {
    setMessage([...message, chatText]);
    setChatText('');
  }

  function openChatbox() {
    setOpenChat(prev => !prev);
  }

  function handleChatTextChange(event) {
    setChatText(event.target.value);
  }
  return (
    <div>
      <div>
        <div onClick={openChatbox}>Chat</div>
        {openChat ? (
          <div className='chatbox' style={{ width: "250px", height: "350px",border: "1px solid black" , position: "relative" , padding: "1px"}}>
          <div style={{backgroundColor: "burlywood"}}> <h4>Chatbot</h4></div> 
            {message.map((msg, index) => (
              <div style={{backgroundColor: "wheat"}} key={index}>{msg}</div>
            ))}
            <div className='chatinput' style={{display: 'flex', height: "30px",position: "absolute" , bottom: "0"}}>
              <input type='text' value={chatText} onChange={handleChatTextChange} />
              <button onClick={sendMessageHandler}>Send</button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Chatbot
