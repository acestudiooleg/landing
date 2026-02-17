import StaticTank from "./StaticTank";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 px-6 relative overflow-hidden border-t-4 border-red-600">
      {/* Фонова текстура */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pixel-weave.png')]"></div>

      <div className="max-w-5xl mx-auto text-center relative z-[200]">
        <h2 className="text-3xl md:text-5xl font-pixel text-yellow-500 mb-16 leading-tight drop-shadow-[0_4px_0_rgba(153,27,27,1)] uppercase">
          МІСІЯ ЗДІЙСНЕННА! <br />
          <span className="text-white text-xl md:text-2xl mt-4 block tracking-widest">
            ТВІЙ ПЕРШИЙ КОД ЧЕКАЄ НА ТЕБЕ
          </span>
        </h2>

        {/* ОСНОВНИЙ КОНТЕЙНЕР ПРАЙСУ */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-0 mb-16 max-w-4xl mx-auto">
          {/* ЛІВА ПАНЕЛЬ: ХАРАКТЕРИСТИКИ */}
          <div className="flex-1 bg-zinc-900/50 border-2 border-zinc-800 p-8 text-left relative overflow-hidden">
            {/* Декор: сітка на фоні */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            <h4 className="relative z-10 font-pixel text-yellow-500 text-[10px] mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 animate-pulse"></span>
              Бойові можливості:
            </h4>

            <ul className="relative z-10 space-y-5">
              {[
                { label: "Інтенсив", value: "14 ДНІВ", color: "text-white" },
                { label: "Формат", value: "ПРАКТИКА", color: "text-green-500" },
                { label: "Підтримка", value: "TELEGRAM", color: "text-blue-400" },
                { label: "Результат", value: "ВЛАСНА ГРА", color: "text-yellow-500" },
                { label: "Доступ", value: "НАЗАВЖДИ", color: "text-red-500" },
              ].map((item, i) => (
                <li key={i} className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="font-pixel text-[8px] md:text-[10px] text-zinc-500 uppercase italic">
                    {item.label}
                  </span>
                  <span className={`font-pixel text-[8px] md:text-[10px] uppercase ${item.color}`}>
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ПРАВА ПАНЕЛЬ: ЦІНА */}
          <div className="flex-1 bg-zinc-900 border-4 border-zinc-700 p-10 flex flex-col items-center justify-center relative shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
            {/* Вивіска Limited Offer */}
            <div className="absolute -top-4 -right-2 bg-red-600 text-white font-pixel text-[8px] px-3 py-2 rotate-6 shadow-[4px_4px_0_rgba(0,0,0,1)] uppercase z-30">
              Limited Offer
            </div>

            <div className="mb-6">
              <div className="relative inline-block">
                <span className="font-pixel text-zinc-400 text-xl tracking-tighter opacity-50">
                  1500 UAH
                </span>
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-600 -rotate-12"></div>
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-pixel text-6xl md:text-7xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                240
              </span>
              <span className="font-pixel text-xl text-yellow-500">UAH</span>
            </div>

            <div className="w-full h-1 bg-zinc-800 mb-6 relative">
              <div className="absolute top-0 left-0 h-full bg-green-500 w-[85%] animate-pulse"></div>
            </div>

            <p className="font-pixel text-[7px] text-green-500 uppercase tracking-widest italic">
              Операція готова до запуску
            </p>
          </div>
        </div>

        {/* КНОПКА */}
        <div className="flex flex-col items-center relative">
          <div className="relative p-12 md:p-20">
            {/* Танк Зверху (Жовтий) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-bounce transition-all duration-1000">
              <StaticTank color="yellow" rotation="180deg" />
            </div>

            {/* Танк Зліва (Червоний) */}
            <div className="absolute -left-[10px] top-1/2 -translate-y-1/2 -rotate-90 animate-[pulse_2s_infinite]">
              <StaticTank color="red" rotation="180deg" />
            </div>
            <button className="group relative w-full md:w-auto transform transition-transform hover:scale-105 active:scale-95">
              <div className="absolute -inset-1 bg-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative z-[210] bg-yellow-500 text-black font-pixel py-6 px-12 text-sm md:text-lg uppercase shadow-[0_6px_0_0_rgba(181,49,32,1)] active:shadow-none active:translate-y-1">
                ЗАБРОНЮВАТИ МІСЦЕ
              </div>
            </button>

            {/* Танк Справа (Синій) */}
            <div className="absolute -right-[10px] top-1/2 -translate-y-1/2 rotate-90">
              <StaticTank color="blue" rotation="180deg" />
            </div>

            {/* Танк Знизу (Зелений) */}
            <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2">
              <StaticTank color="green" rotation="0deg" />
            </div>
          </div>

          <p className="mt-12 font-pixel text-[8px] text-zinc-600 uppercase tracking-[0.3em]">
            * 100% ГАРАНТІЯ ПОВЕРНЕННЯ КОШТІВ
          </p>
        </div>
      </div>
    </section>
  );
};
