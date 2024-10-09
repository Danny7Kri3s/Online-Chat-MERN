
import { useSocketContext } from "../../context/SocketContext";
import { User } from "../../type";
import useConversation from "../../zustand/useConversation";

interface ConversationProp {
  conversation: User;
  emoji: string;
  lastIdx: boolean;
}
const Conversation: React.FC<ConversationProp> = ({
  conversation,
  emoji,
  lastIdx,
}) => {
  const {selectedConverstion, setSelectedConversation} = useConversation();

  const isSelected = selectedConverstion?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)
  return (
    <>
      <div 
        className={`text-white flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-[4rem] rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider divider-neutral px-3 my-0 "></div>}
    </>
  );
};

export default Conversation;

// Starter Code For Snippet:
// const Conversation = () => {
//   return (
//     <>
//       <div className="text-white flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-[4rem] rounded-full">
//             <img
//               src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//             <p className="font-bold text-gray-200">John Doe</p>
//             <span className="text-xl">❤❤👏🤢</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Conversation;
