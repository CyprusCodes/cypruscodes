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
    intro: 'WELCOME TO CYPRUSCODES',
    lastname: 'Last Name',
    message: 'Message',
    foo: {
        bar: 'bar'
    }
};

$.i18n.tr = {
    intro: 'CYPRUSCODES’A HOŞ GELDİNİZ',
    lastname: 'Nachname',
    message: 'Nachricht',
    foo: {
        bar: 'foo'
    }
};

var i18n = $.i18n();

var changeLabels = function () {
    $('body').each(function () {
        var forLabel = $(this).attr('for');
        this.innerText = i18n.getItem(forLabel);
    });
};
changeLabels();

$('#lang').find('a').click(function (e) {
    var lang = this.href.slice(-2);
    i18n.setLang(lang);

    changeLabels();
    e.preventDefault();
});