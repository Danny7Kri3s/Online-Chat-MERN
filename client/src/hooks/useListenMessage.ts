import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation";
import notiSound from "../assets/sounds/notification.mp3"
const useListenMessage = () => {
  const {socket} = useSocketContext();
  const {messages, setMessages} = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notiSound);
      sound.play()
      setMessages([...messages, newMessage])
    })

    return () => {socket?.off("newMessage")};
  }, [socket, setMessages, messages])
}

export default useListenMessage