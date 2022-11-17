// Script for change language

const engJson = {
  "about": {
    "section": "About",
    "myname": "Sergey",
    "location": "Moscow, Russia",
    "about": "I do software development. Previously worked as an engineer but became interested in web development. I mainly use programming languages such as Python and JavaScript. I like to create modern fast and technologically advanced web applications, as well as learn new things and solve complex problems.",
    "focus": "Intensive studing and practicing: Python, JavaScript, Django, Flask, FastAPI, Unittest/Pytest, PostgreSQL/MySQL, Docker, Docker Compose, Celery, Redis, Aiohttp, Openpyxl, Pandas, Nginx, MongoDB, Vue.js, Nuxt.js, Celery, CI/CD",
  },
  "skills": {
    "section": "Skills",
    0: "Programming Languages & Tools",
  },
  "education": {
    "section": "Education",
    0: "Stepik Academy",
    1: 'Django, from Zero in practice" course',
    2: "Russian Southern State University",
    3: "Bachelor of Architecture",
  },
  "projects": {
    "section": "Projects",
    "decription": [
      "Application made with FastApi",
	  "Django Rest Framework Application for xlsx processing",
	  "Page parser made with Python(Django)",
	  "Single Page Application made with Python(Django), Vue and PostgreSQL",
	  "Django application made with Django and Django REST framework",
	  "Custom registration application made with Django REST framework",
	  "Telegram bot made with aiogram and pandas that can send words from dictionary on demand",
      "Study projects from Stepik Academy",
	  ],
  },
};

const rusJson = {
  "about": {
    "section": "Обо мне",
    "myname": "Сергей",
    "location": "Москва, Россия",
    "about": "Занимаюсь разработкой программного обеспечения. Ранее работал инженером, но заинтересовался веб разработкой. В основном использую такие языки програмирования, как Python и JavaScript. Мне нравится создавать современные быстрые и технологичные веб-приложения, так же узнавать новое и решать сложные задачи.",
    "focus": "Интенсивно изучаю и практикую: Python, JavaScript, Django, Flask, FastAPI, Unittest/Pytest, PostgreSQL/MySQL, Docker, Docker Compose, Celery, Redis, Aiohttp, Openpyxl, Pandas, Nginx, MongoDB, Vue.js, Nuxt.js, Celery, CI/CD",
  },
  "skills": {
    "section": "Навыки",
    0: "Используемые технологии",
  },
  "education": {
    "section": "Образование",
    0: "Stepik Academy",
    1: "Django, с нуля на практике",
    2: "Южный Федеральный Университет",
    3: "Бакалавр Архитектуры",
  },
  "projects": {
    "section": "Проекты",
    "decription": [
      "Приложение, созданное с помощью FastApi",
	  "Приложение для обработки таблиц формата xlsx, созданное с помощью Django Rest Framework",
	  "Приложение для парсинга страниц, созданное с помощью Python(Django)",
	  "Одностраничное приложение, созданное с помощью Python(Django), Vue и PostgreSQL",
	  "Приложение, созданное с помощью Django и Django REST framework",
	  "Приложение созданное с помощью Django REST framework",
	  "Телеграм бот, созданный с помощью aiogram и pandas, который отправляет слова из словаря по запросу",
      "Учебные проекты из Stepik Academy",
	  ],
  },
};

document.querySelector('#eng').onclick = function() {changeLang('eng')};
document.querySelector('#rus').onclick = function() {changeLang('rus')};

function loadLang(lang) {
  document.getElementById('myname0').innerHTML = lang.about.myname.toString();
  document.getElementById('myname1').innerHTML = lang.about.myname.toString();
  // About section
  document.getElementById('ab').innerHTML = lang.about.section.toString();
  document.getElementById('location').innerHTML = lang.about.location.toString();
  document.getElementById('moreabout').innerHTML = lang.about.about.toString();
  document.getElementById('focus').innerHTML = lang.about.focus.toString();
  // Skills section
  document.getElementById('sk').innerHTML = lang.skills.section.toString();
  document.getElementById('moreskills').innerHTML = lang.skills.section.toString();
  document.getElementById('tools').innerHTML = lang.skills[0].toString();
  // Education section
  document.getElementById('ed').innerHTML = lang.education.section.toString();
  document.getElementById('moreeducation').innerHTML = lang.education.section.toString();
  document.getElementById('ed0').innerHTML = lang.education[0].toString();
  document.getElementById('ed1').innerHTML = lang.education[1].toString();
  document.getElementById('ed2').innerHTML = lang.education[2].toString();
  document.getElementById('ed3').innerHTML = lang.education[3].toString();
  // Projects section
  document.getElementById('pr').innerHTML = lang.projects.section.toString();
  document.getElementById('moreprojects').innerHTML = lang.projects.section.toString();
  document.getElementById('desc0').innerHTML = lang.projects.decription[0].toString();
  document.getElementById('desc1').innerHTML = lang.projects.decription[1].toString();
  document.getElementById('desc2').innerHTML = lang.projects.decription[2].toString();
  document.getElementById('desc3').innerHTML = lang.projects.decription[3].toString();
  document.getElementById('desc4').innerHTML = lang.projects.decription[4].toString();
  document.getElementById('desc5').innerHTML = lang.projects.decription[5].toString();
  document.getElementById('desc6').innerHTML = lang.projects.decription[6].toString();
  document.getElementById('desc7').innerHTML = lang.projects.decription[7].toString();
};

function changeLang(current_lang) {
  switch(current_lang) {
    case 'eng':
      loadLang(engJson);
      break
    case 'rus':
      loadLang(rusJson);
      break
    default:
      loadLang(rusJson);
      break
  };
};

changeLang()
