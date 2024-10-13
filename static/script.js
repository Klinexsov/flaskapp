document.querySelectorAll('.card button').forEach(button => { 
    button.addEventListener('click', () => {
        button.innerText = "Открываем...";
        setTimeout(() => {
            alert("Скоро будет доступно!");
            button.innerText = "Узнать больше";
        }, 1000);
    });
});


/// Переменные для элементов
const modal = document.getElementById('course-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModalBtn = document.querySelector('.close-btn');
const enrollButton = document.getElementById('enroll-button');

// Данные курсов
const courseDetails = {
    python: {
        title: "Курс Python",
        description: `
            <strong>О курсе:</strong> Этот курс научит вас программировать на языке Python с нуля до уверенного уровня. Вы освоите синтаксис, структуры данных и библиотеки.<br><br>
            <strong>Вы научитесь:</strong>
            <ul>
                <li>Создавать скрипты для автоматизации задач</li>
                <li>Работать с API и базами данных</li>
                <li>Разрабатывать консольные и веб-приложения</li>
            </ul>
            <strong>Для кого этот курс:</strong> Подходит для начинающих разработчиков и тех, кто хочет сменить профессию.<br><br>
            <strong>Итоговый проект:</strong> Приложение для управления задачами с использованием Flask и SQLite.
        `,
    },
    webdev: {
        title: "Курс Веб-разработки",
        description: `
            <strong>О курсе:</strong> Всего за 30 дней вы освоите создание веб-сайтов с нуля, используя современные технологии HTML, CSS и JavaScript.<br><br>
            <strong>Вы научитесь:</strong>
            <ul>
                <li>Создавать адаптивные веб-сайты</li>
                <li>Использовать CSS-анимации и эффекты</li>
                <li>Программировать интерактивные элементы на JavaScript</li>
            </ul>
            <strong>Для кого этот курс:</strong> Подходит для начинающих и тех, кто хочет создавать веб-приложения самостоятельно.<br><br>
            <strong>Итоговый проект:</strong> Портфолио-сайт с интерактивным меню и галереей.
        `,
    },
    datasci: {
        title: "Курс Data Science",
        description: `
            <strong>О курсе:</strong> Этот курс познакомит вас с анализом данных и основами машинного обучения с использованием Python и библиотек.<br><br>
            <strong>Вы научитесь:</strong>
            <ul>
                <li>Работать с большими данными с помощью Pandas и NumPy</li>
                <li>Создавать визуализации с Matplotlib</li>
                <li>Разрабатывать модели машинного обучения</li>
            </ul>
            <strong>Для кого этот курс:</strong> Подходит для аналитиков и программистов, желающих расширить свои навыки.<br><br>
            <strong>Итоговый проект:</strong> Предсказательная модель цен на недвижимость.
        `,
    }
};

// Открытие модального окна
document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', () => {
        const course = button.dataset.course;
        if (courseDetails[course]) {
            modalTitle.innerText = courseDetails[course].title;
            modalDescription.innerHTML = courseDetails[course].description;
        }
        modal.style.display = 'flex'; // Показываем модальное окно
    });
});

// Закрытие модального окна при клике на "крестик"
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
