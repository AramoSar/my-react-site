import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
