export const ProgramPage: React.FC = () => {
  const levels = [
    {
      title: "LEVEL 1: ПЕРШИЙ ВИЇЗД",
      days: "День 1-3",
      goal: "Створимо бойову машину",
      items: [
        "Налаштуємо «гараж» розробника (VS Code)",
        "Виведемо танк на ігрове поле",
        "Навчимо танк слухатися клавіш WASD"
      ]
    },
    {
      title: "LEVEL 2: АРСЕНАЛ ТА ВОРОГИ",
      days: "День 4-7",
      goal: "Додамо вогню та небезпеки",
      items: [
        "Навчимо танк стріляти (клас Bullet)",
        "Створимо інтелект для ворожих танків",
        "Реалізуємо журнал подій (Game Logger)"
      ]
    },
    {
      title: "LEVEL 3: БОЙОВИЙ ЛАНДШАФТ",
      days: "День 8-11",
      goal: "Побудуємо лабіринти",
      items: [
        "Створимо карти з цегли та сталі",
        "Навчимо кулі руйнувати перешкоди",
        "Додамо соковиті вибухи та анімації"
      ]
    },
    {
      title: "FINAL STAGE: ПЕРЕМОГА",
      days: "День 12-14",
      goal: "Станемо професіоналами",
      items: [
        "Захистимо штаб (Орла)",
        "Зробимо гру на двох за одним ПК",
        "Опублікуємо гру, щоб друзі могли зіграти"
      ]
    }
  ];

  return (
    <section className="py-16 px-6 bg-black border-t-2 border-zinc-900">
      <h2 className="text-xl md:text-3xl font-pixel text-yellow-500 text-center mb-16 uppercase tracking-widest">
        План операції
      </h2>
      
      {/* Змінюємо структуру контейнера: 
          - grid-cols-1 (мобілки)
          - md:grid-cols-2 (планшети/невеликі екрани)
          - lg:grid-cols-4 (десктоп, 4 в ряд)
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {levels.map((level, i) => (
          <div key={i} className="relative border-2 border-zinc-800 p-6 pt-10 bg-zinc-900/20 flex flex-col h-full hover:border-red-600/50 transition-colors group">
            
            {/* Badge з днями — тепер він не перекриває контент на десктопі */}
            <div className="absolute -top-4 left-4 bg-red-600 px-3 py-1 font-pixel text-[8px] md:text-[10px] text-white z-20 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              {level.days}
            </div>
            
            <h3 className="font-pixel text-[10px] md:text-xs text-white mb-3 leading-relaxed min-h-[40px] flex items-center">
              {level.title}
            </h3>
            
            <p className="text-yellow-500 font-bold text-xs mb-6 uppercase italic leading-tight">
              Ціль: {level.goal}
            </p>
            
            <ul className="space-y-4 flex-grow">
              {level.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-400 text-[11px] md:text-xs font-sans uppercase leading-snug">
                  <span className="text-red-600 mt-0.5 group-hover:animate-pulse">▶</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};