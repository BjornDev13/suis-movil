import React, { useContext, useEffect, useState } from 'react';
import {
    Text, View, ImageBackground, TouchableHighlight, Platform, KeyboardAvoidingView, StyleSheet
} from "react-native";
import principal from "../assets/styles/principalStyle";
import InputSearch from "../components/InputSearch";
import Paginator from "../components/Paginator";
import DataTable from "../components/dataTable"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPowerOff, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/MyContext';
import { database } from "../db/database"
import Spinner from 'react-native-loading-spinner-overlay';
import { syncToApiSuisF } from '../components/form/methods-send/syncToApiSuisF';
function PrincipalPages({ navigation }) {
    const gC = useContext(GlobalContext);
    const [dataBySync, setDataBySync] = useState([]);
    const [total, setTotal] = useState(0)
    const [init, setInit] = useState(false);
    const [errorsSync, setErrorsSync] = useState([])
    const closeSession = () => {
        gC.setIdUser(null)
    }
    const setDataBySyncFunc = (v) => {
        setDataBySync(v)
    }
    const setTotalRowsFunc = (v) => {
        setTotal(v)
    }

    const stopSync = () => {
        setInit(false)
    }

    const syncData = () => {
        const idUser = gC.idUser;
        database.getFichaBySync(setDataBySyncFunc, idUser, setTotalRowsFunc);
    }
    
    useEffect(() => {
        if (gC.idUser === null) {
            navigation.navigate('LoginScreen')
        }
        /**
         * ? en esta seccion del codigo ejecutaremos
         * * la carga de ls registros para  los de estatus en proceso
         * ! totalRows los usaremos para el total de registros
         * ! dataBySync se usuara para almacenar la data de de los registro si guardar en la db del suis
         */
            
            if (total > 0) {
                setInit(true)
                dataBySync.map(d => {
                    syncToApiSuisF.syncToApiSuis(gC.username, gC.password, d, stopSync, setTotalRowsFunc, total, gC.setDataGlobal, gC.idUser, setErrorsSync, errorsSync);
                })
            }else if(total <= 0) {
                setInit(false)
                if (errorsSync.length > 0) {
                    alert(errorsSync)
                }
            }
            
    }, [gC.idUser, total, errorsSync])
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={principal.container}
        >
            <View style={principal.bgGroundLight}>
                <ImageBackground source={require("../assets/images/bgPrincipal.jpg")} style={principal.bgImage}>
                    <View style={principal.btnLogout}>
                        <TouchableHighlight onPress={() => { navigation.navigate('LoginScreen'); closeSession() }}>
                            <FontAwesomeIcon icon={faPowerOff} style={{ color: "#ffffff" }} />
                        </TouchableHighlight>
                    </View>
                    <View style={principal.header}>
                        <Text style={principal.titleOne}>
                            SUIS
                            </Text>
                        <Text style={principal.titleTwo}>
                            Registros de casos sopechosos
                            </Text>
                        <Text style={principal.titleTwo}>
                            COVID-19
                            </Text>
                    </View>
                    <View style={principal.headerTable}>
                        <View style={{ flex: 1, alignItems: "center", }}>
                            <TouchableHighlight onPress={() => navigation.navigate('Form')} underlayColor='transparent'>
                                <View style={principal.buttonAdd}>
                                    <Text style={principal.textButtonAdd}>Crear Nuevo</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <InputSearch
                                placeholder="BUSCAR....."
                                placeholderColor="#707070"
                                style={principal.InputSearch} />
                        </View>
                    </View>
                    <View style={principal.contTable}>
                        <View style={principal.theadTable}>
                            <Text style={principal.theadTableText}>
                                N
                            </Text>
                            <Text style={principal.theadTableText}>
                                DATOS DE LA PERSONA
                            </Text>
                            <View style={principal.btnSync}>
                                <TouchableHighlight onPress={() => syncData()}>
                                    <FontAwesomeIcon icon={faCloudUploadAlt} style={{ color: "#ffffff" }} />
                                </TouchableHighlight>
                            </View>
                        </View>
                        <DataTable
                            styleInfoTable={principal.styleInfoTable}
                            styleIconTables={principal.styleIconTables}
                            styeContItemList={principal.contItemList}
                            styleItemList={principal.itemList}
                            styleIconStatusDone={principal.styleIconStatusDone}
                            styleIconStatusProcessing={principal.styleIconStatusProcessing}
                            styleIconUpdate={principal.styleIconUpdate}
                            styleIconTrash={principal.styleIconTrash}
                        />
                    </View>
                    <Paginator
                        styleCont={principal.PaginatorCont}
                        styleNumber={principal.styleNumber}
                        styleText={principal.styleText}
                    />
                </ImageBackground>
            </View>
            <Spinner
                visible={init}
                textContent={'Cargando...'}
                textStyle={styles.spinnerTextStyle}
            />
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
  });
export default PrincipalPages;