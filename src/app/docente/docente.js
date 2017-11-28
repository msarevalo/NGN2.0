function ActualizarDocente() {
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("actualizar").style.display="block";
  document.getElementById("VerEstudiante").style.display="none";
  document.getElementById("VerCursos").style.display="none";
  document.getElementById("CargarNotas").style.display="none";
  document.getElementById("resultadoEstudiante").style.display="none";
  document.getElementById("Cargar").style.display="none";
}

function VerEstudiante() {
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("actualizar").style.display="none";
  document.getElementById("VerEstudiante").style.display="block";
  document.getElementById("VerCursos").style.display="none";
  document.getElementById("CargarNotas").style.display="none";
  document.getElementById("resultadoEstudiante").style.display="none";
  document.getElementById("Cargar").style.display="none";
}

function VerCursos() {
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("actualizar").style.display="none";
  document.getElementById("VerEstudiante").style.display="none";
  document.getElementById("VerCursos").style.display="block";
  document.getElementById("CargarNotas").style.display="none";
  document.getElementById("resultadoEstudiante").style.display="none";
  document.getElementById("Cargar").style.display="none";
}

function CargarNotas() {
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("actualizar").style.display="none";
  document.getElementById("VerEstudiante").style.display="none";
  document.getElementById("VerCursos").style.display="none";
  document.getElementById("CargarNotas").style.display="block";
  document.getElementById("resultadoEstudiante").style.display="none";
  document.getElementById("Cargar").style.display="none";
}

function ResultadoEstudiante() {
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("actualizar").style.display="none";
  document.getElementById("VerEstudiante").style.display="block";
  document.getElementById("VerCursos").style.display="none";
  document.getElementById("CargarNotas").style.display="none";
  document.getElementById("resultadoEstudiante").style.display="block";
  document.getElementById("Cargar").style.display="none";
}

function  Cargar() {
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("actualizar").style.display="none";
  document.getElementById("VerEstudiante").style.display="none";
  document.getElementById("VerCursos").style.display="none";
  document.getElementById("CargarNotas").style.display="none";
  document.getElementById("resultadoEstudiante").style.display="none";
  document.getElementById("Cargar").style.display="block";
}

function validate(form) {

  // validation code here ...


  if(!valid) {
    alert('Please correct the errors in the form!');
    return false;
  }
  else {
    return confirm('Do you really want to submit the form?');
  }
}
