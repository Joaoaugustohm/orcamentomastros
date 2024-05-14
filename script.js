
function calcularOrcamento() {
  // Obtendo os valores dos campos do formulário
  var tamanhoMastro = parseFloat(document.getElementById("tamanhoMastro").value);
  var quantidadeMastro = parseInt(document.getElementById("quantidadeMastro").value);
  var metrosQuadrados = parseFloat(document.getElementById("metrosQuadrados").value);
  var ponteiras = parseInt(document.getElementById("ponteiras").value);
  var margemlucro = parseFloat(document.getElementById("margemlucro").value);

  // Defina os preços para cada item
  var precoMastro = 23; // Preço por metro de mastro
  var precoLona = 60; // Preço por metro quadrado de lona
  var precoPonteira = 75; // Preço por ponteira
  var precobase = 190; // Preço por base
  var homemhora = 40; // Preço por hora de mão de obra

  // Calculando o total para cada item
  var totalMastro = tamanhoMastro * precoMastro * quantidadeMastro;
  var totalLona = metrosQuadrados * precoLona;
  var totalbaseponteira = ponteiras * (precoPonteira + precobase);
  var totalhora = (metrosQuadrados * 0.8) * homemhora;
  var margemlucro = (margemlucro / 100) + 1;

  // Calculando o total geral
  var comp = ((totalMastro + totalLona + totalbaseponteira + totalhora) * 1.318);
  var totalGeral = ((totalMastro + totalLona + totalbaseponteira + totalhora) * 1.318) * margemlucro;

  // Exibindo o resultado na página
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "<h2>Orçamento</h2>" +
    "<p>Total Mastro: R$" + totalMastro.toFixed(2) + "</p>" +
    "<p>Total Lona: R$" + totalLona.toFixed(2) + "</p>" +
    "<p>Total Ponteiras: R$" + totalbaseponteira.toFixed(2) + "</p>" +
    "<p>Total Hora: R$" + totalhora.toFixed(2) + "</p>" +
    "<p>Composição: R$" + comp.toFixed(2) + "</p>" +
    "<p>Total Geral: R$" + totalGeral.toFixed(2) + "</p>";
}
