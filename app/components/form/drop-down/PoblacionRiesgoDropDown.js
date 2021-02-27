import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Form from '../../../assets/styles/dropDownStyle';
import { FlatList } from 'react-native-gesture-handler';
import poblacionRiesgoVal from '../../data-insert/poblacionRiesgo';
export default function PoblacionRiesgoDropDown(props) {
    const [data, setData] =useState([])
    const { setShow, functionSetPoblacionRiesgo, poblacionRiesgoSetValues } = props;
    var dataArr = []

    const addItemToData = (item) => {
        const found = dataArr.find(e => e === item.id)
        if (found !== item.id) {
            dataArr.push(item.id)
            item.isSelected = true
            
        }else {
            var i = dataArr.indexOf( item.id );
            dataArr.splice( i, 1 );
            item.isSelected = false
            
        }
    }
console.log(data)

    return (
        <View style={Form.poblacionDropDown}>
            <View style={Form.ContBtnClose}>
                <TouchableHighlight onPress={setShow} underlayColor='transparent'>
                    <View style={Form.btnCloseModalDrop}>
                        <Text>
                            <FontAwesomeIcon icon={faTimes} style={{ color: "#FFFFFF" }} />
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            <FlatList
                data={poblacionRiesgoVal}
                keyExtractor={item => item.id.toString()}
                renderItem={
                    ({ item }) => {
                        return (
                            <TouchableHighlight underlayColor='transparent' onPress={() => addItemToData(item)}>
                                <View style={Form.ContStbMulti} >
                                <Text style={Form.EstbTextMulti}>
                                    {item.descripcion}
                                </Text>
                                {item.isSelected  && (
                                    <Text>
                                        ok
                                    </Text>
                                )}
                            </View>
                            </TouchableHighlight>
                        )

                    }
                } />
        </View>
    )
}
