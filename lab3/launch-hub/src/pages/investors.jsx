import React from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import "./investors.css";

function Investors() {
  const investors = [
    {
      id: 1,
      name: "Олександр Гриневич",
      sphere: "Технологічні стартапи",
      capital: "2 500 000 $",
      bio: "Підтримую перспективні інноваційні проєкти у сфері штучного інтелекту та автоматизації.",
      photo: "./investor1.jpg",
    },
    {
      id: 2,
      name: "Марія Попадевич",
      sphere: "Екологічні рішення",
      capital: "1 800 000 $",
      bio: "Інвестую в екологічні технології, що допомагають зберігати природу та розвивати сталий бізнес.",
      photo: "./investor2.jpg",
    },
    {
      id: 3,
      name: "Катерина Лебідь",
      sphere: "Фінансові технології",
      capital: "3 200 000 $",
      bio: "Допомагаю фінтех-стартапам розвивати інноваційні платіжні системи та криптовалютні платформи.",
      photo: "./investor3.jpg",
    },
    {
      id: 4,
      name: "Павло Іванчишин",
      sphere: "Мода та дизайн",
      capital: "1 500 000 $",
      bio: "Підтримую креативних дизайнерів та бренди, що створюють унікальні та екологічні колекції.",
      photo: "./investor4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="investors-title">
          <h1>Потенційні інвестори</h1>
          <p>
            Дізнайся, хто може інвестувати в твій стартап, і як це зробити
            ефективно
          </p>
        </div>

        <div className="investors-paragraphs-container">
          <section className="title-paragraphs">
            <h2 className="title-paragraphs-h2">👤 Хто такі наші інвестори</h2>
            <p>
              Наші інвестори — це венчурні фонди, приватні особи, а також
              корпорації, зацікавлені в інноваціях. Вони шукають стартапи з
              потенціалом швидкого зростання, сильною командою та зрозумілою
              бізнес-моделлю.
            </p>
          </section>

          <section className="title-paragraphs">
            <h2 className="title-paragraphs-h2">📌 Критерії вибору стартапу</h2>
            <ul className="title-paragraphs-list">
              <li>Наявність MVP або працюючого продукту</li>
              <li>Чітке розуміння цільового ринку</li>
              <li>Команда з досвідом</li>
              <li>Фінансовий план і стратегія монетизації</li>
              <li>Унікальна цінність продукту</li>
            </ul>
          </section>

          <section className="title-paragraphs">
            <h2 className="title-paragraphs-h2">
              💡 Поради для залучення інвестора
            </h2>
            <ul className="title-paragraphs-list">
              <li>Підготуй короткий і чіткий pitch deck</li>
              <li>Розроби демонстрацію продукту</li>
              <li>Знай інвестора: досліди його попередні інвестиції</li>
              <li>Будь відкритим щодо ризиків та плану дій</li>
            </ul>
          </section>
        </div>

        <div className="investors-container">
          {investors.map((investor) => (
            <section key={investor.id} className="investor-card">
              <img src={investor.photo} alt={investor.name} className="photo" />
              <div className="investor-card-text">
                <span className="name">
                  <h3>{investor.name}</h3>
                </span>
                <span className="spheare">Сфера: {investor.sphere}</span>
                <span className="money-vol">Капітал: {investor.capital}</span>
                <span className="bio">Про себе: {investor.bio}</span>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Investors;
