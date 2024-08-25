
    function scrollToSection(sectionId) {
document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
    const form = document.getElementById('feedbackForm');     
    form.addEventListener('submit', function(e) {
        const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;
        if (!hCaptcha) {
            e.preventDefault();
            alert("Please fill out captcha field")
            return
        }
    });
