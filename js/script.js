function converterUnidades() {
  var categorias = document.getElementById("categorias");
  var valorQueSeraConvertido = document.getElementById("valorQueSeraConvertido");
  var resultadoNaTela = document.getElementById("resultadoNaTela");
  var unidadeDeMedidaDeSaida = document.getElementById("unidadeDeMedidaDeSaida").value;
  if (categorias.value == "" || valorQueSeraConvertido.value == "") {
    alert("Erro! Preencha todos os campos com *.");
    return;
  }
  var resultadoFinal = calcularConversoes();
  resultadoNaTela.innerHTML = resultadoFinal.toString().replace(".", ",") + " " + unidadeDeMedidaDeSaida;
}

function preencherOpcoesUnidadeMedida() {
  var categoriaSelecionada = document.getElementById("categorias").value;
  var selectOrigem = document.getElementById("unidadeDeMedidaDeOrigem");
  var selectSaida = document.getElementById("unidadeDeMedidaDeSaida");
  //   var selectGeral = document.getElementById("geral");
  //   adicionarOpcoesDeComprimento(selectGeral);
  if (categoriaSelecionada == "comprimento") {
    adicionarOpcoesDeComprimento(selectOrigem);
    adicionarOpcoesDeComprimento(selectSaida);
    return;
  }
  if (categoriaSelecionada == "peso") {
    adicionarOpcoesDePeso(selectOrigem);
    adicionarOpcoesDePeso(selectSaida);
    return;
  }
  if (categoriaSelecionada == "temperatura") {
    adicionarOpcoesDeTemperatura(selectOrigem);
    adicionarOpcoesDeTemperatura(selectSaida);
    return;
  }
}
// Função adicionarOpcoesDeComprimento receba como parametro o elemento select.
// Portanto, com essa alteração devemos alterar aonde essa função é chamada para passar o elemento select como argumento.
function adicionarOpcoesDeComprimento(select) {
  //Adiciona <option value="metros">Metros</option> dentro do select por meio do JS utilizando DOM
  select.options[0] = new Option("Centímetros (cm)", "cm");
  select.options[1] = new Option("Metros (m)", "m");
  select.options[2] = new Option("Polegadas (in)", "in");
}

function adicionarOpcoesDePeso(select) {
  //Adiciona <option value="metros">Metros</option> dentro do select por meio do JS utilizando DOM
  select.options[0] = new Option("Gramas (g)", "g");
  select.options[1] = new Option("Libras (lb)", "lb");
  select.options[2] = new Option("Quilogramas (kg)", "kg");
}

function adicionarOpcoesDeTemperatura(select) {
  //Adiciona <option value="metros">Metros</option> dentro do select por meio do JS utilizando DOM
  select.options[0] = new Option("Celsius (℃)", "℃");
  select.options[1] = new Option("Fahrenheit (℉)", "℉");
  select.options[2] = new Option("Kelvin (K)", "K");
}
