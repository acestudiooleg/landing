export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 px-6 relative overflow-hidden border-t-4 border-red-600">
      {/* Декоративні елементи фону */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pixel-weave.png')]"></div>

      {/* ЗМІНЮЄМО z-10 НА z-[200], щоб весь блок став над смужками body */}
      <div className="max-w-4xl mx-auto text-center relative z-[200]"> 
        
        <h2 className="text-3xl md:text-5xl font-pixel text-yellow-500 mb-24 leading-tight drop-shadow-[0_4px_0_rgba(153,27,27,1)]">
          МІСІЯ ЗДІЙСНЕННА! <br />
          <span className="text-white text-xl md:text-2xl mt-4 block uppercase tracking-widest">
            ТВІЙ ПЕРШИЙ КОД ЧЕКАЄ НА ТЕБЕ
          </span>
        </h2>

        {/* ... (список bullet points) ... */}

        <div className="flex flex-col items-center">
          {/* Додаємо relative та z-index і для самої кнопки для гарантії */}
          <button className="group relative z-[210] w-full md:w-auto transform transition-transform hover:scale-105 active:scale-95">
            <div className="absolute -inset-1 bg-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative bg-yellow-500 text-black font-pixel py-6 px-12 text-sm md:text-lg uppercase shadow-[0_6px_0_0_rgba(181,49,32,1)] active:shadow-none active:translate-y-1">
              ЗАБРОНЮВАТИ МІСЦЕ
            </div>
          </button>

          <p className="mt-10 font-pixel text-[10px] text-zinc-500 uppercase tracking-tighter">
            * Твій танк поїде, або я поверну тобі кошти!
          </p>
        </div>
      </div>
    </section>
  );
};