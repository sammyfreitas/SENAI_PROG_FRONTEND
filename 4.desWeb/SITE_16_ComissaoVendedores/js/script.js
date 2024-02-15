function CalculaComissao() {
    const corretor1 = parseFloat(document.getElementById('corretor1').value) || 0; 
    const corretor2 = parseFloat(document.getElementById('corretor2').value) || 0;
    const corretor3 = parseFloat(document.getElementById('corretor3').value) || 0;



    const comissao1 = calculacomissao(corretor1);
    const comissao2 = calculacomissao(corretor2);
    const comissao3 = calculacomissao(corretor3);

    const outputDiv = document.getElementById('output');
    
	
	outputDiv.innerHTML = `
        <div class="corretor-info">
            <img src="${document.getElementById('imagem1').value}" alt="imagem Vendedor 1" class="avatar">
			
            <p>${document.getElementById('nome1').value}: R$ ${comissao1.toFixed(2)}</p>
        </div>
        <div class="corretor-info">
            <img src="${document.getElementById('imagem2').value}" alt="imagem Vendedor 2" class="avatar">
            <p>${document.getElementById('nome2').value}: R$ ${comissao2.toFixed(2)}</p>
        </div>
        <div class="corretor-info">
            <img src="${document.getElementById('imagem3').value}" alt="imagem Vendedor 3" class="avatar">
            <p>${document.getElementById('nome3').value}: R$ ${comissao3.toFixed(2)}</p>
        </div>
    `;

    const totalvendas = corretor1 + corretor2 + corretor3;
    const totalComissoes = comissao1 + comissao2 + comissao3;
	const rendaLiquida = totalvendas - totalComissoes;
	
    document.getElementById('totalvendas').textContent = totalvendas.toFixed(2);
    document.getElementById('totalComissoes').textContent = totalComissoes.toFixed(2);
	document.getElementById('rendaLiquida').textContent = rendaLiquida.toFixed(2);
}
                         
function calculacomissao(corretor) {
    if (corretor > 50000) {
        return corretor * 0.12;
    } else if (corretor >= 30000 && corretor <= 50000) {
        return corretor * 0.095;
    } else {
        return corretor * 0.07;
    }
}
