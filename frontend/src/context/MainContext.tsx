import { createContext, useState } from "react";
import { TChildren, TMainContext } from "../types/types";
import { IPostData } from "../interfaces/ContextInterfaces";
import { postDataAssets } from "../assets/assets";
import { useEffect } from "react";

export const MainContext = createContext<TMainContext | null>(null);

// Types/Interfaces for children prop

const MainContextProvider = ({ children }: TChildren) => {
  // <------------------------------ States ---------------------------------->

  const [postData, setPostData] = useState<IPostData[]>(postDataAssets);
  const [stickyNav, setStickyNav] = useState("");
  const [underline, setUnderline] = useState("home");
  const [chatUnderline, setChatUnderline] = useState("focused");
  const [miniChat, setMiniChat] = useState(true);

  // <------------------------- Rendering Section (useEffects etc) ------------------>

  useEffect(() => {
    const handleNavScroll = () => {
      window.scrollY > 20 ? setStickyNav("fixed") : setStickyNav("");
    };

    window.addEventListener("scroll", handleNavScroll);

    return () => {
      window.removeEventListener("scroll", handleNavScroll);
    };
  }, []);

  // <------------------------- Context Values ------------------------------->

  const contextValues = {
    postData,
    setPostData,
    stickyNav,
    setStickyNav,
    underline,
    setUnderline,
    chatUnderline,
    setChatUnderline,
    miniChat,
    setMiniChat,
  };

  return (
    <MainContext.Provider value={contextValues}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
