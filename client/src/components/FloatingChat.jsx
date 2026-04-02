import { useState, useEffect } from "react";
import { MessageCircle, X, Phone, Mail, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const { t } = useTranslation();

  // Simulate online status
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.3); // 70% chance of being online
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const userMessage = {
        id: Date.now(),
        text: newMessage,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, userMessage]);
      setNewMessage("");

      // Simulate bot response after a delay
      setTimeout(() => {
        const responses = t("chat.responses", { returnObjects: true });
        const botMessage = {
          id: Date.now() + 1,
          text: responses[Math.floor(Math.random() * responses.length)],
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-stone-800 border border-stone-700 rounded-xl shadow-2xl w-80 h-125 flex flex-col max-h-[70vh]">
          {/* Chat Header */}
          <div
            className={`flex items-center justify-between p-4 rounded-t-xl ${
              isOnline
                ? "bg-linear-to-r from-green-600/20 to-green-700/20 border-b border-green-500/30"
                : "bg-linear-to-r from-amber-600/20 to-amber-700/20 border-b border-amber-500/30"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  isOnline ? "bg-green-500 animate-pulse" : "bg-amber-500"
                }`}
                title={
                  isOnline ? t("chat.statusOnline") : t("chat.statusOffline")
                }
                aria-label={
                  isOnline ? t("chat.statusOnline") : t("chat.statusOffline")
                }
              ></div>
              <h3 className="font-semibold text-stone-200">
                {t("chat.onlineHelp")}
              </h3>
            </div>
            <button
              onClick={toggleChat}
              className="text-stone-400 hover:text-stone-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-900/50">
            {messages.length === 0 ? (
              <div className="text-center py-8 text-stone-400">
                <p className="mb-4">{t("chat.welcomeMessage")}</p>
                <p>{t("chat.helpMessage")}</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-orange-600/20 text-stone-200 rounded-tr-none"
                        : "bg-stone-700 text-stone-300 rounded-tl-none"
                    }`}
                  >
                    <p>{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-orange-400"
                          : "text-stone-500"
                      }`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={sendMessage}
            className="border-t border-stone-700 p-3 bg-stone-800"
          >
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={t("chat.writeMessage")}
                className="flex-1 bg-stone-700 text-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="bg-orange-600 hover:bg-orange-700 disabled:bg-stone-600 text-white rounded-lg p-2 transition-colors"
                aria-label={t("chat.sendMessage")}
              >
                <Send size={18} />
              </button>
            </div>
          </form>

          {/* Quick Actions */}
          <div className="border-t border-stone-700 p-3 bg-stone-800">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/faq"
                className="flex items-center text-stone-300 hover:text-orange-500 transition-colors"
                title="FAQ"
                aria-label="FAQ"
              >
                FAQ
              </a>
              <a
                href="tel:+48577432949"
                className="flex items-center text-stone-300 hover:text-orange-500 transition-colors"
                title={t("chat.callUs")}
                aria-label={t("chat.callUs")}
              >
                <Phone size={16} />
              </a>
              <a
                href="mailto:vanshare1@gmail.com"
                className="flex items-center text-stone-300 hover:text-orange-500 transition-colors"
                title={t("chat.emailUs")}
                aria-label={t("chat.emailUs")}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            isOnline
              ? "bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
              : "bg-linear-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700"
          }`}
        >
          <MessageCircle size={24} className="text-white" />
          {!isOnline && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
            </span>
          )}
        </button>
      )}
    </div>
  );
}

export default FloatingChat;
