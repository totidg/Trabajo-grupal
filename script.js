const form = document.querySelector('form');
const tabla = document.getElementById('tabla');

form.addEventListener('submit', function (event) {
  // previene submitear el formulario
  event.preventDefault();

  // f.d Los objetos FormData permiten compilar un conjunto de pares clave/valor
  // e.t referencia al objeto en el cual se lanzo el evento
  const formData = new FormData(event.target);

  // El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
  const values = Object.fromEntries(formData);

  // Crea una fila dentro de tbody
  let tableRow = document.createElement('tr');
  tabla.appendChild(tableRow);

  // Crea las 5 columnas con los datos
  let tDataNombre = document.createElement('td');
  tableRow.appendChild(tDataNombre);
  tDataNombre.innerHTML = values.nombre;

  let tDataApellido = document.createElement('td');
  tableRow.appendChild(tDataApellido);
  tDataApellido.innerHTML = values.apellido;

  let tDataEdad = document.createElement('td');
  tableRow.appendChild(tDataEdad);
  tDataEdad.innerHTML = values.edad;

  let tDataDni = document.createElement('td');
  tableRow.appendChild(tDataDni);
  tDataDni.innerHTML = values.dni;

  let tDataCorreo = document.createElement('td');
  tableRow.appendChild(tDataCorreo);
  tDataCorreo.innerHTML = values.correo;

  // Vaciar inputs del form
  form.reset();
});
