//src/components/DataSenseChat.tsx
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, X, Minimize2, Maximize2 } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const DataSenseChat = () => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Hello! I'm your Data Science Learning Assistant. How can I help you learn about data analytics today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    const responses: Record<string, string> = {
      python:
        "Python is essential for data science! We cover Python extensively in our courses, including pandas for data manipulation, numpy for numerical operations, and scikit-learn for machine learning. Would you like to explore our Python for Data Science course?",
      "machine learning":
        "Our Machine Learning course covers everything from basic algorithms to advanced neural networks. The curriculum includes supervised learning, unsupervised learning, and practical projects with real-world datasets. Would you like to know more about our ML course?",
      "data analytics":
        "Our Data Analytics program teaches you to extract meaningful insights from data. You'll learn descriptive analytics, diagnostic analytics, predictive analytics, and prescriptive analytics. Want to see our course curriculum?",
      course:
        "We offer several specialized courses including:\n- Data Science Fundamentals\n- Machine Learning Essentials\n- Data Analytics & Visualization\n- Python for Data Science\nWhich area interests you most?",
    };

    for (const [key, response] of Object.entries(responses)) {
      if (input.includes(key)) {
        return response;
      }
    }
    return "I can help you learn about our data science courses and resources. Feel free to ask about specific topics like Python, Machine Learning, or Data Analytics!";
  };

  const handleExpand = () => {
    navigate('/datasense-assistant', { state: { messages } });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { type: "user", content: input }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(input);
      setMessages((prev) => [...prev, { type: "bot", content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  if (isMinimized) {
    return (
      <div
        className="fixed bottom-4 right-4 bg-[#006D6F] text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-[#00B8BB] transition-colors z-50"
        onClick={() => setIsMinimized(false)}
      >
        <Bot className="h-6 w-6" />
      </div>
    );
  }

  return (
    <div
    className="fixed sm:bottom-4 sm:right-4 sm:w-96 w-[calc(100%-16px)] m-2 bottom-0 right-0 sm:h-[600px] h-[85vh] bg-white rounded-t-lg sm:rounded-lg shadow-xl flex flex-col z-50"
  >
    <div className="bg-[#006D6F] p-4 rounded-t-lg flex justify-between items-center">
      <h2 className="text-white text-lg font-semibold">DataSense Assistant</h2>
      <div className="flex gap-2">
        <button
          onClick={handleExpand}
          className="text-white hover:text-gray-200 p-2 hover:bg-[#00B8BB]"
          title="Expand chat"
        >
          <Maximize2 className="h-5 w-5" />
        </button>
        <button
          onClick={() => setIsMinimized(true)}
          className="text-white hover:text-gray-200 p-2 hover:bg-[#00B8BB]"
          title="Minimize chat"
        >
          <Minimize2 className="h-5 w-5" />
        </button>
        <button
          onClick={() =>
            setMessages([
              {
                type: "bot",
                content:
                  "Hello! I'm your Data Science Learning Assistant. How can I help you learn about data analytics today?",
              },
            ])
          }
          className="text-white hover:text-gray-200 p-2 hover:bg-[#00B8BB]"
          title="Clear chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>

      <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-3 sm:space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start space-x-2 max-w-[85%] sm:max-w-[80%] ${
                message.type === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  message.type === "user"
                    ? "bg-[#00B8BB] text-white rounded-br-none"
                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                }`}
              >
                {message.type === "user" ? (
                  <User className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </div>
              <div
                className={`p-2 sm:p-3 rounded-lg text-sm sm:text-base ${
                  message.type === "user"
                    ? "bg-[#00B8BB] text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {message.content}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center space-x-2">
            <div className="bg-gray-100 p-2 sm:p-3 rounded-lg">
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

      <form onSubmit={handleSubmit} className="p-2 sm:p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about our courses..."
            className="flex-1 p-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8BB]"
          />
          <Button
            type="submit"
            className="text-white hover:bg-[#15A3C7] px-3"
            style={{ backgroundColor: "#00B8BB" }}
          >
            <Send className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DataSenseChat;