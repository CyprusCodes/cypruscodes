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
  about_me: "From Bartender to Junior Developer",
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
    "I graduated from Cyprus International University Industrial Engineering Department in 2019. During my student life, I worked as a bartender in bars to make a living. I have been working as a bartender in a restaurant on the creek for a very long time. Frankly, I always looked at the bar business as a temporary job, thinking that at the end of the day I would return to industrial engineering. When the pandemic got into the business, I had a lot of time to think and research like everyone else. I realized that the jobs I found as an industrial engineer would not satisfy me. As much as I love working in a bar, I wanted to change my life in a positive way. I wanted to improve my quality of life. I can say that I want to be the person sipping amazing cocktails outside the bar, not the person preparing the cocktails inside the bar.",
  answer3:
    "I started an internship in order to reinforce the education I received after the course, gain experience in the field of software and improve myself in the field of frontend. I am sure that I will make my plans come true with the support of the Cyprus Codes team and the developer with whom I am interning. I avoided making long-term plans, frankly, the reason for this is that I have definitely turned to myself now, to strengthen the areas that I see as deficient and inadequate. I think the training we received at Cyprus Codes was a big step to bring us from zero to junior developer level. But if we do not continue to learn/develop, the effort of a whole team will be wasted.",
  answer4:
    "During the period when there was a curfew due to the pandemic, I tried to find a way by using platforms such as many online courses / youtube / udemy. But I couldn't even complete the beginner level. It was during this period that I realized the importance of the curriculum. Because I didn't know where to start and where to go. The first of my reasons for choosing Cyprus Codes is of course the fact that the curriculum has been tried and proven within Manchester Codes and that they have achieved success in real life with the curriculum. The other reason is teamwork. When I was trying to learn on my own, I would sometimes stop working for no reason and it would take me a long time to get back in front of the computer. But with this course, even if you sometimes find an excuse and don't want to work, it is impossible because both the instructors and the friends from the course immediately bring you to yourself and continue with full support. This was really rewarding for me. Sometimes you can't provide motivation for yourself even if you want to, so it helps a lot to be a team work.",
  answer5:
    "I think it was the moment when I realized that I could do this job with the right guidance. This was also the moment when I realized that I wasn't wasting my time and money on the course, which is the most important thing for a minimum wage earner like me.",
  answer6:
    "The thing that challenged me throughout the course was that the documents were in English. I thought I had an intermediate level of English, but it turns out I didn't. But this did not discourage me. While I was learning to write code, I also improved my English.",
  answer7:
    "The course hours were arranged in a way to fit the schedules of working individuals, but because I worked at the bar, my working hours did not fit. I had to make some sacrifices for this. We talked to my employer and adjusted my hours accordingly, and he supported me in every way.",
  answer8:
    "The curriculum of the course was really prepared to include the most desired languages and technologies in business life, so I had no difficulty in my search for an internship. I had already learned everything they wanted me to know in the course. We are in contact with all trainees and trainers through our communication platform, Slack. We did not stop communicating just because the course was over. The whole team continues to exchange ideas and help us improve, even after the course is over.",
  answer9:
    "They should make sure not to miss any lesson. In such cases, they should definitely watch the recorded lesson. If they complete the given tasks on time, then they wouldn't have any problems. One of the mistakes that I and many of my coursemates made was to be embarrassed and not ask questions. Don't be afraid to ask questions. Remember that no one buys such a course as a hobby. Everyone is there to learn something. The course curriculum has been prepared for individuals who have no experience and want to change their career goals from scratch. I can say that you will not leave this curriculum empty-handed with a little English and effort.",
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
  about_me: "Barmenlikten Junior Developer'a",
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
    "Uluslararası Kıbrıs Üniversitesi Endüstri Mühendisliği 2019 mezunuyum. Öğrencilik hayatım boyunca geçimimi sağlayabilmek için barlarda bartender olarak çalıştım. Çok uzun zamandır da dereboyunda bir restorantta bartender olarak çalışmaktayım. Açıkcası bar işine hep geçici bir iş olarak baktım günün sonunda endüstri mühendisliğine dönüş yapacağımı düşünüyordum. Pandemi işin içine girince herkes gibi benimde düşünecek ve araştıracak çok vaktim oldu. Endüstri mühendisi olarak bulduğum işlerin beni tatmin etmeyeceğini farkettim. Barda çalışmayı ne kadar çok sevsemde hayatımı olumlu bir şekilde değiştirmek istedim. Yaşam kalitemi yükseltmek istedim. ‘Barın içinde kokteyl yapan kişi değil dışındaki muhteşem kokteylleri yudumlayan kişi olmak istiyorum.’ tüm motivasyonum ve araştırma geçişim bu cümleyi kendime kurunca başladı diyebilirim.",
  answer3:
    "Kurs sonrası aldığım eğitimi pekiştirmek, yazılım alanında tecrübe kazanmak ve frontend alanında kendimi geliştirmek için staja başladım. Cyprus Codes ekibinin ve yanında stajda olduğum developer'ın desteği ile planlarımı gerçekleştireceğime eminim. Uzun vadeli planlar yapmakdan kaçındım açıkcası bununda sebebi şuan kesinlikle kendime yönelmiş olmam , eksik ve yetersiz gördüğüm alanları güçlendirmek. Cyprus Codes bünyesinde aldığımız eğitim bizleri sıfırdan junior developer seviyesine getirmek için koca bir adımdı diye düşünüyorum. Ama öğrenmeye/gelişmeye devam etmezsek koca bir ekibin emeği boşa gitmiş olur.",
  answer4:
    "Pandemiden dolayı dışarı çıkma yasağının olduğu dönem bir çok online kurs / youtube/ udemy gibi platformlardan yararlanarak yol bulmaya çalıştım. Ama 101 seviyesini geçemedim. Müfredatın önemini de bu dönemde farkettim. Çünkü nereden başlayıp nereye gideceğimi kestiremiyordum. Cyprus Codes i seçme sebeplerimden birincisi Manchester Codes bünyesinde müfredatın denenip kanıtlanmış olması ve söz konusu müfredat ile gerçek hayatta başarı yakalamış olmaları tabi ki. Bir diğeri de ekip işi olması. Kendi kendime öğrenmeye çalıştığım zamanlar bazen sebepsiz yere çalışmayı bırakırdım ve tekrar bilgisayar başına geçmem uzun zaman alırdı. Kurs içinde bazen bahane bulup çalışmak istemezsen bile pek mümkün olmuyor gerek eğitimciler olsun gerek kurstan arkadaşlar hemen sizi kendinize getirip tam destek olarak devam ettiriyorlar ve bu benim çok hoşuma gitti. İnsan çok istesede bazen kendine motivasyon sağlayamıyor o yüzden ekip işi olması çok işe yarıyor.",
  answer5:
    "Doğru yönlendirme ile bu işi yapabileceğimi anladığım andı sanırım. Bu aynı zamanda kursa ayırdığım zamanımı ve paramı boşa harcamadığımı anladığım andı yani benim gibi asgari ücret kazanan biri için en önemli şey.",
  answer6:
    "Kurs boyunca beni zorlayan şey dökümanların ingilizce olmasıydı. Orta derece ingilizcem var sanıyordum meğerse yokmuş. Ama bu beni yıldırmadı kod yazmayı öğrenirken ingilizcemi de geliştirmiş oldum.",
  answer7:
    "Kurs saatleri çalışan bireylere uygun olarak ayarlanılmış fakat ben barda çalıştığım için iş saatlerim uymuyordu. Bunun için biraz fedakarlık yapmak zorunda kaldım.  İşverenimle konuşup ona göre ayarladık saatlerimi kendisi her konuda bana destek oldu. ",
  answer8:
    "Kursun müfredatı gerçekten iş hayatında en çok istenilen dilleri ve teknolojileri içerecek şekilde hazırlanmış bundan dolayı staj arayışımda hiç zorlanmadım benden bilmemi istedikleri herşeyi kursta zaten öğrenmiştim. İletişim platformumuz olan Slack üzerinden tüm kursiyerler ve eğitmenler ile iletişim içindeyiz. Kurs bitti herkes kendi yoluna gibi bir durum olmadı. Bütün ekip kurs bitmesine rağmen fikir alışverişine ve gelişmemize yardımcı olmaya devam ediyorlar. ",
  answer9:
    "Ders kaçırmamaya özen göstersinler. Aksi bir durum olurda kaçırırlarsa mutlaka kayıtlı dersi izlesinler. Verilen görevleri zamanında tamamlasinlar sonra başa bela oluyor. Benim ve bir çok kurs arkadaşımın yaptığı yanlislardan biri utanmak çekinmek ve soru sormamakti. Bilgisiz gibi görünmekten korkmayin. Unutmayın ki kimse hobi olsun diye böyle bir kursu satın almıyor. Herkes birşeyler öğrenmeye geldi. Kurs müfredati hiç bir deneyimi olmayıp sıfırdan kariyer hedeflerini değiştirmek isteyen bireyler için hazırlanmış biraz ingilizce ve vereceğiniz emek ile bu müfredattan eliniz boş ayrilmayacaginizi söyleyebilirim.",
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
      "Я закончила факультет промышленной инженерии Кипрского международного университета (Cyprus International University) в 2019 году. Во время студенческой жизни я работала барменом в барах, чтобы зарабатывать на жизнь. Я очень давно работаю барменом в ресторане. Честно говоря. , Я всегда смотрела на барный бизнес как на временную работу, думая, что в конце дня я вернусь к промышленному инжинирингу.Когда пандемия добралась до бизнеса, у меня было много времени, чтобы думать и исследовать, как и все остальные. Я поняла, что работа, которую я нашела в качестве промышленного инженера, меня не удовлетворит. Как бы я ни любила работать в баре, я хотела изменить свою жизнь в положительную сторону. Я хотела улучшить качество своей жизни. Я могу сказать, что Я хочу быть человеком, потягивающим потрясающие коктейли за пределами бара, а не тем, кто готовит коктейли внутри бара",
  answer3:
      "Я начала стажировку, чтобы закрепить полученное после курса образование, получить опыт в области программного обеспечения и улучшить себя в области фронтенда. Я уверена, что осуществлю свои планы при поддержке команды Cyprus Codes и разработчика, у которого я стажируюсь. Я избегала строить долгосрочные планы, честно говоря, причина этого в том, что я определенно обратилась к себе сейчас, чтобы усилить области, которые я считаю недостаточными. Я думаю, что обучение, которое мы получили в Cyprus Codes, было большим шагом, который помог нам подняться с нуля до уровня младшего разработчика. Но если мы не продолжим учиться/развиваться, усилия всей команды будут потрачены впустую",
  answer4:
      "В период, когда был комендантский час из-за пандемии, я пыталась найти выход, используя такие платформы, как многие онлайн-курсы / youtube / udemy. Но я не смогла пройти даже начальный уровень. Именно в этот период Я осознала важность учебной программы.Потому что я не знала, с чего начать и куда двигаться.Первой из причин, по которой я выбрала Cyprus Codes, конечно же, является тот факт, что учебная программа была опробована и проверена в рамках Manchester Codes и что они добились успеха в реальной жизни с помощью учебной программы. Другая причина - работа в команде. Когда я пыталась учиться самостоятельно, я иногда прекращала работу без причины, и мне требовалось много времени, чтобы вернуться к компьютеру. Но с этим курсом, даже если ты иногда находишь отговорку и не хочешь работать, это невозможно, потому что и инструкторы, и друзья с курса сразу приводят тебя в себя и продолжают при полной поддержке. Иногда ты Вы не можете мотивировать себя, даже если хотите, поэтому командная работа очень помогает",
  answer5:
      "Я думаю, что это был момент, когда я поняла, что могу делать эту работу с правильным руководством. Это был также момент, когда я поняла, что не трачу свое время и деньги на курс в пустую, что является самым важным для человека с минимальной заработной платой, такой как я.",
  answer6:
      "На протяжении всего курса меня смущало то, что документы были на английском языке. Я думала, что у меня средний уровень английского, но оказалось, что нет. Но это меня не обескуражило. Пока я училась писать код, я также улучшила свой английский.",
  answer7:
      "Часы курсов были организованы таким образом, чтобы соответствовать графикам работающих людей, но, поскольку я работала в баре, мое рабочее время не соответствовало. Пришлось пойти на некоторые жертвы ради этого. Мы поговорили с моим работодателем и соответственно скорректировали мои часы, и он поддерживал меня во всем.",
  answer8:
      "Учебная программа курса действительно была подготовлена таким образом, чтобы включать в себя самые востребованные в деловой жизни языки и технологии, поэтому у меня не возникло трудностей с поиском стажировки. Я уже узнала все, что они хотели, чтобы я узнала на курсе. Мы поддерживаем связь со всеми стажерами и тренерами через нашу коммуникационную платформу Slack. Мы не перестали общаться только потому, что курс закончился. Вся команда продолжает обмениваться идеями и помогать нам совершенствоваться даже после окончания курса.",
  answer9:
      "Они должны следить за тем, чтобы не пропустить ни одного урока. В таких случаях им обязательно стоит посмотреть запись урока. Если они выполнят поставленные задачи вовремя, то у них не будет никаких проблем. Одна из ошибок, которую совершали я и многие мои однокурсники, заключалась в том, что они смущались и не задавали вопросов. Не бойтесь задавать вопросы. Помните, что никто не покупает такой курс как хобби. Все здесь, чтобы чему-то научиться. Учебная программа курса была подготовлена для людей, которые не имеют опыта и хотят изменить свои карьерные цели с нуля. Я могу сказать, что вы не уйдете из этой учебной программы с пустыми руками, немного английского и приложив усилия.",
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
