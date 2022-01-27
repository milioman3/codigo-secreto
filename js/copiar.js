var copiar = document.getElementById("btn-copy");

copiar.addEventListener("click", function(event){
    event.preventDefault();
    
    var texto = document.getElementById("msg");
    texto.select();
    
    
    
    document.execCommand("copy");
    
    
    
})