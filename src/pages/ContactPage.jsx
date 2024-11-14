import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {
  return (
   <>
    <Navbar />
     <div className="h-screen flex flex-col gap-10 justify-center items-center text-center text-3xl w-full">
      <h1>Welcome to Contact Page</h1>

      <div className="text-gray-600 mt-4 font-semibold text-lg">
        <p>C-456, Sector-3, Noida, Uttar Pradesh India</p>
      </div>
    </div>
    <Footer />
   
   </>
  );
}

export default ContactPage;
