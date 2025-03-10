import React from 'react';

const Navbar = ({ navigate }) => {
  return (
    <div className="bg-gray-800 p-4 text-white">
      <nav className="flex justify-center space-x-8">
        <button
          onClick={() => navigate("home")}
          className="px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Ana Sayfa
        </button>
        <button
          onClick={() => navigate("hakkimda")}
          className="px-4 py-2 rounded-lg hover:bg-green-500 transition duration-300"
        >
          Hakkımda
        </button>
        <button
          onClick={() => navigate("iletisim")}
          className="px-4 py-2 rounded-lg hover:bg-purple-500 transition duration-300"
        >
          İletişim
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
