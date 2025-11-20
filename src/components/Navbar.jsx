import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

       
        <h1 className="text-lg font-semibold text-gray-800">
          CS — Ticket System
        </h1>

        <ul className="hidden md:flex items-center gap-4 ml-auto text-gray-600 text-sm">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">FAQ</li>
          <li className="hover:text-black cursor-pointer">Changelog</li>
          <li className="hover:text-black cursor-pointer">Blog</li>
          <li className="hover:text-black cursor-pointer">Download</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
          <li>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              + New Ticket
            </button>
          </li>
        </ul>

       
        <div className="flex items-center md:hidden gap-2">
          <button
            className="bg-purple-600 text-white px-3 py-2 rounded-md text-sm"
          >
            + New Ticket
          </button>

          <button
            className="px-2 py-1 border rounded"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col items-end gap-4 text-gray-700 text-sm">
          <li>Home</li>
          <li>FAQ</li>
          <li>Changelog</li>
          <li>Blog</li>
          <li>Download</li>
          <li>Contact</li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
