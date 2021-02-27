import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react';
import { Text, View, TouchableHighlight, TextInput } from 'react-native';
import Form from '../../../assets/styles/dropDownStyle';
import { FlatList } from 'react-native-gesture-handler';
import airportVal from '../../data-insert/airport'
function AirportDropDown(props) {
    const [wordToSearch, setWordSearch] = useState('');
    const [airports, setAirports] = useState([]);
    const {setShow, functionSetAirport, setTextAirport} = props;
    const setValor = (val, valText) => {
        functionSetAirport(val)
        setTextAirport(valText)
        setShow();
    }

    /**
     * ? filtramos dependiendo de la palabra
     */
    useEffect(() => {
        if (wordToSearch.length > 2) {
            const d = airportVal.filter(c => {
                const regex = new RegExp(wordToSearch, 'gi');
                return c.nombre.match(regex);
            })
            setAirports(d)
        }else{
            setAirports(airportVal)
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
            data={airports}
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

export default AirportDropDown;