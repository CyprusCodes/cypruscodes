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
  education_desc:
    "Developed in collaboration with the UK's leading programming school, <strong>ManchesterCodes</strong>, our curriculum </br>covers the hottest technologies used by industry leaders like the <strong>BBC</strong> and <strong>Booking.com</strong>.",
  membership_title:
    "Create a membership on CyprusCodes<br/> Education Portal Now",
  membership_desc: "*You can access our free beginner module right now!",
  membership_btn: "Sign Up",
  fullstack: "FullStack Engineering Fastrack",
  duration_time_hours: "Lesson Hours",
  duration_time_week: "Weeks",
  project_count: "projects",
  curriculum: "Curriculum",
  curriculum_desc:
    "Thanks to our Software Engineering program, you will come from zero to the ready-to-work programmer level in just 24 weeks.<br />Our Software Engineering program has a comprehensive program spread over 6 months. It covers how software engineers work and the tools they use, the basics of the JavaScript programming language, how data is stored and processed, and how to create visual and interactive web-based interfaces that consume and present data.",
  schedule1_title1: "Beginning (4 weeks)",
  schedule1_desc1:
    "In the first 4 weeks of the course, you will be familiar with all the tools and programs that a software developer uses in his daily life.",
  schedule1_desc2:
    "You will learn to use <strong>Git and GitHub</strong> services to store or share the code you have written.",
  schedule1_desc3:
    "You will acquire <strong>terminal</strong> skills to use your computer more effectively.",
  schedule1_desc4:
    "You will learn the basics of <strong>HTML, CSS and JavaScript</strong> to create your first web page.",

  schedule2_title: "Basic programming (6 weeks)",
  schedule2_desc1:
    "You will be introduced to basic programming concepts such as variables, conditions, arrays and loops.",
  schedule2_desc2:
    "You will learn how to test if the code you wrote works correctly. Additionally, you will learn about a programming method called <strong>Test Driven Development (TDD)</strong> that puts test writing first.",
  schedule2_desc3:
    "You will learn the basics and modern uses of <strong>JavaScript</strong>, one of the most popular programming languages taking the world by storm. With JavaScript, you can develop your own web-based or mobile applications.",
  schedule2_desc4:
    "You will learn the industry standards and tricks that professional software developers pay attention to when writing programs.",
  schedule3_title: "Databases and API Development (6 weeks)",
  schedule3_desc1:
    "You will be able to design, store and query your own databases using MySQL, one of the world's most popular database software.",
  schedule3_desc2:
    "You will learn how the internet works, the basics of the HTTP protocol, and how internet-connected devices communicate with each other.",
  schedule3_desc3:
    "You will be able to develop Internet-based server services (API) using the Nodejs and Express libraries.",
  schedule4_title: "User Interface Development (6 weeks)",
  schedule4_desc1:
    "You will be able to develop your own web-based and mobile applications by using the <strong>React</strong> interface development library developed by Facebook, which is used by tens of thousands of companies worldwide.",
  schedule4_desc2:
    "You will be able to automatically test the applications you have developed.",

  testimonial: "Testimonial",
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
  education_desc:
    "İngiltere’nin önde gelen programlama okulu <strong> ManchesterCodes</strong> işbirliğiyle geliştirilen müfredatımız, <br /><strong>BBC</strong> ve <strong> Booking.com</strong> gibi endüstri liderlerinin kullandığı revaçta olan teknolojileri kapsamaktadır.",
  membership_title: "CyprusCodes Eğitim Portalına<br/>Hemen Üye Ol",
  membership_desc: "*Ücretsiz başlangıç modülümüze anında erişebilirsin!",
  membership_btn: "Kayıt Ol",
  fullstack: "Hızlandırılmış Yazılım Mühendisliği",
  fullstack_desc: "Web Bazlı Uygulamalar Geliştir",
  duration_time_hours: "Ders Saati",
  duration_time_week: "Hafta",
  project_count: "Aşkın proje",
  curriculum: "Öğretim Programı",
  curriculum_desc:
    "Yazılım Mühendisliği programımız sayesinde sadece 24 hafta içerisinde sıfırdan işe hazır yazılımcı seviyesine geleceksiniz.<br />Yazılım Mühendisliği programımız, 6 aya yayılmış geniş kapsamlı bir programa sahiptir. Yazılım mühendislerinin nasıl çalıştığını ve kullandıkları araçları, JavaScript programlama dilinin temellerini, verilerin nasıl depolandığını, işlendiğini ve verileri tüketen ve sunan görsel ve etkileşimli web-tabanlı arayüzlerin nasıl oluşturulacağını içerir.",
  schedule1_title: "Başlangıç (4 hafta)",
  schedule1_desc1:
    "Kursun ilk 4 haftasında bir yazılımcının günlük hayatında kullandığı tüm araç ve programlarla haşır neşir olacaksınız.",
  schedule1_desc2:
    "Yazdığınız kodu depolamak veya paylaşmak için <strong>Git ve GitHub</strong> servislerini kullanmayı öğreneceksiniz.",
  schedule1_desc3:
    "Bilgisayarınızı daha etkili bir şekilde kullanabilmek için <strong>terminal</strong> becerileri edineceksiniz.",
  schedule1_desc4:
    "İlk web sayfanızı oluşturmak için <strong>HTML, CSS ve JavaScript</strong>'in temellerini öğreneceksiniz.",

  schedule2_title: "Temel Programlama (6 hafta)",
  schedule2_desc1:
    "Değişkenler, koşullar, diziler ve döngüler gibi temel programlama konseptleriyle tanışacaksınız.",
  schedule2_desc2:
    "Yazdığınız kodun doğru çalışıp çalışmadığını test etmeyi öğreneceksiniz. Buna ilaveten, <strong>Test Driven Development (TDD)</strong> adı verilen, test yazmayı önplana taşıyan programlama metodunu öğreneceksiniz.",
  schedule2_desc3:
    "Dünyayı kasıp kavuran en popüler programlama dillerinden <strong>JavaScript</strong> dilinin temellerini ve modern kullanım alanlarını öğreneceksiniz. JavaScript sayesinde kendi web-tabanlı veya mobil uygulamalarınızı geliştirebilirsiniz.",
  schedule2_desc4:
    "Profesyonal yazılımcıların program yazarken dikkat ettiği endüstri standartlarını ve işin püf noktalarını öğreneceksiniz.",
  schedule3_title: "Veritabanları ve API Geliştirme (6 hafta)",
  schedule3_desc1:
    "Dünyanın en popüler veritabanı yazılımlarından MySQL'i kullanarak kendi veritabanlarınızı tasarlayıp, veri depolayıp ve sorgulayabileceksiniz.",
  schedule3_desc2:
    "İnternetin nasıl çalıştığını, HTTP protokolünün temellerini ve internete bağlı cihazların birbirleriyle nasıl iletişim kurduğunu öğreneceksiniz.",
  schedule3_desc3:
    "Nodejs ve Express kütüphanelerini kullanarak Internet tabanlı sunucu servisleri (API) geliştirebileceksiniz.",
  schedule4_title: "Kullanıcı Arayüzü Geliştirme (6 hafta)",
  schedule4_desc1: "Facebook tarafından geliştirilmiş dünya çapında onbinlerce firma tarafından kullanılan<strong>React</strong> arayüz geliştirme kütüphanesini kullanarak kendi web tabanlı ve mobil uygulamalarınızı geliştirebileceksiniz.",
  schedule4_desc2: "Geliştirdiğiniz uygulamaları otomatik bir şekilde test edebileceksiniz.",

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
  menu_1: "Education",
  menu_2: "Course",
  menu_3: "Career Path",
  menu_4: "FAQ",
  menu_5: "Contact",
  menu_6: "Sign In",
  intro: "WELCOME TO CYPRUSCODES",
  title: "Shape Your Future!",
  home_page: "Home",
  education_desc:
    "Developed in collaboration with the UK's leading programming school, <strong>ManchesterCodes</strong>, our curriculum </br>covers the hottest technologies used by industry leaders like the <strong>BBC</strong> and <strong>Booking.com</strong>.",
  membership_title:
    "Create a membership on CyprusCodes<br/> Education Portal Now",
  membership_desc: "*You can access our free beginner module right now!",
  membership_btn: "Sign Up",
  fullstack: "FullStack Engineering Fastrack",
  duration_time_hours: "Lesson Hours",
  duration_time_week: "Weeks",
  project_count: "projects",
  curriculum: "Curriculum",
  curriculum_desc:
    "Thanks to our Software Engineering program, you will come from zero to the ready-to-work programmer level in just 24 weeks.<br />Our Software Engineering program has a comprehensive program spread over 6 months. It covers how software engineers work and the tools they use, the basics of the JavaScript programming language, how data is stored and processed, and how to create visual and interactive web-based interfaces that consume and present data.",
  schedule1_title1: "Beginning (4 weeks)",
  schedule1_desc1:
    "In the first 4 weeks of the course, you will be familiar with all the tools and programs that a software developer uses in his daily life.",
  schedule1_desc2:
    "You will learn to use <strong>Git and GitHub</strong> services to store or share the code you have written.",
  schedule1_desc3:
    "You will acquire <strong>terminal</strong> skills to use your computer more effectively.",
  schedule1_desc4:
    "You will learn the basics of <strong>HTML, CSS and JavaScript</strong> to create your first web page.",
  testimonial: "Testimonial",
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
  education_desc:
    "Développé en collaboration avec la principale école de programmation du Royaume-Uni, <strong>ManchesterCodes</strong>, notre programme<br/> couvre les technologies les plus populaires utilisées par les leaders de l'industrie comme la <strong>BBC</strong> et <strong>Booking.com.</strong>.",
  membership_title:
    "Créer un abonnement sur la Platforme d'éducation de CyprusCodes<br/> maintenant",
  membership_desc:
    "*Vous pouvez accéder à notre module débutant gratuit dès maintenant!",
  membership_btn: "S'inscrire",
  fullstack: "Ingénieur Fullstack Voie rapide",
  duration_time_hours: "Heures de cours",
  duration_time_week: "Semaines",
  project_count: "projets",
  curriculum: "Curriculum",
  curriculum_desc:
    "Grâce à notre programme de génie logiciel, vous passerez de zéro au niveau de programmeur prêt à travailler en seulement 24 semaines.<br />Notre programme de génie logiciel comprend un programme complet étalé sur 6 mois. Il couvre le fonctionnement des ingénieurs logiciels et les outils qu'ils utilisent, les bases du langage de programmation JavaScript, le stockage et le traitement des données et la création d'interfaces Web visuelles et interactives qui consomment et présentent des données.",
  schedule1_title1: "Début (4 semaines)",
  schedule1_desc1:
    "Au cours des 4 premières semaines du cours, vous vous familiariserez avec tous les outils et programmes qu'un développeur de logiciels utilise dans sa vie quotidienne.",
  schedule1_desc2:
    "Vous apprendrez à utiliser les services <strong>Git et GitHub</strong> pour stocker ou partager le code que vous avez écrit.",
  schedule1_desc3:
    "Vous allez acquérir des compétences <strong>terminales</strong> pour utiliser votre ordinateur plus efficacement.",
  schedule1_desc4:
    "Vous apprendrez les bases de <strong>HTML, CSS et JavaScript</strong> pour créer votre première page Web.",

  schedule2_title: "Programmation de base (6 semaines)",
  schedule2_desc1:
    "Vous serez initié aux concepts de programmation de base tels que les variables, les conditions, les tableaux et les boucles.",
  schedule2_desc2:
    "Vous apprendrez à tester si le code que vous avez écrit fonctionne correctement. De plus, vous découvrirez une méthode de programmation appelée <strong>Test Driven Development (TDD)</strong> qui met l'écriture de test en premier.",
  schedule2_desc3:
    "Vous apprendrez les bases et les utilisations modernes de <strong>JavaScript</strong>, l'un des langages de programmation les plus populaires qui conquièrent le monde. Avec JavaScript, vous pouvez développer vos propres applications Web ou mobiles.",
  schedule2_desc4:
    "Vous apprendrez les normes de l'industrie et les astuces auxquelles les développeurs de logiciels professionnels prêtent attention lors de l'écriture de programmes.",
  schedule3_title: "Bases de données et développement d'API (6 semaines)",
  schedule3_desc1:
    "Vous pourrez concevoir, stocker et interroger vos propres bases de données à l'aide de MySQL, l'un des logiciels de base de données les plus populaires au monde.",
  schedule3_desc2:
    "Vous apprendrez comment Internet fonctionne, les bases du protocole HTTP et comment les appareils connectés à Internet communiquent entre eux.",
  schedule3_desc3:
    "Vous serez en mesure de développer des services de serveur basés sur Internet (API) à l'aide des bibliothèques Nodejs et Express.",
  schedule4_title: "Développement d'interface utilisateur (6 semaines)",
  schedule4_desc1:
    "Vous pourrez développer vos propres applications Web et mobiles en utilisant la bibliothèque de développement d'interface <strong>React</strong> développée par Facebook, qui est utilisée par des dizaines de milliers d'entreprises dans le monde.",
  schedule4_desc2:
    "Vous pourrez tester automatiquement les applications que vous avez développées.",

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
  if (lang === "ru") {
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
