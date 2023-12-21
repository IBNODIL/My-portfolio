let elDark = document.getElementById('dark-light');
let elLight = document.getElementById('light-dark');
let elAbout = document.getElementsByClassName('s-about');
let elLightPng = document.getElementById('icon-white');
let elDarkPng = document.getElementById('icon-black');

elDark.addEventListener('click', function(){
    for (let i = 0; i < elAbout.length; i++) {
        elAbout[i].classList.add('dark');
    }
    document.body.classList.add('dark');
    document.getElementById('skills-id').classList.add('dark');
    document.getElementById('skills-id-2').classList.add('dark');
    document.getElementById('about-me-id').classList.add('dark');
    document.getElementById('home-id').classList.add('dark');
    document.getElementById('nav-id').classList.add('dark');
    document.getElementById('p-card-1').classList.add('dark');
    document.getElementById('p-card-2').classList.add('dark');
    document.getElementById('p-card-3').classList.add('dark');
    document.getElementById('p-card-4').classList.add('dark');
    document.getElementById('p-card-5').classList.add('dark');
    document.getElementById('p-card-6').classList.add('dark');
    document.getElementById('p-card-7').classList.add('dark');
    document.getElementById('p-card-8').classList.add('dark');
    document.getElementById('p-card-9').classList.add('dark');
    document.getElementById('p-card-10').classList.add('dark');
    document.getElementById('p-card-11').classList.add('dark');
    document.getElementById('p-card-12').classList.add('dark');

    elDark.classList.add('hide');
    elDarkPng.classList.add('hide');
    elLight.classList.remove('hide');
    elLightPng.classList.remove('hide');
});

elLight.addEventListener('click', function(){
    for (let i = 0; i < elAbout.length; i++) {
        elAbout[i].classList.remove('dark');
    }
    document.body.classList.remove('dark');
    document.getElementById('skills-id').classList.remove('dark');
    document.getElementById('skills-id-2').classList.remove('dark');
    document.getElementById('about-me-id').classList.remove('dark');
    document.getElementById('home-id').classList.remove('dark');
    document.getElementById('nav-id').classList.remove('dark');
    document.getElementById('p-card-1').classList.remove('dark');
    document.getElementById('p-card-2').classList.remove('dark');
    document.getElementById('p-card-3').classList.remove('dark');
    document.getElementById('p-card-4').classList.remove('dark');
    document.getElementById('p-card-5').classList.remove('dark');
    document.getElementById('p-card-6').classList.remove('dark');
    document.getElementById('p-card-7').classList.remove('dark');
    document.getElementById('p-card-8').classList.remove('dark');
    document.getElementById('p-card-9').classList.remove('dark');
    document.getElementById('p-card-10').classList.remove('dark');
    document.getElementById('p-card-11').classList.remove('dark');
    document.getElementById('p-card-12').classList.remove('dark');

    elDark.classList.remove('hide');
    elDarkPng.classList.remove('hide');
    elLight.classList.add('hide');
    elLightPng.classList.add('hide');
});