import React from "react";
import { ModeToggle } from "./ModeToggle";

export const NavBar = () => {
  return (
    <div className="sticky top-0 z-20 flex w-full items-center justify-between border-b bg-background p-4 shadow-sm">
      <h1>Currency Swapper</h1>
      <ModeToggle />
    </div>
  );
};

export default NavBar;
