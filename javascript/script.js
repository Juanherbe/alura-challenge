document.addEventListener("DOMContentLoaded", function() {



function encriptar (){
    var texto = document.getElementById("texto-encriptable").value;
    texto = texto.replace(/a|e|i|o|u/g, function(match) {
        if (match === "a") return "ai";
        if (match === "e") return "enter";
        if (match === "i") return "imes";
        if (match === "o") return "ober";
        if (match === "u") return "ufat";
    });
    document.getElementById("texto-encriptado").value = texto ;
}

var boton = document.getElementById("boton-encriptador");
boton.onclick = function() {
    if (document.getElementById("texto-encriptable").value.match(/^[a-z\s]+$/i)) {
        encriptar();
    } else {
        alert("No deben ser utilizados letras en mayusculas, con acentos ni caracteres especiales")
    }
};




//////////////////////////////////  //

function desencriptar() {
    var texto = document.getElementById("texto-encriptado").value;
        texto = texto.replace(/ai|enter|imes|ober|ufat/g, function(match) {
            if (match === "ai") return "a";
            if (match === "enter") return "e";
            if (match === "imes") return "i";
            if (match === "ober") return "o";
            if (match === "ufat") return "u";
        });
    document.getElementById("texto-encriptado").value = texto;
}

var boton2 = document.getElementById("boton-desencriptar");
boton2.onclick = function() {
    if (document.getElementById("texto-encriptado").value.match(/^[a-z\s]+$/i)) {
        desencriptar();
    } else {
        alert("No deben ser utilizados letras en mayusculas, con acentos ni caracteres especiales")
    }
};

var botoncopiar = this.getElementById("boton-copiar");
botoncopiar.onclick = function copiarAlPortapapeles() {
    // Selecciona el campo de entrada
    var inputElement = document.getElementById("texto-encriptado");
    // Selecciona el texto dentro del campo de entrada
    inputElement.select();
    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");
    // Deselecciona el campo de entrada
    window.getSelection().removeAllRanges();

};


});