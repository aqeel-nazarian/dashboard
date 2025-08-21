document.addEventListener("DOMContentLoaded", function () {
    //Mobile Sidebar Toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobileOverlay');

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        mobileOverlay.classList.toggle('active');

        //Change icon on state
        const icon = menuToggle.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    // Close sidebar when clicking on overlay
    mobileOverlay.addEventListener('click', function () {
        sidebar.classList.remove('active');
        mobileOverlay.classList.remove('active');

        //Change icon back to bars
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        //Update icon and save prefrence
        const themeIcon = this.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove(fa - moon);
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            this.localStorage.setItem('theme', 'light')
        }
    });

    // Close Sidebar when clicking outside on mobile
    document.addEventListener('click', function (e) {
        const isClickInsideSidebar = sidebar.contains(e.target);
        const isClickOnToggle = menuToggle.contains(e.target);

        if (sidebar.classList.contains('active') &&
            !isClickInsideSidebar &&
            !isClickOnToggle) {
            sidebar.classList.remove('active');
            mobileOverlay.classList.remove('active');

            //Change icon back to bars
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    })
});