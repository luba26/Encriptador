function desencriptar() {
    var texto = document.querySelector("#input-text").value;
    texto = texto
        .replace(/enter/gim, "e")
        .replace(/imes/gim, "i")
        .replace(/ai/gim, "a")
        .replace(/ober/gim, "o")
        .replace(/ufat/gim, "u");
    document.getElementById("encrypted-text").value = texto;
}

var boton = document.getElementById("boton-desencriptar");
boton.onclick = function () {
    if(document.getElementById("input-text").value.match(/^[a-z ]*$/)) {
        desencriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
};