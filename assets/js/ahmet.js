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
    "What was your reason for choosing CyprusCodes over other courses in the market (or online courses)?",
  question5:
    "What was the best moment for you in the CyprusCodes Fastrack Full Stack Developer course?",
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
$.i18n.fr = {
  menu_1: "Éducation",
  menu_2: "Cours",
  menu_3: "carrière",
  menu_4: "FAQ",
  menu_5: "Contact",
  menu_6: "Se Connecter",
  about_me: "De musicien à développeur Full Stack",
  question1: "Salut, comment t'appelles-tu ?",
  question2: "Pourriez-vous s'il vous plaît nous parler un peu de vous?",
  question3:
    "Quels étaient vos plans pour la fin du stage ? Est-ce que l'un d'entre eux s'est réalisé?",
  question4:
    "Quelle était votre raison de choisir CyprusCodes plutôt que d'autres cours sur le marché (ou des cours en ligne) ?",
  question5:
    "Quel a été le meilleur moment pour vous dans le cours CyprusCodes Fastrack Full Stack Developer ?",
  question6:
    "Qu'est-ce qui vous a le plus interpellé tout au long du parcours ?",
  question7:
    "Comment avez-vous trouvé un équilibre entre le cours et vos responsabilités dans votre vie sociale ?",
  question8:
    "Y a-t-il autre chose que vous voudriez ajouter à propos de votre expérience dans le cours ?",
  question9:
    "Quels conseils donneriez-vous aux personnes qui suivent actuellement la formation ?",
  answer2:
    "Je suis musicien depuis dix ans. Mes diplômes de licence (traduction et interprétation) et de maîtrise (radio, télévision et cinéma) n'étaient pas liés au codage. Je peux définir ma motivation pour suivre le cours comme une recherche d'une sortie découlant de l'embargo appliqué à la musique pendant la période pandémique et un désir de m'améliorer dans un nouveau domaine.",
  answer3:
    "Comme cela ne fait pas longtemps que j'ai terminé le cours, mes plans à long terme n'ont pas encore été formés. Pour l'instant, j'ai pour projet de monter en compétence, d'acquérir de l'expérience dans le logiciel et de me perfectionner dans le domaine de l'application mobile. Je peux dire que j'ai réalisé les plans que j'ai mentionnés, en fonction de l'avantage de travailler sur différents projets pendant mon séjour à CyprusCodes.",
  answer4:
    "La raison pour laquelle j'ai choisi CyprusCodes est que le programme a déjà été testé et éprouvé au sein de ManchesterCodes et qu'ils ont réussi dans la vie réelle avec le programme.",
  answer5:
    "Comme je l'ai déjà dit, comme je n'avais aucune expérience avec les logiciels, je peux dire que voir ce que je peux faire avec la formation que j'ai reçue dans le cours a été le meilleur moment que j'ai vécu dans le cours.",
  answer6:
    "Le fait que le cours nécessitait un programme d'étude rigoureux et cohérent en raison de la quantité de sujets.",
  answer7:
    "Étant donné que les heures de cours sont adaptées aux personnes qui travaillent, cela n'a pas beaucoup affecté mes responsabilités dans ma vie sociale.",
  answer8:
    "Le contenu du cours est conçu pour inclure des technologies et des langages très courants dans la vie des affaires. Pour cette raison, lorsque je suis entré dans la vie professionnelle dans ce domaine 2-3 mois après avoir terminé le cours, je n'ai pas rencontré de grandes difficultés. En dehors de cela, je continue à échanger des idées et à apprendre, car nous sommes en contact à la fois avec ceux qui ont terminé le cours, les débutants et nos formateurs via notre plateforme de communication, Slack.",
  answer9:
    "Étant donné que le programme du cours comprend de nombreux sujets, je vous recommande de travailler sans relâche tout au long du cours, d'être ouvert aux bibliothèques avec les nouvelles technologies et de ne pas abandonner :)",
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
