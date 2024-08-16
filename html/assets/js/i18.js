const i18n = domI18n({
    selector: '[data-translatable]',
    separator: ' // ',
    languages: ['ce', 'ru', 'en'],
    defaultLanguage: 'ce',
});


function changeLanguage(lang) {
    localStorage.setItem("lang", lang)
    i18n.changeLanguage(lang);
}

function i18nRun() {
    let lang = localStorage.getItem("lang")
    if (lang == null) {
        lang = "ce"
    }
    changeLanguage(lang)
}
i18nRun()