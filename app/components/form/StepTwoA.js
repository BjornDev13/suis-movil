import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import Form from "../../assets/styles/formStyle";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faCalendar } from '@fortawesome/free-solid-svg-icons';
import MyModal from './MyModal';
import OcupacionDropDown from './drop-down/OcupacionDropDown';
import MunicipioDropDown from './drop-down/MunicipioDropDown'
import ParroquiaDropDown from './drop-down/ParroquiaDropDown';
import estadoVal from '../data-insert/estado';
import {GlobalContext} from '../../context/MyContext'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
function stepTwoA(props) {
    const [display, setDisplay] = useState('none');
    const [textOcupacion, setTextOcupacion] = useState('seleccione una...')
    const [sexo, setSexo] = useState('');
    const [estadoSelect, setEstadoSelect] = useState('');
    const [municipioText, setMunicipioText] = useState('seleccione uno');
    const [parroquiaText, setParroquiaText] = useState('seleccione una')
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
    const [modalVisibleThree, setModalVisibleThree] = useState(false);
    const [selectedValueOne, setSelectedValueOne] = useState(false);
    const [showDataPadres, setShowDataPadre] = useState(false);
    const [selectedValueTwo, setSelectedValueTwo] = useState(1);
    const [selectedValueThree, setSelectedValueThree] = useState(1);
    const [selectedValueFour, setSelectedValueFour] = useState(1);
    const [date, setDate] = useState(new Date());
    const [edadS, setEdadS] = useState('')
    const [show, setShow] = useState(false);
    const DisplayData = Platform.OS === 'ios' ? 'spinner' : 'calendar';
    const gC = useContext(GlobalContext);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        var dd = String(selectedDate.getDate()).padStart(2, '0');
        var mm = String(selectedDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = selectedDate.getFullYear();
        functionSetFechaNacimiento(dd + '-' + mm + '-' + yyyy)
        setEdadS(getEdad(currentDate))
        functionSetEdad(getEdad(currentDate))
    };
    const textOcupacionV = (val) => {
        setTextOcupacion(val)
    }
    const textParroquiaV = (val) => {
        setParroquiaText(val)
    }
    const toggleDropDown = () => {
        setModalVisible(!modalVisible);
    }
    const toggleDropDownTwo = () => {
        setModalVisibleTwo(!modalVisibleTwo);
    }
    const toggleDropDownThree = () => {
        setModalVisibleThree(!modalVisibleThree);
    }
    const ninioCeduladoSetValues = itemValue => {
        setSelectedValueOne(itemValue);
        functionSetNinioCdulado(itemValue);
        setShowDataPadre(itemValue)
    }
    const estadoSetValues = (itemvalues) => {
        setEstadoSelect(itemvalues);
        functionSetEstado(itemvalues)
    }
    const showDatepicker = () => {
        setShow(true);
    };

    const  getEdad = (dateString) => {
        let hoy = new Date()
        let fechaNacimiento = new Date(dateString)
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
        if (
          diferenciaMeses < 0 ||
          (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
          edad--
        }
        return edad
      }
    
    useEffect(() => {
        if (props.currentStep === 2) {
            setDisplay('flex')
        } else {
            setDisplay('none');
        }
    }, [props.currentStep]);
    const { functionSetNinioCdulado, functionSetNacionalidad, functionSetTipoDocumento, functionSetCedula,
        functionSetPrimerNombre, functionSetSegundoNombre, functionSetPrimerApellido, functionSetSegundoApellido,
        functionSetSexo, functionSetFechaNacimiento, functionSetEdad, fechaNacimiento, functionSetNroHijo,
        functionSetEstado, functionSetMunicipio, functionSetParroquia,
        functionSetZonaIndustrial, functionSetAvenidaCalle, functionSetCasaEdificio, functionSetPisoPlanta,
        functionSetTlf, functionSetTlfHabitacion, functionSetOcupacion,
        functionSetNacionalidadRepresentante, functionSetCedulaRepresentante, functionSetNombreRepresentante } = props;
    return (
        <View style={[Form.Form, { display: display }]}>
            <View style={Form.FormHead}>
                <Text style={Form.FormHeadText}>
                    DATOS PERSONALES
                    </Text>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>¿NIÑO NO CEDULADO?</Text>
                    <Picker
                        prompt="Seleccione"
                        selectedValue={selectedValueOne}
                        style={{ height: 50, width: "100%" }}
                        onValueChange={(itemValue, itemIndex) => { ninioCeduladoSetValues(itemValue) }}
                    >
                        <Picker.Item label="No" value={false} />
                        <Picker.Item label="Si" value={true} />
                    </Picker>
                </View>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>NACIONALIDAD</Text>
                    <Picker
                        prompt="Seleccione"
                        selectedValue={selectedValueTwo}
                        style={{ height: 50, width: "100%" }}
                        onValueChange={(itemValue, itemIndex) => { setSelectedValueTwo(itemValue); functionSetNacionalidad(itemValue) }}
                    >
                        <Picker.Item label="Seleccione" value={0} />
                        <Picker.Item label="V" value={1} />
                        <Picker.Item label="E" value={2} />
                    </Picker>
                </View>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>TIPO DOCUMENTO</Text>
                <Picker
                    prompt="Seleccione"
                    selectedValue={selectedValueThree}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) => { setSelectedValueThree(itemValue); functionSetTipoDocumento(itemValue) }}
                >
                    <Picker.Item label="Seleccione" value={0} />
                    <Picker.Item label="Cedula" value={1} />
                    <Picker.Item label="Pasaporte" value={2} />
                    <Picker.Item label="Indocumenado" value={3} />
                </Picker>
            </View>
            {selectedValueThree === 1 ?
                (<View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>CEDULA</Text>
                    <TextInput
                        onChangeText={text => functionSetCedula(text)}
                        style={Form.Input}
                        keyboardType={'numeric'}
                    />
                </View>) :
                (<View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>PASAPORTE</Text>
                    <TextInput
                        onChangeText={text => functionSetPasaporte(text)}
                        style={Form.Input}
                    />
                </View>)
            }
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>PRIMER NOMBRE</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetPrimerNombre(text)}
                    />
                </View>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>SEGUNDO NOMBRE</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetSegundoNombre(text)}
                    />
                </View>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>PRIMER APELLIDO</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetPrimerApellido(text)}
                    />
                </View>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>SEGUNDO APELLIDO</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetSegundoApellido(text)}
                    />
                </View>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>SEXO</Text>
                <Picker
                    prompt="Seleccione"
                    selectedValue={sexo}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) => { setSexo(itemValue); functionSetSexo(itemValue) }}
                >
                    <Picker.Item label="Seleccione" value={0} />
                    <Picker.Item label="F" value={1} />
                    <Picker.Item label="M" value={2} />
                </Picker>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>FECHA NACIMIENTO</Text>
                    <View style={Form.InputAndBtnSearch}>
                        <TextInput
                            style={[Form.InputAndButton, { width: "80%" }]}
                            editable={false}
                            defaultValue={fechaNacimiento}
                        />
                        <TouchableHighlight onPress={showDatepicker} underlayColor='transparent'>
                            <View style={Form.BtnSeaerchInput}>
                                <Text style={{ color: '#FFFFFF' }}>
                                    <FontAwesomeIcon icon={faCalendar} style={{ color: '#FFFFFF' }} />
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>EDAD</Text>
                    <TextInput
                        style={Form.Input}
                        editable={false}
                        defaultValue={edadS.toString()}
                    />
                </View>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>ESTADO</Text>
                <Picker
                    prompt="Seleccione"
                    selectedValue={estadoSelect}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>  estadoSetValues(itemValue) }
                >
                    <Picker.Item label="Seleccione" value={0} />
                    {estadoVal.map((v, i) => (
                        <Picker.Item label={v.nombre} value={v.id} key={i} />
                    ))}
                </Picker>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>MUNICIPIO</Text>
                <View style={Form.InputAndBtnSearch}>
                    <TextInput
                        style={Form.InputAndButton}
                        editable={false}
                        defaultValue={municipioText}
                    />
                    <TouchableHighlight onPress={toggleDropDownTwo} underlayColor='transparent'>
                        <View style={Form.BtnSeaerchInput}>
                            <Text style={{ color: '#FFFFFF' }}>
                                <FontAwesomeIcon icon={faSearch} style={{ color: '#FFFFFF' }} />
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>PARROQUIA</Text>
                <View style={Form.InputAndBtnSearch}>
                    <TextInput
                        style={Form.InputAndButton}
                        editable={false}
                        defaultValue={parroquiaText}
                    />
                    <TouchableHighlight onPress={toggleDropDownThree} underlayColor='transparent'>
                        <View style={Form.BtnSeaerchInput}>
                            <Text style={{ color: '#FFFFFF' }}>
                                <FontAwesomeIcon icon={faSearch} style={{ color: '#FFFFFF' }} />
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>URB/SECTOR/ZONA INDUSTRIAL</Text>
                <TextInput
                    style={Form.Input}
                    onChangeText={text => functionSetZonaIndustrial(text)}
                />
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>AV/CARRETERA/CALLE/ESQUINA/VEREDA</Text>
                <TextInput
                    style={Form.Input}
                    onChangeText={text => functionSetAvenidaCalle(text)}
                />
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>CASA/EDIF/QUINTA/GALPON</Text>
                <TextInput
                    style={Form.Input}
                    onChangeText={text => functionSetCasaEdificio(text)}
                />
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>PISO/PLANTA/LOCAL</Text>
                <TextInput
                    style={Form.Input}
                    onChangeText={text => functionSetPisoPlanta(text)}
                />
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>TELÉFONO CELULAR</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetTlf(text)}
                    />
                </View>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>TELEFONO DE HABITACIÓN</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetTlfHabitacion(text)}
                    />
                </View>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>OCUPACION</Text>
                <View style={Form.InputAndBtnSearch}>
                    <TextInput
                        style={Form.InputAndButton}
                        editable={false}
                        defaultValue={textOcupacion}
                    />
                    <TouchableHighlight onPress={toggleDropDown} underlayColor='transparent'>
                        <View style={Form.BtnSeaerchInput}>
                            <Text style={{ color: '#FFFFFF' }}>
                                <FontAwesomeIcon icon={faSearch} style={{ color: '#FFFFFF' }} />
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            {showDataPadres ? (
                <>
                    <View style={Form.FormSubHead}>
                        <Text style={Form.FormSubHeadText}>
                            DATOS DEL REPRESENTANTE
                        </Text>
                    </View>
                    <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                        <Text style={Form.InputLabel}>NACIONALIDAD</Text>
                        <Picker
                            prompt="Seleccione"
                            selectedValue={selectedValueFour}
                            style={{ height: 50, width: "100%" }}
                            onValueChange={(itemValue, itemIndex) => { setSelectedValueFour(itemValue); functionSetNacionalidadRepresentante(itemValue) }}
                        >
                            <Picker.Item label="Seleccione" value={0} />
                            <Picker.Item label="V" value={1} />
                            <Picker.Item label="E" value={2} />
                        </Picker>
                    </View>
                    <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                        <Text style={Form.InputLabel}>CEDULA</Text>
                        <TextInput
                            style={Form.Input}
                            onChangeText={text => functionSetCedulaRepresentante(text)}
                        />
                    </View>
                    <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 25 }]}>
                        <Text style={Form.InputLabel}>NOMBRE COMPLETO</Text>
                        <TextInput
                            style={Form.Input}
                            onChangeText={text => functionSetNombreRepresentante(text)}
                        />
                    </View>
                    <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 25 }]}>
                        <Text style={Form.InputLabel}>NRO HIJO</Text>
                        <TextInput
                            style={Form.Input}
                            onChangeText={text => functionSetNroHijo(text)}
                        />
                    </View>
                </>
            ) : (null)}
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'data'}
                    display={DisplayData}
                    onChange={onChange}
                />
            )}
            <MyModal modalVisible={modalVisible}>
                <OcupacionDropDown 
                setShow={toggleDropDown}
                functionSetOcupacion={functionSetOcupacion}
                setTextOcupacionFunc={textOcupacionV}
                />
            </MyModal>
            <MyModal modalVisible={modalVisibleTwo}>
                <MunicipioDropDown 
                setShow={toggleDropDownTwo}
                functionSetMunicipio={functionSetMunicipio}
                setTextMunicipioFunc={setMunicipioText}
                idEsta={gC.estado}
                />
            </MyModal>
            <MyModal modalVisible={modalVisibleThree}>
                <ParroquiaDropDown 
                setShow={toggleDropDownThree}
                functionSetParroquia={functionSetParroquia}
                setTextParroquiaFunc={textParroquiaV}
                idMuni={gC.municipio}
                />
            </MyModal>
        </View>
    );
}
export default stepTwoA;