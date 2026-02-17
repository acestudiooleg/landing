export const NostalgiaPage: React.FC = () => {
  return (
    <section className="py-20 bg-black border-y-2 border-zinc-900 px-6 relative overflow-hidden">
      {/* Смужки на фоні тільки для цього блоку */}
      <div className="retro-scanlines opacity-20" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-600 text-red-600 font-pixel text-[8px] mb-6 uppercase tracking-widest">
          Flashback detected
        </div>
        
        <h2 className="text-2xl md:text-4xl font-pixel text-white mb-10 leading-relaxed uppercase">
          Пам’ятаєш цей звук <br/> появи танка? 
        </h2>
        
        <div className="space-y-6 text-gray-400 font-sans uppercase tracking-wide leading-loose">
          <p className="text-sm md:text-base italic border-l-4 border-yellow-500 pl-6 text-left">
            "А як ми захищали штаб-орла, поки мама гукала вечеряти? Сьогодні ігри стали складними, але магія «Танчиків» — у простоті."
          </p>
          
          <p className="text-sm md:text-base text-white font-bold">
            Це ідеальний фундамент, щоб вивчити програмування або показати дитині, що IT — це не нудні таблиці, а створення власних світів. 
          </p>
          
          <div className="pt-6">
             <span className="font-pixel text-yellow-500 text-lg md:text-xl animate-pulse">
               ДАВАЙ ПЕРЕТВОРИМО НОСТАЛЬГІЮ НА КРУТИЙ СКІЛ!
             </span>
          </div>
        </div>
      </div>
    </section>
  );
};