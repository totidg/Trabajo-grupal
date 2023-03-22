const form = document.querySelector('form');
const tabla = document.getElementById('tabla');

form.addEventListener('submit', function (event) {
  // previene submitear el formulario
  event.preventDefault();

  // https://developer.mozilla.org/en-US/docs/Web/API/FormData
  const formData = new FormData(event.target);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
  const values = Object.fromEntries(formData);

  // agregar validaciones
  if (values.nombre.length == 5) {
    alert('es igual a 5'); 
    return;
  }


  // Crea una fila dentro de tbody
  let tr1 = document.createElement('tr');
  tabla.appendChild(tr1);

  // Crea las 5 columnas con los datos
  let tdNombre = document.createElement('td');
  tr1.appendChild(tdNombre);
  tdNombre.innerHTML = values.nombre;

  let tdApellido = document.createElement('td');
  tr1.appendChild(tdApellido);
  tdApellido.innerHTML = values.apellido;

  let tdEdad = document.createElement('td');
  tr1.appendChild(tdEdad);
  tdEdad.innerHTML = values.edad;

  let tdDni = document.createElement('td');
  tr1.appendChild(tdDni);
  tdDni.innerHTML = values.dni;

  let tdCorreo = document.createElement('td');
  tr1.appendChild(tdCorreo);
  tdCorreo.innerHTML = values.correo;
});