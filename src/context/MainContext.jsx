import { createContext, useContext, useRef, useState } from "react";


export const MainContext = createContext({
    //SVG OVERLAY
    overlayPathRef: null,
    menuRef: null,
    aboutSectionRef: null,
    projectsSectionRef: null,
    contactSectionRef: null,

    //CUSTOM CURSOR
    color: "olive",
    cursorType: "small",
    text:'',
    setColor: () => {},
    setCursorType: () => {},
    setText: () => {},
});


export const MainContextProvider = ({ children }) => {

    //SVG OVERLAY
    const overlayPathRef = useRef(null);
    const menuRef = useRef(null);
    const aboutSectionRef = useRef(null);
    const projectsSectionRef = useRef(null);
    const contactSectionRef = useRef(null);

    //MENU
    const [openMenu, setOpenMenu] = useState(false);

    //CUSTOM CURSOR
    const [color, setColor] = useState("olive");
    const [cursorType, setCursorType] = useState("small");
    const [text, setText] = useState('')
   
    const value = {
      overlayPathRef,
      menuRef,
      projectsSectionRef,
      aboutSectionRef,
      contactSectionRef,
      color,
      setColor,
      cursorType,
      setCursorType,
      text,
      setText,
      openMenu,
      setOpenMenu
    }
   
    return (
      <MainContext.Provider value={value}>
        {children}
      </MainContext.Provider>
    );
};


export const useMainContext = () => {
    return useContext(MainContext);
};