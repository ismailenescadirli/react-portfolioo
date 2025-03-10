import React from 'react';

const AnaSayfa = ({ image }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold text-gray-100 mb-4">Hoş Geldiniz!</h1>
      <img
        src={image}  // App.jsx'ten gelen image prop'unu burada kullanıyoruz
        alt="Profil Fotoğrafı"
        className="rounded-full w-40 h-40 mx-auto mb-4 border-4 border-gray-600"
      />
      <p className="text-lg text-gray-400">Ben bir yazılım geliştiricisi öğrencisiyim. React, JavaScript gibi teknolojilerle projeler geliştirmeye çalışıyorum.Henüz Eğitim Aşamasındayım. Hedefim daha etkili ve hızlı şekilde kodlar yazmak.</p>
    </div>);
                                };

export default AnaSayfa;