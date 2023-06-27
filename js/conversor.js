function calcularConversoes() {
  var categoriaSelecionada = document.getElementById("categorias").value;
  var unidadeDeMedidaDeOrigem = document.getElementById("unidadeDeMedidaDeOrigem").value;
  var unidadeDeMedidaDeSaida = document.getElementById("unidadeDeMedidaDeSaida").value;
  var valorQueSeraConvertido = document.getElementById("valorQueSeraConvertido").value;
  var resultadoDaConversao = 0;
  if (categoriaSelecionada == "comprimento") {
    resultadoDaConversao = conversaoComprimento(valorQueSeraConvertido, unidadeDeMedidaDeOrigem, unidadeDeMedidaDeSaida);
  } else if (categoriaSelecionada == "peso") {
    resultadoDaConversao = conversaoPeso(valorQueSeraConvertido, unidadeDeMedidaDeOrigem, unidadeDeMedidaDeSaida);
  } else if (categoriaSelecionada == "temperatura") {
    resultadoDaConversao = conversaoTemperatura(valorQueSeraConvertido, unidadeDeMedidaDeOrigem, unidadeDeMedidaDeSaida);
  }
  return resultadoDaConversao.toFixed(3);
}

function conversaoComprimento(valorQueSeraConvertido, unidadeDeMedidaDeOrigem, unidadeDeMedidaDeSaida) {
  var resultado = null;
  var valorFloat = parseFloat(valorQueSeraConvertido);
  if (unidadeDeMedidaDeOrigem == "cm" && unidadeDeMedidaDeSaida == "m") {
    resultado = valorFloat / 100;
  } else if (unidadeDeMedidaDeOrigem == "cm" && unidadeDeMedidaDeSaida == "in") {
    resultado = valorFloat * 0.3937;
  } else if (unidadeDeMedidaDeOrigem == "m" && unidadeDeMedidaDeSaida == "cm") {
    resultado = valorFloat / 0.01;
  } else if (unidadeDeMedidaDeOrigem == "m" && unidadeDeMedidaDeSaida == "in") {
    resultado = valorFloat * 39.37;
  } else if (unidadeDeMedidaDeOrigem == "in" && unidadeDeMedidaDeSaida == "cm") {
    resultado = valorFloat / 0.3937;
  } else if (unidadeDeMedidaDeOrigem == "in" && unidadeDeMedidaDeSaida == "m") {
    resultado = valorFloat / 39.37;
  }
  return resultado;
}

function conversaoPeso(valorQueSeraConvertido, unidadeDeMedidaDeOrigem, unidadeDeMedidaDeSaida) {
  var resultado = null;
  var valorFloat = parseFloat(valorQueSeraConvertido);
  if (unidadeDeMedidaDeOrigem == "kg" && unidadeDeMedidaDeSaida == "kg") {
    resultado = valorFloat / 1000;
  } else if (unidadeDeMedidaDeOrigem == "g" && unidadeDeMedidaDeSaida == "lb") {
    resultado = valorFloat * 0.0022046;
  } else if (unidadeDeMedidaDeOrigem == "kg" && unidadeDeMedidaDeSaida == "g") {
    resultado = valorFloat / 0.001;
  } else if (unidadeDeMedidaDeOrigem == "kg" && unidadeDeMedidaDeSaida == "lb") {
    resultado = valorFloat * 2.2046;
  } else if (unidadeDeMedidaDeOrigem == "lb" && unidadeDeMedidaDeSaida == "g") {
    resultado = valorFloat / 0.0022046;
  } else if (unidadeDeMedidaDeOrigem == "lb" && unidadeDeMedidaDeSaida == "kg") {
    resultado = valorFloat / 2.2046;
  }
  return resultado;
}

function conversaoTemperatura(valorQueSeraConvertido, unidadeDeMedidaDeOrigem, unidadeDeMedidaDeSaida) {
  var resultado = null;
  var valorFloat = parseFloat(valorQueSeraConvertido);
  if (unidadeDeMedidaDeOrigem == "℃" && unidadeDeMedidaDeSaida == "℉") {
    resultado = valorFloat * 1.8 + 32;
  } else if (unidadeDeMedidaDeOrigem == "℃" && unidadeDeMedidaDeSaida == "K") {
    resultado = valorFloat + 273.15;
  } else if (unidadeDeMedidaDeOrigem == "℉" && unidadeDeMedidaDeSaida == "℃") {
    resultado = (valorFloat - 32) / 1.8;
  } else if (unidadeDeMedidaDeOrigem == "℉" && unidadeDeMedidaDeSaida == "K") {
    resultado = (valorFloat - 32) / 1.8 + 273.15;
  } else if (unidadeDeMedidaDeOrigem == "K" && unidadeDeMedidaDeSaida == "℃") {
    resultado = valorFloat - 273.15;
  } else if (unidadeDeMedidaDeOrigem == "K" && unidadeDeMedidaDeSaida == "℉") {
    resultado = (valorFloat - 273.15) * 1.8 + 32;
  }
  return resultado;
}
