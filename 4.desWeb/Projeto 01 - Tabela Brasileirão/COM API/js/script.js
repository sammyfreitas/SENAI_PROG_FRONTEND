const apiKey = 'test_1ff56c150150c4c2d3735e10afec8d';
//'test_1ff56c150150c4c2d3735e10afec8d';
//'live_a98e49f8028ea01988f40b3ab9d100';
const apiUrl = 'https://api.api-futebol.com.br/v1/campeonatos/10/tabela';

fetch(apiUrl, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
    })
    .then(dados => {
        construirTabela(dados);
    })
    .catch(error => console.error('Erro na requisição:', error));

function construirTabela(dados) {
    const tabelaContainer = document.getElementById('tabela-container');
    
	console.log('Dados recebidos da API:', dados);
	
	if (!dados || !dados.data || dados.data.length === 0) {
        tabelaContainer.innerHTML = '<p>Nenhum dado disponível.</p>';
        return;
    }
	
	const times = dados.data;

    const tabelaHTML = `
        <table>
            <tr>
                <th>Posição</th>
                <th>Escudo</th>
                <th>Time</th>
                <th>Pontos</th>
				<th>Saldo de Gols</th>
				<th>Aproveitamento</th>
				
				<!-- Adicione mais colunas conforme necessário -->
            </tr>
            ${times.map(time => `
                <tr>
                    <td>${time.posicao}</td>
                    <td>${time.time.escudo}</td>
					<td>${time.time.nome_popular}</td>
                    <td>${time.pontos}</td>
					<td>${time.saldo_gols}</td>
					<td>${time.aproveitamento}</td>
				</tr>
            `).join('')}
        </table>
    `;
    tabelaContainer.innerHTML = tabelaHTML;
}
