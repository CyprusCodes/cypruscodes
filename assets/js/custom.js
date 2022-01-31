$.i18n = function (options) {
  options = $.extend(
    {},
    {
      lang: "tr",
      data: $.i18n,
      sliceLang: false,
    },
    options
  );

  var langStore = langStore || {},
    lang =
      options.lang.indexOf("-") < 0 && !options.sliceLang
        ? options.lang
        : options.lang.slice(0, 2);

  if (typeof options.data !== "string") {
    langStore = options.data[lang];
  } else {
    var urlParts = options.data.match(/(.*)[\/\\]([^\/\\]+)\.(\w+)$/);
    $.ajax({
      url: urlParts[1] + "/" + lang + "." + urlParts[3],
      dataType: "json",
      success: function (data) {
        // console.log(data)
        langStore = data;
      },
      error: function (error) {
        console.log(error);
        $.getJSON(
          urlParts[1] + "/" + lang + "." + urlParts[3],
          function (data) {
            langStore = data;
          }
        );
      },
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

  this.getLang = function () {
    return lang;
  };
  this.setLang = function (l) {
    lang = l;
    storeData(options.data[l]);
  };

  this.getItem = function (key) {
    return langStore[key];
  };
  this.setItem = function (key, value) {
    options.data[lang][key] = value;
    storeData(langStore);
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
  intro: "WELCOME TO CYPRUSCODES",
  title: "Shape Your Future!",
  description:
    "Do you wish to improve yourself in the field of software and create new business areas for yourself?",
  description_2:
    "<b>Keep up with the developing world </b> with Cyprus<br/> one and only <b>part - time</b>  programming school!",
  info_btn: "Request Information",
  goal: "Your dream of a new career is just one step away if you have goals such as",
  goals:
    "<li>Starting a new career</li> <li> Improving your business</li> <li>Being a digital entrepreneur</li>",
  goal_desc:
    "everything you are looking for is here at <b>CyprusCodes,</b> the first and only technology academy of Northern Cyprus.",
  goal_desc2:
    "In 24 weeks, you will learn all the skills of a software developer and will be able to create your own web and mobile applications!",
  education: "Education",
  education_desc:
    "Developed in collaboration with the UK's leading programming school, <strong>ManchesterCodes</strong>, our curriculum<br/> covers the most popular technologies used by industry leaders like the <strong>BBC</strong> and <strong>Booking.com.</strong><br/> You are one step closer to your dreams with our classroom located in Nicosia, our expert staff,<br/> our world-class curriculum, and our part-time evening courses designed for working individuals.",
  educ_portal: "Education Portal",
  educ_portal_desc:
    "You can access our web-based training portal 24/7. You can find recorded videos of classroom lectures, weekly exercises, and recommended resources here.",
  cc_chat_desc:
    "Our students and teachers are in contact with each other 24/7 through the chat application called Slack.",
  staff: "Expert Teaching Staff",
  staff_desc:
    "Our teaching staff consists of professional software developers both from England and Cyprus.",
  night_mode: "Education Portal – Night Mode ",
  membership_title:
    "Create a membership on CyprusCodes<br/> Education Portal Now",
  membership_desc: "*You can access our free beginner module right now! ",
  membership_btn: "Sign Up",
  main_courses_title: "Our Mainstream Courses ",
  main_courses_desc: "Discover Our Most Popular Courses ",
  programming: "Programming",
  graphic_design: "Graphic Design",
  digital_marketing: "Digital Marketting",
  entrepreneurship: "Entrepreneurship",
  teen_kids: "Teens & Kids",
  fullstack: "Fullstack Engineer Fastrack",
  fullstack_desc: "Develop Web-Based Application",
  fullstack_time: "288 hrs",
  code_fund: "Coding Fundamentals",
  code_fund_desc: "Basic Coding",
  code_fund_time: "64 hrs",
  data_science: "Data Science",
  code_science_desc: "Data Science",
  code_science_time: "62 hrs",
  corp_training: "Coorporate Training Packages",
  corp_training_desc: "Coorporate Training Packages",
  on_demand: "On Demand",
  graphic_design: "Graphic Design",
  graphic_design_desc: "Graphic Design",
  graphic_design_time: "48 hrs",
  ui_ux: "UX-UI Design MasterClass",
  ui_ux_desc: "Web and mobile Interface Design",
  ui_ux_time: "108 hrs",
  digital_marketing_time: "62 hrs",
  robotik: "Robotic Coding for ages 8-12",
  robotik_desc: "Robotic Coding for Kids",
  robotik_loc: "Nicosia and Famagusta",
  robotik_time: "96 hrs",
  pyhton: "Python for ages 12-18",
  pyhton_desc: "Python for Teens",
  pyhton_time: "96hrs",
  venture: "Venture Development",
  venture_desc: "Entrepreneurship, Financial Planning and Business Canvas",
  venture_time: "96hrs",
  partner_title: "Our Business Partners  ",
  partner_desc: "PLEASE CONTACT FOR PARTNER DEVELOPMENT PROGRAMS",
  testimonial: "Testimonial ",
  testimonial_desc: "What does our clients say about us? ",
  testimonial_country: "Nicosia, Northern Cyprus",
  testimonial_erhan:
    "First of all, I was very satisfied with the Cyprus Codes software engineering course. In addition to the content and expression, the biggest feature that distinguishes Cyprus Codes from other trainings is to be able to find answers to our questions at the points where the students are stuck, on the platform where you can find the instructors and other students. Also another contribution of the course was learning the right research techniques in the field of software engineering. In this way, I am still able to improve my software knowledge. Thank you Cyprus Codes family.",
  testimonial_erto:
    "Am very pleased with the education I received within the framework of this course which was offered by CyprusCodes team. We have gained a different point of view and became a Junior Developer from scratch only in 6 months with the help of our instructors. Now, I am able to pursue a career in the field of Software Engineering. <br/>The courses offered were really fun which made it easier to understand the given topics. With the attention and effort shown by the instructors, people from all aspects of live can find an answer to the question “What is Coding?”.  ",
  faq: "FAQ",
  faq_title: "Frequently Asked Questions and Answers",
  faq_category_1: "General",
  faq_category_2: "Course/Platform",
  faq_category_3: "Application Form for Assistance",
  faq_category_1_title_1: "What is CyprusCodes?",
  faq_category_1_desc_1:
    "The one and only part-time web and mobile application programming course in Northern Cyprus. Our goal is to gather the talents in Northern Cyprus and to develop world-class web and mobile applications.",
  faq_category_1_title_2:
    "Who can apply for this course? Are there any age restrictions?",
  faq_category_1_desc_2:
    "<b>Anyone </b>between the ages of 16-60 can apply for our course.",
  faq_category_1_title_3: "What are the requirements for participation?",
  faq_category_1_desc_3:
    "Anyone who wants to pursue a career in the software industry can participate to our course. CyprusCodes programming school’s door is always open for everyone who will take a step into the software world for the first time, graduates from the related departments of universities or those who work actively in the sector and want to improve their knowledge. It is an advantage to have an intermediate level of English.",
  faq_category_1_title_4: "How are the hours of the course arranged?",
  faq_category_1_desc_4:
    "Our course hours have been prepared by taking working individuals into consideration. In this regard, the lessons will be held between 18.30 – 21.30 on Monday – Wednesday, and on Saturday between 10.00 – 16.00, the necessary support will be provided to students.",
  faq_category_1_title_5: "When can I apply?",
  faq_category_1_desc_5:
    "Our applications have started! To benefit from the latest news, you can follow the CyprusCodes page on Instagram and Facebook.",
  faq_category_1_title_6:
    "Do I need to be good at mathematics to learn programming?",
  faq_category_1_desc_6:
    "<b>No! </b>Thinking logically is more important when creating websites and applications, and the mathematics that you learned at school will suffice throughout our course.",
  faq_category_1_title_7: "Will I get a certificate at the end of the course?",
  faq_category_1_desc_7:
    "Yes! CyprusCodes Academy Certificate of Participation and CyprusCodes Academy Certificate of Achievement will be given to successful students at the end of the course.",
  faq_category_2_title_1: "Is your course suitable for beginner level?",
  faq_category_2_desc_1:
    "Yes! Our course is suitable for beginner level and you don’t need any programming experience.",
  faq_category_2_title_2:
    "What equipment do I need to participate in the course?",
  faq_category_2_desc_2:
    "The students who will attend the course will just need to bring a laptop with them. In order to properly comprehend the course flow and programming language, students need have intermediate level of English ability.",
  faq_category_2_title_3: "What is the cost of course documents?",
  faq_category_2_desc_3:
    "No. Even after the conclusion of the course, you will have access to the course materials in online.",
  faq_category_2_title_4: "How many students are there in each class?",
  faq_category_2_desc_4: "Between 6 and 12 people.",
  faq_category_2_title_5:
    "Am I going to have a portfolio that I can use at the end of the course?",
  faq_category_2_desc_5:
    "Yes. Employers will be able to see at least 10 projects on their own GitHub account before the end of the course. This is the standard approach for software engineer portfolios.",
  faq_category_3_title_1: "What is the Assistance Forum?",
  faq_category_3_desc_1:
    "“Assistance Forum” is a support meeting that is held daylong every Saturday. You can ask anything that comes to your mind and get help for the parts that you have trouble with while doing the given projects during the course.",
  faq_category_3_title_2: "Do you provide job opportunities to your graduates?",
  faq_category_3_desc_2:
    "Yes. We support our successful students in the first step of their careers.",
  faq_category_3_title_3:
    "After graduating, will I still have access to the assistance forums?",
  faq_category_3_desc_3: "Yes",
  faq_category_3_title_4: "Is it compulsory to attend the Assistance Forum?",
  faq_category_3_desc_4:
    "No. The Assistance Forum is just held to provide you with extra support. We encourage you to join the help forums, either to ask questions or answer other participants’ questions but surely there is no obligation.",
  contact_title: "CONTACT FORM",
  contact_desc:
    "Want to get more information ? <br/> We will get in touch with you!",
  contact_btn: "Send",

  // basarimlar

  students: "Some of Our Graduates: ",
  testimonial_country_magusa: "Mağusa , Turkish Republic of Northern Cyprus",
};

$.i18n.tr = {
  menu_1: "Eğitim",
  menu_2: "Kurslar",
  menu_3: "Kariyer Yolu",
  menu_4: "Sıkça Sorulan Sorular",
  menu_5: "İletişim",
  menu_6: "Giriş Yap",
  intro: "CYPRUSCODES’A HOŞ GELDİNİZ",
  title: "Geleceğini Şekillendir!",
  description:
    "Yazılım alanında kendinizi geliştirmek <br/> ve kendinize yeni iş alanları yaratmak ister misiniz?",
  description_2:
    "Kıbrıs’ın ilk ve tek <b>yarı-zamanlı</b> programlama okuluyla<br /> <b>gelişen dünyaya ayak uydur!</b>",
  goal: "Yeni bir kariyer hayaliniz bir adım uzağınızda",
  info_btn: "Bilgi İste",
  goals:
    "<li>Yeni bir kariyer</li> <li> İşletmenizi bir üst seviyeye taşımak</li> <li>Dijital girişimci olmak</li>",
  goal_desc:
    "gibi hedefleriniz varsa, aradığınız her şey Kuzey Kıbrıs’ın ilk ve tek teknoloji akademisi olan <b>CyprusCodes</b>’da!",
  goal_desc2:
    " 24 hafta içerisinde, bir yazılım geliştirme uzmanının tüm becerilerini öğrenecek ve kendi web ve mobil uygulamalarınızı yaratabilecek seviyeye geleceksiniz!",
  education: "Eğitim",
  education_desc:
    "İngiltere’nin önde gelen programlama okulu <strong> ManchesterCodes</strong> işbirliğiyle geliştirilen müfredatımız, <br /><strong>BBC</strong> ve <strong> Booking.com</strong> gibi endüstri liderlerinin kullandığı revaçta olan teknolojileri kapsamaktadır. <br/> Merkezi Lefkoşa'da bulunan sınıfımız, uzman kadromuz, dünya standartlarındaki müfredatımız, <br/> çalışan bireylere yönelik yarı zamanlı akşam üstü kurslarımız ile hayallerinize bir adım daha yakınsınız.",
  educ_portal: "Eğitim Portalı",
  educ_portal_desc:
    " Web-tabanlı eğitim portalımıza 7/24 erişebilirsiniz. Sınıfta işlenen derslerin kaydedilmiş videoları, haftalık egsersizler ve tavsiye ettiğimiz kaynaklara buradan ulaşabilirsiniz.",
  cc_chat_desc:
    " Öğrencilerimiz ve öğretmenlerimiz, Slack adlı sohbet uygulamasında birbirleriyle 7/24 iletişim içerisindedirler.",
  staff: "Uzman Öğretim Kadrosu",
  staff_desc:
    "Öğretim kadromuz İngiltere ve Kıbrıs'ta profesyonel olarak çalışan yazılımcılardan oluşmaktadır.",
  night_mode: "Eğitim Portalı - Gece Modu ",
  membership_title: "CyprusCodes Eğitim Portalına<br/>Hemen Üye Ol",
  membership_desc: "*Ücretsiz başlangıç modülümüze anında erişebilirsin!",
  membership_btn: "Sign UpKayıt Ol",
  main_courses_title: "Revaçta Olan Kurslarımız",
  main_courses_desc: "En Popüler Kurslarımızı Keşfet",
  programming: "Yazılım",
  graphic_design: "Grafik Tasarım",
  digital_marketing: "Dijital Pazarlama",
  entrepreneurship: "Girişimcilik",
  teen_kids: "Gençler & Çocuklar",
  fullstack: "Hızlandırılmış Yazılım Mühendisliği",
  fullstack_desc: "Web Bazlı Uygulamalar Geliştir",
  fullstack_time: "288 Saat",
  code_fund: "Kodlamanın Temelleri ",
  code_fund_desc: "Temel Kodlama Eğitimi",
  code_fund_time: "64 Saat",
  data_science: "Veri Birimi",
  code_science_desc: "Veri Bilimi",
  code_science_time: "62 Saat",
  corp_training: "Kurumsal Eğitim Paketleri",
  corp_training_desc: "Kurumsal Eğitim Paketleri",
  on_demand: "Talep üzerine",
  graphic_design: "Grafik Tasarım",
  graphic_design_desc: "Grafik Tasarım",
  graphic_design_time: "48 Saat",
  ui_ux: "UX–UI (Kullanıcı Arayüzü) Tasarımı ",
  ui_ux_desc: "Web ve mobil Arayüz Tasarımı",
  ui_ux_time: "108 Saat",
  digital_marketing_time: "62 Saat",
  robotik: "8-12 Yaş - Robotik Kodlama.",
  robotik_desc: "Çocuklar için Robotik Programlama",
  robotik_loc: "Lefkoşa ve Mağusa",
  robotik_time: "96 Saat",
  pyhton: "12-18 Yaş - Phyton",
  pyhton_desc: "Gençlere Yönelik Phyton",
  pyhton_time: "96 Saat",
  venture: " Girişim Geliştirme ",
  venture_desc: "Girişimcilik, Finansal Planlama ve Iş Kanvası",
  venture_time: "96 Saat",
  partner_title: "Çözüm Ortaklarımız",
  partner_desc: "Partner geliştirme programları için lütfen iletişime geçin",
  testimonial: "bonservis ",
  testimonial_desc: "Müşterimiz bizim hakkımızda ne diyor",
  testimonial_country: "Lefkoşa, Kuzey Kıbrıs Türk Cumhuriyeti",
  testimonial_erhan:
    " Öncelikle Cyprus Codes yazılım mühendisliği kursundan çok memnun kaldım. İçerik ve anlatıma ek olarak Cyprus Codes'u diğer eğitimlerden ayıran en büyük özellik, öğrencilerin takıldığı noktalarda, eğitmen ve diğer öğrencilerin bulunduğu platformda sorularımıza yanıt bulabilmek olmuştur.<br/> Ayrıca kursun diğer bir katkısı, yazılım için doğru araştırma tekniklerini öğrenmek olmuştur. Bu sayede yazılım bilgimi geliştirmeye devam ediyorum. Cyprus Codes ailesine teşekkür ederim.",
  testimonial_erto:
    "Cyprus codes team olarak yapılan bu kursda verilen eğitimden çok memnunum 6 aylık kısa bir sürecin içinde 0 dan junior developer olmamızı sağlayan hocalarımız sayesinde hayata bakış açımız değişti ve şu andaki meslek yönelimimi yazılım mühendisliğine çevrildi. <br /> Verilen dersleri anlatımı ve yapım eğlencesi açısından konuya hakim olabilmemizi çok güçlü olmuştur, hocaların öğrencilere verdiği ilgi ve efor sayesinde 'yazılım nedir' sorusunu soran 7 den 70 e herkesin bu kursu aldıktan sonra yazılım bilgisini çok güçlü bir şekilde arttıran eğlenceli bir kursdur.",
  faq: "S.S.S",
  faq_title: "Sıkça Sorulan Sorular ve Cevapları",
  faq_category_1: "Genel",
  faq_category_2: "Kurs/Platform",
  faq_category_3: "Yardım Formu",
  faq_category_1_title_1: "CyprusCodes nedir?",
  faq_category_1_desc_1:
    "Kuzey Kıbrısın ilk ve tek yarı-zamanlı web ve mobil uygulama(web & mobile app) programlama kursu. Amacımız Kuzey Kıbrıs içindeki yetenekleri biraraya getirip, dünya standardlarında web ve mobil uygulamalar geliştirmek.",
  faq_category_1_title_2:
    "Kimler bu kursa müracaat edebilir? Herhangi bir yaş sınırlaması var mı ?",
  faq_category_1_desc_2:
    "Kursumuza 16-60 yaş arası <b>herkes</b> muracaat edebilir.",
  faq_category_1_title_3: "Katılım koşulları nedir?",
  faq_category_1_desc_3:
    "Kursumuza yazılım sektöründe kariyer yapmak isteyen herkes katılabilir. CyprusCodes programlama okulunun kapıları yazılım dünyasına ilk kez adım atacak olanlar, üniversitelerin ilgili bölümlerinden mezun olanlar veya sektörde aktif çalışan ve bilgisini güncellemek isteyenler herkese açıktır.Orta seviyede İngilizce bilmeniz size avantaj sağlayacaktır.",
  faq_category_1_title_4: "Kurs saatleri ne şekildedir?",
  faq_category_1_desc_4:
    "Kurs saatlerimiz çalışan bireyler göz önünde bulundurularak hazırlanmıştır.Bu bağlamda dersler Pazartesi - Çarşamba 18.30 - 21.30 saatleri arasında gerçekleşecek olup Cumartesi günleri 10.00 - 16.00 saatleri arasında da öğrencilere gerekli destek sağlanacaktır.",
  faq_category_1_title_5: "Ne zaman başvurabilirim?",
  faq_category_1_desc_5:
    "Başvurularımız başlamıştır! Güncel haberlerden faydalanmak için İnstagram ve Facebook üzerinden CyprusCodes sayfasını takip edebilirsiniz.",
  faq_category_1_title_6:
    "Programlama öğrenmek için matematiğimin iyi olması gerekiyor mu?",
  faq_category_1_desc_6:
    "<b>Hayır!</b> Web sitesi e uygulama oluşturmak için  mantıklı düşünmek daha önemlidir ve okulda öğrendiğiniz matematik kursumuz boyunca size yeterli olacaktır.",
  faq_category_1_title_7: "Kurs bitiminde sertifika alacak mıyım?",
  faq_category_1_desc_7:
    "Evet, kurs bitiminde başarılı öğrencilere CyprusCodes Akademi Katılım Sertifikası ve CyprusCodes Akademi Başarı Sertifikası verilecektir.",
  faq_category_2_title_1: "Kursunuz başlangıç seviyesindekiler için uygun mu?",
  faq_category_2_desc_1:
    "Evet! Kursumuz başlangıç seviyesindekiler için uygundur ve herhangi bir programlama deneyimine gereksinim yoktur.",
  faq_category_2_title_2: "Kursa katılırken ne gibi donanıma ihtiyacım var?",
  faq_category_2_desc_2:
    "Kursa katılacak öğrencilerin yanlarında laptop getirmeleri yeterli olacaktır.Öğrencilerin ders akışını ve programlama dilini tam olarak yakalayabilmeleri için orta seviyede İngilizce yeterlilikleri olmalıdır.",
  faq_category_2_title_3: "Ders dokümanları ücretli mi?",
  faq_category_2_desc_3:
    " Hayır. Ders dokümanlarına kursdan sonra bile internet üzerinden erişiminiz olacaktır.",
  faq_category_2_title_4: "Sınıflar kaç kişilik?",
  faq_category_2_desc_4: "6-12 kişi arası.",
  faq_category_2_title_5:
    "Kurs bitiminde kullanabileceğim bir portföye sahip olacak mıyım?",
  faq_category_2_desc_5:
    "Evet. Kursun sonunda, işverenlerin bakabileceği kişisel GitHub hesabınızda en az 10 projeniz olacak. Yazılım Mühendisi portföyleri için standart yaklaşım budur.",
  faq_category_3_title_1: "Yardım Formu nedir?",
  faq_category_3_desc_1:
    '"Yardım Formu" cumartesi gunleri tüm gün gerçekleşen online bir destek toplantısıdır.Burada aklınıza gelebelicek tüm soruları sorabilir ve kurs sırasında verilen projeleri yaparken takıldığnız kısımlar icin yardım bulabilirsiniz.',
  faq_category_3_title_2: "Mezunlarınıza iş imkanı sağlayabiliyor musunuz?",
  faq_category_3_desc_2:
    "Evet. Başarılı öğrencileremize kariyerlerinin ilk adımında destek olabiliyoruz.",
  faq_category_3_title_3:
    "Mezun olduktan sonra da yardım formlarına erişimim olacak mı?",
  faq_category_3_desc_3: "Evet.",
  faq_category_3_title_4: "Yardım Forumuna katılım zorunlu mu?",
  faq_category_3_desc_4:
    "Hayır. Yardım Forumu tamamen size ekstradan destek saglamak icin gercekleşiyor.Biz herzaman, gerek soru sormak; gerek başkalarının sorularını yanıtlamak adına, yardım forumlara katılmanızı teşfik ediyoruz ama herhangi bir zorunluluk asla yok.",
  contact_title: "İletişim formu",
  contact_desc: " Daha fazla bilgi almak mı istiyorsun?<br/>Biz seni arayalım!",
  contact_btn: "Gönder",

  // basarimlar
  students: "Bazı Mezunlarımız :",
  testimonial_country_magusa: "Famağusa, Kuzey Kıbrıs Türk Cumhuriyeti",
};

var i18n = $.i18n();

var changeLabels = function () {
  $("[data-translate]").each(function () {
    var forLabel = $(this).attr("data-translate");
    this.innerHTML = i18n.getItem(forLabel);
  });
};
changeLabels();

$("#lang")
  .find("a")
  .click(function (e) {
    var lang = this.href.slice(-2);
    i18n.setLang(lang);

    changeLabels();
    e.preventDefault();
  });
