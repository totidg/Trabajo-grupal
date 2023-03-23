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

  // Vaciar inputs del form
  form.reset()
});