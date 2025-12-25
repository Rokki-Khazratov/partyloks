
var pageWidth = document.documentElement.clientWidth;
$('.card').click((event)=>{
    if($(event.currentTarget).hasClass("expanded")){
        $(event.currentTarget).removeClass('expanded');
    }else{
        $(event.currentTarget).addClass("expanded")
    }
})
$('.lang.desc').click((event)=>{
  if($(event.currentTarget).hasClass("active")){
      $(event.currentTarget).removeClass('active');
  }else{
      $(event.currentTarget).addClass("active")
  }
})
$('.lang.first-section-lang').click((event)=>{
  if($(event.currentTarget).hasClass("active")){
      $(event.currentTarget).removeClass('active');
  }else{
      $(event.currentTarget).addClass("active")
  }
})
$('.lang.mobile').click((event)=>{
  if($(event.currentTarget).hasClass("active")){
      $(event.currentTarget).removeClass('active');
  }else{
      $(event.currentTarget).addClass("active")
  }
})

if(pageWidth < 1000){

  $('.open-menu-mobile').click((event)=>{

      $(event.currentTarget).addClass("active");
      $('.nav-menu').css("top","-5rem");
      $('.nav-menu').css("opacity",1);
      $('.nav-menu').css("pointer-events","initial");

  })
  $('.close-mobile').click((event)=>{
      $(event.currentTarget).removeClass('active');
      $('.nav-menu').css("top","-10rem");
      $('.nav-menu').css("opacity",0);
      $('.nav-menu').css("pointer-events","none");
  })
  $('.menu-content a').click((event)=>{
      $(event.currentTarget).removeClass('active');
      $('.nav-menu').css("top","-10rem");
      $('.nav-menu').css("opacity",0);
      $('.nav-menu').css("pointer-events","none");
  })
  $('.menu-tiem-nav').click((event)=>{
    if($('.dropdown-menu-service').hasClass("active")){
      $('.menu-content').removeClass("drop");
        $('.dropdown-menu-service').removeClass('active');
    }else{
      $('.menu-content').addClass("drop");
        $('.dropdown-menu-service').addClass("active")
    }
  })

}
$('.dropdown-menu-service a').click((event)=>{
    $('.dropdown-menu-service').removeClass('active');
})
if(pageWidth > 1000){

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    let scrollTop = parseInt($('.second-section').css('height').replace('px',''));
    console.log(scrollTop)
    let navMenu = $('.nav-menu')
    if(scrollPosition * 0.9 < scrollTop){
      if(navMenu.hasClass("show")){
        navMenu.removeClass("show")
        navMenu.css("opacity",'0');
        navMenu.css("transform",'translateY(0)');
      }
    }else{
      console.log("off")
      if(!navMenu.hasClass("show")){
        navMenu.addClass("show")
        navMenu.css("opacity",'1');
        navMenu.css("transform",'translateY(10rem)');
      }
    }
    console.log(scrollPosition);
  });
}
gsap.to('.text-second-section', {
    scrollTrigger: '.thanks-to', // start the animation when ".box" enters the viewport (once)
    opacity: 1,
    delay:0,
    y:"3rem",
});
gsap.to('.thanks-to', {
    scrollTrigger: '.thanks-to', // start the animation when ".box" enters the viewport (once)
    opacity: 1,
    delay:0,
    y:"3rem",
});
gsap.to('.circle-back1', {
    scrollTrigger: '.thanks-to', // start the animation when ".box" enters the viewport (once)
    opacity: 1,
    delay:0.25,
    y:"10rem",
});

let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.first-section',
      start: "center center",
      // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
      end: () => "+=1300", 
      scrub: true,
      pin: true,
      anticipatePin: 1,
      scale:true,
    },
    defaults: {ease: "none"}
  });
  let section = $(".first-section");
// animate the container one way...
tl.fromTo($(".content-main"), { scale: 1,borderRadius:"0rem"}, {scale: 0.5,borderRadius:"8rem"})
  // ...and the image the opposite way (at the same time)
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.second-section',
      start: "end end",
      // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
      end: () => "+=0", 
      pin: true,
    },
    defaults: {ease: "none"}
  });
// animate the container one way...
let hei = $('.section.first-section').css("height");
tl.to($(".content-main2"), {percentY: -100})


var numAvatars = 1;
var elInflList = $('.infl-list img');


var flag = false
setInterval(()=>{
  if(pageWidth < 1000){
    var begSwipe = -25.2581;
    var minusX = -50.1
  }else{
    
    var begSwipe = -21.2581;
    var minusX = -30.25
  }
  $('.infl-list .active').removeClass('active');
  if(numAvatars === 7){
    numAvatars = 1
    flag = true

    
    $($('.infl-list')[0]).css("transition", "none");
    $(elInflList[numAvatars + 1]).css('transition','none');
    setTimeout(()=>{
      $(elInflList[numAvatars]).addClass('active')
      $($('.infl-list')[0]).css("margin-left",begSwipe + (minusX * (numAvatars - 1)) + 'rem');
      setTimeout(()=>{
        $(elInflList[numAvatars]).css('transition','transform 0.25s ease');
        $($('.infl-list')[0]).css("transition","margin-left 0.25s ease");
      },3)
    },3)
  }

  let translateX = begSwipe + (minusX * numAvatars);
  numAvatars += 1
  $(elInflList[numAvatars]).addClass('active');
  $($('.infl-list')[0]).css("margin-left",translateX + 'rem');

  if(flag === true){
    flag = false
    setTimeout(()=>{
      $('.infl-list .active').removeClass('active');
      let translateX = begSwipe + (minusX * numAvatars);
      numAvatars += 1
      $(elInflList[numAvatars]).addClass('active');
      $($('.infl-list')[0]).css("margin-left",translateX + 'rem');
      
    },10)
  }
},3000)



var numAvatars2 = 1;
var elInflList2 = $('.quant-chan-icons img');


setInterval(()=>{
  if(pageWidth < 1000){
    var begSwipe2 = 0.9;
    var minusX2 = -24.7
  }else{
    var begSwipe2 = -0.9;
    var minusX2 = -17.3
  }

  if(numAvatars2 === 9){
    numAvatars2 = 1
    flag = true

    
    $($('.quant-chan-icons')[0]).css("transition", "none");
    $(elInflList2[numAvatars2 + 1]).css('transition','none');
    setTimeout(()=>{
      $($('.quant-chan-icons')[0]).css("margin-left",begSwipe2 + (numAvatars2 - 1) - 1.2 + 'rem');
      setTimeout(()=>{
        $(elInflList2[numAvatars2]).css('transition','transform 0.25s ease');
        $($('.quant-chan-icons')[0]).css("transition","margin-left 0.25s ease");
      },3)
    },3)
  }

  let translateX2 = begSwipe2 + (minusX2 * numAvatars2);
  numAvatars2 += 1
  setTimeout(()=>{
    $(elInflList2[numAvatars2]).addClass('active');
    $($('.quant-chan-icons')[0]).css("margin-left",translateX2 + 'rem');
  },150)
},3000)

const translations = {
  en: {
    about: "About us",
    services: "Services",
    ads: "Paid Advertising",
    otc: "OTC Deal",
    "kol-round": "KOL Round",
    ambassadors: "Ambassadors",
    cases: "Statistics",
    partners: "Team",
    contacts: "Contacts",
    partners_team: "Our partners",
    "main-title": "We Are Chosen by the Best",
    "drag-me": "Drag me!",
    "scroll-text": "Scroll down to explore",
    "party-kols": "PARTY KOLs 2024",
    "second-screen-title":
      "We are a closed community of opinion leaders (KOLs) focused on the cryptocurrency and Web3 markets",
    thanks_to: "Thanks to",
    experienced_team:
      "An experienced team, a positive attitude, and a close connection with all KOLs in the region enable us to achieve the best results, high speed, and quality service. The best influencers in the CIS work with us and are ready to offer the best placement conditions for projects.",
    over_one_year:
      "We have managed to work with a vast number of diverse projects",
    paid_ads: "Paid Advertising",
    kol_round: "KOL’s Round",
    ambassadors: "Ambassadors",
    more_1: "For more than 1 year",
    various_options:
      "In this area, we offer several options for cooperation, each of which can be implemented according to your budget.",
    individual_approach:
      "An individual approach for each project, selecting opinion leaders who align with your direction. We effectively allocate the budget among opinion leaders for maximum results.",
    market_advice:
      "We take into account not only the direction of your project but can also advise on how to promote more effectively in the CIS market.",
    cases: "Our Cases",
    secondary_market_deals:
      "Secondary market deals undergo strict moderation before posting on PARTY KOLs.",
    fund_collection:
      "Funds are collected by the administrator and sent to the project's wallet in one transaction.",
    deal_security:
      "We prioritize the safety of both parties, so we act as an intermediary and oversee all deal processes.",
    kol_investment_interest:
      "Opinion leaders (KOLs) are interested in early-stage investments in promising projects on favorable terms for both parties.",
    ensure_success:
      "We can conduct a KOL round and ensure your project's success and popularity in the CIS market in exchange for favorable investment terms.",
    promotion_investment:
      "By choosing us, you get not only investments but also promotional services, including advertising.",
    reach: "REACH",
    support: "Support",
    various_conditions:
      "Many opinion leaders (KOLs) are ready to collaborate with projects on various terms.",
    ambass_text: "These may include project tokens, advantages over other users, or anything else that may be appealing to KOLs.",
    influencers_count: "550+ Influencers",
    weekly_reach: "2.5M+ Reach in 7 days",
    total_audience: "25M+",
    total_audience_more: "Total Audience",
    one_year: "1 Year",
    channels: "Channels",
    alexei: "Alexey",
    maxim: "Maksim",
    alexei_description:
      "Experienced influencer, owner of the CRYPTO PARTY and TEMKI x SHEMKI channels.",
    maxim_description:
      "Co-founder, Art Director, Graphic, 3D, and Motion designer with over 2 years of experience working with cryptocurrency and other thematic companies.",
    alex: "Co-founder, Art Director",
    valeria: "Valeria",
    valeria_title: "Chief Advertising Manager",
    cis_reg:"Helping to promote your product in the CIS region",
    valeria_description:
      "Experienced advertising manager with strong communication skills and high professionalism.",
    text_region: "Helping to promote your product in the CIS region",
    social_media: "Social Media:",
    other_members: "Other Members:",
    click: "Click",
    rakhim_desc: "An experienced programmer with more than 4 years of experience in creating websites",
    rakhim: "Rakhim",
    nums: "Our numbers",
    join_team: "Join the Team",
    leave_request: "LEAVE A REQUEST",
    name: "Name",
    project_link: "Project Link",
    email_or_social: "Email or Social Media",
    comment: "Comment",
    submit_request: "Submit Request",
    copyright:
      "Copyright © PARTY KOLs 2024. All rights reserved",
      all_process:"",
  },
  ru: {
    about: "О нас",
    services: "Услуги",
    ads: "Платная реклама",
    partners: "Команда",
    partners_team: "Партнеры",
    otc: "OTC Deal",
    "kol-round": "KOL's раунд",
    ambassadors: "Амбассадорки",
    cases: "Статистика",
    contacts: "Контакты",
    "main-title": "Нас выбирают лучшие",
    "drag-me": "Перетащи меня!",
    "scroll-text": "Листаем для изучения",
    "party-kols": "PARTY KOLs 2024",
    "second-screen-title":
      "Мы — закрытое сообщество, состоящее из множества лидеров мнения (KOLs) ориентированных на криптовалютный рынок и рынок Web3",
    thanks_to: "Благодаря",
    experienced_team:
      "Опытной команде, хорошему отношению и тесной связи со всеми KOLs в регионе мы способны достичь лучшего результата, высокой скорости и сервиса. С нами работают лучшие инфлюенсеры в СНГ и готовы давать для проектов лучшие условия размещения.",
    over_one_year:
      "Мы сумели поработать с огромным количеством <b>разносторонних</b> проектов",
    paid_ads: "Платная реклама",
    cis_reg:"Помогая продвигать свой продукт в <b>CНГ регионе</b>",
    kol_round: "KOL’s Раунд",
    ambassadors: "Амбассадорки",
    various_options:
      "В данном направлении у нас имеется несколько вариантов взаимодействия, каждый из которых может быть реализован в соответствии с вашим бюджетом.",
    individual_approach:
      "Индивидуальный подход для каждого проекта, подбор лидеров мнения соответствующих вашему направлению. Мы эффективно распределяем бюджет между лидерами мнения для максимального результата.",
    market_advice:
      "Мы учтем не только направление вашего проекта, но и сможем посоветовать как будет более эффективно продвигаться на рынке СНГ.",
    cases: "Наши кейсы",
    rakhim_desc: "Опытный программист с опытом более 4 лет в создании сайтов для Web2 и Web3 компаний",
    rakhim: "Рахим",
    text_region: "Помогая продвигать свой продукт в <b>CНГ регионе</b>",
    nums: "Наши цифры",
    secondary_market_deals:
      "Сделки вторичного рынка проходят жесткую модерацию перед постингом в PARTY KOLs.",
    fund_collection:
      "Деньги собираются администратором и одним траншем перечисляются на кошелек проекта.",
    deal_security:
      "Нам важна безопасность обеих сторон, поэтому мы участвуем посредником и",
    kol_investment_interest:
      "Лидеры мнения (KOLs) заинтересованы в инвестиции на раннем этапе в перспективные проекты по выгодным условиям для обеих сторон.",
    ensure_success:
      "Мы можем провести KOL раунд и обеспечить известность и успех вашего проекта на рынке СНГ взамен на выгодные условия инвестирования.",
    promotion_investment:
      "Выбирая нас, вы получаете не только инвестиции, но и услуги продвижения, то есть рекламы.",
    reach: "ОХВАТЫ",
    support: "Поддержка",
    various_conditions:
      "Многие лидеры мнения (KOLs) готовы сотрудничать с проектами на разного рода условиях.",
    ambass_text:"Это могут быть токены проекта, преимущества перед другими пользователями или что-либо еще, что может быть интересным для KOLs.",
    influencers_count: "550+ Инфлюенсеров",
    weekly_reach: "2.5M+ Охватов за 7 дней",
    total_audience: "25M+",
    total_audience_more: "Общей аудитории",
    more_1: "За более чем 1 год",
    one_year: "1 год",
    channels: "Каналов",
    alexei: "Алексей",
    maxim: "Максим",
    alexei_description:
      "Опытный инфлюенсер, владелец канала CRYPTO PARTY и TEMKI x SHEMKI.",
    maxim_description:
      "Соучредитель, арт-директор, графический, 3D и motion дизайнер с опытом более 2-х лет в работе с компаниями на тематику криптовалют и не только.",
    alex: "Co-founder, Art-директор",
    valeria: "Валерия",
    valeria_title: "Главный рекламный менеджер",
    valeria_description:
      "Опытный рекламный менеджер с высокими качествами коммуникации и высокой профессиональностью.",
    social_media: "Соц-сети:",
    other_members: "Остальные участники:",
    click: "Кликай",
    join_team: "Присоединиться к команде",
    leave_request: "ОСТАВЬТЕ ЗАЯВКУ",
    name: "Имя",
    project_link: "Ссылка на проект",
    email_or_social: "Почта или соцсеть",
    comment: "Комментарий",
    submit_request: "Отправить заявку",
    all_process:"контролируем все прцоессы сделки",
    copyright:
      "Copyright © PARTY KOLs 2024. Все права защищены",
  },
};
// Функция смены языка
function setLanguage(lang) {
  localStorage.setItem("language", lang);
  translatePage(lang);
}

function translatePage(lang) {
  const elementsToTranslate = document.querySelectorAll("[data-key]");
  
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-key");
    const place = element.getAttribute("placeholder");
    console.log('place')
    console.log(place)
    if(place){
      element.setAttribute("placeholder",translations[lang][key])
    }else{
      $(element).html(translations[lang][key]);
    }
    
  });
}

$('.lang-item').click((event)=>{
  setLanguage($(event.currentTarget).attr('value'));
  var savedLanguage = localStorage.getItem("language") || "en"; // По умолчанию английский
})

emailjs.init("tO70IPuYwdIOuSY7e");

document
  .getElementById("apply-form-box")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Forma yuborilishini to'xtatadi
    
    var name = document.getElementById('name').value
    var project_name = document.getElementById('project_name').value
    var link = document.getElementById('link_input').value
    var message = document.getElementById('message_input').value
    if(name && project_name && link && message){
    
    // Email yuborish
      emailjs.sendForm("service_99hushh", "template_3zgges3", '#apply-form-box').then(
        function () {
          alert("Письмо отправлено!"); // Muvaffaqiyatli yuborilganda rus tilida yozuv
          document.getElementById("apply-form-box").reset(); // Forma tozalanadi
        },
        function (error) {
          alert("Ошибка при отправке письма: " + JSON.stringify(error)); // Xatolik yuz berganda rus tilida yozuv
        }
      );
    }else{

      console.log('BBAD');
      console.log(name);
      console.log(project_name);
      console.log(link);
      console.log(message);
    }
  });