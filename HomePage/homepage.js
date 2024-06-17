burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
// rightnav=document.querySelector('.rightnav')
nav=document.querySelector('.nav-item')

burger.addEventListener('click',()=>{
    // rightnav.classList.toggle('v-class');
    nav.classList.toggle('v-nav');
    console.log("hello")
    navbar.classList.toggle('h-nav');

})

