import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import Form from "../../assets/styles/formStyle"
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
function StepFourA(props) {
    const [display, setDisplay] = useState('none');
    const [complicacion, setComplicacion] = useState('No');
    const [complicacionTwo, setComplicacionTwo] = useState('No');
    const [showComplicacion, setShowComplicacion] = useState(false);
    const [showComplicacionTwo, setShowComplicacionTwo] = useState(false);
    const [resultado, setResultado] = useState('')
    const [sexo, setSexo] = useState('')
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [dateTwo, setDateTwo] = useState(new Date());
    const [showTwo, setShowTwo] = useState(false);
    const [pcr, setPcr] = useState(false)
    const DisplayData = Platform.OS === 'ios' ? 'spinner' : 'calendar';
    const {
        functionSetNroSemanasGestacion, functionSetNroGesta, functionSetNroPartos, functionSetNroAbortos, functionSetNroCesareas,
        functionSetCulminacionEmbarazo, functionSetProcedimiento, functionSetIsComplicacion, functionSetComplicacion, functionSetNacimiento, functionSetEdadGesta,
        functionSetSexoRecienNacido, functionSetPeso, functionSetTalla, functionSetIsComplicacionRecienNacido, functionSetComplicacionRecienNacido, functionSetRelacionPcr,
        functionSetResultado, culminacionEmbarazo,nacimiento
    } = props;
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        var dd = String(selectedDate.getDate()).padStart(2, '0');
        var mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
        var yyyy = selectedDate.getFullYear();
        functionSetCulminacionEmbarazo(dd + '-' + mm + '-' + yyyy);
    };
    const onChangeTwo = (event, selectedDate) => {
        const currentDate = selectedDate || dateTwo;
        setShowTwo(Platform.OS === 'ios');
        setDateTwo(currentDate);
        var dd = String(selectedDate.getDate()).padStart(2, '0');
        var mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
        var yyyy = selectedDate.getFullYear();
        functionSetNacimiento(dd + '-' + mm + '-' + yyyy);
    };

    const showDatepicker = () => {
        setShow(true);
    };
    const showDatepickerTwo = () => {
        setShowTwo(true);
    };
    useEffect(() => {
        if (props.currentStep === 4) {
            setDisplay('flex')
        } else {
            setDisplay('none');
        }
    }, [props.currentStep]);
    const showSetComplication = itemValue => {
        setComplicacion(itemValue);
        functionSetIsComplicacion(itemValue);
        setShowComplicacion(itemValue)
    }
    const showSetComplicationTwo = itemValue => {
        setComplicacionTwo(itemValue);
        functionSetIsComplicacionRecienNacido(itemValue);
        setShowComplicacionTwo(itemValue)
    }
    return (
        <View style={[Form.Form, { display: display }]}>
            <View style={Form.FormHead}>
                <Text style={Form.FormHeadText}>
                    EMBARAZADAS
                </Text>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>NRO. SEMANA GESTACIÓN</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetNroSemanasGestacion(text)}
                    />
                </View>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>NRO. DE GESTA</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetNroGesta(text)}
                    />
                </View>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>NRO. DE PARTOS</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetNroPartos(text)}
                    />
                </View>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>NRO. DE ABORTOS</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetNroAbortos(text)}
                    />
                </View>
            </View>

            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>NRO. DE CESAREAS</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetNroCesareas(text)}
                    />
                </View>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>CULMINACIÓN EMB</Text>
                    <View style={Form.InputAndBtnSearch}>
                        <TextInput
                            style={[Form.InputAndButton, {width:"80%"}]}
                            editable={false}
                            defaultValue={culminacionEmbarazo}
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
            </View>

            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>PROCEDIMIENTO</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetProcedimiento(text)}
                    />
                </View>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>¿ALGUNA COMPLICACIÓN?</Text>
                    <Picker
                        prompt="Seleccione"
                        selectedValue={complicacion}
                        style={{ height: 50, width: "100%" }}
                        onValueChange={(itemValue, itemIndex) => { showSetComplication(itemValue) }}
                    >
                        <Picker.Item label="No" value={false} />
                        <Picker.Item label="Si" value={true} />
                    </Picker>
                </View>
            </View>
            {showComplicacion && (
                <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>COMPLICACIÓN</Text>
                    <TextInput
                        onChangeText={text => functionSetComplicacion(text)}
                        style={Form.Input}
                    />
                </View>
            )}
            <View style={Form.FormSubHead}>
                <Text style={Form.FormSubHeadText}>
                    DATOS DEL RECIÉN NACIDO
                </Text>
            </View>
            {/* <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>NACIMIENTO</Text>
                    <View style={Form.InputAndBtnSearch}>
                        <TextInput
                            style={Form.InputAndButton}
                            editable={false}
                            defaultValue={nacimiento}
                        />
                        <TouchableHighlight onPress={showDatepickerTwo} underlayColor='transparent'>
                            <View style={Form.BtnSeaerchInput}>
                                <Text style={{ color: '#FFFFFF' }}>
                                    <FontAwesomeIcon icon={faCalendar} style={{ color: '#FFFFFF' }} />
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View> */}
                <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>NACIMIENTO</Text>
                    <TextInput
                        onChangeText={text => functionSetNacimiento(text)}
                        style={Form.Input}
                        keyboardType={'numeric'}
                    />
                </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>EDAD GESTACIONAL</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetEdadGesta(text)}
                    />
                </View>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>SEXO</Text>
                    <Picker
                        selectedValue={sexo}
                        style={{ height: 50, width: "100%" }}
                        onValueChange={(itemValue, itemIndex) => { setSexo(itemValue); functionSetSexoRecienNacido(itemValue) }}
                        prompt="Seleccione"
                    >
                        <Picker.Item label="F" value='F' />
                        <Picker.Item label="M" value='M' />
                    </Picker>
                </View>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>PESO</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetPeso(text)}

                    />
                </View>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>TALLA</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetTalla(text)}
                    />
                </View>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, }]}>
                <Text style={Form.InputLabel}>¿ALGUNA COMPLICACIÓN?</Text>
                <Picker
                    prompt="Seleccione"
                    selectedValue={complicacionTwo}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) => showSetComplicationTwo(itemValue)}
                >
                    <Picker.Item label="No" value={false} />
                    <Picker.Item label="Si" value={true} />
                </Picker>
            </View>
            {showComplicacionTwo && (
                <View style={[Form.InputContOne, { marginTop: 15, }]}>
                    <Text style={Form.InputLabel}>COMPLICACIÓN</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetComplicacionRecienNacido(text)}
                    />
                </View>
            )}
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>REALIZACIÓN DE PCR</Text>
                    <TextInput
                        style={Form.Input}
                        onChangeText={text => functionSetRelacionPcr(text)}
                    />

                    <Picker
                    prompt="Seleccione"
                    selectedValue={pcr}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) => {setPcr(itemValue); functionSetRelacionPcr(itemValue)}}
                >
                    <Picker.Item label="No" value={false} />
                    <Picker.Item label="Si" value={true} />
                </Picker>
                </View>
                <View style={[Form.InputContTwo, { marginTop: 15, marginBottom: 15 }]}>
                    <Text style={Form.InputLabel}>RESULTADO</Text>
                    <Picker
                        selectedValue={resultado}
                        style={{ height: 50, width: "100%" }}
                        onValueChange={(itemValue, itemIndex) => { setResultado(itemValue); functionSetResultado(itemValue) }}
                        prompt="Seleccione"
                    >
                        <Picker.Item label="Negativo" value={false} />
                        <Picker.Item label="Positivo" value={true} />
                    </Picker>
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
        </View>
    );
}

export default StepFourA;