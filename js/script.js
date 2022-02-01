
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
var validarEncriptado = document.getElementById("btn-encriptar");


validarEncriptado.addEventListener("click", function(event){
    event.preventDefault();
    var formulario = document.getElementById("formulario");
    var texto = document.getElementById("input-texto").value;
    var mensajeEncriptado = document.getElementById("msg");
    var expresion = new RegExp("[^a-z]");
    if (!expresion.test(texto)) {
        
        encriptar(texto);
        formulario.reset();
        
    }else{
        
        alert("Solo minusculas y sin acentos");
        mensajeEncriptado.value = "";
        formulario.reset();
    }
    
    
    
});






/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var validarDesencriptado = document.getElementById("btn-desencriptar");


validarDesencriptado.addEventListener("click", function(event){
    event.preventDefault();
    var formulario = document.getElementById("formulario");
    var texto = document.getElementById("input-texto").value;
    var mensajeDesencriptado = document.getElementById("msg");
    var expresion = new RegExp("[^a-z]");    
    if (!expresion.test(texto)) {
            
        desencriptar(texto);
        formulario.reset();
            
    }else{
            
        alert("Solo minusculas y sin acentos");
        mensajeDesencriptado.value = "";
        formulario.reset();
    }
        
        
        
})
    
    
    
