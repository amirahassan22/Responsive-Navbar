import React from "react";
import { IoMdClose } from "react-icons/io";
import sublinks from "../../data";
import { useGlobalContext } from "../Context/Context";

export default function Sidebar() {
  const {isSidebarOpen,closeSidebar} = useGlobalContext();
  return (
    <aside className="bg-white fixed top-0 bottom-0 right-0 left-0 w-full h-lvh z-40 p-16" style={{display:isSidebarOpen?"block":"none"}}>
      <a  className="absolute end-8 top-8 bg-transparent flex justify-center items-center text-3xl" onClick={closeSidebar}>
        <IoMdClose className="text-purple-600  font-bold" />
      </a>
      <div>
        {sublinks.map((sublink) => {
          return (
            <div key={sublink.pageId} className="text-start mb-7">
              <h3 className="text-2xl capitalize mb-3">{sublink.page}</h3>
              <div className="grid grid-cols-2 gap-4">
                {sublink.links.map(link=>{
                  return(
                    <a key={link.id} href={link.url} className="flex justify-start items-center text-gray-700 hover:text-purple-600">
                      {link.icon}
                      <span className="ps-3">{link.label}</span>
                    </a>
                  )
                })}
                
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
