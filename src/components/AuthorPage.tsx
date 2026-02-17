import React from 'react';
import authorImg from '../assets/images/author.jpg';

export const AuthorPage: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950 px-6 border-t-2 border-zinc-900">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Фото з ретро-рамкою, без ліній (scanlines) */}
        <div className="w-56 h-56 md:w-64 md:h-64 mb-10 relative group">
          <div className="absolute inset-0 border-4 border-yellow-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
          <div className="relative w-full h-full overflow-hidden border-4 border-white bg-zinc-800">
            <img 
              src={authorImg} 
              alt="Олег Судавний" 
              className="w-full h-full object-cover pointer-events-none absolute z-[200]" 
              style={{ filter: 'none' }} 
            />
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-pixel text-yellow-500 uppercase">Олег Судавний</h2>
          <p className="text-red-600 font-pixel text-[10px] md:text-sm tracking-widest uppercase">
            Твій ігровий інструктор
          </p>
          
          <div className="max-w-2xl mx-auto space-y-6 text-gray-300 text-sm md:text-base leading-relaxed font-sans uppercase">
            <p>
              ПРИВІТ! Я <span className="text-white font-bold">ОЛЕГ СУДАВНИЙ</span>, І Я ЗНАЮ ПРО ВЕБ-РОЗРОБКУ ВСЕ... АБО МАЙЖЕ ВСЕ.
            </p>
            
            <p>
              <span className="text-white font-bold">12+ РОКІВ КОМЕРЦІЙНОГО ДОСВІДУ:</span> ПРОЙШОВ ШЛЯХ ВІД СТВОРЕННЯ ПРОСТИХ ЛЕНДИНГІВ ДО ПРОЕКТУВАННЯ НАДСКЛАДНИХ ПРОГРАМНИХ КОМПЛЕКСІВ. 
              МОЯ РОБОТА — ЦЕ ЧИСТИЙ КОД, АРХІТЕКТУРА ТА ВИРІШЕННЯ СКЛАДНИХ БІЗНЕС-ЗАДАЧ.
            </p>
            
            <p>
              <span className="text-yellow-500 font-bold">ГЕЙМЕР ЕПОХИ 8-BIT:</span> МОЄ ДИТИНСТВО ПРОЙШЛО З ДЖОЙСТИКОМ ВІД DENDY ТА SEGA В РУКАХ. 
              Я ПАМ'ЯТАЮ КОЖЕН ПОВОРОТ У "ТАНЧИКАХ" І ТОЙ САМИЙ АЗАРТ, КОЛИ ПРОХОДИШ СКЛАДНИЙ РІВЕНЬ.
            </p>

            <blockquote className="border-l-4 border-red-600 pl-4 py-2 italic text-gray-400">
              "СЬОГОДНІ Я ПОЄДНАВ ДОСВІД У ПРОГРАМУВАННІ З ПРИСТРАСТЮ ДО РЕТРО-ІГОР. 
              Я РОЗІБРАВ BATTLE CITY НА «ГВИНТИКИ», ЩОБ ПОКАЗАТИ ВАМ: ПРОГРАМУВАННЯ — ЦЕ МИСТЕЦТВО."
            </blockquote>

            <p className="text-sm">
              <span className="text-white font-bold block mb-2 underline decoration-red-600">МОЯ МЕТА:</span>
              НАВЧИТИ ВАС ТА ВАШИХ ДІТЕЙ БУДУВАТИ ЛОГІКУ, АРХІТЕКТУРУ ТА ОТРИМУВАТИ ЗАДОВОЛЕННЯ ВІД РЕЗУЛЬТАТУ.
            </p>

            <p className="text-xs text-gray-500">
              Я ДОПОМОЖУ ВАМ ЗНАЙТИ СПІЛЬНУ МОВУ З ДІТЬМИ ЧЕРЕЗ ТЕХНОЛОГІЇ. 
              ПОКИ ІНШІ ПРОСТО ГРАЮТЬ — МИ З ВАМИ БУДУЄМО.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};