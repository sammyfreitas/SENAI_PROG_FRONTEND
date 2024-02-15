function formulario(){
    var nome = document.getElementById("nomeCliente)").value;
    var emailCliente = document.getElementById("emailCliente)").value;
    var mensagemCliente = document.getElementById("mensagemCliente)").value;
    var mensagem = document.getElementById("mensagemConfirmacao");

	var assunto = encodeURIComponent("Fale Conosco - Página Portfolio");
	var corpoEmail = encodeURIComponent("Nome: ${nome}\nEmail: ${emailCliente}\nMensagem: ${mensagemCliente}");
	var mailtoLink = "mailto:contato@gabrielmarciel.com.br?subject${assunto}&body=${corpoEmail}";
	
	window.location.href=mailtoLink;

	alert('Sua mensagem foi enviada com sucesso! Aguarde nosso contato");
    mensagem.innerHTML = nome + " , <br>sua mensagem foi enviada com sucesso!"
}

