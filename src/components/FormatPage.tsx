export const FormatPage: React.FC = () => {
  const features = [
    { title: "ВІДЕО-УРОКИ", desc: "Кожен крок записаний з екрана з детальним поясненням логіки." },
    { title: "ІЛЮСТРОВАНИЙ КОНСПЕКТ", desc: "Чітка інструкція до кожного з 14 днів марафону." },
    {
      title: "SAVE GAME METHOD",
      desc: "Кожен урок — це окрема папка. Щось пішло не так? Просто повернися до попереднього дня.",
    },
    {
      title: "ТЕЛЕГРАМ-ШТАБ",
      desc: "Закритий канал, де ти отримаєш підтримку та відповіді на питання.",
    },
    { title: "PRO STACK", desc: "Чистий JavaScript (ES6+), ООП (Класи) та принципи SOLID." },
  ];

  return (
    <section className="py-16 bg-zinc-950 px-6 border-b-2 border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl font-pixel text-yellow-500 text-center mb-16 uppercase">
          Твій «Save Game» у світ розробки
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-black/40 border-l-4 border-red-600 p-6 hover:bg-zinc-900 transition-colors group"
            >
              <h3 className="font-pixel text-xs text-white mb-4 group-hover:text-yellow-500 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-400 text-xs font-sans uppercase leading-relaxed tracking-tight">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
