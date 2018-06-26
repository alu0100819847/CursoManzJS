var dado = document.getElementById("dado");

function tirar(){

  var numero = Math.round(Math.random()*5)+1;
  dado.innerHTML = numero;
}
