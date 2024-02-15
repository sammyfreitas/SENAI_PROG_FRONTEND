async function convertmoeda() {
  const valor = document.getElementById('valor').value;
  const moeda = document.getElementById('moeda').value;

  const apiUrl = 'https://api.exchangerate-api.com/v4/latest/BRL';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const rate = data.rates[moeda]; // Taxa de câmbio para a moeda escolhida
    const convertedvalor = (valor * rate).toFixed(2);
	var mensagem = "";

    if(convertedvalor == "NaN" || convertedvalor == 0){
      alert("Atenção! Todos os espaços devem ser preenchidos!");
    }
    else{
      mensagem = `
      <p>${valor} BRL é igual a ${moeda}: ${convertedvalor} ${moeda}</p>
      `;
    }
    document.getElementById('result').innerHTML = mensagem;

  } catch (error) {
    console.error('Erro ao converter moeda:', error);
    document.getElementById('result').innerHTML = '<p>Erro ao converter moeda.</p>';
  }
}


function Clear() {
  document.getElementById("valor").value = "";
  document.getElementById("moeda").value = "";
  document.getElementById("result").innerHTML = "";
}

document.getElementById('convertButton').addEventListener('click', convertmoeda);


/*
GRID


<div class="bordaExterior">

	<div class="menuLateralEsquerdo">
		HTML
		CSS
		JAVASCRIPT
		REACT
	</div>
	
	<div class="corpo">
		O curso de Programador Front-End
	</div>
	
	<div class="menuLateralDireito">
		HTML
		CSS
		JAVASCRIPT
		REACT
	</div>

</div>


CSS
.bordaExterior{
	display:flex;
}

.corpo{
	width:60%;
}

menuLateralEsquerdo,
.menuLateralDireito{
	width:20%;
}

*/








