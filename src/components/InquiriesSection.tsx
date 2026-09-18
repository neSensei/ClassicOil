import React, { useState } from 'react';

// ============================================================
// 📧 НАСТРОЙКА ПОЧТЫ ДЛЯ ЗАЯВОК — ИЗМЕНИТЕ АДРЕС ЗДЕСЬ:
// ============================================================
// Все заявки с этой формы будут приходить на указанный email.
// Отправка работает через бесплатный сервис FormSubmit —
// свой сервер/бэкенд не нужен.
//
// ВАЖНО: после первой отправки формы на этот адрес придёт
// письмо от FormSubmit с просьбой подтвердить активацию —
// нужно один раз перейти по ссылке в этом письме, иначе
// последующие заявки не будут доходить.
const RECIPIENT_EMAIL = 'crazyfoxy03@gmail.com';
// ============================================================

export const InquiriesSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [ticketNumber] = useState(() => Math.floor(1000 + Math.random() * 9000));
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    matter: 'Оптовые поставки',
    dispatch: '',
    _honey: '' // honeypot-поле от спам-ботов, должно оставаться пустым
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    if (formData._honey) return; // сработал honeypot — тихо игнорируем бота

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          'Имя представителя': formData.name,
          'Организация / вейп-шоп': formData.institution || '—',
          'Email или Telegram': formData.email,
          'Формат сотрудничества': formData.matter,
          'Комментарий': formData.dispatch || '—',
          _subject: `Новая заявка на опт/партнёрство — CO-B2B-${ticketNumber}`
        })
      });

      if (!response.ok) throw new Error('Request failed');
      setSubmitted(true);
    } catch (err) {
      setErrorMessage(
        'Не удалось отправить заявку. Проверьте подключение к интернету и попробуйте ещё раз, либо напишите нам напрямую.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiries" className="py-14 sm:py-24 md:py-32 bg-[#E8E5D2] paper-grain relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Archival Dispatch Masthead */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[10px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-[#806345] uppercase font-serif block mb-2">
            ОФИЦИАЛЬНАЯ КОРРЕСПОНДЕНЦИЯ · ОПТ И СОТРУДНИЧЕСТВО
          </span>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#382517] tracking-[0.05em] sm:tracking-[0.06em] uppercase leading-tight"
            style={{ fontFamily: '"Bodoni Moda", "Playfair Display", Georgia, serif' }}
          >
            ОПТОВЫЕ ПОСТАВКИ И СОТРУДНИЧЕСТВО
          </h2>
          <div className="w-16 h-[1px] bg-[#806345]/40 mx-auto mt-3 sm:mt-4 mb-3 sm:mb-4"></div>
          <p className="text-xs sm:text-sm text-[#57391F]/80 font-serif italic max-w-md mx-auto leading-relaxed">
            Официальные запросы для вейп-шопов, сервисных центров, розничных сетей и тестирования очищающих средств.
          </p>
        </div>

        {/* Vintage Dispatch Slip Card */}
        <div className="border border-[#806345]/40 p-4 sm:p-8 md:p-10 bg-[#DDD8C2]/40 relative shadow-xs">
          
          {/* Subtle Ledger Header */}
          <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center border-b border-[#806345]/25 pb-3 sm:pb-4 mb-6 sm:mb-8 text-[10px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-[#806345] font-mono uppercase gap-1">
            <span>БЛАНК ВЗАИМОДЕЙСТВИЯ № 24-B2B</span>
            <span>ОТДЕЛ ОПТОВЫХ ПРОДАЖ CLASSIC OIL</span>
          </div>

          {submitted ? (
            <div className="text-center py-10 sm:py-12 px-2 sm:px-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-[#57391F] rounded-full mx-auto flex items-center justify-center text-lg sm:text-xl text-[#57391F] font-serif mb-4">
                ✓
              </div>
              <h3
                className="text-xl sm:text-3xl font-serif text-[#382517] uppercase tracking-[0.05em] mb-2"
                style={{ fontFamily: '"Bodoni Moda", serif' }}
              >
                ЗАПРОС ПРИНЯТ В ОБРАБОТКУ
              </h3>
              <p className="text-xs sm:text-sm font-serif text-[#57391F] max-w-md mx-auto mb-6 leading-relaxed">
                Ваша заявка зарегистрирована под номером CO-B2B-
                {ticketNumber}. Менеджер коммерческого отдела свяжется с вами и направит оптовый презентационный буклет и условия сотрудничества.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs tracking-[0.2em] text-[#806345] underline uppercase font-serif hover:text-[#382517] p-2 min-h-[44px]"
              >
                ОТПРАВИТЬ ЕЩЁ ОДИН ЗАПРОС
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 text-[#57391F] font-serif">
              {/* Honeypot: скрытое от людей поле, ловит спам-ботов */}
              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={e => setFormData({ ...formData, _honey: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Correspondent Name */}
                <div>
                  <label
                    htmlFor="correspondent-name"
                    className="block text-[10px] sm:text-[10px] tracking-[0.18em] text-[#806345] uppercase mb-1 font-serif"
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
                    className="w-full bg-[#E8E5D2] border border-[#806345]/40 px-3.5 py-2.5 sm:py-2 text-base sm:text-sm text-[#382517] focus:outline-none focus:border-[#57391F] font-serif placeholder:text-[#A99A78] min-h-[44px]"
                  />
                </div>

                {/* Institution / Publication */}
                <div>
                  <label
                    htmlFor="institution-name"
                    className="block text-[10px] sm:text-[10px] tracking-[0.18em] text-[#806345] uppercase mb-1 font-serif"
                  >
                    НАЗВАНИЕ СЕТИ / ВЕЙП-ШОПА / ОРГАНИЗАЦИИ
                  </label>
                  <input
                    id="institution-name"
                    type="text"
                    value={formData.institution}
                    onChange={e => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="напр. Сеть Vape Room / Регион"
                    className="w-full bg-[#E8E5D2] border border-[#806345]/40 px-3.5 py-2.5 sm:py-2 text-base sm:text-sm text-[#382517] focus:outline-none focus:border-[#57391F] font-serif placeholder:text-[#A99A78] min-h-[44px]"
                  />
                </div>

                {/* Electronic Mail Address */}
                <div>
                  <label
                    htmlFor="correspondent-email"
                    className="block text-[10px] sm:text-[10px] tracking-[0.18em] text-[#806345] uppercase mb-1 font-serif"
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
                    className="w-full bg-[#E8E5D2] border border-[#806345]/40 px-3.5 py-2.5 sm:py-2 text-base sm:text-sm text-[#382517] focus:outline-none focus:border-[#57391F] font-serif placeholder:text-[#A99A78] min-h-[44px]"
                  />
                </div>

                {/* Subject of Inquiry */}
                <div>
                  <label
                    htmlFor="inquiry-matter"
                    className="block text-[10px] sm:text-[10px] tracking-[0.18em] text-[#806345] uppercase mb-1 font-serif"
                  >
                    ФОРМАТ СОТРУДНИЧЕСТВА
                  </label>
                  <select
                    id="inquiry-matter"
                    value={formData.matter}
                    onChange={e => setFormData({ ...formData, matter: e.target.value })}
                    className="w-full bg-[#E8E5D2] border border-[#806345]/40 px-3.5 py-2.5 sm:py-2 text-base sm:text-sm text-[#382517] focus:outline-none focus:border-[#57391F] font-serif min-h-[44px]"
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
                  className="block text-[10px] sm:text-[10px] tracking-[0.18em] text-[#806345] uppercase mb-1 font-serif"
                >
                  КОММЕНТАРИЙ / ГОРОД / КОЛИЧЕСТВО ТОЧЕК
                </label>
                <textarea
                  id="dispatch-notes"
                  rows={3}
                  value={formData.dispatch}
                  onChange={e => setFormData({ ...formData, dispatch: e.target.value })}
                  placeholder="Укажите город, количество торговых точек или интересующий объём..."
                  className="w-full bg-[#E8E5D2] border border-[#806345]/40 px-3.5 py-2.5 text-base sm:text-sm text-[#382517] focus:outline-none focus:border-[#57391F] font-serif placeholder:text-[#A99A78] resize-none"
                ></textarea>
              </div>

              {/* Error message, if the request failed */}
              {errorMessage && (
                <p className="text-xs sm:text-sm text-red-800 font-serif bg-red-50 border border-red-200 px-3.5 py-2.5 -mt-1">
                  {errorMessage}
                </p>
              )}

              {/* Submit Dispatch Slip */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between border-t border-[#806345]/25 gap-4">
                <span className="text-[10px] text-[#806345] font-serif italic text-center sm:text-left">
                  Сотрудничество с вейп-шопами, сервисами и дистрибьюторами. Строго для совершеннолетних (18+).
                </span>
                <button
                  id="submit-dispatch-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto text-xs tracking-[0.2em] sm:tracking-[0.22em] text-[#E8E5D2] bg-[#57391F] hover:bg-[#382517] active:bg-[#2c1d12] disabled:opacity-60 disabled:cursor-not-allowed uppercase font-serif px-6 sm:px-8 py-3.5 sm:py-3 transition-colors duration-200 min-h-[48px] flex items-center justify-center"
                >
                  {isSubmitting ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ ЗАПРОС'}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
