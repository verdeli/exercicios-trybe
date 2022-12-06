const enviar = document.getElementById('send')
const clear = document.getElementById('clear')
enviar.addEventListener('click', prevent);

function prevent(event){
event.preventDefault();
}

clear.addEventListener('click',reset);

function reset(event){
  window.location.reload();
}