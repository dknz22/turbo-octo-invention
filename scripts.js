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

    // Close the notification popup when clicking outside of it
    document.addEventListener('click', (event) => {
        const notificationWrapper = document.querySelector('.notification-wrapper');
        const notificationPopup = document.querySelector('.notification-popup');

        if (!notificationWrapper.contains(event.target)) {
            notificationPopup.style.display = 'none';
        }
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

    // Add a profile popup element
    const profileWrapper = document.querySelector('.profile');
    const profilePopup = document.createElement('div');
    profilePopup.classList.add('profile-popup');
    profilePopup.innerHTML = `
        <div class="profile-header">My Account</div>
        <div class="profile-body">
            <div class="profile-item">
                <i class="icon icon-purple" data-feather="user"></i>
                <span>View Profile</span>
            </div>
            <div class="profile-item">
                <i class="icon icon-purple" data-feather="settings"></i>
                <span>Profile Settings</span>
            </div>
            <div class="profile-item">
                <i class="icon icon-purple" data-feather="log-out"></i>
                <span>Logout</span>
            </div>
        </div>
    `;
    profileWrapper.appendChild(profilePopup);

    // Add styles for the profile popup
    const profileStyle = document.createElement('style');
    profileStyle.textContent = `
        .profile-popup {
            position: absolute;
            top: calc(100% + 10px); /* Positioned directly below the avatar with a small gap */
            right: 10px; /* Adjusted to align slightly left under the avatar */
            transform: none; /* Remove centering */
            width: 200px;
            background-color: #14141f;
            color: #d5d5dd;
            border: 1px solid #3a3a4a;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 10px;
            display: none; /* Hidden by default */
            z-index: 1002;
        }

        .profile-popup .profile-header {
            font-weight: bold;
            margin-bottom: 10px;
            color: #9b87f5; /* Updated color */
            font-size: 14px; /* Updated font size */
        }

        .profile-popup .profile-body {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .profile-popup .profile-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 5px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .profile-popup .profile-item:hover {
            background-color: #3a3a4d;
        }

        .profile-popup .profile-item span {
            font-size: 14px; /* Updated font size for profile items */
        }
    `;
    document.head.appendChild(profileStyle);

    // Toggle the visibility of the profile popup
    profileWrapper.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from propagating to document
        const isVisible = profilePopup.style.display === 'block';
        profilePopup.style.display = isVisible ? 'none' : 'block';
    });

    // Close the profile popup when clicking outside of it
    document.addEventListener('click', () => {
        profilePopup.style.display = 'none';
    });

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

    // Toggle the sidebar when the burger menu is clicked
    const burgerMenu = document.querySelector('.burger-menu');
    const sidebar = document.querySelector('.sidebar');

    burgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});