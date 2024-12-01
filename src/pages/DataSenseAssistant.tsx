// src/pages/DataSenseAssistant.tsx
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

interface Message {
  type: "bot" | "user";
  content: string;
}

const DataSenseAssistant = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialMessages = (location.state?.messages as Message[]) || [{
    type: "bot",
    content: "Hello! I'm your Data Science Learning Assistant. How can I help you learn about data analytics today?",
  }];
  
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="bg-[#006D6F] p-4 flex justify-between items-center">
        <h2 className="text-white text-xl font-semibold">DataSense Assistant</h2>
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="text-white hover:bg-[#00B8BB]"
        >
          Close
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-4xl mx-auto w-full">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start space-x-2 max-w-[70%] ${
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
                  <User className="h-6 w-6" />
                ) : (
                  <Bot className="h-6 w-6" />
                )}
              </div>
              <div
                className={`p-3 rounded-lg text-base ${
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

      <div className="border-t bg-white p-4">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our courses..."
              className="flex-1 p-2 text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8BB]"
            />
            <Button
              type="submit"
              className="text-white hover:bg-[#15A3C7] px-4"
              style={{ backgroundColor: "#00B8BB" }}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataSenseAssistant;