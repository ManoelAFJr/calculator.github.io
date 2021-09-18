function mostrarHoras(){
    let clock = document.querySelector("#relogio");
    let now = new Date();
    clock.textContent = now.toLocaleDateString();
}
mostrarHoras();
setInterval(mostrarHoras, 1000);