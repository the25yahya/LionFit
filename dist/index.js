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
const mediaQuery = window.matchMedia("(max-width: 768px)");
const monthly = document.getElementById('monthly');
const annual = document.getElementById('annual');
const planType = document.querySelector('.plan-type');
const planDescription = document.querySelector('.plan-description');
console.log(planType,planDescription);
const price = document.getElementById('pricee');
const features = document.querySelector('.features2');
const startedBtn = document.querySelector('.started-btn');
const pricingCard = document.querySelector('.pricing-card');
let state3 = 'not-toggeled'
console.log(startedBtn);
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



//contact forum js
contactBtn.addEventListener('click',function () {
if (state2==='not-toggeled') {
    contactForum.classList.add('show')
    contactForum.classList.add('fade-in')
    state2 = 'toggeled'
}else if(state2==='toggeled'){
    contactForum.classList.remove('show')
    contactForum.classList.remove('fade-in')
    state2 = 'not-toggeled'
}else if(mediaQuery.matches){
    contactForum.classList.remove('show')
    contactForum.classList.remove('fade-in')
    state2 = 'not-toggeled'
}
})
////////////////////////////////////


//pricing card js
startedBtn.addEventListener('click',function(){
    if (state3==='not-toggeled') {
        pricingCard.classList.add('show')
        pricingCard.classList.add('fade-in')
        state3 = 'toggeled'
    }else{
        pricingCard.classList.remove('show')
        pricingCard.classList.remove('fade-in')
        state3 = 'not-toggeled'}
})
///////////////////////////////////////////
annual.addEventListener('click',function(){
    monthly.classList.remove('chosen');
    annual.classList.add('chosen');
    planType.innerText='-deluxe plan'
    planDescription.innerText='-perfect for begginers and veterans'
    price.innerText='$200/yr'
    const newFeature = document.createElement('p');
    newFeature.innerHTML='<i class="fa-solid fa-check"></i>'
    newFeature.innerText='get costumised diets and workout routines'
    features.appendChild(newFeature)
})