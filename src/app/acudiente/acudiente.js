function Consultar() {
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("consultar").style.display="block";
  document.getElementById("actualizar").style.display="none";
}

function Actualizar() {
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("consultar").style.display="none";
  document.getElementById("actualizar").style.display="block";
}

angular.module("myApp", []).controller("myControl", function () {
  this.nombre = "Hola";
})
