import React, { useEffect, useState, useContext } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native';
import FormStyle from "../assets/styles/formStyle";
import PaginatorStepForm from '../components/form/PaginatorStepForm';
import StepOne from '../components/form/StepOne';
import StepTwoA from '../components/form/StepTwoA';
import StepThreeA from '../components/form/StepThreeA';
import StepFourA from '../components/form/StepFourA';
import StepFive from '../components/form/StepFive';
import Success from '../components/form/Success';
import Buttons from '../components/form/Buttons';
import { database } from "../db/database"
import { GlobalContext } from '../context/MyContext'
import {validateData} from '../components/form/methods-send/validateData';
import {sendToApiSuisF} from '../components/form/methods-send/sendToApiSuis'
import Spinner from 'react-native-loading-spinner-overlay';
const height = Dimensions.get("window").height;
function Form({ navigation }) {
    const gC = useContext(GlobalContext);
    const [contBtnJustify, setContBtnJustify] = useState('center')
    const [btnBackActive, setBtnBackActive] = useState('none');
    const [btnNextActive, setBtnNextActive] = useState('flex');
    const [widthBtnNext, setWidthBtnNext] = useState(360);
    const [step, setStep] = useState(1);
    /**
     * ! values of form
     */
    /**
     * * BEGIN NOTIFICACION
     * TODO !change the value by userId
     */
    const [userId, setUserId] = useState(gC.idUsers)
    const [statusSend, setStatusSend] = useState('processing');
    const [nroFicha, setNroFicha] =  useState(null);
    const [fechaElaboracion, setFechaElaboracion] = useState(null);
    const [estSalud, setEstSalud] = useState(null);
    const [ninioCdulado, setNinioCdulado] = useState(false);
    const [nroHijo, setNroHijo] = useState(0);
    const [nacionalidad, setNacionalidad] = useState(1);
    const [tipoDocumento, setTipoDocumento] = useState(1);
    const [cedula, setCedula] = useState(null);
    const [pasaporte, setPasaporte] = useState(null);
    const [primerNombre, setPrimerNombre] = useState(null);
    const [segundoNombre, setSegundoNombre] = useState(null);
    const [primerApellido, setPrimerApellido] = useState(null);
    const [segundoApellido, setSegundoApellido] = useState(null);
    const [sexo, setSexo] = useState(1);
    const [fechaNacimiento, setFechaNacimiento] = useState(null);
    const [edad, setEdad] =  useState(0);
    const [estado, setEstado] = useState(null);
    const [municipio, setMunicipio] = useState(null);
    const [parroquia, setParroquia] = useState(null);
    const [zonaIndustrial, setZonaIndustrial] = useState("");
    const [avenidaCalle, setAvenidaCalle] = useState("");
    const [casaEdificio, setCasaEdificio] = useState("");
    const [pisoPlanta, setPisoPlanta] = useState("");
    const [tlf, setTlf] = useState("");
    const [tlfHabitacion, setTlfHabitacion] = useState("");
    const [ocupacion, setOcupacion] = useState(null);
    const [nacionalidadRepresentante, setNacionalidadRepresentante] = useState(1);
    const [cedulaRepresentante, setCedulaRepresentante] = useState(null);
    const [nombreRepresentante, setNombreRepresentante] = useState(null);
    const [estadoLugarAtencion, setEstadoLugarAtencion] = useState(null);
    const [municipioLugarAtencion, setMunicipioLugarAtencion] = useState(null);
    const [parroquiaLugarAtencion, setParroquiaLugarAtencion] = useState(null);
    const [medico, setMedico] = useState(null);
    const [sintomatico, setSintomatico] = useState(0);
    const [fechaSintoma, setFechaSintoma] = useState('');
    const [poblacionRiesgo, setPoblacionRiesgo] = useState([]);
    const [nroSemanasGestacion, setNroSemanasGestacion] =  useState(0);
    const [nroGesta, setNroGesta] =  useState(0);
    const [nroPartos, setNroPartos] =  useState(0);
    const [nroAbortos, setNroAbortos] =  useState(0);
    const [nroCesareas, setNroCesareas] =  useState(0);
    const [culminacionEmbarazo, setCulminacionEmbarazo] = useState(null);
    const [procedimiento, setProcedimiento] = useState(null);
    const [isComplicacion, setIsComplicacion] = useState(false);
    const [complicacion, setComplicacion] = useState(null);
    const [nacimiento, setNacimiento] = useState(0);
    const [edadGesta, setEdadGesta] =  useState(0);
    const [sexoRecienNacido, setSexoRecienNacido] = useState(null);
    const [peso, setPeso] =  useState(0);
    const [talla, setTalla] =  useState(0);
    const [isComplicacionRecienNacido, setIsComplicacionRecienNacido] = useState(false);
    const [complicacionRecienNacido, setComplicacionRecienNacido] = useState(null);
    const [relacionPcr, setRelacionPcr] = useState(false);
    const [resultado, setResultado] = useState(null);
    const [tipoExamen, setTipoExamen] = useState(null);
    const [resultadoTipoExamen, setResultadoTipoExamen] = useState(null);
    const [fechaTomaMuestra, setFechaTomaMuestra] = useState(null);
    const [codigoBarra, setCodigoBarra] = useState(null);
    const [observaciones, setObservaciones] = useState(null);
    const [ultimaEscala, setUltimaEscala] = useState(null);
    const [nroVuelo, setNroVuelo] = useState(null);
    const [idAerolinea, setIdAerolinea ] = useState(null);
    const [idPaisProcedencia, setIdPaisProcedencia] = useState(null);
    const [fechaArribo, setFechaArribo ] = useState(null);
    const [idAeropuerto, setIdAeropuerto ] = useState(null);
    const [viaIngreso, setViaIngreso] = useState(null);
    const [active, setActive] = useState(false);
    /**
     * ? methods that set values of form
     */
    useEffect(()=>{
        if(estado !== '') {
            gC.setEstado(estado)
        }
        if(municipio !== '') {
            gC.setMunicipio(municipio)
        }

        if(estadoLugarAtencion !== ''){
            gC.setEstadoTwo(estadoLugarAtencion)
        }
        if(municipioLugarAtencion !== ''){
            gC.setMunicipioTwo(municipioLugarAtencion)
        }
    }, [estado, municipio, estadoLugarAtencion, municipioLugarAtencion])

   
    const functionSetNroFicha = (value) => {
        setNroFicha(value)
    }
    const functionSetFechaElaboracion = (value) => {
        setFechaElaboracion(value)
    }
    const functionSetEstSalud = (value) => {
        setEstSalud(value)
    }
    /**
     * * BEGING METHODS BY DATOS PERSONA
     */
    const functionSetNinioCdulado = (value) => {
        setNinioCdulado(value)
    }
    const functionSetNroHijo = (val) => {
        setNroHijo(val)
    }
    const functionSetNacionalidad = (value) => {
        setNacionalidad(value)
    }
    const functionSetTipoDocumento = (value) => {
        setTipoDocumento(value)
    }
    const functionSetCedula = (value) => {
        setCedula(value)
    }
    const functionSetPasaporte = (value) => {
        setPasaporte(value)
    }
    const functionSetPrimerNombre = (value) => {
        setPrimerNombre(value)
    }
    const functionSetSegundoNombre = (value) => {
        setSegundoNombre(value)
    }
    const functionSetPrimerApellido = (value) => {
        setPrimerApellido(value)
    }
    const functionSetSegundoApellido = (value) => {
        setSegundoApellido(value)
    }
    const functionSetSexo = (value) => {
        setSexo(value)
    }
    const functionSetFechaNacimiento = (value) => {
        setFechaNacimiento(value)
    }
    const functionSetEdad = (value) => {
        setEdad(value)
    }
    const functionSetEstado = (value) => {
        setEstado(value)
    }
    const functionSetMunicipio = (value) => {
        setMunicipio(value);
    }
    const functionSetParroquia = (value) => {
        setParroquia(value)
    }
    const functionSetZonaIndustrial = (value) => {
        setZonaIndustrial(value)
    }
    const functionSetAvenidaCalle = (value) => {
        setAvenidaCalle(value)
    }
    const functionSetCasaEdificio = (value) => {
        setCasaEdificio(value)
    }
    const functionSetPisoPlanta = (value) => {
        setPisoPlanta(value)
    }
    const functionSetTlf = (value) => {
        setTlf(value)
    }
    const functionSetTlfHabitacion = (value) => {
        setTlfHabitacion(value)
    }
    const functionSetOcupacion = (value) => {
        setOcupacion(value)
    }
    const functionSetNacionalidadRepresentante = (value) => {
        setNacionalidadRepresentante(value)
    }
    const functionSetCedulaRepresentante = (value) => {
        setCedulaRepresentante(value)
    }
    const functionSetNombreRepresentante = (value) => {
        setNombreRepresentante(value)
    }
    /**
     * * END METHODS DATOS PERSONA
     */
    /**
     * * BEGIN ANTECEDENTES EPIDEMIOLOGICOS
     */
    const functionSetEstadoLugarAtencion = (value) => {
        setEstadoLugarAtencion(value)
    }
    const functionSetMunicipioLugarAtencion = (value) => {
        setMunicipioLugarAtencion(value)
    }
    const functionSetParroquiaLugarAtencion = (value) => {
        setParroquiaLugarAtencion(value)
    }
    const functionSetMedico = (value) => {
        setMedico(value)
    }
    const functionSetSintomatico = (value) => {
        setSintomatico(value)
    }
    const functionSetFechaSintoma = (value) => {
        setFechaSintoma(value)
    }
    const functionSetPoblacionRiesgo = (value) => {
        setPoblacionRiesgo([value])
    }
    /**
     * * END ANTECEDENTES EPIDEMIOLOGICOS
     */
    /**
     * * BEGIN EMBARAZADAS
     */
    const functionSetNroSemanasGestacion = (value) => {
        setNroSemanasGestacion(value)
    }
    const functionSetNroGesta = (value) => {
        setNroGesta(value)
    }
    const functionSetNroPartos = (value) => {
        setNroPartos(value)
    }
    const functionSetNroAbortos = (value) => {
        setNroAbortos(value)
    }
    const functionSetNroCesareas = (value) => {
        setNroCesareas(value)
    }
    const functionSetCulminacionEmbarazo = (value) => {
        setCulminacionEmbarazo(value)
    }
    const functionSetProcedimiento = (value) => {
        setProcedimiento(value)
    }
    const functionSetIsComplicacion = (value) => {
        setIsComplicacion(value)
    }
    const functionSetComplicacion = (value) => {
        setComplicacion(value)
    }
    const functionSetNacimiento = (value) => {
        setNacimiento(value)
    }
    const functionSetEdadGesta = (value) => {
        setEdadGesta(value)
    }
    const functionSetSexoRecienNacido = (value) => {
        setSexoRecienNacido(value)
    }
    const functionSetPeso = (value) => {
        setPeso(value)
    }
    const functionSetTalla = (value) => {
        setTalla(value)
    }
    const functionSetIsComplicacionRecienNacido = (value) => {
        setIsComplicacionRecienNacido(value)
    }
    const functionSetComplicacionRecienNacido = (value) => {
        setComplicacionRecienNacido(value)
    }
    const functionSetRelacionPcr = (value) => {
        setRelacionPcr(value)
    }
    const functionSetResultado = (value) => {
        setResultado(value)
    }
    /**
     * * END EMBARAZADAS
     */
    const functionSetTipoExamen = (value) => {
        setTipoExamen(value)
    }
    const functionSetResultadoTipoExamen = (value) => {
        setResultadoTipoExamen(value)
    }
    const functionSetFechaTomaMuestra = (value) => {
        setFechaTomaMuestra(value)
    }
    const functionSetCodigoBarra = (value) => {
        setCodigoBarra(value)
    }
    const functionSetObservaciones = (value) => {
        setObservaciones(value)
    }
    /**
     * !campos de viajes
     */
    const  functionSetUltimaEscala = (value) => {
        setUltimaEscala(value);
    }
    const  functionSetNroVuelo = (value) => {
            setNroVuelo(value);
    }
    const  functionSetIdAerolinea  = (value) => {
            setIdAerolinea (value);
    }
    const  functionSetIdPaisProcedencia = (value) => {
            setIdPaisProcedencia(value);
    }
    const  functionSetFechaArribo  = (value) => {
            setFechaArribo (value);
    }
    const  functionSetIdAeropuerto  = (value) => {
            setIdAeropuerto (value);
    }
    const  functionSetViaIngreso = (value) => {
            setViaIngreso(value);
    }
    /**
     * ? this method set the  value of step add one more 
     * ? set the width of the btns and change the display
     */
    const nextStep = () => {
        setStep(step + 1);
    }
    const backStep = () => {
        setStep(step - 1);
    }
    useEffect(() => {
        if (step > 1) {
            setContBtnJustify('space-between')
            setBtnBackActive('flex')
            setWidthBtnNext(180)
        } else {
            setContBtnJustify('center')
            setBtnBackActive('none')
            setWidthBtnNext(340)
        }
    }, [step]);
    /**
     * cambiamos el status
     */

    const functSetStatusSend = (val) => {
        setStatusSend(val)
    }

    const dataSend = {
        idUser:gC.idUser, username:gC.username, password:gC.password, statusSend:statusSend, nroFicha:nroFicha, fechaElaboracion:fechaElaboracion, 
        estSalud:parseInt(estSalud), ninioCdulado:ninioCdulado, nroHijo:nroHijo, nacionalidad:nacionalidad, 
        tipoDocumento:tipoDocumento, cedula:cedula, pasaporte:pasaporte, primerNombre:primerNombre, 
        segundoNombre:segundoNombre, primerApellido:primerApellido, 
        segundoApellido:segundoApellido, sexo:sexo, fechaNacimiento:fechaNacimiento, 
        edad:parseInt(edad), estado:estado, municipio:municipio, parroquia:parroquia, 
        zonaIndustrial:zonaIndustrial, avenidaCalle:avenidaCalle, casaEdificio:casaEdificio, 
        pisoPlanta:pisoPlanta, tlf:tlf,tlfHabitacion:tlfHabitacion,
        ocupacion:ocupacion, nacionalidadRepresentante:nacionalidadRepresentante, 
        cedulaRepresentante:cedulaRepresentante, 
        nombreRepresentante:nombreRepresentante, estadoLugarAtencion:estadoLugarAtencion, 
        municipioLugarAtencion:municipioLugarAtencion, 
        parroquiaLugarAtencion:parroquiaLugarAtencion, medico:medico, sintomatico:parseInt(sintomatico), 
        fechaSintoma:fechaSintoma, poblacionRiesgo:poblacionRiesgo.map(p=> p), 
        nroSemanasGestacion:nroSemanasGestacion, nroGesta:nroGesta,
        nroPartos:nroPartos, nroAbortos:nroAbortos, nroCesareas:nroCesareas, 
        culminacionEmbarazo:culminacionEmbarazo, 
        procedimiento:procedimiento, isComplicacion:isComplicacion,
        complicacion:complicacion, nacimiento:nacimiento, edadGesta:edadGesta, sexoRecienNacido:sexoRecienNacido, peso:peso, talla:talla, isComplicacionRecienNacido:isComplicacionRecienNacido,
        complicacionRecienNacido:complicacionRecienNacido, relacionPcr:relacionPcr, resultado:resultado, tipoExamen:tipoExamen, resultadoTipoExamen:resultadoTipoExamen, fechaTomaMuestra:fechaTomaMuestra, codigoBarra:codigoBarra, observaciones:observaciones,
        ultimaEscala: ultimaEscala,
        nroVuelo: nroVuelo,
        idAerolinea: idAerolinea,
        idPaisProcedencia: idPaisProcedencia,
        fechaArribo: fechaArribo,
        idAeropuerto: idAeropuerto,
        viaIngreso: viaIngreso,
    };
    const dataSendArr = 
    [
        parseInt(gC.idUser), statusSend, nroFicha, fechaElaboracion, estSalud, ninioCdulado, nroHijo, nacionalidad, 
        tipoDocumento, cedula, pasaporte, primerNombre, segundoNombre, primerApellido, segundoApellido, sexo, 
        fechaNacimiento, edad, estado, municipio, parroquia, zonaIndustrial, avenidaCalle, casaEdificio, pisoPlanta, 
        tlf, tlfHabitacion, ocupacion, nacionalidadRepresentante, cedulaRepresentante, nombreRepresentante, estadoLugarAtencion, 
        municipioLugarAtencion, parroquiaLugarAtencion, medico, sintomatico, fechaSintoma, poblacionRiesgo.toString(), nroSemanasGestacion, 
        nroGesta, nroPartos, nroAbortos, nroCesareas, culminacionEmbarazo, procedimiento, isComplicacion, complicacion, nacimiento, 
        edadGesta, sexoRecienNacido, peso, talla, isComplicacionRecienNacido, complicacionRecienNacido, relacionPcr, resultado, 
        tipoExamen, resultadoTipoExamen, fechaTomaMuestra, codigoBarra, observaciones,ultimaEscala, nroVuelo, idAerolinea, 
        idPaisProcedencia, fechaArribo, idAeropuerto, viaIngreso
    ]
    async function loadDataAsync() {
        try {
            await database.getFicha(gC.setDataGlobal, gC.idUser);
        } catch (e) {
            console.warn(e);
        }
    }
    const funcSetAvtive = (val) => {
        setActive(val)
    }
    const saveData = () => {
         setActive(true);
         const validator = validateData.ValidateData(dataSend, funcSetAvtive);
         if (!validator.hasError) {
             sendToApiSuisF.sendToApiSuis(dataSend, nextStep, functSetStatusSend, gC.setDataGlobal, gC.idUser, dataSendArr, funcSetAvtive)
            
         }else {
         alert(validator.when)
         }
        //console.log(dataSend)
    }
    return (
        <View style={[FormStyle.container, { height: height }]}>
            <PaginatorStepForm CurrentState={step} />
            <View style={[FormStyle.formContent, { height: height }]}>
                <ScrollView style={{ width: "100%", height: height }}>
                    <StepOne
                        currentStep={step}
                        functionSetEstSalud={functionSetEstSalud}
                        fechaElaboracion={fechaElaboracion}
                        functionSetNroFicha={functionSetNroFicha}
                        functionSetFechaElaboracion={functionSetFechaElaboracion}
                        estSalud={estSalud}
                        functionSetUltimaEscala={functionSetUltimaEscala}
                        functionSetNroVuelo={functionSetNroVuelo}
                        functionSetIdAerolinea={functionSetIdAerolinea}
                        functionSetIdPaisProcedencia={functionSetIdPaisProcedencia}
                        functionSetFechaArribo={functionSetFechaArribo}
                        fechaArribo={fechaArribo}
                        functionSetIdAeropuerto={functionSetIdAeropuerto}
                        functionSetViaIngreso={functionSetViaIngreso}
                    />
                    <StepTwoA 
                        currentStep={step}
                        ocupacion={ocupacion}
                        functionSetNinioCdulado={functionSetNinioCdulado}
                        functionSetNacionalidad={functionSetNacionalidad}
                        functionSetTipoDocumento={functionSetTipoDocumento}
                        estado={estado}
                        municipio={municipio}
                        parroquia={parroquia}
                        fechaNacimiento={fechaNacimiento}
                        functionSetCedula={functionSetCedula}
                        functionSetPasaporte={functionSetPasaporte}
                        functionSetPrimerNombre={functionSetPrimerNombre}
                        functionSetSegundoNombre={functionSetSegundoNombre}
                        functionSetPrimerApellido={functionSetPrimerApellido}
                        functionSetSegundoApellido={functionSetSegundoApellido}
                        functionSetSexo={functionSetSexo}
                        functionSetFechaNacimiento={functionSetFechaNacimiento}
                        functionSetEdad={functionSetEdad}
                        edad={edad}
                        functionSetEstado={functionSetEstado}
                        functionSetMunicipio={functionSetMunicipio}
                        functionSetParroquia={functionSetParroquia}
                        functionSetZonaIndustrial={functionSetZonaIndustrial}
                        functionSetAvenidaCalle={functionSetAvenidaCalle}
                        functionSetCasaEdificio={functionSetCasaEdificio}
                        functionSetPisoPlanta={functionSetPisoPlanta}
                        functionSetTlf={functionSetTlf}
                        functionSetTlfHabitacion={functionSetTlfHabitacion}
                        functionSetOcupacion={functionSetOcupacion}
                        functionSetNacionalidadRepresentante={functionSetNacionalidadRepresentante}
                        functionSetCedulaRepresentante={functionSetCedulaRepresentante}
                        functionSetNombreRepresentante={functionSetNombreRepresentante}
                        functionSetNroHijo={functionSetNroHijo}
                    />
                    <StepThreeA 
                        currentStep={step}
                        functionSetEstadoLugarAtencion={functionSetEstadoLugarAtencion}
                        functionSetMunicipioLugarAtencion={functionSetMunicipioLugarAtencion}
                        functionSetParroquiaLugarAtencion={functionSetParroquiaLugarAtencion}
                        functionSetMedico={functionSetMedico}
                        functionSetSintomatico={functionSetSintomatico}
                        functionSetFechaSintoma={functionSetFechaSintoma}
                        functionSetPoblacionRiesgo={functionSetPoblacionRiesgo}
                        fechaSintoma={fechaSintoma}
                    />
                    <StepFourA 
                        currentStep={step}
                        functionSetNroSemanasGestacion={functionSetNroSemanasGestacion}
                        functionSetNroGesta={functionSetNroGesta}
                        functionSetNroPartos={functionSetNroPartos}
                        functionSetNroAbortos={functionSetNroAbortos}
                        functionSetNroCesareas={functionSetNroCesareas}
                        functionSetCulminacionEmbarazo={functionSetCulminacionEmbarazo}
                        functionSetProcedimiento={functionSetProcedimiento}
                        functionSetIsComplicacion={functionSetIsComplicacion}
                        functionSetComplicacion={functionSetComplicacion}
                        functionSetNacimiento={functionSetNacimiento}
                        functionSetEdadGesta={functionSetEdadGesta}
                        functionSetSexoRecienNacido={functionSetSexoRecienNacido}
                        functionSetPeso={functionSetPeso}
                        functionSetTalla={functionSetTalla}
                        functionSetIsComplicacionRecienNacido={functionSetIsComplicacionRecienNacido}
                        functionSetComplicacionRecienNacido={functionSetComplicacionRecienNacido}
                        functionSetRelacionPcr={functionSetRelacionPcr}
                        functionSetResultado={functionSetResultado}
                        culminacionEmbarazo={culminacionEmbarazo}
                        nacimiento={nacimiento}
                    />
                    <StepFive
                        currentStep={step}
                        functionSetTipoExamen={functionSetTipoExamen}
                        functionSetFechaTomaMuestra={functionSetFechaTomaMuestra}
                        functionSetCodigoBarra={functionSetCodigoBarra}
                        functionSetObservaciones={functionSetObservaciones}
                        fechaTomaMuestra={fechaTomaMuestra}
                        functionSetResultadoTipoExamen={functionSetResultadoTipoExamen}
                    />
                    <Success currentStep={step} />
                </ScrollView>
            </View>
            <Buttons
                step={step}
                navigation={navigation}
                FormStyle={FormStyle}
                nextStep={nextStep}
                backStep={backStep}
                widthBtnNext={widthBtnNext}
                saveData={saveData}
                btnBackActive={btnBackActive}
                btnNextActive={btnNextActive}
                contBtnJustify={contBtnJustify} />
                <Spinner
                visible={active}
                textContent={'Cargando...'}
                textStyle={styles.spinnerTextStyle}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
  });

export default Form;