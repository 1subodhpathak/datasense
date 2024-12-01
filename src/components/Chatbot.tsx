import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! I\'m your Data Science Learning Assistant. How can I help you learn about data analytics today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulated response based on keywords
  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase();
    if (input.includes('python')) {
      return "Python is essential for data science! Key libraries include pandas for data manipulation, numpy for numerical operations, and scikit-learn for machine learning.";
    } else if (input.includes('machine learning')) {
      return "Machine learning is a subset of AI that enables systems to learn from data. Key concepts include supervised learning, unsupervised learning, and deep learning.";
    } else if (input.includes('data analytics')) {
      return "Data analytics involves examining data sets to draw conclusions. It includes descriptive analytics (what happened), diagnostic analytics (why it happened), predictive analytics (what might happen), and prescriptive analytics (what should be done).";
    }
    return "That's an interesting question about data science! Could you provide more specific details about what you'd like to learn?";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');
    setIsTyping(true);

    // Simulate API delay
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col">
      <div className="bg-blue-600 p-4 rounded-t-lg">
        <h2 className="text-white text-lg font-semibold">Data Science Assistant</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`p-2 rounded-lg ${
                message.type === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}>
                {message.type === 'user' ? (
                  <User className="h-6 w-6" />
                ) : (
                  <Bot className="h-6 w-6" />
                )}
              </div>
              <div className={`p-3 rounded-lg ${
                message.type === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {message.content}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center space-x-2">
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about data science..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;