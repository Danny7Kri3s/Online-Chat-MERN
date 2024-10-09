import { useEffect, useRef } from "react";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessage from "../../hooks/useListenMessage";

const Messages: React.FC = () => {
  const { loading, messages } = useGetMessage();
  useListenMessage();
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
    }, 100)
  }, [messages])

  return (
    <div className="text-white px-4 my-16 flex-1 overflow-auto">
      
      {!loading &&
        messages.length > 0 &&
        messages.map((message, i) => (
          <div 
            key={i}
            ref={i === messages.length - 1 ? lastMessageRef : null}
          >
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the Conversation.</p>
      )}

    </div>
  );
};

export default Messages;
