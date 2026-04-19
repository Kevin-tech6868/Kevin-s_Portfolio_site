import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';

const SYSTEM_PROMPT = `You are the helpful AI assistant for Kevin's portfolio.
Keep answers short, professional, and friendly.
Answer about skills, projects, and experience.
If unsure, suggest contacting via email.`;

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! I’m Kevin’s AI assistant. How can I help you?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();

    // ✅ Create updated messages FIRST (fixes stale state issue)
    const updatedMessages = [
      ...messages,
      { role: 'user', content: userMessage }
    ];

    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...updatedMessages
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();

      if (data?.message?.content) {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: data.message.content }
        ]);
      } else {
        throw new Error('Invalid response format');
      }

    } catch (error) {
      console.error("Frontend Error:", error);

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: '⚠️ AI is currently unavailable. Please try again later or contact via email.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-primary-500 text-white shadow-lg z-50 ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageSquare />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-dark-900 rounded-2xl shadow-xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-2">
                <Bot />
                <h3 className="text-white text-sm">Portfolio Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-xl text-sm max-w-[80%] ${
                      msg.role === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Loader2 className="animate-spin w-4 h-4" />
                  Thinking...
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask something..."
                  className="flex-1 p-2 rounded-lg bg-dark-800 text-white outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-primary-500 rounded-lg text-white"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}