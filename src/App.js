import React,{useState} from 'react';
import './App.css';

import Header from './components/Header';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Login from './components/Login';
import SlideShow from './components/SlideShow';
import ServiciosInteractivos from './components/ServiciosInteractivos';
import ChatbotToggle from './components/ChatbotToggle';
import ChatbotPanel from './components/ChatbotPanel';


function App() {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
  setChatbotVisible((prev) => !prev);
};
  return (
    <div className="App">
      <Login />
      <Header />
      <SlideShow />
      <Servicios />
      <ServiciosInteractivos />
      <Contacto />
       {/* Chatbot flotante */}
    <ChatbotToggle onToggle={toggleChatbot} />
    <ChatbotPanel visible={chatbotVisible} onClose={() => setChatbotVisible(false)} />

    </div>
  );
}

export default App;