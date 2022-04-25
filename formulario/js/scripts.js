function mascaraNumero(event) {
    
    var key = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
	
	// Permite somente números ou as teclas: 'Enter', 'backspace',
    if ((key < 48 || key > 57) && (key != 13 && key != 8 && key != 0 )) {
        
        return false;
    }
    
    return true;   
} // mascaraNumero()

function mascaraLetra(event) {
    var letra = document.getElementById('letra').value;

    console.log(letra);
	var key = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
	
	// Permite somente letras ou as teclas: 'Enter', 'backspace',
    if (!(key < 48 || key > 57) && (key != 13 && key != 8 && key != 0 )) {
        return false;
        
    }
    
    return true;
    
} // mascaraLetra()

function ehVazio(texto) {
    // variavel para teste de espacos em branco
    var eh_vazia = "true";
    var tamanho_parametro = texto.length;
    if (tamanho_parametro != 0) {
        for (var i = 0; i < tamanho_parametro; i++) {
            if (texto.charAt(i) != " ") {
                /*existe caracter diferente de branco*/
                eh_vazia = "false";
            }
        }
        if (eh_vazia == "true") {
        //todos os caracteres digitados são brancos
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}



