document.addEventListener('DOMContentLoaded', function () {
    // Лічильники для кожної сфери
    const sphereCounts = {
        "Технології": 0,
        "Медицина": 0,
        "Освіта": 0,
        "Фінанси": 0
    };

    // Отримуємо всі елементи з класом "market-card"
    const marketCards = document.querySelectorAll('.market-card');

    // Підраховуємо кількість стартапів у кожній сфері
    marketCards.forEach(card => {
        const sphere = card.getAttribute('data-sphere');
        if (sphereCounts[sphere] !== undefined) {
            sphereCounts[sphere]++;
        }
    });

    // Загальна кількість стартапів
    const totalStartups = marketCards.length;

    // Обчислюємо відсотки для кожної сфери
    const technologyPercentage = (sphereCounts["Технології"] / totalStartups) * 100;
    const healthcarePercentage = (sphereCounts["Медицина"] / totalStartups) * 100;
    const financePercentage = (sphereCounts["Фінанси"] / totalStartups) * 100;
    const educationPercentage = (sphereCounts["Освіта"] / totalStartups) * 100;

    // Оновлюємо відсотки в DOM
    document.querySelector('.progress.it').style.width = `${technologyPercentage}%`;
    document.querySelector('.progress.it').textContent = `${Math.round(technologyPercentage)}%`;

    document.querySelector('.progress.healthcare').style.width = `${healthcarePercentage}%`;
    document.querySelector('.progress.healthcare').textContent = `${Math.round(healthcarePercentage)}%`;

    document.querySelector('.progress.finance').style.width = `${financePercentage}%`;
    document.querySelector('.progress.finance').textContent = `${Math.round(financePercentage)}%`;

    document.querySelector('.progress.education').style.width = `${educationPercentage}%`;
    document.querySelector('.progress.education').textContent = `${Math.round(educationPercentage)}%`;
});
