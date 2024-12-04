import React from "react";
import { useGlobalContext } from "../Context/Context";

export default function NavlLinks({page}) {
const {getLinkName} = useGlobalContext();

  return (
    <li>
      <a
        href="#"
        className="block py-2 px-3 text-gray-900 md:text-white md:font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        aria-current="page"
        onMouseOver={()=>getLinkName(page)}
        onMouseLeave={()=>getLinkName("")}
      >
        {page}
      </a>
    </li>
  );
}
