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
  about_me: "From Banking and Finance analyst to Full Stack Developer",
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
    "I have been working as a Banking and Finance analyst at an international credit rating agency since 2017. As an analyst who closely follows the technological developments in the finance and financial technologies sector, I started to be interested in the technology and web-based software sector. I signed up for the CyprusCodes Fast-Track SE course in order to have the infrastructure to develop my own ideas in the future and to improve my general programming skills that I can use as an analyst.",
  answer3:
    "After the course, I applied for a job as a part-time lecturer at the programming school ManchesterCodes. With the experience I gained in the course, I passed the recruitment interviews and started to give lessons on Javascript basic programming part-time to students who are just starting out. In addition, thanks to the progress in my programming skills, I started to use different programming languages and data collection techniques while developing the financial and economic models that I was working on in the finance sector.",
  answer4:
    "The most important reason for choosing CyprusCodes was the fact that the course curriculum had been covered by Manchester Codes for a long time, and the significant achievements were achieved as a result. In addition, the international experience of the teaching staff was one of the important factors that made me choose CyprusCodes. In addition, the promise of the instructors to support the students in an intense way, almost 24/7, played an important role in choosing this course.",
  answer5:
    "Being able to develop both the database and the user interface of a website from scratch in 6 months and improving my programming skills in general were the most satisfying results about the course. Being able to use my programming skills in finance as well as my web-based software career has been a positive result for me.",
  answer6:
    "It has been an extremely challenging experience to complete the CyprusCodes course part-time while working full-time at a very intense pace.",
  answer7: "By attending classes regularly and studying the topics regularly.",
  answer8:
    "I think the graduation project of the course was the most entertaining and also the most educational part of the course. While working on the project with the instructors, we benefited from their experience in software development and quickly solved the problems and developed a high quality site in a short time.",
  answer9:
    "My advice to them is to give the same importance to each part of the course, practice regularly and get support from the instructors immediately in the parts they struggle with.",
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
  about_me: "Bankacılık ve Finans analistinden Full Stack Developer'a",
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
    "2017 yılından itibaren bir uluslararasi kredi derecelendirme kuruluşunda Bankacilik ve Finans analisti olarak çalışmaktayım. Özellikle finans ve finansal teknolojiler sektöründeki teknolojik gelişmeleri yakından takip eden bir analist olarak teknoloji ve web tabanli yazilim sektörüne ilgi duymaya başladım. Hem gelecekte kendi fikirlerimi geliştirebilecek altyapıya sahip olmak hem de analist olarak kullanabilecegim genel programlama becerilerimi gelistirmek adina CyprusCodes Fast-Track SE kursuna yazıldım.",
  answer3:
    " Kurs sonrasinda ManchesterCodes adli programlama kursunda part-time ogretim gorevlisi olarak calismak icin is basvurusu yaptim. Kursta edindigim deneyimlerele rahatca ise alim mulakatlarini gectim ve yari-zamanli olarak Javascript temel programlama uzerine programlamaya yeni baslayan ogrencilere dersler vermeye basladim. Bunun yaninda programlama becerilerimdeki ilerleme sayesinde finans sektorunde uzerinde calistigim finansal ve ekonomik modelleri gelistirirken farkli programlama dilleri ve veri toplama (brolar burda mesela bir api’ydan direk veri cekme gibi seylerden bahsederim, teknik terimini siz ekleyin lutffen veri toplama yerine, ben emin olamadim) teknikleri kullanmaya basladim.",
  answer4:
    "CyprusCodes’u seçme sebeplerinden en önemlisi kurs mufredatinin daha önce Manchester Codes bünyesinde uzun sure islenmis olması ve bunun sonucunda edinilen onemli basarilar oldu. Buna ek olarak, öğretim kadrosunda bulunan ogretim gorevlilerinin uluslararasi alanda tecrübe sahibi olmasi da CyprusCodes’u secmemi saglayan onemli faktorlerdendi. Bunun yaninda eğitmenlerin 7/24 denecek kadar yogun sekilde öğrencilere destek verme vaadi de bu kursu seçmede önemli bir rol oynadi.",
  answer5:
    "6 ay icerisinde sıfırdan bir web sitesinin hem veritabanını hem de kullanici arayüzünü geliştirecek seviyeye gelmek ve genel anlamda programlama becerilerimi gozle gorulur seviyede gelistirmek kursla ilgili en mutlu edici sonuclar oldu. Programlama becerilerimi web tabanli yazilim kariyerim yaninda finans alaninda kullanabilmek de olumlu bir sonuc oldu benim icin.",
  answer6:
    "Cok yogun bir tempoda full-time calisarak ayni zamanda part-time olarak CyprusCodes kursunu tamamlamak fazlasiyla zorlayici bir deneyim oldu.",
  answer7:
    "Duzenli olarak derslere katilarak ve konulari biriktirmeden calisarak.",
  answer8:
    "Kursun bitirme projesi bence kursun en eglenceli ve ayni zamanda en ogretici bolumu oldu. Egitmenlerle birlikte proje uzerinde calisarak hem yazilim gelistirme alanindaki tecrubelerinden yararlandik hem de sorunlari cabuk bir sekilde cozerek kisa zamanda kaliteli bir site gelistirdik.",
  answer9:
    "Kursun her bolumune ayni onemi vererek duzenli sekilde pratik yaparak calismalari ve takildiklari yerlerde cok zaman kaybetmeden egitmenlerden destek almalari.",
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
      "Я работаю аналитиком по банковскому делу и финансам в международном рейтинговом агентстве с 2017 года. Как аналитик, который внимательно следит за технологическими разработками в секторе финансов и финансовых технологий, я начал интересоваться технологиями и сектором веб-программного обеспечения. . Я записался на курс CyprusCodes Fast-Track SE, чтобы иметь инфраструктуру для разработки собственных идей в будущем и улучшить свои общие навыки программирования, которые я могу использовать в качестве аналитика.",
  answer3:
      "После курса я устроился работать лектором на полставки в школу программирования ManchesterCodes. Благодаря опыту, который я получил на курсе, я прошел собеседование по приему на работу и начал давать уроки по базовому программированию на Javascript на неполный рабочий день для студентов, которые только начинают. Кроме того, благодаря прогрессу в моих навыках программирования, я начал использовать различные языки программирования и методы сбора данных при разработке финансово-экономических моделей, над которыми я работал в финансовом секторе.",
  answer4:
      "Самой важной причиной выбора CyprusCodes был тот факт, что учебная программа курса долгое время была покрыта Manchester Codes, и в результате были достигнуты значительные успехи. Кроме того, международный опыт преподавательского состава был одним из важных факторов, побудивших меня выбрать CyprusCodes. Кроме того, немаловажную роль в выборе этого курса сыграло обещание инструкторов интенсивно поддерживать студентов практически круглосуточно и без выходных.",
  answer5:
      "Возможность разработать как базу данных, так и пользовательский интерфейс веб-сайта с нуля за 6 месяцев и улучшить свои навыки программирования в целом были самыми удовлетворительными результатами курса. Возможность использовать свои навыки программирования в финансах, а также моя карьера в области программного обеспечения в Интернете была для меня положительным результатом.",
  answer6:
      "Было чрезвычайно сложно пройти курс CyprusCodes неполный рабочий день, работая полный рабочий день в очень интенсивном темпе.",
  answer7: "Регулярно посещая занятия и регулярно изучая темы.",
  answer8:
      "Я думаю, что выпускной проект курса был самой интересной, а также самой познавательной частью курса. Работая над проектом с инструкторами, мы воспользовались их опытом в разработке программного обеспечения и быстро решили проблемы и в короткие сроки разработали качественный сайт.",
  answer9:
      "Мой совет им придавать одинаковое значение каждой части курса, регулярно практиковаться и немедленно получать поддержку от инструкторов в тех частях, с которыми они борются.",
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
    "Je travaille comme analyste bancaire et financier dans une agence internationale de notation de crédit depuis 2017. En tant qu'analyste qui suit de près les développements technologiques dans le secteur de la finance et des technologies financières, j'ai commencé à m'intéresser au secteur de la technologie et des logiciels Web. . Je me suis inscrit au cours CyprusCodes Fast-Track SE afin d'avoir l'infrastructure pour développer mes propres idées à l'avenir et pour améliorer mes compétences générales en programmation que je peux utiliser en tant qu'analyste.",
  answer3:
    "Après le cours, j'ai postulé pour un emploi de chargé de cours à temps partiel à l'école de programmation ManchesterCodes. Fort de l'expérience que j'ai acquise au cours, j'ai réussi les entretiens de recrutement et commencé à donner des cours de programmation de base Javascript à temps partiel à des étudiants qui débutent. De plus, grâce à la progression de mes compétences en programmation, j'ai commencé à utiliser différents langages de programmation et techniques de collecte de données tout en développant les modèles financiers et économiques sur lesquels je travaillais dans le secteur de la finance.",
  answer4:
    "La raison la plus importante pour choisir CyprusCodes était le fait que le programme de cours était couvert par les Codes de Manchester depuis longtemps, et les réalisations significatives ont été obtenues en conséquence. De plus, l'expérience internationale du personnel enseignant a été l'un des facteurs importants qui m'ont fait choisir CyprusCodes. De plus, la promesse des instructeurs d'accompagner les étudiants de manière intense, presque 24h/24 et 7j/7, a joué un rôle important dans le choix de ce cours.",
  answer5:
    "Pouvoir développer à la fois la base de données et l'interface utilisateur d'un site Web à partir de zéro en 6 mois et améliorer mes compétences en programmation en général ont été les résultats les plus satisfaisants du cours. Pouvoir utiliser mes compétences en programmation dans la finance ainsi que ma carrière dans les logiciels Web a été un résultat positif pour moi.",
  answer6:
    "Ce fut une expérience extrêmement difficile de suivre le cours CyprusCodes à temps partiel tout en travaillant à plein temps à un rythme très intense.",
  answer7:
    "En assistant régulièrement aux cours et en étudiant régulièrement les sujets.",
  answer8:
    "Je pense que le projet de fin d'études du cours était la partie la plus amusante et aussi la plus éducative du cours. En travaillant sur le projet avec les instructeurs, nous avons bénéficié de leur expérience en développement de logiciels et avons rapidement résolu les problèmes et développé un site de haute qualité en peu de temps.",
  answer9:
    "Mon conseil pour eux est de donner la même importance à chaque partie du cours, de s'entraîner régulièrement et d'obtenir immédiatement le soutien des instructeurs dans les parties avec lesquelles ils ont du mal.",
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
