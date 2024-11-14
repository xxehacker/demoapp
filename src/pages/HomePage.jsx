import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
