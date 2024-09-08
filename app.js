document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Merci de nous avoir contactés. Nous vous répondrons bientôt.');
        form.reset();
    });
});