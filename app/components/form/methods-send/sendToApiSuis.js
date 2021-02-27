import axios from 'axios'
import {database} from "../../../db/database"
const sendToApiSuis = (obj, nextStep, functSetStatusSend, setDataGlobal, idUser, dataSendArr, funcSetAvtive) => {
    console.log(obj);
    const formData = new FormData();
    // * Caso
    formData.append("user", obj.username);
    formData.append("password", obj.password)
    obj.nroFicha !== null && formData.append("nroFicha", obj.nroFicha)
    obj.fechaElaboracion !== null && formData.append("fechaElaboracion", obj.fechaElaboracion)
    obj.estSalud !== null && formData.append("idEstablecimiento", obj.estSalud)
    obj.ultimaEscala !== null && formData.append("ultimaEscala",obj.ultimaEscala)
    obj.nroVuelo !== null && formData.append("nroVuelo", obj.nroVuelo)
    obj.idAerolinea !== null && formData.append("idAerolinea", obj.idAerolinea)
    obj.idPaisProcedencia !== null && formData.append("idPaisProcedencia", obj.idPaisProcedencia)
    obj.fechaArribo !== null && formData.append("fechaArribo", obj.fechaArribo)
    obj.idAeropuerto !== null && formData.append("idAeropuerto", obj.idAeropuerto)
    obj.viaIngreso !== null && formData.append("viaIngreso", obj.viaIngreso)
    // * Persona
    formData.append("menorNoCedulado", obj.ninioCdulado ? 1 : 0)
    formData.append("nroHijo", parseInt(obj.nroHijo))
    formData.append("idNacionalidad", obj.nacionalidad)
    formData.append("idTipoDocumento", obj.tipoDocumento)
    obj.cedula !== null && formData.append("cedula", parseInt(obj.cedula))
    obj.pasaporte !== null && formData.append("pasaporte", obj.pasaporte)
    obj.primerNombre !== null && formData.append("primerNombre", obj.primerNombre)
    obj.segundoNombre !== null && formData.append("segundoNombre", obj.segundoNombre)
    obj.primerApellido !== null && formData.append("primerApellido", obj.primerApellido)
    obj.segundoApellido !== null && formData.append("segundoApellido", obj.segundoApellido)
    formData.append("idSexo", obj.sexo)
    formData.append("fechaNacimiento", obj.fechaNacimiento)
    formData.append("edad", obj.edad)
    formData.append("idParroquia", parseInt(obj.parroquia))
    // * Direccion
    obj.zonaIndustrial.length > 0 && formData.append("urbanizacion", obj.zonaIndustrial)
    obj.avenidaCalle.length > 0 && formData.append("calle", obj.avenidaCalle)
    obj.casaEdificio.length > 0 && formData.append("casa", obj.casaEdificio)
     obj.pisoPlanta.length > 0 && formData.append("piso", obj.pisoPlanta)
    formData.append("telfMovil", obj.tlf)
    formData.append("telfLocal", obj.tlfHabitacion)
    formData.append("idOcupacion", Math.trunc(obj.ocupacion))
    // * Representante
    formData.append("idNacionalidadRepresentante", obj.nacionalidadRepresentante)
    obj.cedulaRepresentante !== null && formData.append("cedulaRepresentante", obj.cedulaRepresentante)
    obj.nombreRepresentante !== null && formData.append("nombreRepresentante", obj.nombreRepresentante)
    // * Lugar atencion
    obj.parroquiaLugarAtencion !== null && formData.append("idParroquiaLugarAtencion", parseInt(obj.parroquiaLugarAtencion))
    // * Condicion sospecha
    obj.medico !== null && formData.append("medico", obj.medico)
    formData.append("sintomatico",obj.sintomatico)
    formData.append("fechaInicioSintoma", obj.fechaSintoma)
    // * Poblacion Riesgo
    obj.poblacionRiesgo.length > 0 && obj.poblacionRiesgo.map(id => {
        formData.append("idsPoblacionRiesgo[]", parseInt(id))
     })
    // for (const id of obj.poblacionRieso) {
    //     formData.append("idsPoblacionRiesgo[]", id)
    //   }
    
    // * Embarazada
    parseInt(obj.nroSemanasGestacion) > 0 && formData.append("nroSemanasGestacion", obj.nroSemanasGestacion)
    parseInt(obj.nroGesta) > 0 &&  formData.append("nroGesta", obj.nroGesta)
    parseInt(obj.nroPartos) > 0 &&  formData.append("nroPartos", obj.nroPartos)
    parseInt(obj.nroAbortos) > 0 &&  formData.append("nroAbortos", obj.nroAbortos)
    parseInt(obj.nroCesareas) > 0 &&  formData.append("nroCesareas", obj.nroCesareas)
    obj.culminacionEmbarazo !== null && formData.append("culminacionEmbarazo", obj.culminacionEmbarazo)
    obj.procedimiento !== null && formData.append("procedimiento", obj.procedimiento)
    formData.append("isComplicacion", obj.isComplicacion ? 1 : 0)
    obj.complicacion !== null && formData.append("complicacion", obj.complicacion)
    // * Recien nacido
    parseInt(obj.nacimiento) > 0 && formData.append("nacimiento", parseInt(obj.nacimiento))
    parseInt(obj.edadGesta) > 0 && formData.append("edadGesta", obj.edadGesta)
    obj.sexoRecienNacido !== null && formData.append("sexoRecienNacido", obj.sexoRecienNacido)
    parseInt(obj.peso) > 0 && formData.append("peso", obj.peso)
    parseInt(obj.talla) > 0 && formData.append("talla", obj.talla)
    formData.append("isComplicacionRecienNacido", obj.isComplicacionRecienNacido ? 1 : 0)
    obj.complicacionRecienNacido !== null && formData.append("complicacionRecienNacido", parseInt(obj.complicacionRecienNacido))
    parseInt(obj.relacionPcr) !== 0 && formData.append("realizoPcrRecienNacido", obj.relacionPcr ? 1 : 0)
    obj.resultado !== null && formData.append("resultadoRecienNacido", obj.resultado)
    // * Muestra
    obj.tipoExamen !== null && formData.append("idTipoExamen", parseInt(obj.tipoExamen))
    obj.resultadoTipoExamen !== null && formData.append("resultado", obj.resultadoTipoExamen)
    obj.fechaTomaMuestra.length > 0 && formData.append("fechaTomaMuestra", obj.fechaTomaMuestra)
    obj.codigoBarra !== null && formData.append("codigoBarras", obj.codigoBarra)
    obj.observaciones !== null && formData.append("observaciones", obj.observaciones)
    console.log(formData)
    axios.post('http://sistemas.mpps.gob.ve/index.php/api/registro-simple-covid19',
    //axios.post('http://127.0.0.1:8080/suis/web/index.php/api/registro-simple-covid19',
    //24039921
        formData,
        {
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(r => {
            if (r.data.status) {
                if (r.data.status === 200) {
                    dataSendArr[1] = 'done'
                    database.insertFicha(dataSendArr, nextStep, funcSetAvtive)
                    database.getFicha(setDataGlobal, idUser)
                    funcSetAvtive(false)
                }else if(r.data.status === 400) {
                    let  errors = ''
                    const  errorsIndex = Object.keys(r.data.errors)
                    for( let errorsTwo of errorsIndex) {
                        if (r.data.errors[errorsTwo].length > 0) {
                            errors += r.data.errors[errorsTwo][0] + "\n"
                            
                        }
                    }
                    funcSetAvtive(false)
                    alert(errors)
                }else if(r.data.status === 500) {
                    let  errors = ''
                    const  errorsIndex = Object.keys(r.data.errors)
                    for( let errorsTwo of errorsIndex) {
                        if (r.data.errors[errorsTwo].length > 0) {
                            errors += r.data.errors[errorsTwo][0] + "\n"
                            
                        }
                    }
                    funcSetAvtive(false)
                    alert(errors)
                }else {
                    let  errors = ''
                    const  errorsIndex = Object.keys(r.data.errors)
                    for( let errorsTwo of errorsIndex) {
                        if (r.data.errors[errorsTwo].length > 0) {
                            errors += r.data.errors[errorsTwo][0] + "\n"
                            
                        }
                    }
                    funcSetAvtive(false)
                    alert(errors)
                }
            }else {
                alert(r.data)
                funcSetAvtive(false)
            }
        }).catch(e => {
            if (e.message === "Network Error") {
                dataSendArr[1] = 'processing'
                database.insertFicha(dataSendArr, nextStep, funcSetAvtive)
                database.getFicha(setDataGlobal, idUser)
                funcSetAvtive(false)
                alert("Por favor, revise su conexion e intente de nuevo")
            }else {
                dataSendArr[1] = 'processing'
                database.insertFicha(dataSendArr, nextStep, funcSetAvtive)
                funcSetAvtive(false)
                database.getFicha(setDataGlobal, idUser)
                alert("Estamos teniendo errores internos, por favor espere")
                alert(e);
            }
            
        })
}
export const sendToApiSuisF = {
    sendToApiSuis
}   