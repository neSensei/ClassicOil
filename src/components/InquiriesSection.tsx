import React, { useState } from 'react';

export const InquiriesSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    matter: 'Кураторство и пресса',
    dispatch: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="inquiries" className="py-24 sm:py-32 bg-[#E8E5D2] paper-grain relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Archival Dispatch Masthead */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] text-[#806345] uppercase font-serif block mb-2">
            ОФИЦИАЛЬНАЯ КОРРЕСПОНДЕНЦИЯ · ОПТ И СОТРУДНИЧЕСТВО
          </span>
          <h2
            className="text-3xl sm:text-5xl font-serif text-[#382517] tracking-[0.06em] uppercase"
            style={{ fontFamily: '"Bodoni Moda", "Playfair Display", Georgia, serif' }}
          >
            ОПТОВЫЕ ПОСТАВКИ И СОТРУДНИЧЕСТВО
          </h2>
          <div className="w-16 h-[1px] bg-[#806345]/40 mx-auto mt-4 mb-4"></div>
          <p className="text-xs sm:text-sm text-[#57391F]/80 font-serif italic max-w-md mx-auto">
            Официальные запросы для вейп-шопов, сервисных центров, розничных сетей и тестирования очищающих средств.
          </p>
        </div>

        {/* Vintage Dispatch Slip Card */}
        <div className="border border-[#806345]/40 p-6 sm:p-10 bg-[#DDD8C2]/40 relative shadow-xs">
          
          {/* Subtle Ledger Header */}
          <div className="flex justify-between items-center border-b border-[#806345]/25 pb-4 mb-8 text-[9px] sm:text-[10px] tracking-[0.25em] text-[#806345] font-mono uppercase">
            <span>БЛАНК ВЗАИМОДЕЙСТВИЯ № 24-B2B</span>
            <span>ОТДЕЛ ОПТОВЫХ ПРОДАЖ CLASSIC OIL</span>
          </div>

          {submitted ? (
            <div className="text-center py-12 px-4">
              <div className="w-16 h-16 border-2 border-[#57391F] rounded-full mx-auto flex items-center justify-center text-xl text-[#57391F] font-serif mb-4">
                ✓
              </div>
              <h3
                className="text-2xl sm:text-3xl font-serif text-[#382517] uppercase tracking-[0.05em] mb-2"
                style={{ fontFamily: '"Bodoni Moda", serif' }}
              >
                ЗАПРОС ПРИНЯТ В ОБРАБОТКУ
              </h3>
              <p className="text-sm font-serif text-[#57391F] max-w-md mx-auto mb-6">
                Ваша заявка зарегистрирована под номером CO-B2B-
                {Math.floor(1000 + Math.random() * 9000)}. Менеджер коммерческого отдела свяжется с вами и направит оптовый презентационный буклет и условия сотрудничества.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs tracking-[0.22em] text-[#806345] underline uppercase font-serif hover:text-[#382517]"
              >
                ОТПРАВИТЬ ЕЩЁ ОДИН ЗАПРОС
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-[#57391F] font-serif">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Correspondent Name */}
                <div>
                  <label
                    htmlFor="correspondent-name"
                    className="block text-[10px] tracking-[0.2em] text-[#806345] uppercase mb-1 font-serif"
                  >
                    ИМЯ ПРЕДСТАВИТЕЛЯ *
                  </label>
                  <input
                    id="correspondent-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="напр. Александр Белов"
                    className="w-full bg-[#E8E5D2] border border-[#806345]/40 px-3.5 py-2.5 text-sm text-[#382517] focus:outline-none focus:border-[#57391F] font-serif placeholder:text-[#A99A78]"
                  />
                </div>

                {/* Institution / Publication */}
                <div>
                  <label
                    htmlFor="institution-name"
                    className="block text-[10px] tracking-[0.2em] text-[#806345] uppercase mb-1 font-serif"
                  >
                    НАЗВАНИЕ СЕТИ / ВЕЙП-ШОПА / ОРГАНИЗАЦИИ
                  </label>
                  <input
                    id="institution-name"
                    type="text"
                    value={formData.institution}
                    onChange={e => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="напр. Сеть Vape Room / Регион"
                    className="w-full bg-[#E8E5D2] border border-[#806345]/40 px-3.5 py-2.5 text-sm text-[#382517] focus:outline-none focus:border-[#57391F] font-serif placeholder:text-[#A99A78]"
                  />
                </div>

                {/* Electronic Mail Address */}
                <div>
                  <label
                    htmlFor="correspondent-email"
                    className="block text-[10px] tracking-[0.2em] text-[#806345] uppercase mb-1 font-serif"
                  >
                    EMAIL ИЛИ TELEGRAM ДЛЯ СВЯЗИ *
                  </label>
                  <input
                    id="correspondent-email"
                    type="text"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="opt@vapeshop.ru или @telegram_user"
                    className="w-full bg-[#E8E5D2] border border-[#806345]/40 px-3.5 py-2.5 text-sm text-[#382517] focus:outline-none focus:border-[#57391F] font-serif placeholder:text-[#A99A78]"
                  />
                </div>

                {/* Subject of Inquiry */}
                <div>
                  <label
                    htmlFor="inquiry-matter"
                    className="block text-[10px] tracking-[0.2em] text-[#806345] uppercase mb-1 font-serif"
                  >
                    ФОРМАТ СОТРУДНИЧЕСТВА
                  </label>
                  <select
                    id="inquiry-matter"
                    value={formData.matter}
                    onChange={e => setFormData({ ...formData, matter: e.target.value })}
                    className="w-full bg-[#E8E5D2] border border-[#806345]/40 px-3.5 py-2.5 text-sm text-[#382517] focus:outline-none focus:border-[#57391F] font-serif"
                  >
                    <option value="Оптовые поставки">Оптовые поставки в вейп-шопы и сети (B2B)</option>
                    <option value="Тестовые образцы">Запрос образцов очищающих составов для полки</option>
                    <option value="Региональное партнерство">Региональное партнерство / Крупный опт</option>
                    <option value="Медиа и обзоры">Пресса, обзоры и тестирование</option>
                  </select>
                </div>

              </div>

              {/* Message Dispatch */}
              <div>
                <label
                  htmlFor="dispatch-notes"
                  className="block text-[10px] tracking-[0.2em] text-[#806345] uppercase mb-1 font-serif"
                >
                  КОММЕНТАРИЙ / ГОРОД / КОЛИЧЕСТВО ТОЧЕК
                </label>
                <textarea
                  id="dispatch-notes"
                  rows={4}
                  value={formData.dispatch}
                  onChange={e => setFormData({ ...formData, dispatch: e.target.value })}
                  placeholder="Укажите город, количество торговых точек или интересующий объём..."
                  className="w-full bg-[#E8E5D2] border border-[#806345]/40 px-3.5 py-2.5 text-sm text-[#382517] focus:outline-none focus:border-[#57391F] font-serif placeholder:text-[#A99A78] resize-none"
                ></textarea>
              </div>

              {/* Submit Dispatch Slip */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between border-t border-[#806345]/25 gap-4">
                <span className="text-[10px] text-[#806345] font-serif italic text-center sm:text-left">
                  Работаем исключительно с юридическими лицами и ИП по безналичному расчёту с маркировкой «Честный Знак». 18+
                </span>
                <button
                  id="submit-dispatch-btn"
                  type="submit"
                  className="w-full sm:w-auto text-xs tracking-[0.22em] text-[#E8E5D2] bg-[#57391F] hover:bg-[#382517] uppercase font-serif px-8 py-3 transition-colors duration-200"
                >
                  ОТПРАВИТЬ ЗАПРОС
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
