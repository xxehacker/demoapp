import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col items-center py-8 bg-slate-800 text-white">
      <footer className="text-center">
        <p className=" font-semibold mb-4">Copyright @ Abc India 2024</p>
        <nav className="flex space-x-4 justify-center mb-4">
          <a href="/" className="text-red-500 hover:underline">Home</a>
          <a href="/about" className="text-red-500 hover:underline">About Us</a>
          <a href="/contact" className="text-red-500 hover:underline">Contact Us</a>
          <a href="/login" className="text-red-500 hover:underline">Login</a>
        </nav>
        <div className="">
          <p>Practical Test Case | ADTUPTC14112024 | Mridupawan Bordoloi | +917099550167</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer