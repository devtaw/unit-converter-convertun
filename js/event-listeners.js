var selecaoCategorias = document.getElementById("categorias");
var selectOrigem = document.getElementById("unidadeDeMedidaDeOrigem");
var selectSaida = document.getElementById("unidadeDeMedidaDeSaida");
var botaoConverter = document.getElementById("botaoDeConverter");

var linkComprimento = document.getElementById("menuComprimento");
var linkPeso = document.getElementById("menuPeso");
var linkTemperatura = document.getElementById("menuTemperatura");

selecaoCategorias.addEventListener("change", preencherOpcoesUnidadeMedida);
botaoConverter.addEventListener("click", converterUnidades);

linkComprimento.addEventListener("click", () => {
  selecaoCategorias.value = "comprimento";
  adicionarOpcoesDeComprimento(selectOrigem);
  adicionarOpcoesDeComprimento(selectSaida);
});

linkPeso.addEventListener("click", () => {
  selecaoCategorias.value = "peso";
  adicionarOpcoesDePeso(selectOrigem);
  adicionarOpcoesDePeso(selectSaida);
});

linkTemperatura.addEventListener("click", () => {
  selecaoCategorias.value = "temperatura";
  adicionarOpcoesDeTemperatura(selectOrigem);
  adicionarOpcoesDeTemperatura(selectSaida);
});
