export default function Home() {
  return (
    <main>
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold text-yellow-600">EXORA</div>
          <nav className="hidden md:flex gap-6 text-gray-700">
            <a href="#brands" className="hover:text-yellow-600">Бренды</a>
            <a href="#offers" className="hover:text-yellow-600">Предложения</a>
            <a href="#benefits" className="hover:text-yellow-600">Преимущества</a>
            <a href="#steps" className="hover:text-yellow-600">Этапы</a>
            <a href="#contact" className="hover:text-yellow-600">Контакты</a>
          </nav>
          <a href="#contact" className="btn btn-primary">Заказать авто</a>
        </div>
      </header>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 py-16 px-6">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-600">
              Автомобили из Южной Кореи — под ключ
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Audi, BMW, Mercedes. Прозрачные условия, видеоосмотры и полное сопровождение.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/catalog" className="btn btn-primary">Смотреть каталог</a>
              <a href="/calculator" className="btn btn-outline">Рассчитать стоимость</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow">
            <img src="/hero-white.jpg" alt="EXORA Hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section id="brands" className="max-w-7xl mx-auto py-14 px-6">
        <h2 className="text-3xl font-bold mb-8">Каталог брендов</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {["Audi","BMW","Mercedes","Kia","Hyundai"].map((b)=>(
            <div key={b} className="card p-6 text-center">
              <div className="font-semibold">{b}</div>
              <div className="text-sm text-gray-500">20+ моделей</div>
            </div>
          ))}
        </div>
      </section>

      <section id="benefits" className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            {t:"Без посредников",d:"Прямые поставки, честная цена"},
            {t:"До 40% дешевле",d:"Аукционы и рынок Кореи"},
            {t:"Фото/видео отчёты",d:"Покажем авто так, будто вы рядом"},
          ].map((x)=>(
            <div key={x.t} className="card-dark p-6">
              <div className="text-yellow-600 text-xl font-semibold">{x.t}</div>
              <div className="text-gray-600 mt-2">{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="offers" className="max-w-7xl mx-auto py-14 px-6">
        <h2 className="text-3xl font-bold mb-8">Горячие предложения</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Audi A6","BMW 530i","Mercedes E200"].map((c)=>(
            <div key={c} className="card overflow-hidden">
              <img src="/hero-white.jpg" alt={c} className="w-full h-48 object-cover"/>
              <div className="p-5">
                <div className="text-xl font-semibold">{c}</div>
                <div className="mt-2 text-yellow-700 font-semibold">от 2 500 000 ₽ · под ключ</div>
                <a href="/car?id=1" className="btn btn-outline mt-4">Подробнее</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="steps" className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Этапы работы</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {["Заявка","Подбор","Договор","Доставка","Оформление"].map((s,i)=>(
              <div key={s} className="card-dark p-5">
                <div className="font-semibold">{s}</div>
                <div className="text-sm text-gray-600">Шаг {i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto py-14 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <form className="card p-6 grid gap-4">
            <input className="border rounded-lg p-3" placeholder="Имя"/>
            <input className="border rounded-lg p-3" placeholder="Телефон/WhatsApp"/>
            <textarea className="border rounded-lg p-3" placeholder="Пожелания"/>
            <button className="btn btn-primary">Отправить</button>
          </form>
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-3">Контакты</h3>
            <p className="text-gray-700">📍 Gwangju, South Korea</p>
            <p className="text-gray-700">✉️ info@exora.kr</p>
            <p className="text-gray-700">📱 WhatsApp / Telegram</p>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="max-w-7xl mx-auto py-6 text-center text-gray-600">© 2025 EXORA</div>
      </footer>
    </main>
  );
}
