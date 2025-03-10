import React, { useState } from "react";

// Sayfa bileşenlerini import et
import AnaSayfa from './pages/AnaSayfa';
import Hakkimda from './pages/Hakkimda';
import Iletisim from './pages/Iletisim';

// Component'leri import et
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Resmi import et
import yourImage from './assets/ben.jpg'; // Resmi burada import ediyoruz

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // Sayfa değiştirme fonksiyonu
  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="font-sans bg-gray-900 text-gray-200 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar navigate={navigate} />

      {/* Sayfa içeriği */}
      <div className="flex justify-center items-center flex-1">
        <div className="w-full max-w-4xl p-6 space-y-6">
          {/* Sayfa geçişleri */}
          {currentPage === "home" && <AnaSayfa image={yourImage} />}
          {currentPage === "hakkimda" && <Hakkimda />}
          {currentPage === "iletisim" && <Iletisim />}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
