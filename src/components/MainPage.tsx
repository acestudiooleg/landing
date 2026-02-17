export const MainPage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 relative overflow-hidden">
      
      {/* Кутові рамки ігрового монітора */}
      <div className="absolute inset-4 border-2 border-zinc-900 pointer-events-none">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-red-600"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-red-600"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-red-600"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-red-600"></div>
      </div>

      <div className="max-w-4xl w-full text-center z-10 px-6">
        
        {/* Статус — тепер зрозумілий для покупця */}
        <div className="inline-block py-1 px-4 bg-zinc-900 border border-zinc-700 text-yellow-500 font-pixel text-[8px] mb-8 tracking-widest uppercase shadow-[0_0_15px_rgba(229,154,18,0.2)]">
          STATUS: ДОСТУП ВІДКРИТО
        </div>

        {/* Логотип Battle City + JS Course (з тінню для об'єму) */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-7xl font-pixel text-yellow-500 leading-none uppercase drop-shadow-[4px_4px_0_rgba(153,27,27,1)]">
            BATTLE CITY
          </h1>
          <h2 className="text-xl md:text-3xl font-pixel text-white mt-2 tracking-tighter opacity-90">
            JAVASCRIPT COURSE
          </h2>
        </div>

        {/* Твоя головна обіцянка — Створи танчики за 14 днів */}
        <div className="mb-10">
           <h3 className="font-pixel text-lg md:text-2xl text-red-600 uppercase leading-snug">
             Створи власні «Танчики» <br/> на JS за 14 днів!
           </h3>
        </div>

        {/* Текст про дітей 90-х (читабельний шрифт) */}
        <div className="relative mb-12 max-w-lg mx-auto bg-zinc-900/30 p-6 border border-zinc-800">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed uppercase font-sans tracking-wide">
            Повернися у 90-ті та навчи свою дитину програмувати. 
            Легендарна гра на чистих технологіях — від першого пікселя до релізу.
          </p>
        </div>

        {/* Кнопка "Розпочати місію" */}
        <div className="flex flex-col items-center gap-10">
          <button className="group relative">
            <div className="absolute inset-0 bg-red-900 translate-y-1.5 translate-x-1"></div>
            <div className="relative bg-red-600 hover:bg-red-500 text-white font-pixel text-xs md:text-sm py-5 px-10 transition-all active:translate-y-1 uppercase tracking-widest border-2 border-red-400">
              РОЗПОЧАТИ МІСІЮ
            </div>
          </button>
          
          {/* HUD Статистика */}
          <div className="flex justify-center gap-12 font-pixel">
            <div className="text-left">
              <span className="block text-[8px] text-zinc-600 mb-1 italic">TIME</span>
              <span className="text-yellow-500 text-lg md:text-xl">14d</span>
            </div>
            <div className="text-left">
              <span className="block text-[8px] text-zinc-600 mb-1 italic">MODE</span>
              <span className="text-yellow-500 text-lg md:text-xl">PRO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};