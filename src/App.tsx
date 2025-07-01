import React from 'react';
import Header from './components/Header';
import TentangSaya from './components/TentangSaya';
import Pendidikan from './components/Pendidikan';
import Keahlian from './components/Keahlian';
import Pengalaman from './components/Pengalaman';
import TombolAksi from './components/TombolAksi';

function App() {
  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-gray font-chakra">
      <Header />
      <TentangSaya />
      <Pendidikan />
      <Keahlian />
      <Pengalaman />
      <TombolAksi />
    </div>
  );
}

export default App;