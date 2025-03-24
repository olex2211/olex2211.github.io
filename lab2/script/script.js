const incomeSlider = document.getElementById('income-slider');
const employeesSlider = document.getElementById('employees-slider');
const expensesSlider = document.getElementById('expenses-slider');

const incomeValue = document.getElementById('income-value');
const employeesValue = document.getElementById('employees-value');
const expensesValue = document.getElementById('expenses-value');

let incomeText = document.querySelector(".my-startup-income");
let outcomeText = document.querySelector(".my-startup-outcome");
let workersCountText = document.querySelector(".my-startup-workers");
let myStartupName = document.querySelector(".my-startup-name");
let myStartupSpheare = document.querySelector(".my-startup-spheare");
let myStartupMarketZbyt = document.querySelector(".my-startup-market-zbyt");
let myStartupOffices = document.querySelector(".my-startup-offices");


const name = document.getElementById('companyName');
const industry = document.getElementById('industry');
const employees = document.getElementById('countEmployee');
const revenue = document.getElementById('revenue');
const expenses = document.getElementById('expenses');
const markets = document.getElementById('markets');
const offices = document.getElementById('offices');



incomeSlider.addEventListener('input', function() {
  incomeValue.textContent = incomeSlider.value.toLocaleString() + '$';
});

employeesSlider.addEventListener('input', function() {
  employeesValue.textContent = employeesSlider.value;
});

expensesSlider.addEventListener('input', function() {
  expensesValue.textContent = expensesSlider.value.toLocaleString() + '$';
});


document.querySelector('.modeling-button').addEventListener('click', function() {

  let income = parseInt(incomeSlider.value);
  let employees = parseInt(employeesSlider.value);
  let expenses = parseInt(expensesSlider.value);

  incomeText.innerText = income.toLocaleString() + '$';
  workersCountText.innerText = employees;
  outcomeText.innerText = expenses.toLocaleString() + '$';
});

function checkInput (sliderValue, sliderText, valueText, inputValue, maxValue){
    if(inputValue.value > maxValue){
        inputValue.value = maxValue;
    }

    sliderValue.value = inputValue.value;
    sliderText.innerText  = inputValue.value;
    valueText.innerText = inputValue.value;
}

document.querySelector('.save-button').addEventListener('click', function() {
    myStartupName.innerText = name.value;
    myStartupSpheare.innerText = industry.value;
    workersCountText.innerText = employees.value;
    incomeText.innerText = revenue.value;
    outcomeText.innerText = expenses.value;
    myStartupMarketZbyt.innerText = markets.value;
    myStartupOffices.innerText = offices.value;

    checkInput(incomeSlider, incomeValue, incomeText, revenue, 1000000);

    checkInput(expensesSlider, expensesValue, outcomeText, expenses, 1000000);

    checkInput(employeesSlider, employeesValue, workersCountText, employees, 1000);

    const myStartupContainer = document.querySelector('.my-startup-container');

    if (getComputedStyle(myStartupContainer).display === "none") {
        myStartupContainer.style.display = "flex";
    }

    document.getElementById('regForm').reset();
});

//-------------------------------

// Масиви даних
const competitors = [
    { name: 'ByteForge' },
    { name: 'NeuroSync' },
    { name: 'VisionaryAR' }
  ];
  
  const investors = [
    { name: 'Олександра Гриневич' },
    { name: 'Марина Соловей' },
    { name: 'Катерина Лебідь' }
  ];
  
  // Отримуємо контейнер для таблиці
  const tableBody = document.querySelector('#competitor-investor-table tbody');
  
  // Об'єднуємо обидва масиви в один і створюємо таблицю
  const combined = competitors.map((competitor, index) => {
    const investor = investors[index];
    const row = document.createElement('tr');
    
    // Додаємо назву компанії
    const competitorCell = document.createElement('td');
    competitorCell.textContent = competitor.name;
    row.appendChild(competitorCell);
    
    // Додаємо ім'я інвестора
    const investorCell = document.createElement('td');
    investorCell.textContent = investor.name;
    row.appendChild(investorCell);
  
    // Додаємо рядок до таблиці
    tableBody.appendChild(row);
  });
  

const button = document.querySelector('.modeling-button');
const tooltip = document.querySelector('#tooltip');

button.addEventListener('mouseenter', () => {
  tooltip.style.visibility = 'visible';
  tooltip.style.opacity = '1';
});

button.addEventListener('mouseleave', () => {
  tooltip.style.visibility = 'hidden';
  tooltip.style.opacity = '0';
});






const buttons = document.querySelectorAll('.desktop-ul li');

const pages = [
  "index.html",        
  "investors.html",    
  "competitors.html"   
];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    navigateToPage(pages[i]);
  });
}

function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}
