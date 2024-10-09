import { useState } from "react";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import useGetConversation from "../../hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";

const SearchInput: React.FC = () => {
  const [search, setSearch] = useState("");
  const { conversations } = useGetConversation();
  const {setSelectedConversation} = useConversation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error("Search terms must be at least 3 characters long");
      return ;
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation)
      setSearch("")
    } else {
      toast.error("No such User found")
    }
  };
  return (
    <div className="fixed rounded-tl-md pt-4 px-2 bg-gray-800 z-[9999] w-[100%] md:w-[38%] lg:w-[27%] xl:w-[22.10%] ">
      <form onClick={handleSubmit} className="flex items-center gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          className="input bg-gray-400 input-bordered placeholder:text-gray-700 rounded-full"
        />
        <button
          type="submit"
          className="text-white bg-gray-500 rounded-full p-3"
        >
          <FaSearch />
        </button>
      </form>
      <div className="divider divider-info px-3 mb-0 "></div>
    </div>
  );
};

export default SearchInput;

// Starter Code For Snippet:

// import { FaSearch } from "react-icons/fa";

// const SearchInput: React.FC = () => {
//   return (
//     <div className="fixed rounded-tl-md pt-4 px-2 bg-gray-800 z-[9999] w-[100%] md:w-[38%] lg:w-[27%] xl:w-[22.10%] ">
//       <form className="flex items-center gap-2">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="input bg-gray-400 input-bordered placeholder:text-gray-700 rounded-full"
//         />
//         <button
//           type="submit"
//           className="text-white bg-gray-500 rounded-full p-3"
//         >
//           <FaSearch />
//         </button>
//       </form>
//       <div className="divider divider-info px-3 mb-0 "></div>
//     </div>
//   );
// };

// export default SearchInput;
