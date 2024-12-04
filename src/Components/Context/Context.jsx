import React, { useContext, useState, createContext } from "react";
import sublinks from '../../data';

const AppContext = createContext();

export default function ContextProvider({children}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [linkText,setLinkText] = useState("");
  const [pageLinks,setPageLinks] = useState([]);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const getLinkName = (text)=>{
    setLinkText(text);
    let page = sublinks.filter(sublink=>{
      return sublink.page === text
    })
    setPageLinks(page[0]?.links);
    // console.log(page[0].links);
    
    
  }
  return (
    <AppContext.Provider value={{ isSidebarOpen,linkText,pageLinks, openSidebar, closeSidebar,getLinkName }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
