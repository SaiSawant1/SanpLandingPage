import React from "react";

const WidthContext = React.createContext();

export const useWidthContext = () => {
  return React.useContext(WidthContext);
};

export function WindowProvider({ children }) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  },[]);

  const value = { width, isMenuOpen, setIsMenuOpen };

  return (
    <WidthContext.Provider value={value}>{children}</WidthContext.Provider>
  );
}

export default WindowProvider;
