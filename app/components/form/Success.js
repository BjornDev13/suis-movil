import React, {useState, useEffect} from 'react';
import {Image, Text, View } from 'react-native';
import Form from "../../assets/styles/formStyle";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
function Success(props) {
    const [display, setDisplay] = useState('none');
    useEffect(()=>{
        if (props.currentStep === 6) {
            setDisplay('flex')
        }else {
            setDisplay('none');
        }
    }, [props.currentStep])
    return (
        <View style={[Form.Form, { 
        display: display,
        flex: 3, 
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center"}]}>
            <View style={{marginTop:"40%"}}>
                <Image source={require("../../assets/images/success.png")} />
            </View>
            <Text style={{color:"#293241", fontSize:40, fontWeight:"bold"}}>
                ¡Registro Exitoso!
            </Text>
        </View>
    );
}

export default Success;