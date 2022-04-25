$(function() {
    // Pré-visualização de imagem no navegador
    var visualizacaoImagens = function(input, lugarParaInserirVisualizacaoDeImagem) {
      
        if(validarImagem()){

            if (input.files) {
                var quantImagens = input.files.length;
                
                for (i = 0; i < quantImagens; i++) {
                    
                var reader = new FileReader();
                
                reader.onload = function(event) {
                    $($.parseHTML('<img class="miniatura">')).attr('src', event.target.result).appendTo(lugarParaInserirVisualizacaoDeImagem);
                }                
                reader.readAsDataURL(input.files[i]);
                   
            }
        }
    }
 };
    
 
    $('#addFotoGaleria').on('change', function() {
        visualizacaoImagens(this, 'div.galeria');
    });
    });

    function validarImagem() {

        var arquivoInput = document.getElementById('addFotoGaleria');

        var caminhoArquivo = arquivoInput.value;

        var extensaoPermitida = /(.png)$/i;
        
        // verificando se a extensão é png
        if (!extensaoPermitida.exec(caminhoArquivo)) {
    
            alert('Por favor adicione um arquivo que tenha a extensão .png');

            arquivoInput.value = '';
            
            return false;

        //Verificando se o tamanho do arquive é 2mb o valor 2097152 representa 2mb em bytes
        }else if (arquivoInput.files[0].size > 2097152) { 

                alert("Tamanho do arquivo deve ser 2 MB!");
                
                arquivoInput.value = '';

                return false;
            }    

        return true;
    } 