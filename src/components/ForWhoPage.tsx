export const ForWhoPage: React.FC = () => {
  const cards = [
    {
      id: "01",
      title: "Дітям 90-х",
      text: "Хто хоче нарешті зрозуміти, як працює код, на зрозумілому прикладі гри дитинства.",
    },
    {
      id: "02",
      title: "Батькам та дітям",
      text: "Найкращий спільний проєкт на вечір: тато згадує стратегію, дитина — пише логіку.",
    },
    {
      id: "03",
      title: "Новачкам в JS",
      text: "Замість нудних задач — створення реальної архітектури, класів та штучного інтелекту.",
    },
  ];

  return (
    <section className="py-12 bg-zinc-950 px-6 border-y-2 border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl font-pixel text-center text-white mb-12 uppercase relative inline-block mx-auto w-full">
          <span className="text-red-600 mr-2">▶</span>
          Для кого цей курс?
          <span className="block text-[10px] text-zinc-500 mt-2 font-pixel">
            Хто вийде на поле бою?
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <div key={i} className="relative group">
              {/* Фонова тінь картки */}
              <div className="absolute inset-0 bg-red-600 translate-x-2 translate-y-2 opacity-20 group-hover:opacity-40 transition-opacity"></div>

              <div className="relative p-8 bg-black border-2 border-zinc-800 h-full flex flex-col">
                {/* Верхня частина з цифрою та заголовком */}
                <div className="flex items-center  gap-4 mb-4">
                  <span className="font-pixel text-red-600 text-2xl leading-none">{card.id}</span>
                  <h3 className="text-yellow-500 font-pixel text-xs leading-none uppercase ">
                    {card.title}
                  </h3>
                </div>

                {/* Текст опису */}
                <p className="text-gray-400 text-sm font-sans leading-relaxed uppercase tracking-tight">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
