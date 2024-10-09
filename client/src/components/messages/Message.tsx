import React from "react";
import { MessageType } from "../../type";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

interface MessageProp {
  message: MessageType;
}

const Message:React.FC<MessageProp> = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConverstion} = useConversation();
  const fromMe = message.senderId === authUser?._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser?.profilePic : selectedConverstion?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-500"
  const formattedTime = extractTime(message.createdAt);
  const shouldShake = message.shouldShake ? "shake" : ""

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shouldShake}`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center  ">{formattedTime}</div>
    </div>
  );
};

export default Message;
