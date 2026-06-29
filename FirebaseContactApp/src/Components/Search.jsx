import React from "react";
import { MdPersonSearch } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";

function Search() {
  return (
    <>
      <div className="relative flex items-center px-5">
        <MdPersonSearch className="ml-2 text-2xl absolute text-white" />
        <input
          type="text"
          placeholder="Search Contacts"
          className="h-10 grow rounded-md border border-white bg-transparent pl-10"
        />
        <div>
            <FaUserPlus className="ml-2 text-2xl text-white cursor-pointer"/>
        </div>
      </div>
    </>
  );
}

export default Search;
