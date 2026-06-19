import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Phone, Globe, MapPin, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";

/**
 * PP-Pack Landing Page
 * Design: Modern Minimalist B2B with forest green brand color (#2d8659)
 * Reference: Pixel-perfect replication of provided design mockups
 * Typography: Montserrat Bold for headlines, Inter for body
 */

export default function Home() {
  const [formData, setFormData] = useState({
    company: "",
    fio: "",
    position: "",
    phone: "",
    email: "",
    website: "",
    volume: "",
    stage: "",
    launch: "",
    consultation: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663760920192/9xkL4JtnZDQmxyaCBhdGmc/pp-pack-logo-iiBhdxavgcLwFWhM4bwg7R.webp"
              alt="PP-Pack"
              className="w-10 h-10"
            />
            <span className="font-bold text-lg text-gray-900" style={{ fontFamily: "Montserrat" }}>
              PP-Pack
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              Преимущества
            </a>
            <a href="#form" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              Получить образцы
            </a>
            <a href="#contacts" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Section 1: Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left: Content (5 columns) */}
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-8">
                <span className="text-xs font-bold text-green-700 uppercase">PP 5</span>
                <span className="text-xs text-green-700 font-semibold">ПИЩЕВАЯ УПАКОВКА НОВОГО ПОКОЛЕНИЯ</span>
              </div>

              <h1 className="heading-display text-gray-900 mb-8" style={{ fontFamily: "Montserrat" }}>
                PP-БУТЫЛКИ ДЛЯ ГОРЯЧЕГО РОЗЛИВА И РАЗОГРЕВА В МИКРОВОЛНОВОЙ ПЕЧИ
              </h1>

              <p className="text-base text-gray-600 mb-10 leading-relaxed">
                Безопасная упаковка из пищевого полипропилена (5PP) для супов, соусов, напитков и других жидких продуктов
              </p>

              {/* Key Benefits */}
              <div className="space-y-3 mb-10">
                {[
                  "Подходит для разогрева в СВЧ",
                  "Пищевой PP (№5)",
                  "Устойчива к горячему розливу",
                  "Герметичная крышка",
                  "Производство в России",
                  "Возможность брендирования",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base rounded-lg font-bold transition-colors">
                  ПОЛУЧИТЬ ОБРАЗЦЫ →
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-900 px-8 py-3 text-base rounded-lg hover:bg-gray-50 font-bold transition-colors"
                >
                  ЗАПРОСИТЬ КП →
                </Button>
              </div>
            </div>

            {/* Center: Bottle Image (4 columns) */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663760920192/9xkL4JtnZDQmxyaCBhdGmc/pp-pack-bottle-HBSB4XaFEUb2E4N2V9BGjc.webp"
                  alt="PP Bottle"
                  className="w-full max-w-xs h-auto drop-shadow-lg"
                />
              </div>
            </div>

            {/* Right: Use Cases (3 columns) */}
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wider">ИДЕАЛЬНО ДЛЯ:</h3>
              <div className="space-y-5">
                {[
                  { name: "Крем-супов", color: "bg-orange-100" },
                  { name: "Бульонов", color: "bg-yellow-100" },
                  { name: "Соусов", color: "bg-amber-100" },
                  { name: "Смузи", color: "bg-pink-100" },
                  { name: "Протеиновых коктейлей", color: "bg-blue-100" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden`}>
                      <img
                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center">
                      <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Uniqueness */}
      <section id="benefits" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Bottle Image */}
            <div className="flex justify-center md:order-2">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-full blur-3xl -z-10"></div>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663760920192/9xkL4JtnZDQmxyaCBhdGmc/pp-pack-bottle-HBSB4XaFEUb2E4N2V9BGjc.webp"
                  alt="PP Bottle"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="md:order-1">
              <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-8">
                <span className="text-xs font-bold text-green-700 uppercase">04</span>
                <span className="text-xs text-green-700 font-semibold">НАША УНИКАЛЬНОСТЬ</span>
              </div>

              <h2 className="heading-lg text-gray-900 mb-8" style={{ fontFamily: "Montserrat" }}>
                Не бутылка для напитков.
                <br />
                <span className="text-green-600">Упаковка для готовой еды.</span>
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  { icon: "🔥", title: "Горячий розлив" },
                  { icon: "📺", title: "Разогрев в СВЧ" },
                  { icon: "🍲", title: "Употребление из упаковки" },
                  { icon: "♻", title: "Пищевой PP №5" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div className="flex items-center">
                      <p className="font-semibold text-gray-900">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-900 font-semibold text-sm">
                    То, что для PET является ограничением, для PP является стандартом.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Producer Benefits */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-4" style={{ fontFamily: "Montserrat" }}>
              Почему производители
              <br />
              <span className="text-green-600">выбирают формат бутылки</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⭐",
                title: "Новая категория",
                desc: "Создает дополнительный сценарий потребления.",
              },
              {
                icon: "📦",
                title: "Меньше упаковочных операций",
                desc: "Не требуется ложка или дополнительная комплектация.",
              },
              {
                icon: "🚚",
                title: "Удобство логистики",
                desc: "Компактная и прочная упаковка.",
              },
              {
                icon: "🏆",
                title: "Отличие от конкурентов",
                desc: "Продукт заметнее на полке.",
              },
              {
                icon: "🛍",
                title: "Импульсная покупка",
                desc: "Можно употреблять на ходу.",
              },
              {
                icon: "📺",
                title: "Готовность к разогреву",
                desc: "СВЧ без переливания.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 text-2xl">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Sample Request Form */}
      <section id="form" className="py-20 md:py-32 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-8">
            <span className="text-xs font-bold text-green-700 uppercase">04</span>
            <span className="text-xs text-green-700 font-semibold">Получить образцы</span>
          </div>

          <h2 className="heading-lg text-gray-900 mb-6" style={{ fontFamily: "Montserrat" }}>
            Получите образцы
            <br />
            <span className="text-green-600">бутылок для тестирования</span>
          </h2>

          <p className="text-base text-gray-600 mb-12">
            Оставьте заявку — мы свяжемся с вами в течение 1 рабочего дня и отправим образцы.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Company & FIO */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company" className="text-gray-900 font-semibold mb-3 block text-sm">
                  Компания *
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Введите название компании"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
                />
              </div>
              <div>
                <Label htmlFor="fio" className="text-gray-900 font-semibold mb-3 block text-sm">
                  ФИО *
                </Label>
                <Input
                  id="fio"
                  name="fio"
                  placeholder="Введите ваше ФИО"
                  value={formData.fio}
                  onChange={handleInputChange}
                  required
                  className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
                />
              </div>
            </div>

            {/* Row 2: Position & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="position" className="text-gray-900 font-semibold mb-3 block text-sm">
                  Должность *
                </Label>
                <Input
                  id="position"
                  name="position"
                  placeholder="Введите должность"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-900 font-semibold mb-3 block text-sm">
                  Телефон *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+7 (___) __-__"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
                />
              </div>
            </div>

            {/* Row 3: Email & Website */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-gray-900 font-semibold mb-3 block text-sm">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@mail.ru"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
                />
              </div>
              <div>
                <Label htmlFor="website" className="text-gray-900 font-semibold mb-3 block text-sm">
                  Сайт компании
                </Label>
                <Input
                  id="website"
                  name="website"
                  placeholder="https://"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
                />
              </div>
            </div>

            {/* Row 4: Volume */}
            <div className="bg-white p-6 rounded-lg">
              <Label className="text-gray-900 font-semibold mb-4 block text-sm flex items-center gap-2">
                <span className="text-xl">📊</span> Какой объем вас интересует?
              </Label>
              <RadioGroup value={formData.volume} onValueChange={(value) => handleRadioChange("volume", value)}>
                <div className="grid md:grid-cols-4 gap-4">
                  {["до 10 000 шт", "10–50 тыс", "50–100 тыс", "более 100 тыс"].map((vol, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <RadioGroupItem value={vol} id={`vol${idx}`} />
                      <Label htmlFor={`vol${idx}`} className="cursor-pointer text-sm">
                        {vol}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Row 5: Stage */}
            <div className="bg-white p-6 rounded-lg">
              <Label className="text-gray-900 font-semibold mb-4 block text-sm flex items-center gap-2">
                <span className="text-xl">📋</span> На каком этапе проект?
              </Label>
              <RadioGroup value={formData.stage} onValueChange={(value) => handleRadioChange("stage", value)}>
                <div className="grid md:grid-cols-5 gap-4">
                  {["идея", "разработка рецептуры", "тестирование", "готов к запуску", "уже продается"].map((stage, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <RadioGroupItem value={stage} id={`stage${idx}`} />
                      <Label htmlFor={`stage${idx}`} className="cursor-pointer text-sm">
                        {stage}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Row 6: Launch Timeline */}
            <div className="bg-white p-6 rounded-lg">
              <Label className="text-gray-900 font-semibold mb-4 block text-sm flex items-center gap-2">
                <span className="text-xl">📅</span> Когда планируете запуск?
              </Label>
              <RadioGroup value={formData.launch} onValueChange={(value) => handleRadioChange("launch", value)}>
                <div className="grid md:grid-cols-4 gap-4">
                  {["до 3 месяцев", "3–6 месяцев", "6–12 месяцев", "более года"].map((launch, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <RadioGroupItem value={launch} id={`launch${idx}`} />
                      <Label htmlFor={`launch${idx}`} className="cursor-pointer text-sm">
                        {launch}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Row 7: Consultation */}
            <div className="bg-white p-6 rounded-lg">
              <Label className="text-gray-900 font-semibold mb-4 block text-sm flex items-center gap-2">
                <span className="text-xl">💬</span> Нужна ли консультация по технологии горячего розлива?
              </Label>
              <RadioGroup value={formData.consultation} onValueChange={(value) => handleRadioChange("consultation", value)}>
                <div className="flex gap-8">
                  {["да", "нет"].map((cons, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <RadioGroupItem value={cons} id={`cons${idx}`} />
                      <Label htmlFor={`cons${idx}`} className="cursor-pointer text-sm capitalize">
                        {cons}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-base rounded-lg font-bold transition-colors"
              >
                ✈ ПОЛУЧИТЬ ОБРАЗЦЫ
              </Button>
              <p className="text-xs text-gray-600 mt-4 text-center">
                🔒 Мы гарантируем конфиденциальность ваших данных и не передаем их третьим лицам.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Section 5: Contacts & Footer */}
      <section id="contacts" className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {/* Contacts */}
            <div>
              <h3 className="heading-lg text-gray-900 mb-8" style={{ fontFamily: "Montserrat" }}>
                Контакты
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold uppercase">Телефон</p>
                    <p className="text-lg font-semibold text-gray-900">+7 (___) __-__</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold uppercase">E-mail</p>
                    <p className="text-lg font-semibold text-gray-900">info@pp-pack.ru</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold uppercase">Сайт</p>
                    <p className="text-lg font-semibold text-gray-900">www.pp-pack.ru</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold uppercase">Расположение</p>
                    <p className="text-lg font-semibold text-gray-900">Работаем по всей России</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="heading-lg text-gray-900 mb-8" style={{ fontFamily: "Montserrat" }}>
                Режим работы
              </h3>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-gray-900">Пн–Пт</p>
                  <p className="text-base text-gray-600">09:00–18:00</p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div>
              <h3 className="heading-lg text-gray-900 mb-8" style={{ fontFamily: "Montserrat" }}>
                Быстрая связь
              </h3>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Оставьте заявку — мы свяжемся с вами в течение 1 рабочего дня</p>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                  ✉ ПОЛУЧИТЬ ОБРАЗЦЫ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663760920192/9xkL4JtnZDQmxyaCBhdGmc/pp-pack-logo-iiBhdxavgcLwFWhM4bwg7R.webp"
                alt="PP-Pack"
                className="w-10 h-10"
              />
              <div>
                <p className="font-bold" style={{ fontFamily: "Montserrat" }}>
                  PP-Pack
                </p>
                <p className="text-xs text-gray-400">PP-бутылки для пищевых производств</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm">© PP-Pack 2026</p>
            </div>
            <div className="text-right space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition text-sm">
                Согласие на обработку персональных данных
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
