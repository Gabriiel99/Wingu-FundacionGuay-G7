const formulario = document.getElementById('registro-form');
const nombreInput = document.getElementById('first_name');
const apellidoInput = document.getElementById('last_name');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('phone');
const formTitle = document.getElementById('form-title');

nombreInput.addEventListener('input', validarCampoNombre);
apellidoInput.addEventListener('input', validarCampoApellido);
emailInput.addEventListener('input', validarCampoEmail);
telefonoInput.addEventListener('input', validarCampoTelefono);

function mostrarErrorCampo(campo, mensaje) {
  const campoError = document.getElementById(campo);
  campoError.innerHTML = mensaje;
  campoError.style.display = 'block';
}

function ocultarErrorCampo(campo) {
  const campoError = document.getElementById(campo);
  campoError.innerHTML = '';
  campoError.style.display = 'none';
}

function validarCampoNombre() {
  const nombre = nombreInput.value.trim();
  const nombreRegex = /^[a-zA-Z]+$/;

  if (nombre === '') {
    mostrarErrorCampo('nombre-error', getErrorMessage('Por favor, ingrese su nombre.', 'Please enter your name.'));
  } else if (!nombreRegex.test(nombre)) {
    mostrarErrorCampo('nombre-error', getErrorMessage('El nombre solo debe contener letras.', 'Name should only contain letters.'));
  } else {
    ocultarErrorCampo('nombre-error');
  }
}

function validarCampoApellido() {
  const apellido = apellidoInput.value.trim();
  const apellidoRegex = /^[a-zA-Z]+$/;

  if (apellido === '') {
    mostrarErrorCampo('apellido-error', getErrorMessage('Por favor, ingrese su apellido.', 'Please enter your last name.'));
  } else if (!apellidoRegex.test(apellido)) {
    mostrarErrorCampo('apellido-error', getErrorMessage('El apellido solo debe contener letras.', 'Last name should only contain letters.'));
  } else {
    ocultarErrorCampo('apellido-error');
  }
}

function validarCampoEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    mostrarErrorCampo('email-error', getErrorMessage('Por favor, ingrese su correo electrónico.', 'Please enter your email address.'));
  } else if (!emailRegex.test(email)) {
    mostrarErrorCampo('email-error', getErrorMessage('Por favor, ingrese una dirección de correo electrónico válida.', 'Please enter a valid email address.'));
  } else {
    ocultarErrorCampo('email-error');
  }
}

function validarCampoTelefono() {
  const telefono = telefonoInput.value.trim();
  const telefonoRegex = /^[0-9]+$/;

  if (telefono !== '' && !telefonoRegex.test(telefono)) {
    mostrarErrorCampo('telefono-error', getErrorMessage('Por favor, ingrese un número de teléfono válido.', 'Please enter a valid phone number.'));
  } else {
    ocultarErrorCampo('telefono-error');
  }
}

function validarCampos(event) {
  event.preventDefault();

  
  validarCampoNombre();
  validarCampoApellido();
  validarCampoEmail();
  validarCampoTelefono();

  // Verifico si hay errores en los campos
  const camposError = document.querySelectorAll('.campo-error');
  let tieneErrores = false;

  camposError.forEach((campo) => {
    if (campo.style.display === 'block') {
      tieneErrores = true;
    }
  });

  // Si hay errores, no se envía el formulario
  if (tieneErrores) {
    return;
  }

  // Si todos los campos son válidos, enviar el formulario
  formulario.submit();
}

function getErrorMessage(errorMessageEs, errorMessageEn) {
  if (formTitle.innerText === 'Donation Form') {
    return errorMessageEn;
  } else {
    return errorMessageEs;
  }
}

if (formulario) {
  formulario.addEventListener('submit', validarCampos);
}
