
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){

btn.addEventListener('click',function(e){
    const question = e.currentTarget.parentElement.parentElement;
     question.classList.toggle('show-answer');
 });
});
// modal section

const sumbitBtn = document.querySelector('.submit-btn');
const closeForm = document.querySelector('.close-form');
const qouteBtn1 = document.querySelector('#btn1');
const qouteBtn2 = document.querySelector('#btn2');
const qouteBtn3 = document.querySelector('#btn3');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('#form');

window.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
    openModal()
    },5000)
})
//overlay.addEventListener('scroll', noscroll);

sumbitBtn.addEventListener('click',function(){
  closeModal()
})
closeForm.addEventListener('click',function(){
   closeModal()
})

qouteBtn1.addEventListener('click',function(){
    openModal()
    
})

qouteBtn2.addEventListener('click',function(){
  openModal()
})
qouteBtn3.addEventListener('click',function(){
   openModal()
})

function openModal(){
     form.classList.add('pop-up-form')
     overlay.classList.add('active')
     closeForm.classList.add('show-closebtn')
    
}
 
function closeModal(){
 form.classList.remove('pop-up-form')
     overlay.classList.remove('active')
    closeForm.classList.remove('show-closebtn')
}
function noscroll(){
  window.scrollTo(50,100);
}











