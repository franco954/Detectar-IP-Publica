




$(window).on('load', function () {
    setTimeout(function () {
  $(".loader-page").css({visibility:"hidden",opacity:"0"})
}, 1000);
   
});


const obtenerIp = () => {
    fetch(`https://api.ipify.org?format=json`)
    .then(res => res.json())
    .then(data => pintarPantalla(data))
};

const pintarPantalla  = (data) =>{
    document.querySelector('.container > h1').innerHTML = `<span id="ip">${data.ip}</span>`
}

obtenerIp()


ScrollReveal().reveal('.container > h1', {delay: 1200});



