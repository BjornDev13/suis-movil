import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import Form from "../../assets/styles/formStyle"
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import MyModal from './MyModal';
import MunicipioDropDown from './drop-down/MunicipioDropDown'
import ParroquiaDropDown from './drop-down/ParroquiaDropDown';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faCalendar } from '@fortawesome/free-solid-svg-icons';
import estadoVal from '../data-insert/estado';
import { GlobalContext } from '../../context/MyContext'
import poblacionRiesgoVal from '../data-insert/poblacionRiesgo';
import DropDownPicker from 'react-native-dropdown-picker';
import PoblacionRiesgoDropDown from './drop-down/PoblacionRiesgoDropDown';
function StepThreeA(props) {
    const [display, setDisplay] = useState('none');
    const [sintomatico, setSintomatico] = useState(false);
    const [showFechaSintomas, setShowFechaSintomas] = useState(false);
    const [municipioText, setMunicipioText] = useState('seleccione uno');
    const [parroquiaText, setParroquiaText] = useState('seleccione una');
    const [estadoSelect, setEstadoSelect] = useState('');
    const [poblacionRiesgoSelect, setPoblacionRiesgoSelect] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
    const [modalVisibleThree, setModalVisibleThree] = useState(false);
    const [poblacionText, setPoblacionText] = useState([]);
    const DisplayData = Platform.OS === 'ios' ? 'spinner' : 'calendar';
    const gC = useContext(GlobalContext);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        var dd = String(selectedDate.getDate()).padStart(2, '0');
        var mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
        var yyyy = selectedDate.getFullYear();
        functionSetFechaSintoma(dd + '-' + mm + '-' + yyyy);
    };
    const showDatepicker = () => {
        setShow(true);
    };
    useEffect(() => {
        if (props.currentStep === 3) {
            setDisplay('flex')
        } else {
            setDisplay('none');
        }
    }, [props.currentStep]);
    const toggleDropDown = () => {
        setModalVisible(!modalVisible);
    }
    const toggleDropDownTwo = () => {
        setModalVisibleTwo(!modalVisibleTwo);
    }
    const toggleDropDownThree = () => {
        setModalVisibleThree(!modalVisibleThree)
    }
    const estadoSetValues = (itemvalues) => {
        setEstadoSelect(itemvalues);
        functionSetEstadoLugarAtencion(itemvalues)
    }
    const poblacionRiesgoSetValues = (itemvalues) => {
        setPoblacionRiesgoSelect(itemvalues)
        functionSetPoblacionRiesgo(itemvalues)
    }
    const {
        functionSetEstadoLugarAtencion,
        functionSetMunicipioLugarAtencion,
        functionSetParroquiaLugarAtencion,
        functionSetMedico,
        functionSetSintomatico,
        functionSetFechaSintoma,
        functionSetPoblacionRiesgo,
        fechaSintoma
    } = props;
    const sintomaticoSetValues = (itemValue) => {
        setSintomatico(itemValue);
        functionSetSintomatico(itemValue);
        setShowFechaSintomas(itemValue)
    }
    return (
        <View style={[Form.Form, { display: display }]}>
            <View style={Form.FormHead}>
                <Text style={Form.FormHeadText}>
                    ANTECEDENTES EPIDEMIOLÓGICOS
            </Text>
            </View>
            <View style={Form.FormSubHead}>
                <Text style={[Form.FormSubHeadText, { marginTop: 24 }]}>
                    LUGAR DE ATENCIÓN
                </Text>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>ESTADO</Text>
                <Picker
                    prompt="Seleccione"
                    selectedValue={estadoSelect}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) => estadoSetValues(itemValue)}
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
                    <TouchableHighlight onPress={toggleDropDown} underlayColor='transparent'>
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
                    <TouchableHighlight onPress={toggleDropDownTwo} underlayColor='transparent'>
                        <View style={Form.BtnSeaerchInput}>
                            <Text style={{ color: '#FFFFFF' }}>
                                <FontAwesomeIcon icon={faSearch} style={{ color: '#FFFFFF' }} />
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={Form.FormSubHead}>
                <Text style={Form.FormSubHeadText}>
                    CONDICIÓN DE SOSPECHA
                </Text>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>MÉDICO</Text>
                <TextInput
                    style={Form.Input}
                    onChangeText={text => functionSetMedico(text)}
                />
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>¿SINTOMATICO?</Text>
                <Picker
                    selectedValue={sintomatico}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) => sintomaticoSetValues(itemValue)}
                >
                    <Picker.Item label="Seleccione" value="" />
                    <Picker.Item label="No" value={0} />
                    <Picker.Item label="Si" value={1} />
                </Picker>
            </View>
            {showFechaSintomas === 1 && (
                <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>FECHA INICIO DE SINTOMAS</Text>
                    <View style={Form.InputAndBtnSearch}>
                        <TextInput
                            style={Form.InputAndButton}
                            editable={false}
                            defaultValue={fechaSintoma}
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
            )}
            <View style={Form.FormSubHead}>
                <Text style={Form.FormSubHeadText}>
                    ANTECEDENTES
                </Text>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>POBLACIÓN DE RIESGO</Text>
                <Picker
                    prompt="Seleccione"
                    selectedValue={poblacionRiesgoSelect}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>  poblacionRiesgoSetValues(itemValue) }
                >
                    <Picker.Item label="Seleccione" value={0}  />
                    {poblacionRiesgoVal.map((v, i) => (
                        <Picker.Item label={v.descripcion} value={v.id} key={i} />
                    ))}
                </Picker>
            </View> 
            {/* <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>POBLACIÓN DE RIESGO</Text>
                <View style={Form.InputAndBtnSearch}>
                    <View style={Form.multiSelect}>
                        {poblacionText.map(t => (
                            <View style={Form.multiSelectItems}>
                                <Text>
                                    {t}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <TouchableHighlight onPress={toggleDropDownThree} underlayColor='transparent'>
                        <View style={Form.BtnSeaerchInput}>
                            <Text style={{ color: '#FFFFFF' }}>
                                <FontAwesomeIcon icon={faSearch} style={{ color: '#FFFFFF' }} />
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View> */}
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'data'}
                    display={DisplayData}
                    onChange={onChange}
                />
            )}
            <MyModal
                modalVisible={modalVisible}
            >
                <MunicipioDropDown
                    setShow={toggleDropDown}
                    functionSetMunicipio={functionSetMunicipioLugarAtencion}
                    setTextMunicipioFunc={setMunicipioText}
                    idEsta={gC.estadoTwo} />
            </MyModal>
            <MyModal
                modalVisible={modalVisibleTwo}
            >
                <ParroquiaDropDown
                    setShow={toggleDropDownTwo}
                    functionSetParroquia={functionSetParroquiaLugarAtencion}
                    setTextParroquiaFunc={setParroquiaText}
                    idMuni={gC.municipioTwo} />
            </MyModal>
            <MyModal modalVisible={modalVisibleThree}>
                <PoblacionRiesgoDropDown
                    setShow={toggleDropDownThree}
                    functionSetPoblacionRiesgo={functionSetPoblacionRiesgo}
                    poblacionRiesgoSetValues={poblacionRiesgoSetValues} />
            </MyModal>
        </View>
    );
}

export default StepThreeA;