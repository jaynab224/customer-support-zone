import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="text-black">
      <Container>
        <div className="flex justify-between items-center pt-4 pb-4">
     
          <h1 className="font-bold text-2xl">CS — Ticket System</h1>

      
          <div className="hidden md:flex space-x-3 text-[15px] text-gray-700 ml-6">
            <a href="">Home</a>
            <a href="">FAQ</a>
            <a href="">Changelog</a>
            <a href="">Blog</a>
            <a href="">Download</a>
            <a href="">Contact</a>
          </div>

          <button className="ml-6 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] px-2.5 py-1.5 rounded-xs text-white text-[16px] cursor-pointer">
            + New Ticket
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
