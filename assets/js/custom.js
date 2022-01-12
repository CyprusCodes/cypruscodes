$.i18n = function (options) {
    options = $.extend({}, {
        lang: 'tr',
        data: $.i18n,
        sliceLang: false
    }, options);

    var langStore = langStore || {},
        lang = options.lang.indexOf('-') < 0 && !options.sliceLang ? options.lang : options.lang.slice(0, 2);

    if (typeof options.data !== 'string') {
        langStore = options.data[lang];
    } else {
        var urlParts = options.data.match(/(.*)[\/\\]([^\/\\]+)\.(\w+)$/);
        $.ajax({
            url: urlParts[1] + '/' + lang + '.' + urlParts[3],
            dataType: "json",
            success: function (data) {
                // console.log(data)
                langStore = data;
            },
            error: function (error) {
                console.log(error);
                $.getJSON(urlParts[1] + '/' + lang + '.' + urlParts[3], function (data) {
                    langStore = data;
                });
            }
        });
    }

    var storeData = function (data) {
        if (!data) return;
        if (window.localStorage) {
            localStorage.setItem("langStore", JSON.stringify(data));
            langStore = data;
        } else {
            langStore = data;
        }
    };

    if (window.localStorage) {
        var localLangStore = localStorage.getItem("langStore");
        storeData(localLangStore !== null ? JSON.parse(localLangStore) : langStore);
    } else {
        storeData(langStore);
    }

    this.getLang = function () { return lang; };
    this.setLang = function (l) { lang = l; storeData(options.data[l]); };

    this.getItem = function (key) { return langStore[key]; };
    this.setItem = function (key, value) { options.data[lang][key] = value; storeData(langStore); };

    return this;
};


$.i18n.en = {
    menu_1: 'Course',
    menu_2: 'Education',
    menu_3: 'Frequently Asked Questions',
    menu_4: 'Contact',
    menu_5: 'Apply',
    intro: 'WELCOME TO CYPRUSCODES',
    title: 'Shape Your Future!',
    description: 'Do you wish to improve yourself in the field of software and create new business areas for yourself?',
    description_2: '<b>Keep up with the developing world </b> with Cyprus<br/> one and only <b>part- time</b>  programming school!',
    info_btn: 'Request Information',
    foo: {
        bar: 'bar'
    }
};

$.i18n.tr = {
    menu_1: 'Eğitim',
    menu_2: 'Kurslar',
    menu_3: 'Kariyer Yolu',
    menu_4: 'Sıkça Sorulan Sorular',
    menu_5: 'İletişim',
    intro: 'CYPRUSCODES’A HOŞ GELDİNİZ',
    title: 'Geleceğini Şekillendir!',
    description: 'Yazılım alanında kendinizi geliştirmek <br/> ve kendinize yeni iş alanları yaratmak ister misiniz?',
    description_2: 'Kıbrıs’ın ilk ve tek <b>yarı-zamanlı</b> programlama okuluyla<br /> <b>gelişen dünyaya ayak uydur!</b>',
    info_btn: 'Bilgi İste',
    foo: {
        bar: 'foo'
    }
};

var i18n = $.i18n();

var changeLabels = function () {
    $('[data-translate]').each(function () {
        var forLabel = $(this).attr('data-translate');
        this.innerHTML = i18n.getItem(forLabel);
    });
};
changeLabels();

$('#lang').find('a').click(function (e) {
    var lang = this.href.slice(-2);
    i18n.setLang(lang);

    changeLabels();
    e.preventDefault();
});