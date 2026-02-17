import React from "react";

import { MainPage } from "./components/MainPage";
import { ForWhoPage } from "./components/ForWhoPage";
import { ProgramPage } from "./components/ProgramPage"; // Створи цей компонент, якщо ще не встиг
import { AuthorPage } from "./components/AuthorPage";
import "./App.scss";
import { FinalCTA } from "./components/FinalCTS";
import { ParallaxTank } from "./components/ParallaxTank";
import { NostalgiaPage } from "./components/NostalgiaPage";
import { FormatPage } from "./components/FormatPage";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <ParallaxTank side="left" top="10%" speed={0.1} color="yellow" />
      <ParallaxTank side="right" top="30%" speed={-0.15} color="red" />
      <ParallaxTank side="left" top="55%" speed={0.2} color="green" />
      <ParallaxTank side="right" top="80%" speed={0.05} color="blue" />
      {/* Header */}
      <nav className="sticky top-0 z-[300] bg-black/90 border-b border-zinc-800 p-4 flex justify-between items-center backdrop-blur-sm">
        <span className="font-pixel text-yellow-500 text-[10px] md:text-xs">BATTLE CITY JS</span>
        <button className="bg-yellow-500 text-black font-pixel text-[8px] px-4 py-2 hover:bg-white transition-colors">
          START
        </button>
      </nav>

      {/* Основний контент лендингу */}
      <main>
        <MainPage />
        <NostalgiaPage />
        <ForWhoPage />
        <FormatPage />
        <ProgramPage />
        <AuthorPage />
        <FinalCTA />
      </main>

      {/* Footer */}
      <footer className="py-10 bg-black text-center text-gray-500 text-[10px] font-mono border-t border-zinc-900">
        <p>© 2025 Олег Судавний. Всі права захищені.</p>
      </footer>
    </div>
  );
}

export default App;
