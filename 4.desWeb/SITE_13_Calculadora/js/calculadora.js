function insert (num) { 
/*função chamada pelo 'onclick' onde será inserido o valor que está dentro das aspas simples (html)*/
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function limpar () {
    document.getElementById('resultado').innerHTML = ""
}

function voltar(){
	var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcPerc(){
	alert("Em desenvolvimento, tente mais tarde");
	/*pegar o valor na tela*/
	/*var resultadoElement = parseFloat(document.getElementById('resultado'));
	var resultado = resultadoElement.innerHTML.trim();
	// Verifica se o último caractere é um número
    var ultimoCaractereNumerico = /\d$/.test(resultado); 
	if (ultimoCaractereNumerico) {
		var valorNum = parseFloat(resultado)
		var porcentagem = valorNum * 0.1;
		resultadoElement.innerHTML = porcentagem.toFixed(2);
	} else{
		alert("Não é possível calcular a porcentagem")
		limpar();
	}
	*/
} 
	
		
		
		
function calcular() {
    var resultadoElement = document.getElementById('resultado');
    var resultado = resultadoElement.innerHTML.trim();
	resultadoElement.innerHTML = eval(resultado).toFixed(2);

    /* Verifica se o último caractere é um número*/
    var ultimoCaractereNumerico = /\d$/.test(resultado); 

	/*essa é uma expressão nativa do javascript: onde /\d/ é uma classe de caracteres que corresponde a qualquer dígito decimal (0-9) e $: Isso representa o final de uma string.*/

    if (ultimoCaractereNumerico) {
        resultadoElement.innerHTML = eval(resultado).toFixed(2);
    } else {
        alert("Mensagem de erro: Impossível Calcular");
        limpar(); /* Chama a função limpar*/
    }
}





