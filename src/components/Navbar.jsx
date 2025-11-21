import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <dir className="text-black">
      <Container>
          <div className=" flex justify-between pt-4 pb-4">
          <div className="">
            <h1 className="font-bold text-2xl">CS — Ticket System</h1>
          </div>
          <div className="space-x-3 text-[15px] text-gray-700">
            <a href="">Home</a>
            <a href="">FAQ</a>
            <a href=""> Changelog</a>
            <a href="">Blog</a>
            <a href="">Download</a>
            <a href="">Contact</a>
            <button className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] px-2.5 py-1.5 rounded-xs text-white text-[16px] cursor-pointer">
              + New Ticket
            </button>
          </div>
        </div>
      </Container>
    </dir>
  );
};

export default Navbar;
