function changeLanguage(language) {
    var htmlTag = document.documentElement;

    if (language === 'ar') {
        htmlTag.lang = 'ar';
        htmlTag.dir = 'rtl'; // Right to Left

        document.getElementById('english-btn').style.display = 'inline-block';
        document.getElementById('arabic-btn').style.display = 'none';

        // Hide English content and show Arabic content
        document.querySelectorAll('[lang="en"]').forEach(el => el.style.display = 'none');
        document.querySelectorAll('[lang="ar"]').forEach(el => el.style.display = 'block');

    } else {
        htmlTag.lang = 'en';
        htmlTag.dir = 'ltr'; // Left to Right

        document.getElementById('english-btn').style.display = 'none';
        document.getElementById('arabic-btn').style.display = 'inline-block';

        // Hide Arabic content and show English content
        document.querySelectorAll('[lang="ar"]').forEach(el => el.style.display = 'none');
        document.querySelectorAll('[lang="en"]').forEach(el => el.style.display = 'block');
    }

    // Save language preference in local storage
    localStorage.setItem("selectedLanguage", language);
}

// Automatically load saved language preference on page load
document.addEventListener("DOMContentLoaded", function () {
    var savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }
});
