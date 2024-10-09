import { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const {messages, setMessages, selectedConverstion} = useConversation();
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await fetch(`api/messages/${selectedConverstion?._id}`);
        const data = await res.json();
        setMessages(data)
      } catch (error: any) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }

    if (selectedConverstion?._id) getMessages();
  }, [selectedConverstion])
  return {loading, messages}
}

export default useGetMessage;