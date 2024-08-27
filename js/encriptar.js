function encriptar() {
    var texto = document.getElementById("input-text").value;
    texto = texto
        .replace(/e/gim, "enter")
        .replace(/i/gim, "imes")
        .replace(/a/gim, "ai")
        .replace(/o/gim, "ober")
        .replace(/u/gim, "ufat");
    document.getElementById("encrypted-text").value = texto;
}

var boton = document.getElementById("boton-encriptar");
boton.onclick = function () {    
    if(document.getElementById("input-text").value.match(/^[a-z ]*$/)) {
        encriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
};

