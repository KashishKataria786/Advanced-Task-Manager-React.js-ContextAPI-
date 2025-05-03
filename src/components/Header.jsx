import React, { useContext } from "react";
import { ThemeContext } from "../contextAPI/ThemeContext";

const Header = () => {

    const {theme,toggleTheme} = useContext(ThemeContext);
  return (
    <div className="bg-blue-300">
      
    </div>
  );
};

export default Header;
