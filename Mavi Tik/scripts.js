document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const loginBtn = document.getElementById("login-btn");
    const body = document.body;
    const header = document.querySelector(".header");
    const sections = document.querySelectorAll(".section");
    const footer = document.querySelector(".footer");

    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("light")) {
            body.classList.remove("light");
            body.classList.add("dark");
            header.classList.remove("light");
            header.classList.add("dark");
            sections.forEach(section => section.classList.remove("light"));
            sections.forEach(section => section.classList.add("dark"));
            footer.classList.remove("light");
            footer.classList.add("dark");
        } else {
            body.classList.remove("dark");
            body.classList.add("light");
            header.classList.remove("dark");
            header.classList.add("light");
            sections.forEach(section => section.classList.remove("dark"));
            sections.forEach(section => section.classList.add("light"));
            footer.classList.remove("dark");
            footer.classList.add("light");
        }
    });

    // Başlangıç teması dark olsun
    body.classList.add("dark");
    header.classList.add("dark");
    sections.forEach(section => section.classList.add("dark"));
    footer.classList.add("dark");

    // Animasyonlu içerik gösterimi
    const contents = document.querySelectorAll('.content');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    contents.forEach(content => {
        observer.observe(content);
    });

    // Çerez onayı gösterimi
    setTimeout(() => {
        document.getElementById("cookie-consent").classList.add("show");
    }, 10000);

    document.getElementById("accept-cookies").addEventListener("click", () => {
        document.getElementById("cookie-consent").classList.remove("show");
    });

    // Giriş yap butonuna tıklandığında yönlendirme
    loginBtn.addEventListener("click", () => {
        window.location.href = "login/index.html";
    });
});
