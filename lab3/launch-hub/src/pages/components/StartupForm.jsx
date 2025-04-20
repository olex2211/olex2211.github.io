import { useState } from 'react';

function StartupForm() {
  // Стани для форми
  const [formData, setFormData] = useState({
    companyName: '',
    industry: 'Технології',
    countEmployee: 1,
    revenue: 0,
    expenses: 0,
    markets: '',
    offices: ''
  });

  // Стани для відображення стартапу
  const [startupData, setStartupData] = useState({
    name: 'Hator',
    spheare: 'Технології',
    workers: 250,
    income: 200000,
    outcome: 120000,
    marketZbyt: 'Україна, Європа',
    offices: 'м.Львів',
    visible: false
  });

  // Стани для слайдерів
  const [sliders, setSliders] = useState({
    income: 200000,
    employees: 250,
    expenses: 120000
  });

  // Обробник змін у формі
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Обробник зміни слайдерів
  const handleSliderChange = (e) => {
    const { id, value } = e.target;
    setSliders(prev => ({
      ...prev,
      [id]: parseInt(value)
    }));
  };

  // Обробник моделювання
  const handleModeling = () => {
    setStartupData(prev => ({
      ...prev,
      income: sliders.income,
      workers: sliders.employees,
      outcome: sliders.expenses
    }));
  };

  // Обробник збереження
  const handleSave = () => {
    const newData = {
      name: formData.companyName || startupData.name,
      spheare: formData.industry || startupData.spheare,
      workers: Math.min(parseInt(formData.countEmployee), 1000) || startupData.workers,
      income: Math.min(parseInt(formData.revenue), 1000000) || startupData.income,
      outcome: Math.min(parseInt(formData.expenses), 1000000) || startupData.outcome,
      marketZbyt: formData.markets || startupData.marketZbyt,
      offices: formData.offices || startupData.offices,
      visible: true
    };

    setStartupData(newData);
    setFormData({
      companyName: '',
      industry: 'Технології',
      countEmployee: 1,
      revenue: 0,
      expenses: 0,
      markets: '',
      offices: ''
    });
  };

  return (
    <>

    <div className="app-container">
      <form className="reg-form-container" id="regForm">
        <div className="reg-title">
          <h2>Мій стартап</h2>
        </div>
        <div className="form-content">
          <div className="form-row">
            <label>Назва компанії:</label>
            <input
              className="form-input"
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row" id="form-select">
            <label>Сфера діяльності:</label>
            <select
              className="form-input"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
            >
              <option>Технології</option>
              <option>Фінанси</option>
              <option>Медицина</option>
              <option>Освіта</option>
            </select>
          </div>
          <div className="form-row">
            <label>Кількість працівників:</label>
            <input
              className="form-input"
              type="number"
              name="countEmployee"
              min="1"
              max="1000"
              value={formData.countEmployee}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <label>Прибутки:</label>
            <input
              className="form-input"
              type="number"
              name="revenue"
              min="0"
              max="1000000"
              value={formData.revenue}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <label>Витрати:</label>
            <input
              className="form-input"
              type="number"
              name="expenses"
              min="0"
              max="1000000"
              value={formData.expenses}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <label>Ринки збуту:</label>
            <input
              className="form-input"
              type="text"
              name="markets"
              value={formData.markets}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <label>Офіси:</label>
            <input
              className="form-input"
              type="text"
              name="offices"
              value={formData.offices}
              onChange={handleInputChange}
            />
          </div>
          <div className="save">
            <button
              type="button"
              className="save-button"
              onClick={handleSave}
            >
              Зберегти
            </button>
          </div>
        </div>
      </form>

      <div
        className="my-startup-container"
        style={{ display: startupData.visible ? 'flex' : 'none' }}
      >
        <section className="my-startup-card">
          <div className="my-startup-text">
            <h2 className="my-startup-name">{startupData.name}</h2>

            <div className="my-startup-text-field">
              <span className="tittle">Сфера: </span>
              <span className="my-startup-spheare">{startupData.spheare}</span>
            </div>

            <div className="my-startup-text-field">
              <span className="tittle">Працівники: </span>
              <span className="my-startup-workers">{startupData.workers}</span>
            </div>

            <div className="my-startup-text-field">
              <span className="tittle">Прибутки: </span>
              <span className="my-startup-income">
                {startupData.income.toLocaleString()}$
              </span>
            </div>

            <div className="my-startup-text-field">
              <span className="tittle">Витрати: </span>
              <span className="my-startup-outcome">
                {startupData.outcome.toLocaleString()}$
              </span>
            </div>

            <div className="my-startup-text-field">
              <span className="tittle">Ринки збуту: </span>
              <span className="my-startup-market-zbyt">{startupData.marketZbyt}</span>
            </div>

            <div className="my-startup-text-field">
              <span className="tittle">Офіси: </span>
              <span className="my-startup-offices">{startupData.offices}</span>
            </div>

            <div className="slider-container">
              <label htmlFor="income-slider" className="income-slider">
                Прибутки ($):{' '}
              </label>
              <input
                type="range"
                id="income"
                min="0"
                max="1000000"
                value={sliders.income}
                step="1000"
                onChange={handleSliderChange}
              />
              <span id="income-value">
                {sliders.income.toLocaleString()}$
              </span>
            </div>

            <div className="slider-container">
              <label htmlFor="expenses-slider" className="expenses-slider">
                Витрати ($):{' '}
              </label>
              <input
                type="range"
                id="expenses"
                min="0"
                max="1000000"
                value={sliders.expenses}
                step="1000"
                onChange={handleSliderChange}
              />
              <span id="expenses-value">
                {sliders.expenses.toLocaleString()}$
              </span>
            </div>

            <div className="slider-container">
              <label htmlFor="employees-slider">
                Кількість працівників:{' '}
              </label>
              <input
                type="range"
                id="employees"
                min="1"
                max="1000"
                value={sliders.employees}
                step="1"
                onChange={handleSliderChange}
              />
              <span id="employees-value">{sliders.employees}</span>
            </div>

            <div className="button-wrapper">
              <button
                className="modeling-button"
                onClick={handleModeling}
              >
                Моделювання бізнес процесу
              </button>
              <div className="tooltip" id="tooltip">
                Зберігає зміни та оновлює дані стартапу
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

export default StartupForm;