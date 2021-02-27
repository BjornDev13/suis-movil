import React, { useContext, useEffect, useState } from 'react';
import { Text, View, FlatList } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHourglassStart, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/MyContext';
function dataTable(props) {
    const [dataTable, setDataTable] = useState([]);
    const globaContext = useContext(GlobalContext);
    useEffect(()=>{
        setDataTable(globaContext.dataGlobal)
    }, [globaContext.dataGlobal,dataTable])
    return (
        <FlatList data={dataTable}
            keyExtractor={item => item.id.toString()}
            renderItem={
                ({ item }) => 
                <View style={props.styeContItemList}>
                    <View style={props.styleInfoTable}>
                        <Text style={props.styleItemList}>
                            {item.id}
                        </Text>
                        <Text style={props.styleItemList}>
                            {item.primerNombre + ' '+ item.primerApellido + ' '+ item.cedula}
                        </Text>
                    </View>
                    <View style={props.styleIconTables}>
                        {(item.statusSend === "done") ? (
                            <View style={props.styleIconStatusDone}>
                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#81f499' }}/>
                            </View>
                        ) : (
                                <View style={props.styleIconStatusProcessing}>
                                    <FontAwesomeIcon icon={faHourglassStart} style={{ color: "#E63946" }} />
                                </View>
                            )}
                        
                    </View>
                </View>
            }
        />
    );
}

export default dataTable;