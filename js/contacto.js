
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // chequeo de envio de form

    // Validate the inputs
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var address = document.getElementById('address').value.trim();
/*
    if (!fname.value.trim() || !lname || !email || !phone || !address) {
        alert('Tenés que llenar todos los campos');
        return;
    }
*/
    // Validación del nombre
    if (!fname.value.trim()){
        alert("Tenés que escribir tu nombre, por favor");
        return;
    } else {
        let n=fname.value.replace(/ /g, "");        
        if(!isNaN(n)){
            alert("Escribí tu nombre con letras, por favor");
            return;
        }
    }
    // Validacion para el apellido
    if (!lname.value.trim()) {
        alert("Escribí tu apellido, por favor");
        return;
    } else {
        let a=lname.value.replace(/ /g, ""); 
        if(!isNaN(a)){
            alert("Escribí tu apellido con letras, por favor");
            return;
        }
    }    
    
    // Validación para el email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert('Poné un e-mail válido, por favor');
        return;
    }

    // Validación para el número de telefono
    var phoneRegex = /^[0-9]{10}$/; // Asumiendo 10 digitos 
    if (!phoneRegex.test(phone)) {
        alert('Por favor ingresá un número de teléfono de 10 digitos');
        return;
    }
    // Validación de la dirección
    if (!address){
        alert("Escribí tu dirección, por favor");   
        return;
    }

    // con una validación exitosa se puede submetear el form
    //el formulario se envia    
    alert("Muchas gracias por enviar el formulario");
    myForm.submit();
    
});

//-----------------------------------------------------------------------------
