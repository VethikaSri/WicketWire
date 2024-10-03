/* WICKET WIRE HOMEPAGE */
// Grid box Counter

let valueDisplay = document.querySelectorAll(".number");
let interval = 7000;

valueDisplay.forEach(valueDisplay=>{
    let startValue = parseInt(valueDisplay.textContent.trim());
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));
    let duration = Math.floor(interval/(endValue-startValue));
    if(startValue >= endValue) return;
    let counter = setInterval(function(){
        startValue +=1;
        valueDisplay.textContent = startValue;
        if(startValue === endValue){
            clearInterval(counter);
        }
    },duration);
})



//responsive toggle button

const bar = document.getElementById('bar');
const clo = document.getElementById('clo');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (clo) {
  clo.addEventListener('click', () => 
  {
    nav.classList.remove('active');
  });
}









































