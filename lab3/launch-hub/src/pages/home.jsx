import "./home.css";
import StartupForm from "./components/StartupForm.jsx";
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import { Link } from 'react-router-dom';

function Home() {
    const renderCompetitorInvestorTable = () => {
      // Масиви даних
      const competitors = [
        { name: "ByteForge" },
        { name: "NeuroSync" },
        { name: "VisionaryAR" },
      ];
  
      const investors = [
        { name: "Олександра Гриневич" },
        { name: "Марина Соловей" },
        { name: "Катерина Лебідь" },
      ];
  
      // Об'єднуємо дані для таблиці
      const tableData = competitors.map((competitor, index) => ({
        company: competitor.name,
        investor: investors[index]?.name || "Немає інвестора",
      }));
  
      return (
        <div className="table">
          <table id="competitor-investor-table">
            <thead>
              <tr>
                <th>Назва компанії</th>
                <th>Ім'я інвестора</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={`row-${index}`}>
                  <td>{item.company}</td>
                  <td>{item.investor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
  
    return (
      <>
        <Header/>
        <main>
          <div className="motivation-paragraph">
            <h1>Зроби свій перший крок до успішного бізнесу</h1>
            <p>Не зволікай — твій стартап починається просто зараз!</p>
          </div>
  
          <div className="steps">
            <div className="step">
              <h2>Крок 1</h2>
              <p>
                Опиши свою ідею. Не важливо, на якому вона етапі — ми допоможемо
                її розвинути.
              </p>
            </div>
            <div className="step">
              <h2>Крок 2</h2>
              <p>
                Заповни форму. Дай нам знати, чим ти хочеш займатися і яку
                проблему вирішуєш.
              </p>
            </div>
            <div className="step">
              <h2>Крок 3</h2>
              <p>
                Отримай фідбек та підтримку. Ми зв'яжемося з тобою з пропозиціями
                розвитку.
              </p>
            </div>
          </div>
  
          {StartupForm()}
  
          {renderCompetitorInvestorTable()}
  
          <section className="info-note">
            <p>
              💼 Хочеш дізнатися більше? Переглянь{" "}
              <Link to="/market" className="linkTo">
                <strong>список конкурентів</strong>
              </Link>{" "}
              та{" "}
              <Link to="/investors" className="linkTo">
                <strong>потенційних інвесторів</strong>
              </Link>{" "}
              у відповідних вкладках. Це допоможе тобі краще розуміти ринок і
              сформувати ефективну стратегію!
            </p>
          </section>
        </main>
  
        <Footer />
      </>
    );
  }
  
  export default Home;
  