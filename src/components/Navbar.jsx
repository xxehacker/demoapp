import React from "react";

function Navbar() {
  return (
    <navbar>
      <div className="flex items-center justify-between text-white bg-green-500 p-4">
        <div className="flex items-center">
          <h1 className="text-white font-bold ml-2">Abc India</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white">
            Home
          </a>
          <a href="/about" className="text-white">
            About Us
          </a>
          <a href="/contact" className="text-white">
            Contact Us
          </a>
          <a href="/login" className="text-white">
            Login
          </a>
        </div>
      </div>
    </navbar>
  );
}

export default Navbar;
