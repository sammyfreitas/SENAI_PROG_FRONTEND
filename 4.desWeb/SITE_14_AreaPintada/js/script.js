function calcular(){
  var largura = parseFloat(document.getElementById("largura").value);
  var altura = parseFloat(document.getElementById("altura").value);
         
  if (isNaN(largura) || isNaN(altura) || largura <= 0 || altura <= 0)  {
    // isNaN = não é um número? is Not A Number 
	// valido= diferente de zero e tem que ser um número
	alert("Por favor, insira valores válidos para largura e altura.");
    document.getElementById("largura").innerHTML = ""; 
	document.getElementById("altura").innerHTML = "";
	return; 
  }

	var tamanhoLatas = [0.9, 3.6, 18];
	var area = largura * altura;
	var quantidadeTinta = area / 2;
	      
	var latasNecessarias = tamanhoLatas.map(function(tamanho){
		return Math.ceil(quantidadeTinta/tamanho);
	});
	
  
	/*document.getElementById("resultado").innerHTML = `
		<p>Área a ser pintada: ${area.toFixed(2)} m²</p>
		<p>Tinta Necessária: ${quantidadeTinta.toFixed(2)} l</p>
		<p>Latinhas 0.9lt necessárias: ${latasNecessarias[0]} latas ou</p>
		<p>Galão 3.6lt necessárias: ${latasNecessarias[1]} latas ou</p>
		<p>Latas 18lt necessárias: ${latasNecessarias[2]} latas</p>
		`;*/
	
	document.getElementById("area").textContent = area.toFixed(2);
	document.getElementById("tinta").textContent = quantidadeTinta.toFixed(2);
	document.getElementById("latinha").textContent = latasNecessarias[0];
	document.getElementById("galao").textContent = latasNecessarias[1];
	document.getElementById("lata").textContent = latasNecessarias[2];
  
  
}
