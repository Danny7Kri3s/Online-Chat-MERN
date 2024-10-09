import { useState } from "react";
import { LoginInputs } from "../type";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }: LoginInputs) => {
    setLoading(true);
    const success = handleInputError({
      username,
      password,
    });

    if (!success) {
      setLoading(false)
      return;
    }

    try {
      const res = await fetch("api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();  
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

// handle inputs Error
const handleInputError = ({ username, password }: LoginInputs) => {
  if (!username || !password) {
    toast.error("Please Fills in all fields");
    return false;
  }

  return true;
};
