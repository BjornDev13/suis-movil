import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react';
import { Text, View, TouchableHighlight, TextInput } from 'react-native';
import Form from '../../../assets/styles/dropDownStyle';
import { FlatList } from 'react-native-gesture-handler';
import ocupacionVal from '../../data-insert/ocupacion'
function OcupacionDropDown(props) {
    const [wordToSearch, setWordSearch] = useState('');
    const [ocupacion, setOcupacion] = useState([]);
    const {setShow, functionSetOcupacion, setTextOcupacionFunc} = props;
    const setValor = (val, valText) => {
        functionSetOcupacion(val)
        setTextOcupacionFunc(valText)
        setShow();
    }

    /**
     * ? filtramos dependiendo de la palabra
     */
    useEffect(() => {
        if (wordToSearch.length > 2) {
            const d = ocupacionVal.filter(ocupacion => {
                const regex = new RegExp(wordToSearch, 'gi');
                return ocupacion.nombre.match(regex);
            })
            setOcupacion(d)
        }else{
            setOcupacion([])
        }
    },[wordToSearch])

    return (
        <View style={Form.OcupacionDropDown}>
            <View style={Form.ContBtnClose}>
                <TouchableHighlight onPress={setShow} underlayColor='transparent'>
                    <View style={Form.btnCloseModalDrop}>
                        <Text>
                            <FontAwesomeIcon icon={faTimes} style={{color:"#FFFFFF"}} />
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={Form.inputSearchCont}>
                <TextInput
                style={Form.inputSearch}
                placeholder='Buscar'
                onChangeText={text => setWordSearch(text)} />
               
            </View>
            <FlatList
            data={ocupacion}
            keyExtractor={item => item.id.toString()}
            renderItem={
                ({ item }) =>
                <TouchableHighlight onPress={() => setValor(item.id, item.nombre)} underlayColor='transparent'>
                    <View style={Form.ContStb}>
                    <Text style={Form.EstbText}>
                        {item.nombre}
                    </Text>
                </View>
                </TouchableHighlight>
            } />
        </View>
    );
}

export default OcupacionDropDown;