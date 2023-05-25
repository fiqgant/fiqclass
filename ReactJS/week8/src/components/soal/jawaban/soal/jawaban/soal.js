import React from "react";
import '../../../../../App.css';

function Soal() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Soal 2</h1>
        <p>
          Buatlah sebuah komponen React JS bernama Greeting yang menampilkan pesan sambutan kepada pengguna berdasarkan waktu saat ini. 
          Jika waktu saat ini antara jam 6 pagi sampai 12 siang, pesan harus berisi "Selamat Pagi". Jika waktu saat ini antara jam 12 
          siang sampai 6 sore, pesan harus berisi "Selamat Siang". Jika waktu saat ini antara jam 6 sore sampai 12 malam, 
          pesan harus berisi "Selamat Malam". Jika waktu saat ini antara jam 12 malam sampai 6 pagi, pesan harus berisi "Selamat Tidur".
        </p>
        <h1>Soal 3</h1>
        <p>
          Buatlah sebuah komponen React JS bernama FormValidation yang menampilkan sebuah formulir dengan input nama, alamat email, 
          dan pesan. Setiap input harus divalidasi sebelum formulir dapat dikirim. Input nama harus berisi minimal 3 karakter. Input 
          alamat email harus berisi email yang valid. Input pesan tidak boleh kosong.
        </p>
        <h1>Soal 4</h1>
        <p>
          Buatlah sebuah komponen React JS bernama PhotoGallery yang menampilkan daftar foto-foto yang disimpan dalam sebuah array. 
          Setiap foto harus ditampilkan dengan judul dan deskripsi.
        </p>
        <h1>Soal 5</h1>
        <p>
          Buatlah sebuah repository github yang bernama "Ujian Tengah Semester KKPAW NIM" yang berisi jawaban soal 2, 3 dan 4 dan deploy ke Vercel
        </p>
      </header>
    </div>
  );
}

export default Soal;
