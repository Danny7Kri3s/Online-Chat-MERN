import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { User } from "../type";



const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversation] = useState<User[] | []>([]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        setLoading(true);
        const res = await fetch("api/users");
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversation();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
