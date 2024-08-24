console.log("hola mundo");

// contacto
 const formulario = document.getElementById('formulario');

 formulario.addEventListener('submit', function(event) {
     event.preventDefault(); 

     const nombre = document.getElementById('nombre').value;
     const email = document.getElementById('email').value;
     const mensaje =document.getElementById('mensaje').value;

     console.log('Nombre:', nombre);
     console.log('Correo Electrónico:', email);
     console.log('Mensaje:', mensaje);

    

    if (!nombre) {
        alert ("Debes ingresar tu nombre para continuar");
    }

    if (!email) {
        alert ("Debes ingresr un correo electrónico");
    }

    if (!mensaje) {
        alert ("Debes agregar tu mensaje");
    }

    const regex = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/); 
    if (!regex.test(email.value)) {
            alert ("Correo no es válido");
    }
 });