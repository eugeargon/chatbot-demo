import { useState } from 'react'

const ChatBox = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const getBotResponse = async (message) => {
    const chatbotPath = 'https://app-ihgp4c2pia-no.a.run.app/chatbot';

    try {
      // Construir la ruta con el mensaje del usuario
      const query = encodeURIComponent(message);
      const chatbotUrl = `${chatbotPath}?query=${query}`;
  
      // Realizar la petición al endpoint
      const response = await fetch(chatbotUrl, {
        method: 'GET',
      });
  
      // Verificar que la petición fue exitosa
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.statusText}`);
      }
  
      // Convertir la respuesta en un objeto JSON
      const jsonResponse = await response.json();
  
      // Extraer la respuesta del bot del objeto JSON (modifica esto según la estructura de tu respuesta)
      const botResponse = jsonResponse.data.botResponse;
  
      return `Bot: ${botResponse}`;
    } catch (error) {
      console.error('Error al obtener la respuesta del bot:', error);
      return 'Bot: Lo siento, no puedo responder en este momento.';
    }
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (input.trim() === '') return
  
    setMessages([...messages, { text: input, sender: 'user' }])
    setInput('')
  
    const botResponse = await getBotResponse(input)
    setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }])
  }
  

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === 'user' ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chat-input"
        />
        <button type="submit" className="chat-submit">
        Enviar
        </button>
      </form>
    </div>
  )
}

export default ChatBox
