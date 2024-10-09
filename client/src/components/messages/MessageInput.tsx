import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form
      className="px-4 py-3 bg-gray-800 my-3 fixed -bottom-[0.8rem] w-[56%]"
      onSubmit={handleSubmit}
    >
      <div className="w-full relative">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          className="border text-sm rounded-lg block w-full p-3  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute top-1 bottom-0 flex items-center right-0 bg-gray-500 w-[40px] h-[40px] justify-center rounded-[100%]"
					onClick={handleSubmit}
        >
          {loading ? (
            <span className="loading loading-spinner "></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
