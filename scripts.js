// Скрипты для взаимодействия с элементами интерфейса
document.querySelector('.notifications').addEventListener('click', () => {
    alert('No new notifications!');
});

document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке
        const parent = toggle.parentElement;
        const dropdownMenu = parent.querySelector('.dropdown-menu');
        
        if (dropdownMenu) {
            const isOpen = parent.classList.contains('open');
            document.querySelectorAll('.dropdown.open').forEach(openDropdown => {
                openDropdown.classList.remove('open'); // Закрываем другие открытые меню
            });
            if (!isOpen) {
                parent.classList.add('open'); // Открываем текущее меню
            }
        }
    });
});

const menu = document.querySelector('.sidebar ul');
menu.addEventListener('wheel', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение прокрутки
    menu.scrollTop += event.deltaY; // Управляем прокруткой вручную
});