import React from "react";
import SearchInput from "./SearchInput";
import Logout from "./Logout";
import Conversations from "./Conversations";

const Sidebar: React.FC = () => {
  return (
    <div className="overflow-auto h-screen w-[100%] md:w-[50%] lg:w-[32%] border-r-4 border-slate-400">
      <SearchInput />
      <Conversations />
      <Logout />
    </div>
  );
};

export default Sidebar;
