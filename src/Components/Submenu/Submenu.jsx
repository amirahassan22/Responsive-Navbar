import React from "react";

import { useGlobalContext } from "../Context/Context";

export default function Submenu() {
  const {linkText, pageLinks } = useGlobalContext();
  console.log(pageLinks);

  return (
    <div className="absolute top-14 right-0 w-2/5 bg-white grid grid-cols-2 px-7 rounded-xl" style={{height:linkText!==""?"112px":"0px"}}>
        {linkText!==""?pageLinks.map((pageLink) => {
          return (
            <a
            key={pageLink.id}
            href={pageLink.url}
            className=" text-gray-700 flex justify-start items-center hover:text-purple-600"
          >
            {pageLink.icon}
            <span className="ps-3">{pageLink.label}</span>
          </a>
          )
        }):""}
      </div>
  );
}
