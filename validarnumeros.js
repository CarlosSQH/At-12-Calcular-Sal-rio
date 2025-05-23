function validarNumeros(event) {
    const keyCode = event.keyCode || event.which;
    if (keyCode >= 48 && keyCode <= 57) { 
        return true;
    } else {
        return false; 
    }
}
//Ideia dada pelo professor Alisson