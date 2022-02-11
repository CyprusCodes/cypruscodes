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
  about_me: "From Materials Science Engineer to Full Stack Developer",
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
  about_me: "Malzeme Bilimi Mühendisinden Tam Yığın Geliştiriciye",
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
