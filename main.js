

const toggleButton = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});


const copyIp = () => {
    var textToCopy = document.getElementById("ip").innerText;
    navigator.clipboard.writeText(textToCopy);
}


const obtenerIp = () => {
    fetch(`https://api.ipify.org?format=json`)
    .then(res => res.json())
    .then(data => pintarPantalla(data))
};

const pintarPantalla  = (data) =>{
    document.querySelector('.container > h1').innerHTML = `<p id="legend-ip">Mi dirección IP publica es: </p><span id="ip">${data.ip}</span>
    <button onclick="copyIp()" id="btn-copyIp" class="btn btn-dark m-1" title="copiar">
        <i class="fa-regular fa-copy"></i>
    </button>
    `
}

obtenerIp()





