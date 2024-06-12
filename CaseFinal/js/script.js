function ModoEscuro(button) {
    var square = document.getElementById("square");
    square.style.backgroundColor = "#000000";
    square.style.color = "white";
  
    var ModoEscuroAtivo = document.getElementById("txtNome", "txtTelefone", "txtOrigem", "txtDataContato", "txtObservacao" );
    ModoEscuroAtivo.style.backgroundColor = "#1C1C1C";
    ModoEscuroAtivo.style.color = "white";
  }