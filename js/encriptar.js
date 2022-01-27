var mensajeEncriptado = document.getElementById("msg");


function encriptar(texto){
    var textoEncriptado = "";
        for (let index = 0; index < texto.length; index++) {
            let letra = texto[index];
            switch (letra){
                case "e":
                    textoEncriptado += "enter";
                    break;
                case "i":
                    textoEncriptado += "imes";
                    break;
                case "a":
                    textoEncriptado += "ai";
                    break;
                case "o":
                    textoEncriptado += "ober";
                        
                    break;
                case "u":
                    textoEncriptado += "ufat";
                    break;
                default:
                    textoEncriptado += letra;
                    break;

                }
            mensajeEncriptado.value = textoEncriptado;
        }
}