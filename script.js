
function calcularOrcamento() {
  
  // Obtendo os valores dos campos do formulário
  var tamanhoMastro1 = parseFloat(document.getElementById("tam1").value);
  var tamanhoMastro2 = parseFloat(document.getElementById("tam2").value);
  var quantidadeMastro1 = parseInt(document.getElementById("quantidadeMastro1").value);
  var quantidadeMastro2 = parseInt(document.getElementById("quantidadeMastro2").value);
  var metrosQuadrados = parseFloat(document.getElementById("metrosQuadrados").value);
  var bases = parseInt(document.getElementById("bases").value);
  var margemlucro = parseFloat(document.getElementById("margemlucro").value);

  // iniciar as quantidades 
  var quantidadeponteira = 0; //inciar a quantidade de ponteira

  // Defina os preços para cada item
  var precoMastro = 23; // Preço por metro de mastro
  var precoLona = 60; // Preço por metro quadrado de lona
  var precoPonteira = 75; // Preço por ponteira
  var precobase = 190; // Preço por base
  var homemhora = 40; // Preço por hora de mão de obra

  // Calculando o total para cada item
  var quantidadeMastro = quantidadeMastro1 + quantidadeMastro2;
  var tamanhoMastro = (tamanhoMastro1 * quantidadeMastro1) + (tamanhoMastro2 * quantidadeMastro2);
  var totalMastro = (tamanhoMastro * precoMastro);
  var totalponteira = (quantidadeMastro + quantidadeponteira) * precoPonteira;
  var totalLona = metrosQuadrados * precoLona;
  var totalbase = bases * precobase;
  var totalhora = (metrosQuadrados * 0.8) * homemhora;
  var margemlucro = (margemlucro / 100) + 1;

  // Calculando o total geral
  var comp = ((totalMastro + totalLona + totalponteira + totalbase + totalhora) * 1.318);
  var totalGeral = ((totalMastro + totalLona + totalponteira + totalbase + totalhora) * 1.318) * margemlucro;

  // Exibindo o resultado na página
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "<h2>Orçamento</h2>" +
    "<p>Total Mastro: R$" + totalMastro.toFixed(2) + "</p>" +
    "<p>Total Vela: R$" + totalLona.toFixed(2) + "</p>" +
    "<p>Total Ponteiras: R$" + totalponteira.toFixed(2) + "</p>" +
    "<p>Total Bases: R$" + totalbase.toFixed(2) + "</p>" +
    "<p>Total Hora: R$" + totalhora.toFixed(2) + "</p>" +
    "<p>Composição: R$" + comp.toFixed(2) + "</p>" +
    "<p>Total Geral: R$" + totalGeral.toFixed(2) + "</p>";
}
