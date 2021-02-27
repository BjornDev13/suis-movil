import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState, useContext} from 'react';
import { Text, View, TouchableHighlight, TextInput } from 'react-native';
import Form from '../../../assets/styles/dropDownStyle';
import { FlatList } from 'react-native-gesture-handler';
import establecimiento from '../../data-insert/establecimiento'
import {GlobalContext} from '../../../context/MyContext'
function EstablecimientoDropDown(props) {
    const gC = useContext(GlobalContext)
    const [wordSearch, setWordSearch] = useState('');
    const [est, setEst] = useState([]);
    const [estByEst, setEstByEst] = useState([])
    const {setShow, functionSetEstSalud, setTextEstbFunc} = props;
    const setValor = (val, valText) => {
        functionSetEstSalud(val)
        setTextEstbFunc(valText)
        setShow();
    }

    /**
     * ? filtramos dependiendo de la palabra
     */
    useEffect(() => {
        if (wordSearch.length > 4) {
            const regex = new RegExp(wordSearch, 'gi');
            const estado = gC.estadoByEstablecimiento;
            const d = establecimiento.filter(est => {
                return estado.indexOf(est.idestado) != -1 && regex.test(est.nombre);
            })
            setEst(d)
        }else{
            setEst([])
        }
    },[wordSearch])
    return (
        <View style={Form.EstablecimientoDropDown}>
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
            data={est}
            keyExtractor={item => item.idestablecimiento.toString()}
            renderItem={
                ({ item }) =>
                <TouchableHighlight onPress={() => setValor(item.idestablecimiento, item.nombre)} underlayColor='transparent'>
                    <View style={Form.ContStb}>
                    <Text style={Form.EstbText}>
                        {item.nombre}
                    </Text>
                    <Text style={{fontSize:10}}>
                        Estado: {item.estado}
                    </Text>
                </View>
                </TouchableHighlight>
            } />
        </View>
    );
}

export default EstablecimientoDropDown;