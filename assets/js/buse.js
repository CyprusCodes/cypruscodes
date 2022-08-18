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
  about_me: "From Materials Science Engineer to Full Stack Developer",
  question1: "Hi, what’s your name?",
  question2: "Could you please tell us a little about yourself?",
  question3:
    "What were your plans for the end of the course? Has any of these come true?",
  question4:
    "What was your reason for choosing CyprusCodes over other courses in the market (or online courses)?",
  question5:
    "What was the best moment for you in the Cyprus Codes Fastrack Full Stack Developer course?",
  question6: "What challenged you the most throughout the course?",
  question7:
    "How did you achieve a balance between the course and your responsibilities in your social life?",
  question8:
    " Is there anything else you would like to add about your experience in the course?",
  question9:
    "What advice would you give to people who are currently taking the course?",
  answer2:
    "The education I received during my bachelor and master degrees in the fields of Materials Sciences Engineering and Solar Panel Technology, was not really related to software but while learning tiny bits of coding I realised that I wanted to dive into this great world . If there's one thing I've learned from my engineering work experience, I guess it's that I'm not much of a field person. I was in a transitional period in my life when I started the course, a PhD student based on modelling and simulation. Since I am a scientist and engineer at heart, I have a habit of learning and wondering how everything works. I attended the course with the motivation to improve myself in the field of software, to learn the 'how' side of what these devices show us every day, and to exist only in the field of engineering",
  answer3:
    "The plan that I have in mind during the course and when I finish is to evaluate business options at the 'junior developer' level and advance in this field. Currently, I am reinforcing the education I received in the course, and I had the chance to be a part of the Cyprus Codes team, which I love very much, to gain experience in this field and to improve myself",
  answer4:
    "I chose Cyprus Codes because of the fact that the same course curriculum has been tried and implemented within Manchester Codes before and because of my confidence in the careers and knowledge of the course instructors",
  answer5:
    "When I looked at my software engineer friends, I was happy and satisfied to understand what they were doing. Particularly our experiences in the process of making our own project, being a group, were the most enjoyable moments of the course",
  answer6:
    "The intense and hard nature of some subjects required long studying hours and being able to devote such time challenged me",
  answer7:
    "Since the course hours are suitable for working individuals, it did not affect my responsibilities in my social life much",
  answer8:
    " It is very pleasing for a person who is an engineer by heart and by profession to know the back side of the technology we use in our daily life.  I feel very lucky for being able to experience  this opportunity and for having chance to spend time with such a dynamic and supportive team",
  answer9:
    "Don't say you can't, just study and focus on learning, not memorization. If you are curious like me, if you want a job with options such as working from home, start without wasting much time. If we don't start and delay, we won't succeed, but once we start, we can",
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
  about_me: "Malzeme Bilimi Mühendisinden Full Stack Developer'a",
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
    "Aldığım lisans eğitimi, Malzeme Bilimleri Mühendisliği ve Yüksek Lisans eğitimi, Solar Panel Teknolojisi, alanlarının fazla yazılım içermeyen fakat ufak ufak ucundan kodlamayı öğrendiğim ve gerisini getirmek istediğim bir alan olduğunu farkettim. Mühendislik iş deneyimlerimden öğrendiğim bir şey varsa o da sanırım fazla saha insanı olmadığımdır. Kursa başladığımda hayatımda bir geçiş dönemindeydim, model ve simülasyon yapmaya dayalı olan bir doktora öğrencisiydim. Kalben bir bilim insanı, mühendis olduğumdandır ki her şeyin işleyişini öğrenme ve merak etme gibi bir huyum var. Kursa kendimi yazılım alanında geliştirmek, her gün her an elimizden düşürmediğimiz bu cihazların bize gösterdiklerinin “nasıl” tarafını öğrenmek ve sadece mühendislik alanında var olmama motivasyonuyla katıldım",
  answer3:
    "Kurs süresince ve bitirdiğimde aklımda olan plan öncelikli olarak “junior developer” seviyesinde iş opsiyonlarını değerlendirmek ve bu alanda ilerlemektir. Şu sıralar kursta aldığım eğitimi pekiştiriyor, ve bu alanda tecrübe edinmek için ve kendimi ileriye taşımak için çok sevdiğim Cyprus Codes ekibinin bir parçası olma şansım oldu",
  answer4:
    "Daha önce aynı kurs müfredatının Manchester Codes bünyesinde denenip uygulanmış olması ve kurs eğitmenlerinin kariyerlerine ve bilgilerine olan güvenimden dolayı Cyprus Codes’u tercih ettim",
  answer5:
    " Yazılım mühendisi arkadaşlarıma baktığımda ne yaptıklarını artık anlamak beni mutlu ve memnun etti. Özellikle kendi projemizi yapma aşamasındaki deneyimlerimiz grup olma hali kursun en zevkli zamanlarıydı",
  answer6:
    "Bazı konuların yoğun ve ağır olması sebebiyle uzun çalışma süreleri gerekmesi ve bu süreleri yaratmak bazen zorlandırıyordu beni",
  answer7:
    "Kurs saatleri çalışan bireylere de uygun olduğu için sosyal yaşantımdaki sorumluluklarımı fazla etkilememiştir",
  answer8:
    "Günlük hayatımızdaki kullandığımız teknolojinin arka yüzünü, neyin nasıl oluştuğunu neden olduğunu bilmek kalben ve meslek olarak mühendis olan bir kişi için çok mutluluk verici. Bu fırsatı ve şansı yakaladığım için, böylesine bir dinamik ve destekçi bir ekiple zaman geçirmiş olduğum için çok şanslı hissediyorum",
  answer9:
    "Yapamam demeyin, sadece çalışın ve öğrenmeye odaklanın ezberlemeye değil. Sizde benim gibi meraklıysanız, evden çalışma gibi opsiyonları olan bir meslek istiyorsanız fazla vakit kaybetmeden başlayın. Başlamadıkça, erteledikçe başaramayız, ancak başladığımızda başarırız",
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
      "Образование, которое я получил во время получения степени бакалавра и магистра в области инженерии материаловедения и технологии солнечных панелей, на самом деле не было связано с программным обеспечением, но, изучая небольшие фрагменты кода, я понял, что хочу погрузиться в этот великий мир. Если и есть что-то, чему я научился из своего инженерного опыта, так это тому, что я не очень полевой человек. У меня был переходный период в моей жизни, когда я начал курс, аспирант, основанный на моделировании и симуляции. Поскольку в душе я ученый и инженер, у меня есть привычка учиться и задаваться вопросом, как все работает. Я пошел на курс с мотивацией совершенствоваться в области программного обеспечения, узнать «как» сторону того, что эти устройства показывают нам каждый день, и существовать только в области инженерии.",
  answer3:
      "План, который я имею в виду во время курса и когда закончу, состоит в том, чтобы оценить варианты бизнеса на уровне «младшего разработчика» и продвинуться в этой области. В настоящее время я закрепляю полученное на курсе образование, и у меня появилась возможность стать частью команды Cyprus Codes, которую я очень люблю, набраться опыта в этой сфере и самосовершенствоваться.",
  answer4:
      "Я выбрала Cyprus Codes из-за того, что та же учебная программа курса была опробована и внедрена в Manchester Codes ранее, а также из-за моей уверенности в карьере и знаниях преподавателей курса.",
  answer5:
      "Когда я смотрела на своих друзей-программистов, я была счастлива и удовлетворена тем, что понимала, что они делают. В частности, наш опыт в процессе создания собственного проекта в группе был самым приятным моментом курса.",
  answer6:
      "Интенсивный и трудный характер некоторых предметов требовал долгих часов изучения, и возможность посвятить такое время бросала мне вызов.",
  answer7:
      "Поскольку часы курса подходят для работающих людей, это не сильно повлияло на мои обязанности в моей общественной жизни.",
  answer8:
      " Человеку, инженеру по призванию и по профессии, очень приятно знать обратную сторону технологий, которыми мы пользуемся в повседневной жизни. Мне очень повезло, что у меня есть такая возможность и возможность провести время с такой динамичной и поддерживающей командой.",
  answer9:
      "Не говорите, что не можете, просто учитесь и сосредоточьтесь на обучении, а не на запоминании. Если вам, как и мне, любопытно, если вы хотите работу с такими вариантами, как работа на дому, начните, не теряя много времени. Если мы не начнем и не отложим, у нас ничего не получится, но как только мы начнем, мы сможем",
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
  about_me: "D'ingénieur en science des matériaux à développeur Full Stack",
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
    "La formation que j'ai reçue au cours de mes études de licence et de maîtrise dans les domaines de l'ingénierie des sciences des matériaux et de la technologie des panneaux solaires n'était pas vraiment liée aux logiciels, mais en apprenant de minuscules éléments de codage, j'ai réalisé que je voulais plonger dans ce grand monde. S'il y a une chose que j'ai apprise de mon expérience de travail en ingénierie, je suppose que c'est que je ne suis pas vraiment une personne de terrain. J'étais dans une période transitoire de ma vie quand j'ai commencé le cursus, doctorant basé sur la modélisation et la simulation. Puisque je suis un scientifique et un ingénieur dans l'âme, j'ai l'habitude d'apprendre et de me demander comment tout fonctionne. J'ai suivi le cours avec la motivation de m'améliorer dans le domaine des logiciels, d'apprendre le côté 'comment' de ce que ces appareils nous montrent chaque jour, et de n'exister que dans le domaine de l'ingénierie",
  answer3:
    "Le plan que j'ai en tête pendant le cours et à la fin est d'évaluer les options commerciales au niveau «développeur junior» et d'avancer dans ce domaine. Actuellement, je renforce l'éducation que j'ai reçue dans le cours, et j'ai eu la chance de faire partie de l'équipe de CyprusCodes, que j'aime beaucoup, d'acquérir de l'expérience dans ce domaine et de m'améliorer",
  answer4:
    "J'ai choisi CyprusCodes en raison du fait que le même programme de cours a été essayé et mis en œuvre au sein de ManchesterCodes avant et en raison de ma confiance dans les carrières et les connaissances des instructeurs du cours.",
  answer5:
    "Quand j'ai regardé mes amis ingénieurs en logiciel, j'étais heureux et satisfait de comprendre ce qu'ils faisaient. En particulier, nos expériences dans le processus de réalisation de notre propre projet, en tant que groupe, ont été les moments les plus agréables du cours.",
  answer6:
    "La nature intense et difficile de certaines matières nécessitait de longues heures d'étude et pouvoir consacrer un tel temps m'a mis au défi",
  answer7:
    "Étant donné que les heures de cours sont adaptées aux personnes qui travaillent, cela n'a pas beaucoup affecté mes responsabilités dans ma vie sociale",
  answer8:
    "Il est très agréable pour une personne qui est ingénieur de cœur et de profession de connaître l'envers de la technologie que nous utilisons dans notre vie quotidienne. Je me sens très chanceux de pouvoir vivre cette opportunité et d'avoir la chance de passer du temps avec une équipe aussi dynamique et solidaire",
  answer9:
    "Ne dites pas que vous ne pouvez pas, étudiez simplement et concentrez-vous sur l'apprentissage, pas sur la mémorisation. Si vous êtes curieux comme moi, si vous voulez un travail avec des options comme le travail à domicile, commencez sans perdre beaucoup de temps. Si nous ne commençons pas et ne tardons pas, nous ne réussirons pas, mais une fois que nous aurons commencé, nous pourrons",
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
