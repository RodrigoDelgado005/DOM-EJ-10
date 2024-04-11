function ocultarParrafos() {
    let obj = document.getElementById("bloque2")
    let lista = obj.getElementsByTagName('p')
    for (let ocultar of lista)
        ocultar.style.display = "none";
}