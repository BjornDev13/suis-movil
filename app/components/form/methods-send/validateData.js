function ValidateData(obj, funcSetAvtive) {

    var hasError = false
    var typeError = null
    var when = null
    /**
     * ? codigos para los errores
     */
    const camposRequeridos = 300;
    const valorNoValido = 303;
    /**
     * ? objeto a devolver
     */


    /**
     * ! Validamos que los campos requeridos existan o no esten vacios
     */
    if (obj.tipoExamen !== null && obj.nacionalidad !== null && obj.tipoDocumento !== null && obj.primerNombre !== null & obj.parroquia !== null) {
        /**
         * ! ahora validamos el tipo de datos que traen
         * ? para eso creamos las variables que nos ayudaran a verificar su tipo de dato
         * * isString
         * * isNumber
         * * isBoolean
         */

        if (isNumber(obj.tipoExamen) && isNumber(obj.nacionalidad) && isNumber(obj.tipoDocumento) && isString(obj.primerNombre) && isNumber(obj.parroquia) && isNumber(obj.sintomatico)) {
            /**
             * ? validamos ciertos valores dependiendo del caso 
             * ! verificamos que si es menor el campo de nro hijo no este vacio
             */
            if (obj.ninioCdulado) {
                /**
                 * ? si lo esta seteamos la variable de errores
                 */
                if (obj.nroHijo === null) {
                    hasError = true
                    typeError = camposRequeridos
                    when = 'el Nro de hijos no puede estar vacio'
                    funcSetAvtive(false)
                }
            }
            // /**
            //  * ! verificamos nro de telefono
            //  */
            // else if (obj.tlfHabitacion < 11 || obj.tlfHabitacion > 11) {
            //     hasError = true
            //     typeError = valorNoValido
            //     when = 'El Nro de telefono debe contener 11 caracteres'
            //     funcSetAvtive(false)
            // }
            // else if (obj.tlf < 11 || obj.tlf > 11) {
            //     hasError = true
            //     typeError = valorNoValido
            //     when = 'El Nro de telefono debe contener 11 caracteres'
            //     funcSetAvtive(false)
            // }
            /**
            * ! verificamos la cedula o el pasaporte
            */
            else if (obj.tipoDocumento === 1) {
                if (obj.cedula !== null) {
                    if (!isNumber(parseInt(obj.cedula))) {
                        hasError = true
                        typeError = valorNoValido
                        when = 'La cedula tiene que ser numerica'
                        funcSetAvtive(false)
                    }
                } else {
                    hasError = true
                    typeError = camposRequeridos
                    when = 'La cedula puede estar vacia'
                    funcSetAvtive(false)
                }
            } else if (obj.tipoDocumento === 2) {
                if (obj.pasaporte === null) {
                    hasError = true
                    typeError = camposRequeridos
                    when = 'El pasaporte no puede estar vacio'
                    funcSetAvtive(false)
                }
            }
            /**
             * ! varificamos fecha inicio sintoma
             */
            else if (obj.sintomatico) {
                if (obj.fechaSintoma.length === null) {
                    hasError = true
                    typeError = camposRequeridos
                    when = 'Sintomatico no puede estar vacio'
                    funcSetAvtive(false)
                }
            }
            /**
             * ! verificamos la complicacion
             */
            else if (obj.isComplicacion) {
                if (obj.complicacion === null) {
                    hasError = true
                    typeError = camposRequeridos
                    when = 'Complicacion no puede estar vacio'
                    funcSetAvtive(false)
                }
            }
            /**
             * ! verificamos complicacion para recien nacido
             */
            else if (obj.isComplicacionRecienNacido) {
                if (obj.complicacionRecienNacido === null) {
                    hasError = true
                    typeError = camposRequeridos
                    when = 'Complicacion para el recien nacido  no puede estar vacio'
                    funcSetAvtive(false)
                }
            }
            /**
             * TODO si nada da error mandamos los datos al api
             */
        } else {
            hasError = true
            typeError = valorNoValido
            when = 'varifique el tipo de dato que esta ingresando one'
            funcSetAvtive(false)
        }
    } else {
        hasError = true
        typeError = camposRequeridos
        when = 'debe rellenar los campos requeridos one'
        funcSetAvtive(false)
    }
    const result = {
        hasError: hasError,
        typeError: typeError,
        when: when,
        tipoExamen: obj.tipoExamen,
        nacionalidad: obj.nacionalidad,
        tipoDocumento: obj.tipoDocumento,
        primerNombre: obj.primerNombre,
        parroquia: obj.parroquia,
        sintomatico: obj.sintomatico,
        cedula: obj.cedula
    }
    return result;

}
function isString(string) {
    const stringv = 's';
    if (typeof string === typeof stringv) {
        return true
    } else return false
};
function isNumber(int) {
    const intv = 11;
    if (typeof int === typeof intv) {
        return true
    } else {
        return false
    }
};
function isBoolean(booleanV) {
    const booleanv = true;
    if (typeof booleanv === typeof booleanV) {
        return true
    } else {
        return false
    }
};

export const validateData = {
    ValidateData
}