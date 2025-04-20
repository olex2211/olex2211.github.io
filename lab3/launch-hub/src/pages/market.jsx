import React, { useEffect, useState } from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { Link } from "react-router-dom";
import "./market.css";

function Market() {
  const companyCards = [
    {
      id: 1,
      name: "ByteForge",
      sphere: "Технології",
      employees: 80,
      markets: "США, Канада",
      capitalization: "4 500 000 $",
    },
    {
      id: 2,
      name: "NeuroSync",
      sphere: "Технології",
      employees: 140,
      markets: "ЄС, Японія",
      capitalization: "9 800 000 $",
    },
    {
      id: 3,
      name: "VisionaryAR",
      sphere: "Технології",
      employees: 60,
      markets: "США, Німеччина",
      capitalization: "3 700 000 $",
    },
    {
      id: 4,
      name: "MediPulse",
      sphere: "Медицина",
      employees: 100,
      markets: "Італія, Франція",
      capitalization: "6 200 000 $",
    },
    {
      id: 5,
      name: "BioNovaTech",
      sphere: "Медицина",
      employees: 85,
      markets: "Іспанія, Бразилія",
      capitalization: "5 100 000 $",
    },
    {
      id: 6,
      name: "EduBridge",
      sphere: "Освіта",
      employees: 50,
      markets: "Україна, Польща",
      capitalization: "2 800 000 $",
    },
    {
      id: 7,
      name: "SkillWave",
      sphere: "Освіта",
      employees: 40,
      markets: "Індія, США",
      capitalization: "2 200 000 $",
    },
    {
      id: 8,
      name: "FinGo",
      sphere: "Фінанси",
      employees: 65,
      markets: "США, Канада",
      capitalization: "3 900 000 $",
    },
    {
      id: 9,
      name: "CoinFlow",
      sphere: "Фінанси",
      employees: 120,
      markets: "Велика Британія, США, Австралія",
      capitalization: "7 500 000 $",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("Усі");
  const [filteredCompanies, setFilteredCompanies] = useState(companyCards);

  // Стан для збереження статистики
  const [sphereStats, setSphereStats] = useState({
    Технології: 0,
    Медицина: 0,
    Освіта: 0,
    Фінанси: 0,
  });

  const spheres = ["Усі", ...new Set(companyCards.map((card) => card.sphere))];

  // Фільтрація компаній
  useEffect(() => {
    if (activeFilter === "Усі") {
      setFilteredCompanies(companyCards);
    } else {
      setFilteredCompanies(
        companyCards.filter((card) => card.sphere === activeFilter)
      );
    }
  }, [activeFilter]);

  // Обчислюємо статистику при завантаженні компонента
  useEffect(() => {
    const counts = {
      Технології: 0,
      Медицина: 0,
      Освіта: 0,
      Фінанси: 0,
    };

    companyCards.forEach((card) => {
      if (Object.prototype.hasOwnProperty.call(counts, card.sphere)) {
        counts[card.sphere]++;
      }
    });

    setSphereStats(counts);
  }, []);

  // Обчислюємо відсотки для кожної сфери
  const totalCompanies = companyCards.length;
  const technologyPercentage =
    (sphereStats["Технології"] / totalCompanies) * 100;
  const healthcarePercentage = (sphereStats["Медицина"] / totalCompanies) * 100;
  const financePercentage = (sphereStats["Фінанси"] / totalCompanies) * 100;
  const educationPercentage = (sphereStats["Освіта"] / totalCompanies) * 100;

  return (
    <>
      <Header />
      <main>
        <section className="info">
          <div className="info__wrap_container">
            <div className="info__content row">
              <div className="info__item">
                <Link to="/market" className="info__quantity">
                  8040
                </Link>
                <span className="info__text">Стартапів</span>
              </div>
              <div className="info__item info__item_framed">
                <Link to="/investors" className="info__quantity">
                  17476
                </Link>
                <span className="info__text">Інвестиційних проектів</span>
              </div>
              <div className="info__item info__item_framed">
                <Link to="/" className="info__quantity">
                  4592
                </Link>
                <span className="info__text">
                  Заявок на отримання позики (кредиту)
                </span>
              </div>
              <div className="info__item info__item_framed">
                <Link to="/market" className="info__quantity">
                  6260
                </Link>
                <span className="info__text">
                  Пропозицій продажу бізнесу (частки)
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="market-title">
          <h1>Аналіз ринку</h1>
          <p>
            Слідкуй за трендами, відкривай нові можливості, і випереджай
            конкурентів
          </p>
        </div>

        <div className="analys-container">
          <section className="trends">
            <h2 className="analys-container-h2">🔥 Актуальні ринкові тренди</h2>
            <ul className="analys-container-list">
              <li>Штучний інтелект і автоматизація процесів</li>
              <li>Дистанційна робота та онлайн-сервіси</li>
              <li>Еко-продукти та сталі рішення</li>
              <li>Фінтех і блокчейн-проекти</li>
            </ul>
          </section>

          <section className="opportunities">
            <h2 className="analys-container-h2">🚀 Можливості для розвитку</h2>
            <ul className="analys-container-list">
              <li>Вихід на нові регіональні ринки</li>
              <li>Інтеграція з API популярних сервісів</li>
              <li>Співпраця з університетами та науковцями</li>
              <li>Залучення грантів на інновації</li>
            </ul>
          </section>

          <section className="trends">
            <h2 className="analys-container-h2">
              📊 Популярність сфер для інвесторів
            </h2>
            <div>Технології</div>
            <div className="progress-bar">
              <div
                className="progress it"
                style={{ width: `${technologyPercentage}%` }}
              >
                {Math.round(technologyPercentage)}%
              </div>
            </div>

            <div>Медицина</div>
            <div className="progress-bar">
              <div
                className="progress healthcare"
                style={{ width: `${healthcarePercentage}%` }}
              >
                {Math.round(healthcarePercentage)}%
              </div>
            </div>

            <div>Фінанси</div>
            <div className="progress-bar">
              <div
                className="progress finance"
                style={{ width: `${financePercentage}%` }}
              >
                {Math.round(financePercentage)}%
              </div>
            </div>

            <div>Освіта</div>
            <div className="progress-bar">
              <div
                className="progress education"
                style={{ width: `${educationPercentage}%` }}
              >
                {Math.round(educationPercentage)}%
              </div>
            </div>
          </section>

          <section className="market-analysis">
            <h2 className="analys-container-h2">📈 Загальний аналіз ринку</h2>
            <p>
              Протягом останнього року спостерігається зростання інвестицій у
              цифрові рішення та хмарні технології. Попит на інноваційні
              стартапи стабільно високий, особливо у сфері AI та медичних
              технологій. Інвестори шукають гнучкі бізнес-моделі з масштабованим
              потенціалом.
            </p>
          </section>
        </div>

        <div className="filters-container">
          {spheres.map((sphere) => (
            <button
              key={sphere}
              className={`filter-button ${
                activeFilter === sphere ? "active" : ""
              }`}
              onClick={() => setActiveFilter(sphere)}
              style={{
                background: activeFilter === sphere ? "rgb(104, 130, 54)" : "white",
                color: activeFilter === sphere ? "white" : "black",
              }}
            >
              {sphere}
            </button>
          ))}
        </div>

        <div className="market-container">
          {filteredCompanies.map((card) => (
            <section
              key={card.id}
              className="market-card"
              data-sphere={card.sphere}
            >
              <div className="market-card-text">
                <h2 className="market-company-name">{card.name}</h2>
                <h3 className="market-spheare">Сфера: {card.sphere}</h3>
                <p className="company-size">Працівники: {card.employees}</p>
                <p className="market-zbyt">Ринки збуту: {card.markets}</p>
                <p className="finance-score">
                  Капіталізація: {card.capitalization}
                </p>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Market;
