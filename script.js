document.addEventListener('DOMContentLoaded', function() {
    const buttonChange = document.getElementById('changePractices');
    buttonChange.addEventListener('click', function() {
        console.log("Кнопка 'Изменить названия практик' нажата");

        const secondSemesterPractices = [
            "Базовое бэкенд-приложение",
            "HTTP-запросы",
            "JSON и работа с ним",
            "HTTP-ответы",
            "Проектирование API",
            "Основы работы с базами данных",
            "RESTful API",
            "Аутентификация и авторизация",
            "Основы работы с фреймворками",
            "Тестирование приложений",
            "Оптимизация производительности",
            "Развертывание приложений",
            "Работа с Git и GitHub",
            "Создание документации",
            "Проектная работа",
            "Защита проекта"
        ];

        const rows = document.querySelectorAll('table:nth-of-type(2) tbody tr');
        rows.forEach((row, index) => {
            if (index < secondSemesterPractices.length) {
                const practiceCell = row.querySelector('td:nth-child(2)');
                practiceCell.textContent = secondSemesterPractices[index];
                console.log(`Практика ${index + 1} изменена на: ${secondSemesterPractices[index]}`);
            }
        });
    });

    const headerTitle = document.getElementById('headerTitle');
    headerTitle.addEventListener('click', function() {
        alert("Вы кликнули на заголовок - так держать!");
        console.log("Заголовок был кликнут");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const studentPhoto = document.getElementById('studentPhoto');

    // Обработчик события mouseover для увеличения размера
    studentPhoto.addEventListener('mouseover', function() {
        this.style.width = '360px';  // Увеличиваем ширину
        this.style.height = '500px';  // Увеличиваем высоту
    });

    // Обработчик события mouseout для возврата к исходному размеру
    studentPhoto.addEventListener('mouseout', function() {
        this.style.width = '320px';  // Возвращаем ширину
        this.style.height = '480px';  // Возвращаем высоту
    });

    // Обработчик события click для замены изображения
    studentPhoto.addEventListener('click', function() {
        this.src = "pic/nik.webp"; // Замените на URL вашего любимого преподавателя
    });

    // Обработчик события dblclick для вывода сообщения
    studentPhoto.addEventListener('dblclick', function() {
        alert('Не налегай, у меня не так много любимых преподавателей');
    });
});

