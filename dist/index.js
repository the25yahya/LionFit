//variables
const contact = document.getElementsByClassName('contact');
console.log(contact);
const social = document.querySelectorAll('.fa-brands');
const toggle = document.getElementById('toggle');
const down = document.querySelector('.down-menu');
console.log(down);
let state = 'not-toggeled'
let body = document.querySelector("body");
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
////////////////////////////////////
