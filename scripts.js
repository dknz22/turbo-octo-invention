// Refactored scripts for better readability and functionality

document.addEventListener('DOMContentLoaded', () => {
    // Handle notifications
    const notificationButton = document.querySelector('.notifications');
    if (notificationButton) {
        notificationButton.addEventListener('click', () => {
            alert('No new notifications!');
        });
    }

    // Add a notification popup element
    const notificationWrapper = document.querySelector('.notification-wrapper');
    const notificationPopup = document.createElement('div');
    notificationPopup.classList.add('notification-popup');
    notificationPopup.innerHTML = `
        <div class="notification-header">
            <span>Notifications</span>
            <button class="mark-all-read">Mark all as read</button>
        </div>
        <div class="notification-body">
            <div class="notification-item">New message from John</div>
            <div class="notification-item">Your subscription is expiring soon</div>
            <div class="notification-item">Update available for your app</div>
        </div>
        <div class="notification-footer">
            <a href="#">View all notifications</a>
        </div>
    `;
    notificationWrapper.appendChild(notificationPopup);

    // Add styles for the new sections
    const style = document.createElement('style');
    style.textContent = `
        .notification-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .notification-header .mark-all-read {
            background: none;
            border: none;
            color: #8b5cf6;
            cursor: pointer;
            font-size: 0.875rem;
        }

        .notification-header .mark-all-read:hover {
            text-decoration: underline;
        }

        .notification-body {
            max-height: 200px;
            overflow-y: auto;
            margin-bottom: 10px;
        }

        .notification-footer {
            text-align: center;
        }

        .notification-footer a {
            color: #8b5cf6;
            text-decoration: none;
            font-size: 0.875rem;
        }

        .notification-footer a:hover {
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);

    // Toggle the visibility of the notification popup
    notificationWrapper.addEventListener('click', () => {
        const isVisible = notificationPopup.style.display === 'block';
        notificationPopup.style.display = isVisible ? 'none' : 'block';
    });

    // Handle dropdown menus
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            const parent = toggle.parentElement;
            const dropdownMenu = parent.querySelector('.dropdown-menu');
            const chevronIcon = toggle.querySelector('.icon[data-feather="chevron-right"]');

            if (dropdownMenu) {
                const isOpen = parent.classList.contains('open');

                // Close all other open dropdowns
                document.querySelectorAll('.dropdown.open').forEach(openDropdown => {
                    openDropdown.classList.remove('open');
                    const icon = openDropdown.querySelector('[data-feather="chevron-right"]');
                    if (icon) {
                        icon.style.transform = 'rotate(0deg)';
                    }
                });

                // Toggle the current dropdown
                if (!isOpen) {
                    parent.classList.add('open');
                    if (chevronIcon) {
                        chevronIcon.style.transform = 'rotate(90deg)';
                    }
                } else {
                    if (chevronIcon) {
                        chevronIcon.style.transform = 'rotate(0deg)';
                    }
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