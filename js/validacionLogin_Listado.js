/******************************************* */
/******************************************* */
/**JS FORMULARIO LOGIN / LISTADO *********** */
/******************************************* */
/******************************************* */
/******************************************* */

/***********LOGIN*************** */

document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('LoginBoton');

    if (loginButton) {
        loginButton.addEventListener("click", function(event) {
            event.preventDefault(); 
            console.log("Validando formulario de login...");

            const usuarioInput = document.getElementById('usuario');
            const contraseñaInput = document.getElementById('contraseña');
            const usuarioHelp = document.getElementById('usuarioHelp');
            const contraseñaHelp = document.getElementById('contraseñaHelp');

            // Reiniciar los mensajes de error y el estilo
            usuarioHelp.innerText = '';
            usuarioHelp.classList.remove('error');
            contraseñaHelp.innerText = '';
            contraseñaHelp.classList.remove('error');

            // Validar el usuario
            if (usuarioInput.value.trim() === '') {
                usuarioHelp.innerText = 'Por favor, introduce tu usuario.';
                usuarioHelp.classList.add('error');
                console.log("Usuario no válido");
            }

            // Validar la contraseña
            if (contraseñaInput.value.trim() === '') {
                contraseñaHelp.innerText = 'Por favor, introduce tu contraseña.';
                contraseñaHelp.classList.add('error');
                console.log("Contraseña no válida");
            }

            
            if (usuarioHelp.innerText !== '' || contraseñaHelp.innerText !== '') {
                console.log("Se encontraron errores, deteniendo el envío del formulario.");
                return false;
            }

            
            console.log("Todos los campos son válidos, enviando el formulario o haciendo otra acción.");
        });
    } else {
        console.error("Botón de login no encontrado en el DOM.");
    }
});

/******************LISTADO********************* */
function confirmDelete() {
    
    document.getElementById('confirmationDialog').style.display = 'block';
}

function deleteUser() {
    
    console.log('Usuario eliminado');

    
    closeDialog();
}

function closeDialog() {
    
    document.getElementById('confirmationDialog').style.display = 'none';
}
