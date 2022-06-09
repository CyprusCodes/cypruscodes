$.i18n = function (options) {
  options = $.extend(
    {},
    {
      lang: window.localStorage.getItem("language") || "tr",
      data: $.i18n,
    },
    options
  );

  var langStore = options.data[options.lang];
  this.setLang = function (language) {
    window.localStorage.setItem("language", language);
    langStore = options.data[language];
  };

  this.getItem = function (key) {
    return langStore[key];
  };

  return this;
};

$.i18n.en = {
  menu_1: "Education",
  menu_2: "Course",
  menu_3: "Career Path",
  menu_4: "FAQ",
  menu_5: "Contact",
  menu_6: "Sign In",
  about_me: "From Musician to Full Stack Developer",
  question1: "Hi, what’s your name?",
  question2: "Could you please tell us a little about yourself?",
  question3:
    "What were your plans for the end of the course? Has any of these come true?",
  question4:
    "What was your reason for choosing Cyprus Codes over other courses in the market (or online courses)?",
  question5:
    "What was the best moment for you in the Cyprus Codes Fastrack Full Stack Developer course?",
  question6: "What challanged you the most throughout the course?",
  question7:
    "How did you achieve a balance between the course and your responsibilities in your social life?",
  question8:
    " Is there anything else you would like to add about your experience in the course?",
  question9:
    "What advice would you give to people who are currently taking the course?",
  answer2:
    "I’ve been performing as a musician for ten years. My bachelor (Translation and Interpretation) and Master (Radio TV and Cinema) degrees were not related to coding. I can define my motivation to attend the course as a search for an exit arising from the embargo applied to music during the pandemic period and a desire to improve myself in a new field.",
  answer3:
    "Since it hasn’t been a long time since I completed the course, my long-term plans have not been formed yet. For now, I have plans to enhance my skills, gain experience in software and improve myself in the field of mobile application. I can say that I have been carrying out the plans I mentioned, depending on the advantage of working in different projects during my time at Cyprus Codes.",
  answer4:
    "The reason I chose Cyprus Codes is that the curriculum has been tried and proven within Manchester Codes before and they have achieved success in real life with the curriculum.",
  answer5:
    "As I said before, since I didn’t have any experience with software, I can say that seeing what I can do with the training I received in the course was the best moment I experienced in the course.",
  answer6:
    "The fact that the course required a hard and consistent study schedule due to the amount of the topics.",
  answer7:
    "Since the course hours are suitable for working individuals, it did not affect my responsibilities in my social life much.",
  answer8:
    "The content of the course is designed to include technologies and languages that are very common in business life. For this reason, when I entered the business life in this field 2-3 months after completing the course, I did not experience any great difficulties. Apart from this, I continue to exchange ideas and learn, as we are in contact with both those who have completed the course, the beginners and our trainers through our communication platform, Slack.",
  answer9:
    "Since the course curriculum includes many topics, I recommend you to work tirelessly throughout the course, be open to libraries with new technologies and not to give up :)",
  next: "Next",
  address_title: "Our address",
  address_desc: "29 Şehit Idris Doğan Avenue, Gelibolu, Nicosia, North Cyprus",
};

$.i18n.tr = {
  menu_1: "Eğitim",
  menu_2: "Kurslar",
  menu_3: "Kariyer Yolu",
  menu_4: "Sıkça Sorulan Sorular",
  menu_5: "İletişim",
  menu_6: "Giriş Yap",
  about_me: "Müzisyenlikten Full Stack Developer'a",
  question1: "Merhaba isminiz nedir?",
  question2: "Bize biraz kendinden bahseder misin?",
  question3:
    "Kurs sonrası planlarınız neler? Şimdiye kadar gerçekleşen oldu mu?",
  question4:
    "Piyasadaki diğer kurslar yerine (veya online kurslar yerine) Cyprus Codes'u seçme sebebiniz neydi?",
  question5:
    "Cyprus Codes Fastrack Full Stack Developer kursunda sizi en çok mutlu eden şey neydi?",
  question6: "Kurs boyunca en zorlandığınız şey ne oldu?",
  question7:
    "Kurs ile sosyal yaşantınızdaki sorumluluklarınızın dengesini nasıl kurdunuz?",
  question8:
    "Kurstaki deneyiminiz hakkında eklemek istediğiniz başka bir şey var mı?",
  question9:
    "Şu anda kursa katılacak olan kişilere ne gibi tavsiyelerde bulunursunuz?",
  answer2:
    "10 yıldır aktif olarak müzisyenlik yapmaktayım. Aldığım Lisans (Mütercim Tercümanlık) ve Yüksek Lisans (RTS) eğitimi yazılım içermeyen alanlardı. Kursa katılma motivasyonum: pandemi dönemi müziğe uygulanan ambargodan doğan bir çıkış arayışı ve yeni bir alanda kendimi geliştirme isteği olarak tanımlayabilirim.",
  answer3:
    "Kursu tamamlamamın üzerinden uzun bir süre geçmediği için henüz uzun vadeli planlarım şekillenmedi. Şuan için kurs sonrası aldığım eğitimi pekiştirmek, yazılım alanında tecrübe kazanmak ve mobil uygulama alanında kendimi geliştirmek gibi planlarım var. Cyprus Codes bünyesinde çalıştığım süre boyunca farklı projelerde çalışmanın verdiği avantajdan ötürü bahsettiğim planları gerçekleştirmekte olduğumu söyleyebilirim.",
  answer4:
    "Cyprus Codes’u seçme sebebim daha önce Manchester Codes bünyesinde müfredatın denenip kanıtlanmış olması ve söz konusu müfredat ile gerçek hayatta başarı yakalamış olmalarıdır.",
  answer5:
    "Daha önce söylediğim gibi yazılımla ilgili herhangi bir deneyimim olmadığı için kursta aldığım eğitim sayesinde neler yapabileceğimi görmek beni en mutlu eden şey olduğunu söyleyebilirim.",
  answer6:
    "Konuların yoğunluğu nedeniyle sıkı ve tempolu çalışma programı gerektirmesi.",
  answer7:
    "Kurs saatleri çalışan bireylere de uygun olduğu için sosyal yaşantımdaki sorumluluklarımı fazla etkilememiştir.",
  answer8:
    "Kursun içeriği iş hayatında çok sık rastlanan teknolojileri ve dilleri içerecek şekilde tasarlanmıştır. Bu sebeple kursu tamamladıktan 2-3 ay sonra bu alanda iş hayatına girdiğimde büyük bir zorluk yaşamadım. Bunun dışında iletişim platformumuz olan Slack üzerinden hem kursu tamamlayanlar hem yeni başlayanlar hem de eğitmenlerimizle iletişim içinde olduğumuzdan fikir alışverişine ve öğrenmeye devam ediyorum.",
  answer9:
    "Kurs müfredatı birçok konu barındırdığından kurs süresi boyunca yılmadan çalışmanızı, yeni teknolojilerle kütüphanelere açık olmanızı ve vazgeçmemenizi öneririm :)",
  next: "Sonraki",
  address_title: "Adresimiz",
  address_desc: "29 Şehit Idris Doğan Sokak, Gelibolu, Lefkoşa, Kuzey Kıbrıs",
};

$.i18n.ru = {
  menu_1: "Образование",
  menu_2: "Курс",
  menu_3: "Карьера",
  menu_4: "Часто задаваемые вопросы",
  menu_5: "Контакты",
  menu_6: "Войти",
  about_me: "От бармена до младшего разработчика",
  question1: "Привет, как тебя зовут?",
  question2: "Расскажи нам немного о себе?",
  question3:
      "Какие планы были на конец курса? Что-то из этого сбылось?",
  question4:
      "По какой причине вы выбрали Cyprus Codes вместо других курсов на рынке (или онлайн-курсов)?",
  question5:
      "Какой момент был для вас самым лучшим на курсе Cyprus Codes Fastrack Full Stack Developer?",
  question6: "Какое задание вызвало у вас наибольшие затруднения на протяжении всего курса?",
  question7:
      "Как вы достигли баланса между курсом и вашими обязанностями в собственной  жизни?",
  question8:
      "Есть ли что-нибудь еще, что вы хотели бы добавить о своем опыте на курсе?",
  question9:
      "Какой совет вы бы дали людям, которые сейчас проходят курс?",
  answer2:
      "Я выступаю как музыкант уже десять лет. Мои степени бакалавра (перевод и устный перевод) и магистра (радио, телевидение и кино) не были связаны с программированием. Мотивацию посещения курса я могу определить как поиск выхода из-за эмбарго на музыку в период пандемии и желание совершенствоваться в новой области.",
  answer3:
      "Так как я закончил курс не так давно, мои долгосрочные планы еще не сформировались. На данный момент у меня есть планы повысить свои навыки, получить опыт работы с программным обеспечением и самосовершенствоваться в области мобильных приложений. Я могу сказать, что я выполнял упомянутые планы, в зависимости от преимуществ работы в различных проектах во время моего пребывания в Cyprus Codes.",
  answer4:
      "Причина, по которой я выбрал Cyprus Codes, заключается в том, что учебная программа была опробована и проверена в рамках Manchester Codes ранее, и они добились успеха в реальной жизни с помощью учебной программы.",
  answer5:
      "Как я уже говорил, поскольку у меня не было никакого опыта работы с программным обеспечением, я могу сказать, что увидеть, что я могу сделать с обучением, которое я получил на курсе, было лучшим моментом, который я испытал на курсе.",
  answer6:
      "Тот факт, что курс требовал жесткого и последовательного графика обучения из-за количества тем.",
  answer7:
      "Поскольку часы занятий подходят для работающих людей, это не сильно повлияло на мои обязанности в социальной жизни.",
  answer8:
      "Содержание курса разработано с учетом технологий и языков, которые очень распространены в деловой жизни. По этой причине, когда я вошел в бизнес-жизнь в этой сфере через 2-3 месяца после окончания курса, я не испытал больших трудностей. Кроме того, я продолжаю обмениваться идеями и учиться, так как мы общаемся как с прошедшими курс, новичками, так и с нашими тренерами через нашу коммуникационную платформу Slack.",
  answer9:
      "Поскольку учебная программа курса включает в себя множество тем, я рекомендую вам неустанно работать на протяжении всего курса, быть открытыми для библиотек с новыми технологиями и не сдаваться :)",
  next: "Следующий",
  address_title: "Наш адресс",
  address_desc: "29 Şehit Idris Doğan Avenue, Gelibolu, Nicosia, North Cyprus",
};

var i18n = $.i18n();

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var changeLabels = function () {
  $("[data-translate]").each(function () {
    var forLabel = $(this).attr("data-translate");
    const result = i18n.getItem(forLabel);
    this.innerHTML = result;
  });
};

$(document).ready(function () {
  const lang = getParameterByName("lang");
  if (lang) {
    window.localStorage.setItem("language", lang);
    i18n.setLang(lang);
  }

  changeLabels();
  $("#dropdownMenuButton").text(
    (window.localStorage.getItem("language") || "tr").toUpperCase()
  );
});

$("#lang")
  .find("a")
  .click(function (e) {
    var lang = this.href.slice(-2);
    i18n.setLang(lang);
    $("#dropdownMenuButton").text(
      (window.localStorage.getItem("language") || "tr").toUpperCase()
    );

    changeLabels();

    const langQueryParam = getParameterByName("lang");
    if (langQueryParam) {
      var url = new URL(window.location.href);
      var search_params = url.searchParams;
      search_params.set("lang", lang);
      url.search = search_params.toString();
      var new_url = url.pathname + url.search;
      window.history.replaceState({}, "", new_url);
    }
    e.preventDefault();
  });
