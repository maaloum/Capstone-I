//Humberger menu
const menu = document.querySelector('.menu');
// const div = document.querySelector('.second');
const nav = document.querySelector('.second');
// const ul = document.querySelector('.nav-bar ul');
const span = document.createElement('span');
span.innerHTML += '<span>&times;</span>';
span.classList.add('close');

menu.addEventListener('click', ()=>{
  if (nav.style.display === 'inline-block') {
    nav.style.display = 'none';
  }else{
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

})


// Poping Speaker Section with JS


