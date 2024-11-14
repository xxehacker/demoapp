import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center text-center text-3xl w-full">
        <h1>Welcome to About Page</h1>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
