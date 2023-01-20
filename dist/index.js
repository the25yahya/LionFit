//variables
const contact = document.getElementsByClassName('contact');
console.log(contact);
const social = document.querySelectorAll('.fa-brands');
const toggle = document.getElementById('toggle');
const down = document.querySelector('.down-menu');
console.log(down);
let state = 'not-toggeled'
let state2 = 'not-toggeled'
let body = document.querySelector("body");
const contactBtn = document.getElementById('contact-p');
const contactForum = document.querySelector('.contact-forum');
///////////////////////////////////


//event listeners
toggle.addEventListener('click',function(){
if (state==='not-toggeled') {
    toggle.innerHTML='<i class="fa-solid fa-x"></i>'
    toggle.classList.add('wave');
    down.classList.add('show')
    down.classList.add('fade-in')
    state = 'toggeled'
}else{
    toggle.innerHTML='<i class="fa-solid fa-bars"></i>'
    toggle.classList.remove('wave');
    down.classList.remove('show')
    down.classList.remove('fade-in')
    state = 'not-toggeled'
}
})




contactBtn.addEventListener('click',function () {
if (state2==='not-toggeled') {
    contactForum.classList.add('show')
    contactForum.classList.add('fade-in')
    state2 = 'toggeled'
}else{
    contactForum.classList.remove('show')
    contactForum.classList.remove('fade-in')
    state2 = 'not-toggeled'
}
})
////////////////////////////////////
