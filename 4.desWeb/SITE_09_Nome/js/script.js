function OlaFulano(){
	/*Pega a infomação digitada pelo usuário*/
	var nome = document.getElementById("nomeUsuario").value;

	/*Exibir a informação na tela*/
	document.getElementById("lbl_nome").innerHTML = "Olá, " + nome;
	
}