import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations: React.FC = () => {
  const { loading, conversations } = useGetConversation();

  return (
    <div className="py-2 w-[100%] mt-[7rem] mb-[4rem] flex flex-col">
      {conversations.map((conversation, i) => (
        <Conversation
          key={i}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={i === conversations.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto "></span>
      ) : null}
    </div>
  );
};

export default Conversations;
