import React, { useState } from 'react';
import './App.css';
import Chatbot from './Chatbot';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };
  

  return (
    <div className="App">
      <button className="Modal_cls" onClick={toggleModal}>
        Modal
      </button>
      {isModalOpen ? (
        <div className="Modal">
          This is the modal content.
        </div>
      ) : (
        ""
      )}
      <div>
        <Chatbot/>
      </div>
    </div>
  );
}

export default App;
