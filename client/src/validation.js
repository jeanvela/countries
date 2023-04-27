const validation = (input,errorsState) => {
    let errors = {...errorsState}
    if (!input.name) {
        errors.name = 'Este campo no puede estar vacio'
    } else if (input.name.length > 20) {
        errors.name = 'No se permiten mas de 20 caracteres'
    } else {
        errors.name = ''
    }

    if (!input.difficulty) {
        errors.difficulty = 'No puede estar vacio'
    } else if (isNaN(input.difficulty)) {
        errors.difficulty = 'Tiene que ser solo numeros'
    } else if (input.difficulty > 5) {
        errors.difficulty = 'La dificultad no puede ser mayor a 5'
    } else {
        errors.difficulty = ''
    }
 
   if (!input.duration) {
        errors.duration = 'Este campo no puede estar vacio'
   } else if (isNaN(input.duration)) {
        errors.duration = 'Tiene que ser solo numeros'
   } else if (input.duration > 24) {
        errors.duration = 'La duracion no puede ser mayor a 24'
   } else {
    errors.duration = ''
   }

   if (!input.season) {
    errors.season = 'Elije una opcion'
   } else {
    errors.season = ''
   }
    return errors
}

export default validation