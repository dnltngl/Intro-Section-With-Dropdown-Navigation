// NavContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavContextProps {
  isOpen: boolean;
  toggleNav: () => void;
}

const NavContext = createContext<NavContextProps | undefined>(undefined);

export const NavProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prev) => !prev);

  return (
    <NavContext.Provider value={{ isOpen, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = (): NavContextProps => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
