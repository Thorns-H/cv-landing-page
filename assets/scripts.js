document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const paragraphs = document.querySelectorAll("p");
    const headings = document.querySelectorAll("h2, h3");

    sections.forEach(section => {
        section.classList.add("visible");
    });

    paragraphs.forEach(p => {
        p.classList.add("visible");
    });

    headings.forEach(h => {
        h.classList.add("visible");
    });
});

let currentLanguage = 'es';

function switchLanguage() {
    const esElements = document.querySelectorAll('.es');
    const enElements = document.querySelectorAll('.en');
    const button = document.getElementById('language-switch');
    const paragraphs = document.querySelectorAll("p");
    const headings = document.querySelectorAll("h2, h3");

    esElements.forEach(el => {
        el.classList.remove("visible");
        el.classList.add("hidden");
    });

    enElements.forEach(el => {
        el.classList.remove("visible");
        el.classList.add("hidden");
    });

    paragraphs.forEach(p => {
        p.classList.remove("visible");
        p.classList.add("hidden");
    });

    headings.forEach(h => {
        h.classList.remove("visible");
        h.classList.add("hidden");
    });

    if (currentLanguage === 'es') {
        esElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'block');
        button.textContent = 'Español';
        currentLanguage = 'en';
    } else {
        esElements.forEach(el => el.style.display = 'block');
        enElements.forEach(el => el.style.display = 'none');
        button.textContent = 'English';
        currentLanguage = 'es';
    }

    setTimeout(() => {
        esElements.forEach(el => {
            el.classList.remove("hidden");
            el.classList.add("visible");
        });
        enElements.forEach(el => {
            el.classList.remove("hidden");
            el.classList.add("visible");
        });

        paragraphs.forEach(p => {
            p.classList.remove("hidden");
            p.classList.add("visible");
        });

        headings.forEach(h => {
            h.classList.remove("hidden");
            h.classList.add("visible");
        });
    }, 300);
}
