/******************************************* */
/******************************************* */
/**JS FORMULARIO ENSERCCION / Modificacion** */
/******************************************* */
/******************************************* */
/******************************************* */

/****************INSERCCION********************* */

document.addEventListener("DOMContentLoaded", function() {
    const inser = document.getElementById('formulario');

    if (inser) {
        inser.addEventListener("submit", function(event) {
            event.preventDefault(); 

            console.log("Validando formulario...");

            const nombreInput = document.getElementById('nombre');
            const apellidosInput = document.getElementById('apellidos');
            const usuarioInput = document.getElementById('usuario');
            const emailInput = document.getElementById('email');
            const passInput = document.getElementById('pass');
            const terminosCheckbox = document.getElementById('terminos');

            // Reiniciar los mensajes de error y el estilo
            const errorMessageElements = document.querySelectorAll('.help');
            errorMessageElements.forEach(function(element) {
                element.innerText = '';
                element.classList.remove('error');
            });

            // Validar el nombre
            if (nombreInput.value.trim() === '') {
                document.getElementById('nombreHelp').innerText = 'Por favor, introduce tu nombre.';
                document.getElementById('nombreHelp').classList.add('error');
                console.log("Nombre no válido");
            }

            // Validar los apellidos
            if (apellidosInput.value.trim() === '') {
                document.getElementById('apellidosHelp').innerText = 'Por favor, introduce tus apellidos.';
                document.getElementById('apellidosHelp').classList.add('error');
                console.log("Apellidos no válidos");
            }

            // Validar el usuario
            if (usuarioInput.value.trim() === '') {
                document.getElementById('usuarioHelp').innerText = 'Por favor, introduce tu usuario.';
                document.getElementById('usuarioHelp').classList.add('error');
                console.log("Usuario no válido");
            }

            // Validar el email
            if (emailInput.value.trim() === '') {
                document.getElementById('emailHelp').innerText = 'Por favor, introduce tu correo electrónico.';
                document.getElementById('emailHelp').classList.add('error');
                console.log("Email no válido");
            }

            // Validar la contraseña
            if (passInput.value.trim() === '') {
                document.getElementById('passHelp').innerText = 'Por favor, introduce tu contraseña.';
                document.getElementById('passHelp').classList.add('error');
                console.log("Contraseña no válida");
            }

            // Validar la aceptación de los términos
            if (!terminosCheckbox.checked) {
                document.getElementById('terminosHelp').innerText = 'Debes aceptar los términos y condiciones.';
                document.getElementById('terminosHelp').classList.add('error');
                console.log("Debes aceptar los términos y condiciones.");
            }

            // Si hay algún error, para el envio del formulario(consola del inspector)
            const errors = form.querySelectorAll('.help');
            for (let i = 0; i < errors.length; i++) {
                if (errors[i].innerText !== '') {
                    console.log("Se encontraron errores, deteniendo el envío del formulario.");
                    return false;
                }
            }

            // Para mirar en consola que todo esta listo 
            console.log("Todos los campos son válidos, enviando el formulario.");
            form.submit();
        });
    } else {
        console.error("Formulario no encontrado en el DOM.");
    }
});

/****************MODIFICACION********************* */
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('modificacion');

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            console.log("Validando formulario...");

            const nombreInput = document.getElementById('nombre');
            const apellidosInput = document.getElementById('apellidos');
            const usuarioInput = document.getElementById('usuario');
            const emailInput = document.getElementById('email');
            const passInput = document.getElementById('pass');
            const terminosCheckbox = document.getElementById('terminos');

            // Reiniciar los mensajes de error y el estilo
            const errorMessageElements = document.querySelectorAll('.help');
            errorMessageElements.forEach(function(element) {
                element.innerText = '';
                element.classList.remove('error');
            });

            // Validar el nombre
            if (nombreInput.value.trim() === '') {
                document.getElementById('nombreHelp').innerText = 'Por favor, introduce tu nombre.';
                document.getElementById('nombreHelp').classList.add('error');
                console.log("Nombre no válido");
            }

            // Validar los apellidos
            if (apellidosInput.value.trim() === '') {
                document.getElementById('apellidosHelp').innerText = 'Por favor, introduce tus apellidos.';
                document.getElementById('apellidosHelp').classList.add('error');
                console.log("Apellidos no válidos");
            }

            // Validar el usuario
            if (usuarioInput.value.trim() === '') {
                document.getElementById('usuarioHelp').innerText = 'Por favor, introduce tu usuario.';
                document.getElementById('usuarioHelp').classList.add('error');
                console.log("Usuario no válido");
            }

            // Validar el email
            if (emailInput.value.trim() === '') {
                document.getElementById('emailHelp').innerText = 'Por favor, introduce tu correo electrónico.';
                document.getElementById('emailHelp').classList.add('error');
                console.log("Email no válido");
            }

            // Validar la contraseña
            if (passInput.value.trim() === '') {
                document.getElementById('passHelp').innerText = 'Por favor, introduce tu contraseña.';
                document.getElementById('passHelp').classList.add('error');
                console.log("Contraseña no válida");
            }

            // Validar la aceptación de los términos
            if (!terminosCheckbox.checked) {
                document.getElementById('terminosHelp').innerText = 'Debes aceptar los términos y condiciones.';
                document.getElementById('terminosHelp').classList.add('error');
                console.log("Debes aceptar los términos y condiciones.");
            }

            // Si hay algún error, para el envio del formulario(consola del inspector)
            const errors = form.querySelectorAll('.help');
            for (let i = 0; i < errors.length; i++) {
                if (errors[i].innerText !== '') {
                    console.log("Se encontraron errores, deteniendo el envío del formulario.");
                    return false;
                }
            }

            // Para mirar en consola que todo esta listo 
            console.log("Todos los campos son válidos, enviando el formulario.");
            form.submit();
        });
    } else {
        console.error("Formulario no encontrado en el DOM.");
    }
});



