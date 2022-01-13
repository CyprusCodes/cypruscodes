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
    description_2: '<b>Keep up with the developing world </b> with Cyprus<br/> one and only <b>part - time</b>  programming school!',
    info_btn: 'Request Information',
    goal: 'Your dream of a new career is just one step away if you have goals such as',
    goals: '<li>Starting a new career</li> <li> Improving your business</li> <li>Being a digital entrepreneur</li>',
    goal_desc: 'everything you are looking for is here at <b>CyprusCodes,</b> the first and only technology academy of Northern Cyprus.',
    goal_desc2: 'In 24 weeks, you will learn all the skills of a software developer and will be able to create your own web and mobile applications!',
    education: 'Education',
    educ_portal: 'Education Portal',
    educ_portal_desc: 'You can access our web-based training portal 24/7. You can find recorded videos of classroom lectures, weekly exercises, and recommended resources here.',
    cc_chat_desc: 'Our students and teachers are in contact with each other 24/7 through the chat application called Slack.',
    staff: 'Expert Teaching Staff',
    staff_desc: 'Our teaching staff consists of professional software developers both from England and Cyprus.',
    faq: 'FAQ',
    faq_title: 'Frequently Asked Questions and Answers',
    faq_category_1: 'General',
    faq_category_2: 'Course/Platform',
    faq_category_3: 'Application Form for Assistance',
    faq_category_1_title_1: 'What is CyprusCodes?',
    faq_category_1_desc_1: 'The one and only part-time web and mobile application programming course in Northern Cyprus. Our goal is to gather the talents in Northern Cyprus and to develop world-class web and mobile applications.',
    faq_category_1_title_2: 'Who can apply for this course? Are there any age restrictions?',
    faq_category_1_desc_2: '<b>Anyone </b>between the ages of 16-60 can apply for our course.',
    faq_category_1_title_3: 'What are the requirements for participation?',
    faq_category_1_desc_3: 'Anyone who wants to pursue a career in the software industry can participate to our course. CyprusCodes programming school’s door is always open for everyone who will take a step into the software world for the first time, graduates from the related departments of universities or those who work actively in the sector and want to improve their knowledge. It is an advantage to have an intermediate level of English.',
    faq_category_1_title_4: 'How are the hours of the course arranged?',
    faq_category_1_desc_4: 'Our course hours have been prepared by taking working individuals into consideration. In this regard, the lessons will be held between 18.30 – 21.30 on Monday – Wednesday, and on Saturday between 10.00 – 16.00, the necessary support will be provided to students.',
    faq_category_1_title_5: 'When can I apply?',
    faq_category_1_desc_5: 'Our applications have started! To benefit from the latest news, you can follow the CyprusCodes page on Instagram and Facebook.',
    faq_category_1_title_6: 'Do I need to be good at mathematics to learn programming?',
    faq_category_1_desc_6: '<b>No! </b>Thinking logically is more important when creating websites and applications, and the mathematics that you learned at school will suffice throughout our course.',
    faq_category_1_title_7: 'Will I get a certificate at the end of the course?',
    faq_category_1_desc_7: 'Yes! CyprusCodes Academy Certificate of Participation and CyprusCodes Academy Certificate of Achievement will be given to successful students at the end of the course.',
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
    goal: 'Yeni bir kariyer hayaliniz bir adım uzağınızda',
    info_btn: 'Bilgi İste',
    goals: '<li>Yeni bir kariyer</li> <li> İşletmenizi bir üst seviyeye taşımak</li> <li>Dijital girişimci olmak</li>',
    goal_desc: 'gibi hedefleriniz varsa, aradığınız her şey Kuzey Kıbrıs’ın ilk ve tek teknoloji akademisi olan <b>CyprusCodes</b>’da!',
    goal_desc2: ' 24 hafta içerisinde, bir yazılım geliştirme uzmanının tüm becerilerini öğrenecek ve kendi web ve mobil uygulamalarınızı yaratabilecek seviyeye geleceksiniz!',
    education: 'Eğitim',
    //education_desc: "İngiltere’nin önde gelen programlama okulu <strong> ManchesterCodes</strong> işbirliğiyle geliştirilen müfredatımız, <br /><strong>BBC</strong> ve <strong> Booking.com</strong> gibi endüstri liderlerinin kullandığı revaçta olan teknolojileri kapsamaktadır. <br/> Merkezi Lefkoşa'da bulunan sınıfımız, uzman kadromuz, dünya standartlarındaki müfredatımız, <br/> çalışan bireylere yönelik yarı zamanlı akşam üstü kurslarımız ile hayallerinize bir adım daha yakınsınız.",
    educ_portal: 'Eğitim Portalı',
    educ_portal_desc: ' Web-tabanlı eğitim portalımıza 7/24 erişebilirsiniz. Sınıfta işlenen derslerin kaydedilmiş videoları, haftalık egsersizler ve tavsiye ettiğimiz kaynaklara buradan ulaşabilirsiniz.',
    cc_chat_desc: ' Öğrencilerimiz ve öğretmenlerimiz, Slack adlı sohbet uygulamasında birbirleriyle 7/24 iletişim içerisindedirler.',
    staff: 'Uzman Öğretim Kadrosu',
    staff_desc: "Öğretim kadromuz İngiltere ve Kıbrıs'ta profesyonel olarak çalışan yazılımcılardan oluşmaktadır.",
    faq: 'S.S.S',
    faq_title: 'Sıkça Sorulan Sorular ve Cevapları',
    faq_category_1: 'Genel',
    faq_category_2: 'Kurs/Platform',
    faq_category_3: 'Yardım Formu',
    faq_category_1_title_1: 'CyprusCodes nedir?',
    faq_category_1_desc_1: 'Kuzey Kıbrısın ilk ve tek yarı-zamanlı web ve mobil uygulama(web & mobile app) programlama kursu. Amacımız Kuzey Kıbrıs içindeki yetenekleri biraraya getirip, dünya standardlarında web ve mobil uygulamalar geliştirmek.',
    faq_category_1_title_2: 'Kimler bu kursa müracaat edebilir? Herhangi bir yaş sınırlaması var mı ?',
    faq_category_1_desc_2: 'Kursumuza 16-60 yaş arası <b>herkes</b> muracaat edebilir.',
    faq_category_1_title_3: 'Katılım koşulları nedir?',
    faq_category_1_desc_3: "Kursumuza yazılım sektöründe kariyer yapmak isteyen herkes katılabilir. CyprusCodes programlama okulunun kapıları yazılım dünyasına ilk kez adım atacak olanlar, üniversitelerin ilgili bölümlerinden mezun olanlar veya sektörde aktif çalışan ve bilgisini güncellemek isteyenler herkese açıktır.Orta seviyede İngilizce bilmeniz size avantaj sağlayacaktır.",
    faq_category_1_title_4: 'Kurs saatleri ne şekildedir?',
    faq_category_1_desc_4: " Kurs saatlerimiz çalışan bireyler göz önünde bulundurularak hazırlanmıştır.Bu bağlamda dersler Pazartesi - Çarşamba 18.30 - 21.30 saatleri arasında gerçekleşecek olup Cumartesi günleri 10.00 - 16.00 saatleri arasında da öğrencilere gerekli destek sağlanacaktır.",
    faq_category_1_title_5: 'Ne zaman başvurabilirim?',
    faq_category_1_desc_5: 'Başvurularımız başlamıştır! Güncel haberlerden faydalanmak için İnstagram ve Facebook üzerinden CyprusCodes sayfasını takip edebilirsiniz.',
    faq_category_1_title_6: 'Programlama öğrenmek için matematiğimin iyi olması gerekiyor mu?',
    faq_category_1_desc_6: '<b>Hayır!</b> Web sitesi e uygulama oluşturmak için  mantıklı düşünmek daha önemlidir ve okulda öğrendiğiniz matematik kursumuz boyunca size yeterli olacaktır.',
    faq_category_1_title_7: 'Kurs bitiminde sertifika alacak mıyım?',
    faq_category_1_desc_7: 'Evet, kurs bitiminde başarılı öğrencilere CyprusCodes Akademi Katılım Sertifikası ve CyprusCodes Akademi Başarı Sertifikası verilecektir.',
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