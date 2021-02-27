import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState, useContext} from 'react';
import { Text, View, TouchableHighlight, TextInput } from 'react-native';
import Form from '../../../assets/styles/dropDownStyle';
import { FlatList } from 'react-native-gesture-handler';
import municipioVal from '../../data-insert/municipio';
import {GlobalContext} from '../../../context/MyContext'
function MunicipioDropDown(props) {
    const gC = useContext(GlobalContext);
    const [municipio, setMunicipio] = useState([]);
    const {setShow, functionSetMunicipio, setTextMunicipioFunc, idEsta} = props;
    const setValor = (val, valText) => {
        functionSetMunicipio(val);
        setTextMunicipioFunc(valText);
        setShow();
    }
    const est = idEsta;
    /**
     * ? filtramos dependiendo de la palabra
     */
    useEffect(() => {
        if (est !== '') {
            const mu = municipioVal.filter(m => {
                return m.id_estado === est;
            })
            setMunicipio(mu)
        }
    },[est])
    

    return (
        <View style={Form.MunicipioDropDown}>
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
            data={municipio}
            keyExtractor={item => item.id.toString()}
            renderItem={
                ({ item }) =>
                {
                    
                        return (
                            <TouchableHighlight onPress={() => setValor(item.id, item.nombre)} underlayColor='transparent'>
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

export default MunicipioDropDown;