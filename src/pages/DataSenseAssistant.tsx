// src/pages/DataSenseAssistant.tsx
import React, { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Bot, 
  User, 
  BookOpen, 
  Database, 
  LineChart, 
  Binary, 
  Brain,
  ChevronLeft,
  ChevronRight,
  Menu,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const suggestions = [
    "Tell me about Python for data analysis",
    "Explain machine learning concepts",
    "Help with data visualization",
    "Statistics fundamentals",
    "SQL query assistance"
  ];

  const courseCategories = [
    { icon: <Database className="w-5 h-5" />, name: "Data Fundamentals", count: 5 },
    { icon: <LineChart className="w-5 h-5" />, name: "Data Analytics", count: 8 },
    { icon: <Binary className="w-5 h-5" />, name: "Programming", count: 6 },
    { icon: <Brain className="w-5 h-5" />, name: "Machine Learning", count: 4 },
    { icon: <BookOpen className="w-5 h-5" />, name: "Resources", count: 10 }
  ];

  // Handle clicks outside sidebar to close it on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSidebarOpen &&
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target as Node) &&
        window.innerWidth < 768
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  // Set initial sidebar state based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    const responses: Record<string, string> = {
      python: "Python is essential for data science! We cover Python extensively in our courses, including pandas for data manipulation, numpy for numerical operations, and scikit-learn for machine learning. Would you like to explore our Python for Data Science course?",
      "machine learning": "Our Machine Learning course covers everything from basic algorithms to advanced neural networks. The curriculum includes supervised learning, unsupervised learning, and practical projects with real-world datasets. Would you like to know more about our ML course?",
      "data analytics": "Our Data Analytics program teaches you to extract meaningful insights from data. You'll learn descriptive analytics, diagnostic analytics, predictive analytics, and prescriptive analytics. Want to see our course curriculum?",
      visualization: "Data visualization is crucial for communicating insights effectively. We teach various tools like matplotlib, seaborn, and plotly for creating impactful visualizations. Would you like to see some examples?",
      statistics: "Statistics is the foundation of data science. Our curriculum covers probability, hypothesis testing, regression analysis, and more. Shall we explore a specific statistics topic?",
      sql: "SQL is essential for data manipulation and analysis. We cover everything from basic queries to advanced operations like window functions and CTEs. Would you like to practice some SQL queries?",
      course: "We offer several specialized courses including:\n- Data Science Fundamentals\n- Machine Learning Essentials\n- Data Analytics & Visualization\n- Python for Data Science\nWhich area interests you most?",
    };

    for (const [key, response] of Object.entries(responses)) {
      if (input.includes(key)) return response;
    }
    return "I can help you learn about our data science courses and resources. Feel free to ask about specific topics like Python, Machine Learning, or Data Analytics!";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: "user", content: input }]);
    setInput("");
    setIsTyping(true);

    // Close sidebar on mobile when sending a message
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }

    setTimeout(() => {
      const response = generateResponse(input);
      setMessages(prev => [...prev, { type: "bot", content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static inset-y-0 left-0 z-30
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          transition-transform duration-300 ease-in-out
          w-64 bg-[#006D6F] text-white
          md:block
        `}
        ref={chatContainerRef}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Home className="w-6 h-6" />
              <h2 className="text-lg font-semibold">DataSense</h2>
            </div>
            <Button
              variant="ghost"
              className="text-white hover:bg-[#00B8BB] md:flex"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <ChevronLeft className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </Button>
          </div>
          
          <div className="space-y-4">
            {courseCategories.map((category, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-white hover:bg-[#00B8BB] transition-colors"
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
                <span className="ml-auto bg-[#00B8BB] px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        <div className="bg-[#006D6F] p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              variant="ghost"
              className={`text-white hover:bg-[#00B8BB] ${
                !isSidebarOpen ? 'md:flex' : 'md:hidden'
              }`}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <h2 className="text-white text-xl font-semibold">DataSense Assistant</h2>
          </div>
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="text-white hover:bg-[#00B8BB]"
          >
            Close
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex items-start space-x-2 max-w-[85%] md:max-w-[70%] ${
                message.type === "user" ? "flex-row-reverse" : "flex-row"
              }`}>
                <div className={`p-2 rounded-lg ${
                  message.type === "user"
                    ? "bg-[#00B8BB] text-white rounded-br-none"
                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                }`}>
                  {message.type === "user" ? (
                    <User className="h-6 w-6" />
                  ) : (
                    <Bot className="h-6 w-6" />
                  )}
                </div>
                <div className={`p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-[#00B8BB] text-white"
                    : "bg-gray-100 text-gray-800"
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
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t bg-white p-4">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    type="button"
                    variant="outline"
                    className="text-xs bg-gray-50 hover:bg-gray-100"
                    onClick={() => setInput(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
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
                  title="Send"
                >
                  <Send className="h-5" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataSenseAssistant;