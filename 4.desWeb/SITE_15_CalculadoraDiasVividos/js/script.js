function CalculaIdade(){
	var nome = document.getElementById("nome").value;
	var dataNasc = new Date(document.getElementById("dataNasc").value);
	var hoje = new Date();//Função do JS para pegar a data
						
	var idadeAnos = hoje.getFullYear() - dataNasc.getFullYear();
	var idadeMeses = (12 * idadeAnos) + (hoje.getMonth()+1) - (dataNasc.getMonth()+1);
	var idadeSemanas = 52 * idadeAnos;
	var idadeDias = 365 * idadeAnos;
	
	document.getElementById("nome").textContent = nome;
	document.getElementById("anos").textContent = idadeAnos + " anos.";
	document.getElementById("meses").textContent = idadeMeses + " meses.";
	document.getElementById("semanas").textContent = idadeSemanas + " semanas.";
	document.getElementById("dias").textContent = idadeDias + " dias.";
}

