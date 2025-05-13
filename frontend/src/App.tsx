import { useState } from 'react'
import { ChatButton } from './components/ChatButton'
import { ChatWindow } from './components/ChatWindow'
import { ProductList } from './components/ProductList'
import { Header } from './components/Header'
import './App.css'
import { Message } from './types/types'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  
  const answers = [
    "Thanks for your question! I'll help you with that.",
    "That's an interesting question. Let me explain...", 
    "Here's what you need to know about that...",
    "Great question! The answer is...",
    "I understand what you're asking. Here's the response..."
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    const prompt = question
    setQuestion('')
    
    // Add user question
    setMessages(prev => [...prev, { type: 'question', content: prompt }])
    

    // TODO: Modify below to call the backend API and set the answer
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
    setMessages(prev => prev.concat({ type: 'answer', content: randomAnswer, contentType: 'markdown_token' }))
  }

  return (
    <div className="app-container">
      <Header />
      <ProductList />
      <ChatButton 
        onClick={() => setIsChatOpen(true)}
        isVisible={!isChatOpen}
      />

      {isChatOpen && (
        <ChatWindow
          messages={messages}
          onClose={() => setIsChatOpen(false)}
          question={question}
          onQuestionChange={(e) => setQuestion(e.target.value)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

export default App
