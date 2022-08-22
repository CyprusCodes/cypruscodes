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
  intro: "WELCOME TO CYPRUSCODES",
  title: "Shape Your Future!",
  home_page: "Home",
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
  code_science_time: "Comming soon",
  corp_training: "Corporate Training Packages",
  corp_training_desc: "Improve your organization's effectiveness",
  on_demand: "On Demand",
  graphic_design: "Graphic Design",
  graphic_design_desc: "Graphic Design",
  graphic_design_time: "48 hrs",
  ui_ux: "UX-UI Design MasterClass",
  ui_ux_desc: "Web and mobile Interface Design",
  ui_ux_time: "108 hrs",
  digital_marketing_time: "Comming soon",
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
  testimonial_desc: "What does our clients say about us?",
  testimonial_country: "Nicosia, Northern Cyprus",
  testimonial_erhan:
    "First of all, I was very satisfied with the CyprusCodes software engineering course. In addition to the content and expression, the biggest feature that distinguishes CyprusCodes from other trainings is to be able to find answers to our questions at the points where the students are stuck, on the platform where you can find the instructors and other students. Also another contribution of the course was learning the right research techniques in the field of software engineering. In this way, I am still able to improve my software knowledge. Thank you CyprusCodes family.",
  testimonial_erto:
    "Am very pleased with the education I received within the framework of this course which was offered by CyprusCodes team. We have gained a different point of view and became a Junior Developer from scratch only in 6 months with the help of our instructors. Now, I am able to pursue a career in the field of Software Engineering. <br/>The courses offered were really fun which made it easier to understand the given topics. With the attention and effort shown by the instructors, people from all aspects of live can find an answer to the question “What is Coding?",
  testimonial_rahmi:
    "When I started the course, I had some doubts, even though the teaching staff had experience abroad. Shortly after the course has started, I had realized that these doubts were unfounded, with the support and help of the teaching staff as well as the help of my teammates in the communication platform (Slack).<br/> I would like to thank the CyprusCodes teachers and my teammates who both helped me and supported me to improve myself with this course, and I would gladly recommend the course to people of all ages who want to increase their digital competencies.",
  faq: "FAQ",
  faq_title: "FAQ and Answers",
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
  address_title: "Our address",
  address_desc: "29 Şehit Idris Doğan Avenue, Gelibolu, Nicosia, North Cyprus",
  other: "Other",
  email_must: "Email must be filled out",
  name_must: "Name must be filled out",
  course_must: "Course must be selected",

  // basarimlar

  students: "Some of Our Graduates",
  testimonial_country_magusa: "Famagusta , Northern Cyprus",
  select_course: "Select your course",
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
  home_page: "ana sayfa",
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
  membership_btn: "Kayıt Ol",
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
  code_science_desc: "Veri Birimi",
  code_science_time: "Yakında gelecek",
  corp_training: "Kurumsal Eğitim Paketleri",
  corp_training_desc: "Kuruluşunuzun etkinliğini iyileştirin",
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
  testimonial: "Referanslar",
  testimonial_desc: "Müşterimiz bizim hakkımızda ne diyor",
  testimonial_country: "Lefkoşa, Kuzey Kıbrıs Türk Cumhuriyeti",
  testimonial_erhan:
    "Öncelikle Cyprus Codes yazılım mühendisliği kursundan çok memnun kaldım. İçerik ve anlatıma ek olarak Cyprus Codes'u diğer eğitimlerden ayıran en büyük özellik, öğrencilerin takıldığı noktalarda, eğitmen ve diğer öğrencilerin bulunduğu platformda sorularımıza yanıt bulabilmek olmuştur.<br/> Ayrıca kursun diğer bir katkısı, yazılım için doğru araştırma tekniklerini öğrenmek olmuştur. Bu sayede yazılım bilgimi geliştirmeye devam ediyorum. Cyprus Codes ailesine teşekkür ederim.",
  testimonial_erto:
    "Cyprus codes team olarak yapılan bu kursda verilen eğitimden çok memnunum 6 aylık kısa bir sürecin içinde 0 dan junior developer olmamızı sağlayan hocalarımız sayesinde hayata bakış açımız değişti ve şu andaki meslek yönelimimi yazılım mühendisliğine çevrildi. <br /> Verilen dersleri anlatımı ve yapım eğlencesi açısından konuya hakim olabilmemizi çok güçlü olmuştur, hocaların öğrencilere verdiği ilgi ve efor sayesinde 'yazılım nedir' sorusunu soran 7 den 70 e herkesin bu kursu aldıktan sonra yazılım bilgisini çok güçlü bir şekilde arttıran eğlenceli bir kursdur.",
  testimonial_rahmi:
    "Kursa başlarken her ne kadar eğitim kadrosnunun yurt dışı tecrübesi olsa da, bir takım şüphelerim vardı. Kurs başladıktan kısa bir süre sonra, hem eğitim kadrosunun ilgi ve alakası hem de kullanılan iletişim platformundaki (Slack) ekip arkadaşlarımın yardımlaşması ile bu şüphelerimin yersiz olduğunu anladım.<br/> Bu süreçte hem kendi başıma doğru kaynaklarla kod yazmayı hem de projelerle problem çözme becerilerimi geliştirmemde yardımcı olan CyprusÇodes eğitmenlerine ve grup arkadaşlarıma çok teşekkür eder, kursu dijital yetkinliklerini artırmak isteyen her yaştan insana memnuniyetle tavsiye ederim.",
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
  address_title: "Adresimiz",
  address_desc: "29 Şehit Idris Doğan Sokak, Gelibolu, Lefkoşa, Kuzey Kıbrıs",
  other: "Diğer",
  email_must: "E-posta doldurulmalıdır",
  name_must: "İsim doldurulmalıdır",
  course_must: "Ders seçilmelidir",

  // basarimlar
  students: "Bazı Mezunlarımız",
  testimonial_country_magusa: "Mağusa, Kuzey Kıbrıs Türk Cumhuriyeti",
  select_course: "Kursunuzu seçin",
};

$.i18n.ru = {
  menu_1: "Образование",
  menu_2: "Курс",
  menu_3: "Карьерная лестница",
  menu_4: "Часто задаваемые вопросы",
  menu_5: "Контакт",
  menu_6: "Войти",
  intro: "ДОБРО ПОЖАЛОВАТЬ В CYPRUSCODES",
  title: "Сформируйте свое будущее!",
  home_page: "Домашняя страница",
  description:
    "Желаете улучшить себя в области программного обеспечения и создать для себя новые направления бизнеса?",
  description_2:
    "Идите в ногу с развивающимся миром с <b>кипрской единственной школой программирования </b><br/><b>с частичной занятостью!</b>",
  info_btn: "Запросить информацию",
  goal: "Ваша мечта о новой карьере находится всего в одном шаге, если у вас есть такие цели, как",
  goals:
    "<li>Начало новой карьеры</li> <li> Улучшение вашего бизнеса</li> <li>Быть цифровым предпринимателем</li>",
  goal_desc:
    "все, что вы ищете, находится здесь, в <b>CyprusCodes,</b> первой и единственной технологической академии Северного Кипра.",
  goal_desc2:
    "За 24 недели вы освоите все навыки разработчика программного обеспечения и сможете создавать собственные веб-приложения и мобильные приложения!",
  education: "Образование",
  education_desc:
    "Наша учебная программа, разработанная в сотрудничестве с ведущей британской школой программирования, <strong>ManchesterCodes</strong>, охватывает самые популярные технологии,<br/> используемые лидерами отрасли, такими как <strong>BBC</strong> и ,<strong>Booking.com</strong>. <br/> Вы на шаг ближе к своей мечте с нашим классом, расположенным в Никосии,<br/> нашим опытным персоналом, нашей учебной программой мирового уровня и нашими вечерними курсами с частичной занятостью, предназначенными для работающих людей.",
  educ_portal: "Образовательный портал",
  educ_portal_desc:
    "Вы можете получить доступ к нашему веб-порталу обучения 24/7. Здесь вы можете найти записанные видео классных лекций, еженедельные упражнения и рекомендуемые ресурсы.",
  cc_chat_desc:
    "Наши студенты и преподаватели находятся на связи друг с другом 24/7 через чат-приложение под названием Slack.",
  staff: "Опытный преподавательский состав",
  staff_desc:
    "Наш преподавательский состав состоит из профессиональных разработчиков программного обеспечения из Англии и Кипра.",
  night_mode: "Образовательный портал – Ночной Режим ",
  membership_title:
    "Создайте членство на образовательном портале<br/> CyprusCodes прямо сейчас",
  membership_desc:
    "*Вы можете получить доступ к нашему бесплатному модулю для начинающих прямо сейчас! ",
  membership_btn: "Зарегистрироваться",
  main_courses_title: "Наши основные курсы ",
  main_courses_desc: "Откройте для себя наши самые популярные курсы ",
  programming: "Программирование",
  graphic_design: "Графический дизайн",
  digital_marketing: "Цифровой маркетинг",
  entrepreneurship: "Предпринимательство",
  teen_kids: "Подростки и дети",
  fullstack: "Fullstack инженер Fastrack",
  fullstack_desc: "Разработка веб-приложения",
  fullstack_time: "288 часов",
  code_fund: "Основы кодирования",
  code_fund_desc: "Basic Coding",
  code_fund_time: "64 часа",
  data_science: "Data Science",
  code_science_desc: "Data Science",
  code_science_time: "62 часа",
  corp_training: "Корпоративные учебные пакеты",
  corp_training_desc: "Повысьте эффективность вашей организации",
  on_demand: "По запросу",
  graphic_design: "Графический дизайн",
  graphic_design_desc: "Графический дизайн",
  graphic_design_time: "48 часов",
  ui_ux: "Мастер-класс по дизайну UX-UI",
  ui_ux_desc: "Дизайн веб- и мобильных интерфейсов",
  ui_ux_time: "108 часов",
  digital_marketing_time: "62 часа",
  robotik: "Роботизированное программирование для детей 8-12 лет",
  robotik_desc: "Роботизированное программирование для детей",
  robotik_loc: "Никосия и Фамагуста",
  robotik_time: "96 часов",
  pyhton: "Python для детей от 12 до 18 лет",
  pyhton_desc: "Python для подростков",
  pyhton_time: "96 часов",
  venture: "Венчурная разработка",
  venture_desc: "Предпринимательство, финансовое планирование и бизнес-канвас",
  venture_time: "96 часов",
  partner_title: "Наши бизнес партнеры",
  partner_desc: "ПОЖАЛУЙСТА, ОБРАЩАЙТЕСЬ ДЛЯ ПАРТНЕРСКИХ ПРОГРАММ РАЗВИТИЯ",
  testimonial: "Отзыв ",
  testimonial_desc: "Что говорят о нас наши клиенты?",
  testimonial_country: "Никосия, Северный Кипр",
  testimonial_erhan:
    "Прежде всего, я был очень доволен курсом по разработке программного обеспечения «Кодексы Кипра». Помимо содержания и выражения, самой большой особенностью, которая отличает Кодексы Кипра от других тренингов, является возможность найти ответы на наши вопросы в тех точках, где студенты застряли на платформе, где вы можете найти преподавателей и других студентов.Также еще одним вкладом курса было изучение правильных методов исследования в области разработки программного обеспечения.Таким образом, я все еще могу улучшить свои знания в области программного обеспечения. Спасибо семье Cyprus Codes.",
  testimonial_erto:
    "Очень доволен образованием, которое я получил в рамках этого курса, который предложила команда CyprusCodes. Мы познакомились с другой точкой зрения и стали младшим разработчиком с нуля всего за 6 месяцев с помощью наших инструкторов. Теперь, Я могу продолжить карьеру в области разработки программного обеспечения. <br/>Предложенные курсы были действительно интересными, что облегчило понимание заданных тем. Благодаря вниманию и усилиям, проявленным инструкторами, люди из всех аспектов жизни могут найти ответ на вопрос «Что такое кодинг?",
  testimonial_rahmi:
    "Когда я начала курс, у меня были некоторые сомнения, хотя преподавательский состав имел опыт работы за границей. Вскоре после начала курса я понял, что эти сомнения были необоснованными, при поддержке и помощи преподавательского состава, а также помощь моих товарищей по команде в коммуникационной платформе (Slack)..<br/> Я хотел бы поблагодарить преподавателей CyprusCodes и моих товарищей по команде, которые помогли мне и поддержали меня, чтобы я стал лучше с помощью этого курса, и я с удовольствием рекомендую этот курс людям всех возрастов, которые хотят повысить свои цифровые компетенции",
  faq: "Часто задаваемые вопросы",
  faq_title: "Часто задаваемые вопросы и ответы",
  faq_category_1: "Общие",
  faq_category_2: "Курс/Платформа",
  faq_category_3: "Форма заявки на помощь",
  faq_category_1_title_1: "Что такое CyprusCodes?",
  faq_category_1_desc_1:
    "Единственный неполный курс программирования веб-приложений и мобильных приложений на Северном Кипре. Наша цель — собрать таланты на Северном Кипре и разработать веб-приложения и мобильные приложения мирового класса.",
  faq_category_1_title_2:
    "Кто может подать заявку на этот курс? Есть ли ограничения по возрасту?",
  faq_category_1_desc_2:
    "<b>Любой  </b>в возрасте от 16 до 60 лет может подать заявку на наш курс.",
  faq_category_1_title_3: "Каковы требования для участия?",
  faq_category_1_desc_3:
    "Принять участие в нашем курсе может каждый, кто хочет сделать карьеру в индустрии программного обеспечения. Двери школы программирования CyprusCodes всегда открыты для всех, кто впервые делает шаг в мир программного обеспечения, выпускников смежных факультетов университетов или тех, кто которые активно работают в отрасли и хотят улучшить свои знания. Владение английским языком на среднем уровне является преимуществом.",
  faq_category_1_title_4: "Как устроены часы курса?",
  faq_category_1_desc_4:
    "Наши учебные часы были подготовлены с учетом работающих людей. В связи с этим занятия будут проходить с 18.30 до 21.30 с понедельника по среду, а в субботу с 10.00 до 16.00, студентам будет оказана необходимая поддержка",
  faq_category_1_title_5: "Когда я могу подать заявку?",
  faq_category_1_desc_5:
    "Наши заявки запущены! Чтобы получать последние новости, вы можете следить за страницей CyprusCodes в Instagram и Facebook.",
  faq_category_1_title_6:
    "Нужно ли мне хорошо разбираться в математике, чтобы изучать программирование?",
  faq_category_1_desc_6:
    "<b>Нет! </b>Логическое мышление важнее при создании веб-сайтов и приложений, а математики, которую вы изучали в школе, хватит на весь наш курс.",
  faq_category_1_title_7: "Получу ли я сертификат по окончании курса?",
  faq_category_1_desc_7:
    "Да! Сертификат об участии Академии CyprusCodes и Сертификат достижения Академии CyprusCodes будут выданы успешным студентам в конце курса.",
  faq_category_2_title_1: "Подходит ли ваш курс для начального уровня?",
  faq_category_2_desc_1:
    "Да! Наш курс подходит для начального уровня и вам не нужен опыт программирования.",
  faq_category_2_title_2: "Какое оборудование мне нужно для участия в курсе?",
  faq_category_2_desc_2:
    "Студентам, которые будут посещать курс, нужно будет просто взять с собой ноутбук. Чтобы правильно понять ход курса и язык программирования, студенты должны иметь средний уровень владения английским языком.",
  faq_category_2_title_3: "Какова стоимость курсовых документов?",
  faq_category_2_desc_3:
    "Нет. Даже после завершения курса у вас будет доступ к материалам курса в режиме онлайн.",
  faq_category_2_title_4: "Сколько учеников в каждом классе?",
  faq_category_2_desc_4: "От 6 до 12 человек.",
  faq_category_2_title_5:
    "Будет ли у меня портфолио, которое я смогу использовать в конце курса?",
  faq_category_2_desc_5:
    "Да. Работодатели смогут увидеть как минимум 10 проектов в своей учетной записи GitHub до окончания курса. Это стандартный подход для портфолио инженеров-программистов.",
  faq_category_3_title_1: "Что такое форум помощи?",
  faq_category_3_desc_1:
    "Форум помощи» — это собрание поддержки, которое проводится в течение всего дня каждую субботу. Вы можете спросить обо всем, что придет вам в голову, и получить помощь по тем частям, с которыми у вас возникли проблемы при выполнении данных проектов во время курса.",
  faq_category_3_title_2: "Do you provide job opportunities to your graduates?",
  faq_category_3_desc_2:
    "Да. Мы поддерживаем наших успешных студентов на первом этапе их карьеры.",
  faq_category_3_title_3:
    "После окончания учебы у меня по-прежнему будет доступ к форумам помощи?",
  faq_category_3_desc_3: "Да",
  faq_category_3_title_4: "Обязательно ли посещать Форум помощи?",
  faq_category_3_desc_4:
    "Нет. Форум помощи проводится только для того, чтобы предоставить вам дополнительную поддержку. Мы рекомендуем вам присоединяться к форумам помощи, либо задавать вопросы, либо отвечать на вопросы других участников, но, конечно же, это не является обязательным.",
  contact_title: "КОНТАКТНАЯ ФОРМА",
  contact_desc: "Хотите получить больше информации? <br/>Мы свяжемся с вами!",
  contact_btn: "Отправить",
  address_title: "Наш адрес",
  address_desc: "29 Şehit Idris Doğan Avenue, Gelibolu, Nicosia, North Cyprus",
  other: "Другое",
  email_must: "Электронная почта должна быть заполнена",
  name_must: "Имя должно быть заполнено",
  course_must: "Курс должен быть выбран",

  // basarimlar

  students: "Некоторые наши выпускники",
  testimonial_country_magusa: "Фамагуста, Северный Кипр",
  select_course: "Выберите курс",
};

$.i18n.fr = {
  menu_1: "Éducation",
  menu_2: "Cours",
  menu_3: "carrière",
  menu_4: "FAQ",
  menu_5: "Contact",
  menu_6: "Se Connecter",
  intro: "BIENVENUE À CYPRUSCODES",
  title: "Façonnez Votre Avenir!",
  home_page: "Accueil",
  description:
    "Vous souhaitez vous perfectionner dans le domaine du logiciel et vous créer de nouveaux domaines d'activité?",
  description_2:
    "<b>Suivez le monde en développement </b> avec la seule<br/> et l'unique école de programmation à <b>temps partiel</b><br/> de Chypre !",
  info_btn: "Demander des Informations",
  goal: "Votre rêve d'une nouvelle carrière n'est qu'à un pas si vous avez des objectifs tels que",
  goals:
    "<li>Commencer une nouvelle carrière</li> <li>Améliorer votre entreprise</li> <li>Devenir un entrepreneur numérique</li>",
  goal_desc:
    "tout ce que vous cherchez se trouve ici à <b>CyprusCodes</b>, la première et unique académie technologique du nord de Chypre.",
  goal_desc2:
    "En 24 semaines, vous acquerrez toutes les compétences d'un développeur de logiciel et serez capable de créer vos propres applications web et mobiles !",
  education: "Éducation",
  education_desc:
    "Développé en collaboration avec la principale école de programmation du Royaume-Uni, <strong>ManchesterCodes</strong>, notre programme<br/> couvre les technologies les plus populaires utilisées par les leaders de l'industrie comme la <strong>BBC</strong> et <strong>Booking.com.</strong><br/> Vous vous rapprochez un peu plus de vos rêves avec notre classe située à Nicosie, notre personnel expert,<br/> notre programme de classe mondiale et nos cours du soir à temps partiel conçus pour les travailleurs.",
  educ_portal: "Platforme d'Éducation",
  educ_portal_desc:
    "Vous pouvez accéder à notre platforme de formation en ligne 24h/24 et 7j/7. Vous pouvez trouver des vidéos enregistrées des cours, des exercices hebdomadaires et des ressources recommandées ici.",
  cc_chat_desc:
    "Nos étudiants et enseignants sont en contact 24h/24 et 7j/7 via l'application de chat appelée Slack.",
  staff: "Enseignants Expert",
  staff_desc:
    "Notre personnel enseignant est composé de développeurs de logiciels professionnels d'Angleterre et de Chypre.",
  night_mode: "Platforme d'Éducation – Mode Nuit ",
  membership_title:
    "Créer un abonnement sur la Platforme d'éducation de CyprusCodes<br/> maintenant",
  membership_desc:
    "*Vous pouvez accéder à notre module débutant gratuit dès maintenant!",
  membership_btn: "S'inscrire",
  main_courses_title: "Nos Cours Principaux",
  main_courses_desc: "Découvrez nos cours les plus populaires ",
  programming: "Programmation",
  graphic_design: "Design Graphique",
  digital_marketing: "Marketing Digital",
  entrepreneurship: "Entrepreneuriat",
  teen_kids: "Ados & Enfants",
  fullstack: "Ingénieur Fullstack Voie rapide",
  fullstack_desc: "Développer une application Web",
  fullstack_time: "288 hrs",
  code_fund: "Fondamentaux du codage",
  code_fund_desc: "Codage de base",
  code_fund_time: "64 hrs",
  data_science: "Science des Données",
  code_science_desc: "Science des Données",
  code_science_time: "62 hrs",
  corp_training: "Forfaits de formation en entreprise",
  corp_training_desc: "Améliorez l'efficacité de votre organisation",
  on_demand: "Sur Demande",
  graphic_design: "Design Graphique",
  graphic_design_desc: "Design Graphique",
  graphic_design_time: "48 hrs",
  ui_ux: "Masterclass de conception UX-UI",
  ui_ux_desc: "Conception d'interfaces Web et mobiles",
  ui_ux_time: "108 hrs",
  digital_marketing_time: "62 hrs",
  robotik: "Codage Robotique pour les 8-12 ans",
  robotik_desc: "Codage Robotique pour les Enfants",
  robotik_loc: "Nicosie et Famagouste",
  robotik_time: "96 hrs",
  pyhton: "Python pour les  12-18",
  pyhton_desc: "Python pour les Ados",
  pyhton_time: "96hrs",
  venture: "Développement d'Entreprise",
  venture_desc:
    "Entrepreneuriat, planification financière et canevas d'entreprise",
  venture_time: "96hrs",
  partner_title: "Nos Partenaires d'Affaires ",
  partner_desc:
    "VEUILLEZ CONTACTER POUR LES PROGRAMMES DE DÉVELOPPEMENT PARTENAIRE",
  testimonial: "Témoignage ",
  testimonial_desc: "Que disent nos clients de nous?",
  testimonial_country: "Nicosie, Chypre du Nord",
  testimonial_erhan:
    "Tout d'abord, j'ai été très satisfait du cours de génie logiciel de CyprusCodes. En plus du contenu et de l'expression, la plus grande caractéristique qui distingue CyprusCodes des autres formations est de pouvoir trouver des réponses à nos questions aux points où les étudiants sont bloqués, sur la plateforme où vous pouvez trouver les instructeurs et les autres étudiants. Une autre contribution du cours a également été l'apprentissage des bonnes techniques de recherche dans le domaine du génie logiciel. De cette façon, je suis encore en mesure d'améliorer mes connaissances en logiciels. Merci à la famille CyprusCodes.",
  testimonial_erto:
    "Je suis très satisfait de l'éducation que j'ai reçue dans le cadre de ce cours qui a été offert par l'équipe de CyprusCodes. J'ai acquis un point de vue différent et je suis devenu développeur junior à partir de rien en seulement 6 mois avec l'aide de nos instructeurs. Maintenant, je suis en mesure de poursuivre une carrière dans le domaine du génie logiciel. <br/>Les cours proposés étaient vraiment amusants, ce qui a facilité la compréhension des sujets abordés. Grâce à l'attention et aux efforts déployés par les instructeurs, les personnes de tous les aspects de la vie peuvent trouver une réponse à la question « Qu'est-ce que le codage?",
  testimonial_rahmi:
    "Quand j'ai commencé le cours, j'avais des doutes, même si le personnel enseignant avait une expérience à l'étranger. Peu de temps après le début du cours, je m'étais rendu compte que ces doutes n'étaient pas fondés, avec le soutien et l'aide de l'équipe pédagogique ainsi que l'aide de mes coéquipiers sur plateforme de communication (Slack).<br/> Je tiens à remercier les enseignants de CyprusCodes et mes coéquipiers qui m'ont tous deux aidé et soutenu pour m'améliorer avec ce cours, et je recommanderais volontiers le cours aux personnes de tous âges qui souhaitent accroître leurs compétences numériques.",
  faq: "FAQ",
  faq_title: "FAQ and Answers",
  faq_category_1: "Général",
  faq_category_2: "Cours/Plateforme",
  faq_category_3: "Formulaire de demande d'aide",
  faq_category_1_title_1: "Qu'est-ce que ChypreCodes ?",
  faq_category_1_desc_1:
    "Le seul et unique cours de programmation d'applications Web et mobiles à temps partiel dans le nord de Chypre. Notre objectif est de rassembler les talents de Chypre du Nord et de développer des applications Web et mobiles de classe mondiale.",
  faq_category_1_title_2:
    "Qui peut s'inscrire à ce cours? Y a-t-il une limite d'âge ?",
  faq_category_1_desc_2:
    "<b>N'importe qui </b>entre 16 et 60 ans peuvent s'inscrire à notre cours.",
  faq_category_1_title_3: "Quelles sont les conditions de participation ?",
  faq_category_1_desc_3:
    "Quiconque souhaite poursuivre une carrière dans l'industrie du logiciel peut participer à notre cours. La porte de l'école de programmation CyprusCodes est toujours ouverte à tous ceux qui feront un pas dans le monde du logiciel pour la première fois, aux diplômés des départements connexes des universités ou à ceux qui travaillent activement dans le secteur et souhaitent améliorer leurs connaissances. C'est un avantage d'avoir un niveau d'anglais intermédiaire.",
  faq_category_1_title_4: "Comment les heures de cours sont-elles organisées ?",
  faq_category_1_desc_4:
    "Nos heures de cours ont été préparées en tenant compte des personnes qui travaillent. À cet égard, les cours auront lieu entre 18h30 et 21h30 du lundi au mercredi et le samedi entre 10h00 et 16h00, le soutien nécessaire sera fourni aux étudiants.",
  faq_category_1_title_5: "Quand puis-je postuler ?",
  faq_category_1_desc_5:
    "Nos applications sont lancées ! Pour bénéficier des dernières actualités, vous pouvez suivre la page CyprusCodes sur Instagram et Facebook.",
  faq_category_1_title_6:
    "Dois-je être bon en mathématiques pour apprendre la programmation ?",
  faq_category_1_desc_6:
    "<b>Non! </b>Penser logiquement est plus important lors de la création de sites Web et d'applications, et les mathématiques que vous avez apprises à l'école suffiront tout au long de notre cours.",
  faq_category_1_title_7: "Vais-je obtenir un certificat à la fin du cours ?",
  faq_category_1_desc_7:
    "Oui! Le certificat de participation de la CyprusCodes Academy et le certificat de réussite de CyprusCodes Academy seront remis aux étudiants qui réussissent à la fin du cours.",
  faq_category_2_title_1: "Votre cours est-il adapté au niveau débutant ?",
  faq_category_2_desc_1:
    "Oui! Notre cours est adapté au niveau débutant et vous n'avez besoin d'aucune expérience en programmation.",
  faq_category_2_title_2:
    "De quel équipement ai-je besoin pour participer au cours ?",
  faq_category_2_desc_2:
    "Les étudiants qui assisteront au cours n'auront qu'à apporter un ordinateur portable avec eux. Afin de bien comprendre le déroulement du cours et le langage de programmation, les étudiants doivent avoir un niveau intermédiaire en anglais.",
  faq_category_2_title_3: "Quel est le coût des documents de cours ?",
  faq_category_2_desc_3:
    "Non. Même après la fin du cours, vous aurez accès aux supports de cours en ligne.",
  faq_category_2_title_4: "Combien y a-t-il d'élèves dans chaque classe ?",
  faq_category_2_desc_4: "Entre 6 et 12 personnes.",
  faq_category_2_title_5:
    "Est-ce que je vais avoir un portfolio que je peux utiliser à la fin du cours ?",
  faq_category_2_desc_5:
    "Oui. Les employeurs pourront voir au moins 10 projets sur leur propre compte GitHub avant la fin du cours. Il s'agit de l'approche standard pour les portefeuilles d'ingénieurs logiciels.",
  faq_category_3_title_1: "Qu'est-ce que le Forum d'Aide ?",
  faq_category_3_desc_1:
    "« Assistance Forum » est une réunion de soutien qui se tient tous les samedis toute la journée. Vous pouvez demander tout ce qui vous passe par la tête et obtenir de l'aide pour les parties qui vous posent problème lors de la réalisation des projets donnés pendant le cours.",
  faq_category_3_title_2:
    "Offrez-vous des opportunités d'emploi à vos diplômés ?",
  faq_category_3_desc_2:
    "Oui. Nous soutenons nos étudiants qui réussissent dans la première étape de leur carrière.",
  faq_category_3_title_3:
    "Après mes études, aurai-je toujours accès aux forums d'assistance ?",
  faq_category_3_desc_3: "Oui",
  faq_category_3_title_4:
    "Est-il obligatoire de participer au Forum Assistance ?",
  faq_category_3_desc_4:
    "Non. Le forum d'assistance est uniquement organisé pour vous apporter un soutien supplémentaire. Nous vous encourageons à rejoindre les forums d'aide, soit pour poser des questions, soit pour répondre aux questions des autres participants, mais il n'y a sûrement aucune obligation.",
  contact_title: "FORMULAIRE DE CONTACT",
  contact_desc:
    "Vous souhaitez obtenir plus d'informations ? <br/> Nous vous contacterons !",
  contact_btn: "Envoyer",
  address_title: "Notre adresse",
  address_desc: "29 Şehit Idris Doğan Avenue, Gelibolu, Nicosia, North Cyprus",
  other: "Autre",
  email_must: "L'e-mail doit être rempli",
  name_must: "Le nom doit être rempli",
  course_must: "Le cours doit être sélectionné",

  // basarimlar

  students: "Certains de nos diplômés",
  testimonial_country_magusa: "Famagouste , Chypre du Nord",
  select_course: "Sélectionnez votre cours",
};

var i18n = $.i18n();

var changeLabels = function () {
  $("[data-translate]").each(function () {
    var forLabel = $(this).attr("data-translate");
    this.innerHTML = i18n.getItem(forLabel);
  });
};

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setContactFormPlaceholders(lang) {
  if (lang === "en") {
    $('input[name="name"]').attr("placeholder", "Name");
    $('input[name="telefon"]').attr("placeholder", "Phone");
    $('input[name="email"]').attr("placeholder", "Email");
    $('textarea[name="mesaj"]').attr("placeholder", "Message");
  }
  if (lang === "ru"){
    $('input[name="name"]').attr("placeholder", "Имя");
    $('input[name="telefon"]').attr("placeholder", "Телефон");
    $('input[name="email"]').attr("placeholder", "Эл. адрес");
    $('textarea[name="mesaj"]').attr("placeholder", "Сообщение");
  }
  if (lang === "tr") {
    $('input[name="name"]').attr("placeholder", "isim");
    $('input[name="telefon"]').attr("placeholder", "telefon");
    $('input[name="email"]').attr("placeholder", "email");
    $('textarea[name="mesaj"]').attr("placeholder", "mesaj");
  }
  if (lang === "fr") {
    $('input[name="name"]').attr("placeholder", "Nom");
    $('input[name="telefon"]').attr("placeholder", "Téléphone");
    $('input[name="email"]').attr("placeholder", "Email");
    $('textarea[name="mesaj"]').attr("placeholder", "Message");
  }
}

$(document).ready(function () {
  const lang = getParameterByName("lang");
  if (lang) {
    window.localStorage.setItem("language", lang);
    i18n.setLang(lang);
  }
  changeLabels();
  setContactFormPlaceholders(window.localStorage.getItem("language") || "tr");

  $("#dropdownMenuButton").text(
    (window.localStorage.getItem("language") || "tr").toUpperCase()
  );
});

$("#lang")
  .find("a")
  .click(function (e) {
    var lang = this.href.slice(-2);
    i18n.setLang(lang);
    setContactFormPlaceholders(lang);
    $(".dropdownMenuButton").text(
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
