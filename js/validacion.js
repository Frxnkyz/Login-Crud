/***********************************************************/
/*               VALIDACION DE INSERCCION.HTML             */
/*               FRANCISCO ROMERO ZARCO                   */
/*                                                        */
/**********************************************************/


function validarFormulario() {
    let correcto = true;
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let terminos = document.getElementById('terminos');

    if(nombre == "" || /^\s+$/.test(nombre) || !/[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(nombre)){
        document.getElementById("nombreHelp").style.visibility="visible";
        document.getElementById("nombre").style.borderColor="red";
        correcto = false ; 
        
    }

    if (apellidos === "" || /^\s+$/.test(apellidos) || !/[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(apellidos)) {
        document.getElementById("apellidosHelp").textContent = "Por favor, ingresa apellidos válidos.";
        correcto = false;
    } else {
        document.getElementById("apellidosHelp").textContent = "";
    }

    if (email === "" || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        document.getElementById("emailHelp").textContent = "Por favor, ingresa un correo electrónico válido.";
        correcto = false;
    } else {
        document.getElementById("emailHelp").textContent = "";
    }

    if (pass === "" || !/[A-ZÑ]/.test(pass) || !/[a-zñ]/.test(pass) || !/[0-9]/.test(pass) || !/[.,;+-_&%$¡!¿?]/.test(pass) || !(pass.length >= 8 && pass.length <= 15)) {
        document.getElementById("passHelp").textContent = "La contraseña debe tener al menos 8 caracteres y contener al menos una mayúscula, una minúscula, un número y un carácter especial.";
        correcto = false;
    } else {
        document.getElementById("passHelp").textContent = "";
    }

    if (!terminos.checked) {
        document.getElementById("terminosHelp").textContent = "Debes aceptar los términos y condiciones.";
        correcto = false;
    } else {
        document.getElementById("terminosHelp").textContent = "";
    }

    return correcto;
}

document.getElementById('formulario').addEventListener('submit', function (event) {
    if (!validarFormulario()) {
        event.preventDefault();
    }
});
