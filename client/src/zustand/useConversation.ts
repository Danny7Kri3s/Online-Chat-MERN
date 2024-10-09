import { create } from "zustand";
import Conversation from "../components/sidebar/Conversation";
import { MessageType, User } from "../type";


type Conversation = {
  selectedConverstion: User | null;
  messages: MessageType[];
};

type ConversationActions = {
  setSelectedConversation: (selectedConverstion: User | null) => void;
  setMessages: (messages: MessageType[]) => void;
};

const useConversation = create<Conversation & ConversationActions>((set) => ({
  selectedConverstion: null,
  setSelectedConversation: (selectedConverstion: User | null) =>
    set({ selectedConverstion }),
  messages: [],
  setMessages: (messages: MessageType[]) => set({ messages }),
}));

export default useConversation;