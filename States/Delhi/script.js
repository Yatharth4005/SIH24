document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for 'Explore Now' button
    document.querySelector('.btn').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#explore').scrollIntoView({ behavior: 'smooth' });
    });

    // Side Navigation Scroll to Section
    const links = document.querySelectorAll('.sidenav a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
