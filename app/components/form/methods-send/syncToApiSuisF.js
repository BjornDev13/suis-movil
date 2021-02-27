import axios from 'axios'
import { database } from "../../../db/database"
/**
 * 
 * @param {*} username username del usuario
 * @param {*} password su clave
 * @param {*} d el objeto que contiene la data
 * @param {*} stopSync metodo para detener el proceso
 * @param {*} id id del registro para actualizar en db local
 */
const syncToApiSuis = (username, password, d, stopSync, setTotalRowsFunc, total, setDataGlobal ,idUser) => {
    //console.log(d)
    const formData = new FormData();
    formData.append("user", username);
    formData.append("password", password);
    d.nroFicha !== null && formData.append("nroFicha", d.nroFicha);
    d.fechaElaboracion !== null && formData.append("fechaElaboracion", d.fechaElaboracion);
    d.estSalud !== null && formData.append("idEstablecimiento", d.estSalud);
    d.ultimaEscala !== null && formData.append("ultimaEscala", Math.trunc(d.ultimaEscala));
    d.nroVuelo !== null && formData.append("nroVuelo", d.nroVuelo);
    d.idAerolinea !== null && formData.append("idAerolinea", Math.trunc(d.idAerolinea));
    d.idPaisProcedencia !== null && formData.append("idPaisProcedencia", Math.trunc(d.idPaisProcedencia));
    d.fechaArribo !== null && formData.append("fechaArribo", d.fechaArribo);
    d.idAeropuerto !== null && formData.append("idAeropuerto", Math.trunc(d.idAeropuerto));
    d.viaIngreso !== null && formData.append("viaIngreso", Math.trunc(d.viaIngreso));
    // * Persona
    formData.append("menorNoCedulado", parseInt(d.ninioCdulado));
    formData.append("nroHijo", Math.trunc(d.nroHijo));
    formData.append("idNacionalidad", Math.trunc(d.nacionalidad))
    formData.append("idTipoDocumento", Math.trunc(d.tipoDocumento))
    d.cedula !== null && formData.append("cedula", parseInt(d.cedula))
    d.pasaporte !== null && formData.append("pasaporte", d.pasaporte)
    d.primerNombre !== null && formData.append("primerNombre", d.primerNombre)
    d.segundoNombre !== null && formData.append("segundoNombre", d.segundoNombre)
    d.primerApellido !== null && formData.append("primerApellido", d.primerApellido)
    d.segundoApellido !== null && formData.append("segundoApellido", d.segundoApellido)
    formData.append("idSexo", Math.trunc(d.sexo))
    formData.append("fechaNacimiento", d.fechaNacimiento)
    formData.append("edad", Math.trunc(d.edad))
    formData.append("idParroquia", Math.trunc(d.parroquia))
    // * Direccion
    d.zonaIndustrial.length > 0 && formData.append("urbanizacion", d.zonaIndustrial);
    d.avenidaCalle.length > 0 && formData.append("calle", d.avenidaCalle)
    d.casaEdificio.length > 0 && formData.append("casa", d.casaEdificio)
    d.pisoPlanta.length > 0 && formData.append("piso", d.pisoPlanta)
    formData.append("telfMovil", d.tlf)
    formData.append("telfLocal", d.tlfHabitacion)
    formData.append("idOcupacion", Math.trunc(d.ocupacion))
    // * Representante
    formData.append("idNacionalidadRepresentante", Math.trunc(d.nacionalidadRepresentante))
    d.cedulaRepresentante !== null && formData.append("cedulaRepresentante", Math.trunc(d.cedulaRepresentante))
    d.nombreRepresentante !== null && formData.append("nombreRepresentante", d.nombreRepresentante)
    // * Lugar atencion
    d.parroquiaLugarAtencion !== null && formData.append("idParroquiaLugarAtencion", Math.trunc(d.parroquiaLugarAtencion))
    // * Condicion sospecha
    d.medico !== null && formData.append("medico", d.medico)
    formData.append("sintomatico", Math.trunc(d.sintomatico))
    d.fechaSintoma.length > 0 && formData.append("fechaInicioSintoma", d.fechaSintoma)
    // * Poblacion Riesgo
    d.poblacionRiesgo.length > 0 && formData.append("idsPoblacionRiesgo[]", Math.trunc(d.poblacionRiesgo))

    // * Embarazada
    Math.trunc(d.nroSemanasGestacion) > 0 && formData.append("nroSemanasGestacion", Math.trunc(d.nroSemanasGestacion))
     Math.trunc(d.nroGesta) > 0 && formData.append("nroGesta", Math.trunc(d.nroGesta))
     Math.trunc(d.nroPartos) > 0 && formData.append("nroPartos", Math.trunc(d.nroPartos))
    Math.trunc(d.nroAbortos) > 0 && formData.append("nroAbortos", Math.trunc(d.nroAbortos))
    Math.trunc(d.nroCesareas) > 0 && formData.append("nroCesareas", Math.trunc(d.nroCesareas))
    d.culminacionEmbarazo !== null && formData.append("culminacionEmbarazo", d.culminacionEmbarazo)
    d.procedimiento !== null && formData.append("procedimiento", d.procedimiento)
    formData.append("isComplicacion", Math.trunc(d.isComplicacion) ? 1 : 0)
    d.complicacion !== null && formData.append("complicacion", d.complicacion)
    // * Recien nacido
    formData.append("nacimiento", Math.trunc(d.nacimiento))
    Math.trunc(d.edadGesta) !== 0 && formData.append("edadGesta", Math.trunc(d.edadGesta))
    Math.trunc(d.sexoRecienNacido) > 0 && formData.append("sexoRecienNacido", Math.trunc(d.sexoRecienNacido))
    Math.trunc(d.peso) > 0 && formData.append("peso", Math.trunc(d.peso))
    Math.trunc(d.talla) > 0 && formData.append("talla", Math.trunc(d.talla));
    formData.append("isComplicacionRecienNacido", Math.trunc(d.isComplicacionRecienNacido) ? 1 : 0)
    d.complicacionRecienNacido !== null && formData.append("complicacionRecienNacido", Math.trunc(d.complicacionRecienNacido));
    formData.append("realizoPcrRecienNacido", Math.trunc(d.relacionPcr))
    d.resultado !== null && formData.append("resultadoRecienNacido", d.resultado)
    // * Muestra
    d.tipoExamen !== null && formData.append("idTipoExamen", Math.trunc(d.tipoExamen))
    d.resultadoT !== null && formData.append("resultado", d.resultadoT)
    d.fechaTomaMuestra.length > 0 && formData.append("fechaTomaMuestra", d.fechaTomaMuestra)
    d.codigoBarra !== null && formData.append("codigoBarras", d.codigoBarra)
    d.observaciones !== null && formData.append("observaciones", d.observaciones)
    console.log(formData)
    axios.post('http://sistemas.mpps.gob.ve/index.php/api/registro-simple-covid19',
        //axios.post('http://127.0.0.1:8080/suis/web/index.php/api/registro-simple-covid19',
        formData,
        {
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(r => {
            if (r.data.status) {
                if (r.data.status === 200) {
                    /**
                     * ? ejecutamos la actualizacion en local
                     */
                    database.updateFicha('done', d.id);
                    setTotalRowsFunc(total - 1)
                    if (total <= 1) {
                        stopSync();
                        database.getFicha(setDataGlobal, idUser)
                        setTotalRowsFunc(0)
                        alert('Datos sincronizados correctamente!')
                    }
                } else if (r.data.status === 400) {
                    let errors = ''
                    console.log(r.data.errors)
                    const errorsIndex = Object.keys(r.data.errors)
                    for (let errorsTwo of errorsIndex) {
                        if (r.data.errors[errorsTwo].length > 0) {
                            errors += r.data.errors[errorsTwo][0] + "\n"
                        }
                    }
                    //stopSync()
                    database.getFicha(setDataGlobal, idUser)
                    setTotalRowsFunc(0)
                    console.log(r.data.status)
                    console.log(r.data.errors)
                    alert('Para la cedula ' + d.cedula + '\n'+ errors)
                } else if (r.data.status === 500) {
                    let errors = ''
                    const errorsIndex = Object.keys(r.data.errors)
                    for (let errorsTwo of errorsIndex) {
                        if (r.data.errors[errorsTwo].length > 0) {
                            errors += r.data.errors[errorsTwo][0] + "\n"
                        }
                    }
                    //stopSync()
                    database.getFicha(setDataGlobal, idUser)
                    setTotalRowsFunc(0)
                    console.log(r.data.status)
                    console.log(r.data.errors)
                    alert('Para la cedula ' + d.cedula + '\n'+ errors)
                } else {
                    let errors = ''
                    const errorsIndex = Object.keys(r.data.errors)
                    console.log(r.data.errors)
                    for (let errorsTwo of errorsIndex) {
                        if (r.data.errors[errorsTwo].length > 0) {
                            errors += r.data.errors[errorsTwo][0] + "\n"

                        }
                    }
                    //stopSync()
                    database.getFicha(setDataGlobal, idUser)
                    setTotalRowsFunc(0)
                    console.log(r.data.status)
                    console.log(r.data.errors)
                    alert('Para la cedula ' + d.cedula + '\n'+ errors)
                }
            } else {
                stopSync()
                database.getFicha(setDataGlobal, idUser)
                setTotalRowsFunc(0)
                alert(r.data)
            }
        }).catch(e => {
            if (e.message === "Network Error") {
                stopSync()
                database.getFicha(setDataGlobal, idUser)
                setTotalRowsFunc(0)
                alert(e)
                alert("Por favor, revise su conexion e intente de nuevo")
            } else {
                stopSync()
                database.getFicha(setDataGlobal, idUser)
                setTotalRowsFunc(0)
                console.log(e)
                alert(e);
                alert("Estamos teniendo errores internos, por favor espere")
            }

        })
}
export const syncToApiSuisF = {
    syncToApiSuis
}   