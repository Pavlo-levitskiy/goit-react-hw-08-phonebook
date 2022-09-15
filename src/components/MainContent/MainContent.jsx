import React from "react";

const MainContent = ({ children }) => {
  return (
    <div className="container">
      Main container
      {children}
    </div>
  );
};

export default MainContent;
