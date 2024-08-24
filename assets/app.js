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

    if (!nombre || !email || !mensaje) {
        alert ("Debes ingresar todos los campos para continuar");   
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
            alert ("Correo no es válido");
    }else {
        alert(" el correo esta ok")
    } 
 });