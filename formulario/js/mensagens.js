CAMPO_OBRIGATORIO = " É obrigatório";
CAMPO_0_120 = " precisa receber entre 0 - 120";

function mostraAlerta(msg, nomecampo){
    var texto = "";

    if (msg == CAMPO_OBRIGATORIO) {
	    texto = "O campo " + nomecampo + msg;

    }else if(msg == CAMPO_0_120) {
        texto = "O campo " + nomecampo + msg;

    }else{
        texto = msg;

	}

    if (texto != ""){
	window.alert(texto + ".");
    }
}
