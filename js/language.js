// Script for change language

const engJson = {
  "about": {
    "section": "About",
    "myname": "Sergey",
    "location": "Rostov-on-Don, Russia",
    "about": "I'm a software developer living in Rostov-on-Don, Russia. I has previously worked as a building engineer, but became interested in python development.",
    "focus": "Current focus: Python, Django, Flask, Sanic, PostgreSQL, MySQL, FastAPI, Docker, Nginx, MongoDB, Elasticsearch, Celery, CI/CD",
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
  },
};

const rusJson = {
  "about": {
    "section": "Обо мне",
    "myname": "Сергей",
    "location": "Ростов-на-Дону, Россия",
    "about": "Я разработчик программного обеспечения из Ростова-на-Дону. Ранее работал инженером-строителем, но заинтересовался Python разработкой.",
    "focus": "Интенсивно изучаю: Python, Django, Flask, Sanic, PostgreSQL, MySQL, FastAPI, Docker, Nginx, MongoDB, Elasticsearch, Celery, CI/CD",
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
  },
};

document.querySelector('#eng').onclick = function() {loadLang(engJson)};
document.querySelector('#rus').onclick = function() {loadLang(rusJson)};

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
  document.getElementById('ed-0').innerHTML = lang.education[0].toString();
  document.getElementById('ed-1').innerHTML = lang.education[1].toString();
  document.getElementById('ed-2').innerHTML = lang.education[2].toString();
  document.getElementById('ed-3').innerHTML = lang.education[3].toString();
  // Projects section
  document.getElementById('pr').innerHTML = lang.projects.section.toString();
  document.getElementById('moreprojects').innerHTML = lang.projects.section.toString();
};
