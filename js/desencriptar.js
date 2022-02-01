


function desencriptar(texto){
    var mensajeDesencriptado = document.getElementById("msg");
    
    var textoDesencriptado = "";
    for (let index = 0; index < texto.length; index++) {
        let letra = texto[index];
        switch (letra){
            case "e":
                
                textoDesencriptado += "e";
                index = index +4;
                break;
            case "i":
                
                textoDesencriptado += "i";
                index = index +3;
                break;
            case "a":
                
                textoDesencriptado += "a";
                index = index +1;
                break;
            case "o":
                textoDesencriptado += "o";
                index = index +3;
                
                
                break;
            case "u":
                
                textoDesencriptado += "u";
                index = index +3;
                
                break;
            default:
                textoDesencriptado += letra;
                break;

            }
    }
    formulario.reset();
    mensajeDesencriptado.value = textoDesencriptado;
    
    
}