/* WICKET WIRE MORE PAGE */
const scrollRevealOption = {
    origin: "bottom",
    distance: "150px",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".careers-image img",{
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".careers-content h1",{
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".careers-content p",{
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".JoinUs-btn",{
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal("#m-1",{
    ...scrollRevealOption,
    delay:500,
  });

  ScrollReveal().reveal("#m-2",{
    ...scrollRevealOption,
    delay:1000,
  });

  ScrollReveal().reveal("#m-3",{
    ...scrollRevealOption,
    delay:1500,
  });

  ScrollReveal().reveal("#m-4",{
    ...scrollRevealOption,
    delay:2000,
  });

  



//Responsive Toggle bar
// Responsive Toggle bar
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

  