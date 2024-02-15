function calcularMedia() {
  var nome = document.getElementById("nome").value;
  var notaTrabalho = parseFloat(document.getElementById("notaTrabalho").value);
  var notaTeste = parseFloat(document.getElementById("notaTeste").value);
  var notaProva = parseFloat(document.getElementById("notaProva").value);

  var media = (notaTrabalho + notaTeste + notaProva) / 3;

  var resultadoLabel = document.getElementById("resultado");
  resultadoLabel.innerHTML = "Nome: " + nome + " | Média: " + media.toFixed(2);
}

