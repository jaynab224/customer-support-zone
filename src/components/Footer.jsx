import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Container>
   
        <footer className="footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center p-10">

          <nav className="text-center sm:text-left">
            <h1 className="font-bold text-2xl whitespace-nowrap">CS — Ticket System</h1>

            <p>
              A clean and modern ticket management system for handling customer issues smoothly.
              A clean and modern ticket management system for handling customer issues smoothly.
              A clean and modern ticket management system for handling customer issues smoothly.
            </p>
          </nav>
          <nav className="text-center sm:text-left">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Contact Saled</a>
          </nav>
          <nav className="text-center sm:text-left">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product & Service</a>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Download Apps</a>
          </nav>
          <nav className="text-center sm:text-left">
            <h6 className="footer-title">Information</h6>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join US</a>
          </nav>
          <nav className="text-center sm:text-left">
            <h6 className="footer-title">Social Link</h6>
            <a className="link link-hover flex items-center gap-2">
              <img 
                src="https://www.bing.com/th/id/OIP.YmWwsng1NgiJzCj0M6NcRwHaFa?w=246&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2"
                className="w-4 h-4 invert" 
                alt="X" 
              />
              @CS - Ticket System
            </a>
            <a className="link link-hover flex items-center gap-2">
              <img 
                src="https://www.bing.com/th/id/OIP.Rnp0fWfpP4zyIz1F3b4zkwHaHa?w=198&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" 
                className="w-4 h-4 invert" 
                alt="X" 
              />
              @CS - Ticket System
            </a>
            <a className="link link-hover flex items-center gap-2">
              <img 
                src ="https://www.bing.com/th/id/OIP.YiMfOIxX-2Mxz_utvZ86zwHaHa?w=197&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" 
                className="w-4 h-4 invert" 
                alt="X" 
              />
              @CS - Ticket System
            </a>
            <a className="link link-hover flex items-center gap-2">
              <img src="https://www.bing.com/th/id/OIP.00XZ_94R8Kg4uBL66xeh9AHaHa?w=191&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" className="w-4 h-4 invert" alt="Gmail" />
              support@cst.com
            </a>
          </nav>
        </footer>

        <h6 className="flex items-center justify-center pb-5">
          @ 2025 CS— Ticket System. All rights reserved.
        </h6>
      </Container>
    </div>
  );
};

export default Footer;

