import React from "react";
import SideNav from "./SideNav";
import BottomNav from "./BottomNav";

const PageLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed SideNav */}
      <SideNav className="fixed top-0 left-0 h-screen w-20 z-50" />

      {/* Fixed BottomNav */}
      <BottomNav className="fixed bottom-0 left-20 w-[calc(100%-5rem)] h-16 z-50" />

      {/* Main content */}
      <main className="ml-10 mb-16">{children}</main>
    </div>
  );
};

export default PageLayout;
