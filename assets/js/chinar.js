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
  about_me: "From Filmmaker to Full Stack Developer",
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
    "A: I was a Film-Production master student when I attended the course and unfortunately the film industry is a failing industry. In order not to sink with a sinking ship, I chose programming which was my father's profession.  Coding is the most logical future for me with my nearly zero coding background.",
  answer3:
    "Specializing in the AI industry after gaining experience in a programming position at a large company.I am currently working in a large company",
  answer4:
    "Unlike other courses, within this course successful programmers always take care of you and help you out when you're stuck. Thousands of people watch online video courses and not every student is helped individually.",
  answer5:
    "Cyprus Codes showed me many concepts, research/learning techniques and gave me the opportunity to develop myself, which made me very happy as a programmer.",
  answer6: "xit tests and integrating the windows operating system into linux.",
  answer7:
    "I couldn't do it in the first period because it blows your brain out, and then it gets better with lots of chocolate and repetition.",
  answer8:
    "The course was very enjoyable and instructive. Watching reruns of live lectures is priceless.",
  answer9:
    "English dictionary, lots of snacks, a comfortable chair, and lots of repetition of lessons.",
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
  about_me: "Film Yapımcısından Full Stack Developer'a",
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
    "I was a Film-Production master student when I attended the course and unfortunately the film industry is a failing industry. In order not to sink with a sinking ship, I chose programming which was my father's profession.  Coding is the most logical future for me with my nearly zero coding background.",
  answer3:
    "Büyük bir şirketin programcılık pozisyonunda deneyim kazandıktan sonra AI sektöründe uzmanlaşmak.Şu anda büyük bir şirkette çalışıyorum.",
  answer4:
    "Diğer kursların aksine kariyerinde başarılı bir programcı sürekli sizinle ilgileniyor ve sıkıştığınızda size yardımcı oluyor. Online video kurslarını binlerce kişi izliyor ve her bir öğrenciye tek tek yardımcı olunmuyor.",
  answer5:
    " Cyprus Codes bana birçok konsept, araştırma/öğrenme tekniği gösterdi ve bana kendi kendimi geliştirme imkanını sağladı ve bir programcı olarak bu beni çok mutlu etti.  ",
  answer6: "xit tests ve windows işletim sistemini linux a entegre etmek.",
  answer7:
    "İlk dönemde kuramadım çünkü insanın beyni yanıyor sonrasında bol bol çikolata ve tekrar ile düzeliyor.",
  answer8:
    "Kurs çok keyifli ve öğretici bir kursdu. Canlı derslerin tekrarını izlemek paha biçilemez.",
  answer9:
    "İngilizce sözlük, birçok atıştırmalık, rahat bir koltuk ve dersleri bol bol tekrar etmek.",
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
      "Когда я посещал курс, я был магистром кинопроизводства, и, к сожалению, киноиндустрия терпит неудачу. Чтобы не утонуть с тонущим кораблем, я выбрал программирование, которое было профессией моего отца. Программирование — это самое логичное будущее для меня с моим почти нулевым опытом кодирования.",
  answer3:
      "Специализируюсь на индустрии искусственного интеллекта после получения опыта работы программистом в крупной компании. В настоящее время я работаю в крупной компании.",
  answer4:
      "В отличие от других курсов, в рамках этого курса успешные программисты всегда позаботятся о вас и помогут, когда вы застряли. Тысячи людей смотрят онлайн-видеокурсы, и не каждому ученику оказывается помощь в индивидуальном порядке.",
  answer5:
      "Cyprus Codes показал мне много концепций, методов исследования/обучения и дал мне возможность развиваться, что сделало меня очень счастливым как программиста.",
  answer6: "xit и интеграцию операционной системы Windows в Linux.",
  answer7:
      "Я не мог сделать это в первом периоде, потому что это вышибает мозг, а потом становится лучше с большим количеством шоколада и повторений.",
  answer8:
      "Курс был очень приятным и поучительным. Просмотр повторов лекций в прямом эфире бесценен.",
  answer9:
      "Английский словарь, много закусок, удобное кресло и много повторений уроков.",
  next: "Следующий",
  address_title: "Наш адресс",
  address_desc: "29 Şehit Idris Doğan Avenue, Gelibolu, Nicosia, North Cyprus",
};

$.i18n.fr = {
  menu_1: "Éducation",
  menu_2: "Cours",
  menu_3: "carrière",
  menu_4: "FAQ",
  menu_5: "Contact",
  menu_6: "Se Connecter",
  about_me: "De barman à développeur junior",
  question1: "Salut, quel est ton nom?",
  question2: "Pourriez-vous s'il vous plaît nous parler un peu de vous?",
  question3:
    "Quels étaient vos plans pour la fin du stage ? Est-ce que l'un d'entre eux s'est réalisé?",
  question4:
    "Quelle était votre raison de choisir CyprusCodes plutôt que d'autres cours sur le marché (ou des cours en ligne) ?",
  question5:
    "Quel a été le meilleur moment pour vous dans le cours Chypre Codes Fastrack Full Stack Developer ?",
  question6:
    "Qu'est-ce qui vous a le plus interpellé tout au long du parcours ?",
  question7:
    "Comment avez-vous trouvé un équilibre entre le cours et vos responsabilités dans votre vie sociale ?",
  question8:
    "Y a-t-il autre chose que vous voudriez ajouter à propos de votre expérience dans le cours ?",
  question9:
    "Quels conseils donneriez-vous aux personnes qui suivent actuellement la formation ?",
  answer2:
    "J'étais étudiant en master de production cinématographique lorsque j'ai suivi le cours et malheureusement, l'industrie cinématographique est une industrie défaillante. Pour ne pas couler avec un navire qui coule, j'ai choisi la programmation qui était le métier de mon père. Le codage est l'avenir le plus logique pour moi avec mon expérience de codage presque nulle.",
  answer3:
    "Spécialisé dans l'industrie de l'IA après avoir acquis une expérience dans un poste de programmation dans une grande entreprise.Je travaille actuellement dans une grande entreprise",
  answer4:
    "Contrairement à d'autres cours, dans ce cours, les programmeurs qui réussissent prennent toujours soin de vous et vous aident lorsque vous êtes bloqué. Des milliers de personnes regardent des cours vidéo en ligne et tous les étudiants ne sont pas aidés individuellement.",
  answer5:
    "CyprusCodes m'a montré de nombreux concepts, techniques de recherche/apprentissage et m'a donné l'opportunité de me développer, ce qui m'a rendu très heureux en tant que programmeur.",
  answer6:
    "Les tests xit et intégration du système d'exploitation Windows dans Linux.",
  answer7:
    "Je n'ai pas pu le faire en première période parce que ça explose le cerveau, puis ça s'améliore avec beaucoup de chocolat et de répétitions.",
  answer8:
    "Le cours était très agréable et instructif. Regarder des rediffusions de conférences en direct n'a pas de prix.",
  answer9:
    "Dictionnaire anglais, beaucoup de collations, une chaise confortable et beaucoup de répétitions de leçons.",
  next: "Suivant",
  address_title: "Notre adresse",
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
    this.innerHTML = i18n.getItem(forLabel);
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

    const langQueryParam = getParameterByName("lang");
    if (langQueryParam) {
      var url = new URL(window.location.href);
      var search_params = url.searchParams;
      search_params.set("lang", lang);
      url.search = search_params.toString();
      var new_url = url.pathname + url.search;
      window.history.replaceState({}, "", new_url);
    }
    changeLabels();
    e.preventDefault();
  });
