// Humberger menu
const menu = document.querySelector('.menu');
// const div = document.querySelector('.second');
const nav = document.querySelector('.second');
// const ul = document.querySelector('.nav-bar ul');
const span = document.createElement('span');
span.innerHTML += '<span>&times;</span>';
span.classList.add('close');

menu.addEventListener('click', () => {
  if (nav.style.display === 'inline-block') {
    nav.style.display = 'none';
  } else {
    nav.appendChild(span);
    nav.style.display = 'flex';
    nav.classList.add('humberger');
    span.addEventListener('click', () => {
      nav.style.display = 'none';
    });
    document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
      nav.style.display = 'none';
    }));
  }
});

// Poping Speaker Section with JS

const speakers = [
  {
    img: '/Assets/speaker_01.png',
    name: 'Weekend',
    job: 'Musicien and Artist from USA',
    description: 'Emerging young conductor and Winner of the Respighi Prize 2017 in Conducting, Jonathan Taylor Rush will bring passion, unique interpretation and refreshing energy to AMC.',

  },
  {
    img: '/Assets/speaker_02.png',
    name: 'Hamzo Bryn',
    job: 'Musicien and Artist from Mauritania',
    description: 'Emerging young conductor and Winner of the Respighi Prize 2017 in Conducting, Jonathan Taylor Rush will bring passion, unique interpretation and refreshing energy to AMC.',

  },
  {
    img: '/Assets/speaker_03.png',
    name: 'Mona Dendeni',
    job: 'Musicien and Artist from Mauritania',
    description: 'Emerging young conductor and Winner of the Respighi Prize 2017 in Conducting, Jonathan Taylor Rush will bring passion, unique interpretation and refreshing energy to AMC.',

  },
  {
    img: '/Assets/speaker_04.png',
    name: 'Nejwa Karam',
    job: 'Musicien and Artist from Lebenon',
    description: 'Emerging young conductor and Winner of the Respighi Prize 2017 in Conducting, Jonathan Taylor Rush will bring passion, unique interpretation and refreshing energy to AMC.',

  },
  {
    img: '/Assets/speaker_05.png',
    name: 'Kadem Saher',
    job: 'Musicien and Artist from IRAQ',
    description: 'Emerging young conductor and Winner of the Respighi Prize 2017 in Conducting, Jonathan Taylor Rush will bring passion, unique interpretation and refreshing energy to AMC.',

  },
  {
    img: '/Assets/speaker_06.png',
    name: 'Drek',
    job: 'Musicien and Artist from USA',
    description: 'Emerging young conductor and Winner of the Respighi Prize 2017 in Conducting, Jonathan Taylor Rush will bring passion, unique interpretation and refreshing energy to AMC.',

  },

];

const article = document.querySelector('.wrapper');

speakers.forEach((speaker, id) => {
  const speakereCard = document.createElement('div');
  speakereCard.className = 'speak-card';
  speakereCard.innerHTML = (`
  <div class="speakers">
    <div class="each speaker${id}">
      <img src="${speaker.img}" alt="speaker${id}">
    <div class = "speaker-info">
      <h3 class="name">${speaker.name}</h3>
      <p class="job">${speaker.job}</p>
      <span class ="separation"></span>
      <p class="desc">${speaker.description}</p>
    <div/>
    </div>
  </div>

  `);
  speakereCard.classList.add('speakers-sec');
  article.appendChild(speakereCard);
});
