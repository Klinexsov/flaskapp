document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', () => {
        button.innerText = "Открываем...";
        setTimeout(() => {
            alert("Скоро будет доступно!");
            button.innerText = "Узнать больше";
        }, 1000);
    });
});
