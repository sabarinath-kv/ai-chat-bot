import { useState } from 'react'
import { ChatButton } from './components/ChatButton'
import { ChatWindow } from './components/ChatWindow'
import { ProductList } from './components/ProductList'
import { Header } from './components/Header'
import './App.css'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<{type: 'question' | 'answer' | 'loading', text: string}[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const answers = [
    "Thanks for your question! I'll help you with that.",
    "That's an interesting question. Let me explain...", 
    "Here's what you need to know about that...",
    "Great question! The answer is...",
    "I understand what you're asking. Here's the response..."
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim() || isLoading) return

    const userQuestion = question
    setQuestion('')
    
    // Add user question
    setMessages(prev => [...prev, { type: 'question', text: userQuestion }])
    
    // Show loading state
    setIsLoading(true)
    setMessages(prev => [...prev, { type: 'loading', text: '' }])

    // TODO: Modify below to call the backend API and set the answer
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
    setMessages(prev => prev.filter(msg => msg.type !== 'loading').concat({ type: 'answer', text: randomAnswer }))
    setIsLoading(false)
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
