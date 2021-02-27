import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React, {useContext, useEffect, useState} from 'react';
import { Text, View, TouchableHighlight, TextInput } from 'react-native';
import Form from '../../../assets/styles/dropDownStyle';
import { FlatList } from 'react-native-gesture-handler';
import parroquiaVal from '../../data-insert/parroquia';
import {GlobalContext} from '../../../context/MyContext'
function ParroquiaDropDown(props) {
    const gC = useContext(GlobalContext);
    const [wordToSearch, setWordSearch] = useState('');
    const [parroquia, setParroquia] = useState([]);
    const {setShow, functionSetParroquia, setTextParroquiaFunc, idMuni} = props;
    const setValor = (val, valText) => {
        functionSetParroquia(val)
        setTextParroquiaFunc(valText)
        setShow();
    }
    const municipio_id = idMuni;
    /**
     * ? filtramos dependiendo de la palabra
     */
    useEffect(() => {
        if (municipio_id !== '') {
            const d = parroquiaVal.filter(p => {
                return p.idmunicipio === municipio_id;
            })
            setParroquia(d)
        }
    },[municipio_id])

    return (
        <View style={Form.ParroquiaDropDown}>
            <View style={Form.ContBtnClose}>
                <TouchableHighlight onPress={setShow} underlayColor='transparent'>
                    <View style={Form.btnCloseModalDrop}>
                        <Text>
                            <FontAwesomeIcon icon={faTimes} style={{color:"#FFFFFF"}} />
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            <FlatList
            data={parroquia}
            keyExtractor={item => item.idparroquia.toString()}
            renderItem={
                ({ item }) =>
                {
                        return (
                            <TouchableHighlight onPress={() => setValor(item.idparroquia, item.nombre)} underlayColor='transparent'>
                                <View style={Form.ContStb}>
                                <Text style={Form.EstbText}>
                                    {item.nombre}
                                </Text>
                            </View>
                            </TouchableHighlight>
                        )
                    
                }
            } />
        </View>
    );
}

export default ParroquiaDropDown;