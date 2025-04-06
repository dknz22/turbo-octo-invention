// Refactored scripts for better readability and functionality

document.addEventListener('DOMContentLoaded', () => {
    // Handle notifications
    const notificationButton = document.querySelector('.notifications');
    if (notificationButton) {
        notificationButton.addEventListener('click', () => {
            alert('No new notifications!');
        });
    }

    // Handle dropdown menus
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            const parent = toggle.parentElement;
            const dropdownMenu = parent.querySelector('.dropdown-menu');

            if (dropdownMenu) {
                const isOpen = parent.classList.contains('open');

                // Close all other open dropdowns
                document.querySelectorAll('.dropdown.open').forEach(openDropdown => {
                    openDropdown.classList.remove('open');
                });

                // Toggle the current dropdown
                if (!isOpen) {
                    parent.classList.add('open');
                }
            }
        });
    });

    // Handle sidebar scrolling
    const menu = document.querySelector('.sidebar ul');
    if (menu) {
        menu.addEventListener('wheel', (event) => {
            event.preventDefault(); // Prevent default scrolling behavior
            menu.scrollTop += event.deltaY; // Manually control scrolling
        });
    }

    // Initialize Feather Icons
    feather.replace();

    // Adjust SVG attributes for Feather Icons
    setTimeout(() => {
        document.querySelectorAll('svg[data-feather]').forEach(svg => {
            svg.removeAttribute('width');
            svg.removeAttribute('height');
        });
    }, 0);

    // Force icon sizes after replacement
    document.querySelectorAll('i[data-feather]').forEach(icon => {
        const parentStyle = window.getComputedStyle(icon);
        icon.style.width = parentStyle.width;
        icon.style.height = parentStyle.height;
    });
});