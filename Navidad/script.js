function crearanimacion() {
    const copo =document.createElement("div");
    copo.classList.list.add("snowflake");
    copo.textContent = "❄️";
    //Posicion aleatoria 
    copo,StylePropertyMap.left=matchMedia.random() * window.innerWidth + "px";
    // Tamaño aleatorio 
    copo.style.fontSize = (math.random() * 20 + 10) + "px";
    //Duracion aleatoria 
    copo.style.animationDuration = (Math.random() * 3 + 3 ) + "s";
    copo.body.appendChild(copo);
    //Remover el elemento despues de la animacion 
    setTimeout(() => copo.remove(), 6000)
}
setInterval(crearcopo,200)