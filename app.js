

function encriptar() {
    let texto = document.getElementById('caja_texto').value;
    let tituloMensaje = document.getElementById ("titulo_mensaje");
    let parrafo = document.getElementById ("parrafo");
    let muñeco = document.getElementById("Muneco_imagen");

    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat"); 

    if(texto.length !=0){
        document.getElementById('caja_texto').value = textoCifrado;
        tituloMensaje.textContent = "Texto Encriptado con exito";
        parrafo.textContent = " ";
        //muñeco.src = "/imagenes";
    } else{
        alert ("Debes Ingresar un texto");
    }
} 

function desencriptar(){
    let texto = document.getElementById('caja_texto').value;
    let tituloMensaje = document.getElementById ("titulo_mensaje");
    let parrafo = document.getElementById ("parrafo");
    let muñeco = document.getElementById("Muneco_imagen");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u"); 

    if(texto.length !=0){
        document.getElementById('caja_texto').value = textoCifrado;
        tituloMensaje.textContent = "Texto Desencriptado con exito";
        parrafo.textContent = " ";
        //muñeco.src = "/imagenes";

    } else{
        alert ("Debes Ingresar un texto");
  
    }
}
