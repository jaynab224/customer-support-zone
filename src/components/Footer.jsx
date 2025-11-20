import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

       
        <div>
          <h2 className="text-white font-semibold text-lg mb-3">
            CS — Ticket System
          </h2>
          <p className="text-sm text-gray-400 leading-6">
            A clean and modern ticket management system for handling customer issues smoothly.
          </p>
        </div>

       
        <div>
          <h3 className="text-white font-medium mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About us</li>
            <li>Company Mission</li>
            
            <li>Contact Saled</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-medium mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Products & Services</li>
            
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-medium mb-3">Information</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-medium mb-3">Social</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
      
      <img src="https://www.bing.com/th/id/OIP.YmWwsng1NgiJzCj0M6NcRwHaFa?w=246&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" className="w-4 h-4 invert" alt="X" />
      @CS — Ticket System
    </li>
            <li className="flex items-center gap-2">
     
      <img src="https://www.bing.com/th/id/OIP.Rnp0fWfpP4zyIz1F3b4zkwHaHa?w=198&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" className="w-4 h-4 invert" alt="Facebook" />
      @CS — Ticket System
    </li>
             <li className="flex items-center gap-2">
    
      <img src="https://www.bing.com/th/id/OIP.YiMfOIxX-2Mxz_utvZ86zwHaHa?w=197&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" className="w-4 h-4 invert" alt="Facebook" />
      @CS — Ticket System
    </li>
         
             

    <li className="flex items-center gap-2">
      
      <img src="https://www.bing.com/th/id/OIP.00XZ_94R8Kg4uBL66xeh9AHaHa?w=191&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" className="w-4 h-4 invert" alt="Gmail" />
      support@cst.com
    </li>
          </ul>
        </div>

      </div>

    
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © 2025 — CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
