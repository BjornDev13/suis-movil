import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import Form from "../../assets/styles/formStyle"
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import tipoExamenVal from '../data-insert/tipoExamen'
import tipoResultadoVal from '../data-insert/tipoResultado'
//TODO CREAR DROP DOWN PARA TIPO RESULTADO
function StepFive(props) {
    const [display, setDisplay] = useState('none');
    const [tipoExamen, setTipoExamen] = useState('');
    const [tipoResultado, setTipoResultado] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const DisplayData = Platform.OS === 'ios' ? 'spinner' : 'calendar';
    const {
        functionSetTipoExamen,
        functionSetFechaTomaMuestra,
        functionSetCodigoBarra,
        functionSetObservaciones,
        fechaTomaMuestra,
        functionSetResultadoTipoExamen
    } = props;
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        var dd = String(selectedDate.getDate()).padStart(2, '0');
        var mm = String(selectedDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = selectedDate.getFullYear();
        functionSetFechaTomaMuestra(dd + '-' + mm + '-' + yyyy);
    };
    
    const showDatepicker = () => {
        setShow(true);
    };
    useEffect(() => {
        if (props.currentStep === 5) {
            setDisplay('flex')
        } else {
            setDisplay('none');
        }
    }, [props.currentStep])
    return (
        <View style={[Form.Form, { display: display }]}>
            <View style={Form.FormHead}>
                <Text style={Form.FormHeadText}>
                    FORMULARIO DE MUESTRAS
                </Text>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>TIPO DE EXAMEN</Text>
                <Picker
                    prompt="Seleccione"
                    selectedValue={tipoExamen}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) => {setTipoExamen(itemValue); functionSetTipoExamen(itemValue)}}
                >
                    <Picker.Item label="Seleccione" value={0} />
                    {tipoExamenVal.map((v, i)=> ( 
                        <Picker.Item label={v.descripcion} value={v.idexamen} key={i} />
                        ))}
                </Picker>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>TIPO DEL RESULTADO</Text>
                <Picker
                    prompt="Seleccione"
                    selectedValue={tipoResultado}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) => {setTipoResultado(itemValue); functionSetResultadoTipoExamen(itemValue)}}
                >
                    <Picker.Item label="Seleccione" value={null} />
                    {tipoResultadoVal.filter(t => t.idexamen === tipoExamen).map((v)=> {
                        return <Picker.Item label={v.descripcion} value={v.descripcion} key={v.idresultado} />
                    })}
                </Picker>
            </View>
            <View style={[Form.InputContOne, { marginTop: 15, marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>FECHA TOMA DE MUESTRA</Text>
                <View style={Form.InputAndBtnSearch}>
                    <TextInput
                        style={Form.InputAndButton}
                        editable={false}
                        defaultValue={fechaTomaMuestra}
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
            <View style={[Form.InputContOne, { marginTop: 15,  marginBottom: 15}]}>
                <Text style={Form.InputLabel}>CÓDIGO DE BARRA</Text>
                <TextInput
                    style={Form.Input}
                    onChangeText={text => functionSetCodigoBarra(text)}
                />
            </View>
            <View style={[Form.InputContOne, { marginTop: 15,  marginBottom: 15 }]}>
                <Text style={Form.InputLabel}>OBSERVACIONES</Text>
                <TextInput
                    style={Form.Input}
                    onChangeText={text => functionSetObservaciones(text)}
                />
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
        </View>
    );
}

export default StepFive;