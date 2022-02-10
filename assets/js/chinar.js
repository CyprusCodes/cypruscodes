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
  menu_4: "Frequently Asked Questions",
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
};

$.i18n.tr = {
  menu_1: "Eğitim",
  menu_2: "Kurslar",
  menu_3: "Kariyer Yolu",
  menu_4: "Sıkça Sorulan Sorular",
  menu_5: "İletişim",
  menu_6: "Giriş Yap",
  about_me: "Film Yapımcısından Tam Yığın Geliştiriciye",
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
};

var i18n = $.i18n();

var changeLabels = function () {
  $("[data-translate]").each(function () {
    var forLabel = $(this).attr("data-translate");
    this.innerHTML = i18n.getItem(forLabel);
  });
};

$(document).ready(function () {
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
    e.preventDefault();
  });
