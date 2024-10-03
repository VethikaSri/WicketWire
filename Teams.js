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




//Teams choice - togle-button

// var international_btn = document.querySelector(".international-btn");
// var league_btn = document.querySelector(".league-btn");
// var international_details = document.querySelector(".international-details");
// var league_details = document.querySelector(".league_details");

// international_btn.addEventListener('click', () =>{
//     international_details.style.display = 'flex';
//     league_details.style.display = 'none';
// });

// league_btn.addEventListener('click', () =>{
//     international_details.style.display = 'none';
//     league_details.style.display = 'flex';
// });







var international_btn = document.querySelector(".international-btn");
var league_btn = document.querySelector(".league-btn");
var international_details = document.querySelector(".international-details");
var league_details = document.querySelector(".league-details");

international_btn.addEventListener('click', () => {

    //button style
    international_btn.style.backgroundColor = 'rgb(77,77,128)';
    international_btn.style.color = 'white';
    league_btn.style.backgroundColor = 'white';
    league_btn.style.color = 'rgb(77,77,128)';


    international_details.style.display = 'flex'; 
    league_details.style.display = 'none'; 
});


league_btn.addEventListener('click', () => {

    //button styles
    international_btn.style.backgroundColor = 'white';
    international_btn.style.color = 'rgb(77,77,128)';
    league_btn.style.backgroundColor = 'rgb(77,77,128)';
    league_btn.style.color = 'white';


    league_details.style.display = 'flex'; 
    international_details.style.display = 'none'; 
});
