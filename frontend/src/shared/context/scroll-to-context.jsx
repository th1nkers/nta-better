import { createContext, useRef } from "react";

export const ScrollContext = createContext({
  scrollRef: null,
  addScrollRef: () => {},
  scrollToContent: () => {},
});

export const ScrollContextProvider = ({ children }) => {
  const scrollRef = useRef(null);

  const scrollToContent = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ctxValue = {
    scrollRef,
    scrollToContent,
  };

  return (
    <ScrollContext.Provider value={ctxValue}>{children}</ScrollContext.Provider>
  );
};
