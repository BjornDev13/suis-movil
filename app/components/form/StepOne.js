import React, { useState, useEffect } from 'react';
import { Text, View, Platform } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import Form from "../../assets/styles/formStyle";
import DateTimePicker from '@react-native-community/datetimepicker';
import MyModal from './MyModal';
import EstablecimientoDropDown from './drop-down/EstablecimientoDropDown';
import AirportDropDown from './drop-down/AirportDropDown';
import airlines from '../data-insert/airlines'
import PaisDropDown from './drop-down/PaisDropDown'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Picker } from '@react-native-picker/picker';
function StepOne(props) {
    const {
        functionSetNroFicha,
        functionSetFechaElaboracion,
        functionSetEstSalud,
        fechaElaboracion,
        functionSetUltimaEscala,
        functionSetIdPaisProcedencia,
        functionSetIdAerolinea,
        functionSetIdAeropuerto,
        functionSetNroVuelo,
        functionSetViaIngreso,
        functionSetFechaArribo,
        fechaArribo
    } = props;
    const [display, setDisplay] = useState('flex');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [dateTwo, setDateTwo] = useState(new Date());
    const [showTwo, setShowTwo] = useState(false);
    const [textEstb, setTextEstb] = useState('seleccione una');
    const [textUltimaEscala, setTextUltimaEscala] = useState('seleccione una');
    const [textPaisProcedencia, setTextPaisProcedencia] = useState('seleccione uno');
    const [selectedValueAerolinea, setSelectedValueAerolinea] = useState(0);
    const [selectedValueVia, setSelectedValueVia] = useState(0);
    const [textAeropuerto, setTextAeropuerto] = useState('seleccione uno');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
    const [modalVisibleThree, setModalVisibleThree] = useState(false);
    const [modalVisibleFour, setModalVisibleFour] = useState(false);
    const DisplayData = Platform.OS === 'ios' ? 'spinner' : 'calendar'
    const setTextEstbFunc = (val) => {
        setTextEstb(val)
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        var dd = String(selectedDate.getDate()).padStart(2, '0');
        var mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
        var yyyy = selectedDate.getFullYear();
        functionSetFechaElaboracion(dd + '-' + mm + '-' + yyyy)
    };
    const onChangeTwo = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowTwo(Platform.OS === 'ios');
        setDateTwo(currentDate);
        var dd = String(selectedDate.getDate()).padStart(2, '0');
        var mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
        var yyyy = selectedDate.getFullYear();
        functionSetFechaArribo(dd + '-' + mm + '-' + yyyy)
    };
    const showDatepicker = () => {
        setShow(true);
    };
    const showDatepickerTwo = () => {
        setShowTwo(true);
    };
    const toggleDropDown = () => {
        setModalVisible(!modalVisible);
    }
    const toggleDropDownTwo = () => {
        setModalVisibleTwo(!modalVisibleTwo);
    }
    const toggleDropDownThree = () => {
        setModalVisibleThree(!modalVisibleThree);
    }
    const toggleDropDownFour = () => {
        setModalVisibleFour(!modalVisibleFour);
    }
    useEffect(() => {
        if (props.currentStep > 1) {
            setDisplay('none')
        } else {
            setDisplay('flex');
        }
    }, [props.currentStep])

    return (
        <View style={[Form.Form, { display: display }]}>
            <View style={Form.FormHead}>
                <Text style={Form.FormHeadText}>
                    NOTIFICACIÓN
                </Text>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>NUMERO DE FICHA</Text>
                <TextInput
                    style={Form.Input}
                    onChangeText={text => functionSetNroFicha(text)}
                />
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>FECHA ELABORACIÓN</Text>
                <View style={Form.InputAndBtnSearch}>
                    <TextInput
                        style={Form.InputAndButton}
                        editable={false}
                        defaultValue={fechaElaboracion}
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
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>ESTABLECIMIENTO DE SALUD</Text>
                <View style={Form.InputAndBtnSearch}>
                    <TextInput
                        style={Form.InputAndButton}
                        editable={false}
                        defaultValue={textEstb}
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
                <Text style={Form.InputLabel}>ULTIMA ESCALA</Text>
                <View style={Form.InputAndBtnSearch}>
                    <TextInput
                        style={Form.InputAndButton}
                        editable={false}
                        defaultValue={textUltimaEscala}
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
                <Text style={Form.InputLabel}>PAIS DE PROCEDENCIA</Text>
                <View style={Form.InputAndBtnSearch}>
                    <TextInput
                        style={Form.InputAndButton}
                        editable={false}
                        defaultValue={textPaisProcedencia}
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
                <Text style={Form.InputLabel}>VIA DE INGRESO</Text>
                <Picker
                    prompt="Seleccione"
                    selectedValue={selectedValueVia}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) => { setSelectedValueVia(itemValue); functionSetViaIngreso(itemValue) }}
                >
                    <Picker.Item label="Seleccione" value={0} />
                    <Picker.Item label="AEREA" value={1} />
                    <Picker.Item label="MARITIMA" value={2} />
                    <Picker.Item label="TERRESTRE" value={3} />
                    
                </Picker>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>FECHA DE ARRIBO</Text>
                <View style={Form.InputAndBtnSearch}>
                    <TextInput
                        style={Form.InputAndButton}
                        editable={false}
                        defaultValue={fechaArribo}
                    />
                    <TouchableHighlight onPress={showDatepickerTwo} underlayColor='transparent'>
                        <View style={Form.BtnSeaerchInput}>
                            <Text style={{ color: '#FFFFFF' }}>
                                <FontAwesomeIcon icon={faCalendar} style={{ color: '#FFFFFF' }} />
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>NRO DE VUELO</Text>
                <TextInput
                    style={Form.Input}
                    onChangeText={text => functionSetNroVuelo(text)}
                />
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>AEROLINEA</Text>
                <Picker
                    prompt="Seleccione"
                    selectedValue={selectedValueAerolinea}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) => { setSelectedValueAerolinea(itemValue); functionSetIdAerolinea(itemValue) }}
                >
                    <Picker.Item label="Seleccione" value={0} />
                    {
                        airlines.map((a, i) => (
                            <Picker.Item label={a.n} value={a.id} key={i} />
                        ))
                    }
                </Picker>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>AEROPUERTO</Text>
                <View style={Form.InputAndBtnSearch}>
                    <TextInput
                        style={Form.InputAndButton}
                        editable={false}
                        defaultValue={textAeropuerto}
                    />
                    <TouchableHighlight onPress={toggleDropDownFour} underlayColor='transparent'>
                        <View style={Form.BtnSeaerchInput}>
                            <Text style={{ color: '#FFFFFF' }}>
                                <FontAwesomeIcon icon={faSearch} style={{ color: '#FFFFFF' }} />
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'data'}
                    display={DisplayData}
                    onChange={onChange}
                />
            )}
            {showTwo && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={dateTwo}
                    mode={'data'}
                    display={DisplayData}
                    onChange={onChangeTwo}
                />
            )}
            <MyModal
                modalVisible={modalVisible}
            >
                <EstablecimientoDropDown
                    setShow={toggleDropDown}
                    functionSetEstSalud={functionSetEstSalud}
                    setTextEstbFunc={setTextEstbFunc} />
            </MyModal>
            <MyModal
                modalVisible={modalVisibleTwo}
            >
                <PaisDropDown
                    setShow={toggleDropDownTwo}
                    functionSetCountrie={functionSetUltimaEscala}
                    setTextCountrie={setTextUltimaEscala} />
            </MyModal>
            <MyModal
                modalVisible={modalVisibleThree}
            >
                <PaisDropDown
                    setShow={toggleDropDownThree}
                    functionSetCountrie={functionSetIdPaisProcedencia}
                    setTextCountrie={setTextPaisProcedencia} />
            </MyModal>
            <MyModal
                modalVisible={modalVisibleFour}
            >
                <AirportDropDown
                    setShow={toggleDropDownFour}
                    functionSetAirport={functionSetIdAeropuerto}
                    setTextAirport={setTextAeropuerto} />
            </MyModal>
        </View>
    );
}

export default StepOne;