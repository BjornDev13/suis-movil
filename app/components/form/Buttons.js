import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'

export default function Buttons(props) {
    const {step, navigation, FormStyle, nextStep, saveData, btnBackActive, btnNextActive, contBtnJustify, backStep,widthBtnNext} = props;
    return (
        <>
        {step < 6 && (
            <View style={[FormStyle.contButtons, { justifyContent: contBtnJustify }]}>
                <TouchableHighlight onPress={backStep} underlayColor='transparent'>
                    <View style={[FormStyle.btnBack, { width: 180, display: btnBackActive }]}>
                        <Text style={FormStyle.btnBackText}>Regresar</Text>
                    </View>
                </TouchableHighlight>
                {step === 5 ? (
                    <TouchableHighlight onPress={() => saveData()} underlayColor='transparent'>
                        <View style={[FormStyle.btnNext, { width: widthBtnNext, display: btnNextActive }]}>
                            <Text style={FormStyle.btnNextText}>Guardar</Text>
                        </View>
                    </TouchableHighlight>
                ) : (
                        <TouchableHighlight onPress={nextStep} underlayColor='transparent'>
                            <View style={[FormStyle.btnNext, { width: widthBtnNext, display: btnNextActive }]}>
                                <Text style={FormStyle.btnNextText}>Siguiente</Text>
                            </View>
                        </TouchableHighlight>
                    )}
            </View>
        )}
        {step > 5 && (
            <View style={[FormStyle.contButtons, { justifyContent: "center" }]}>
                <TouchableHighlight underlayColor='transparent' onPress={() => navigation.navigate('PrincipalPages')}>
                    <View style={[FormStyle.btnNext, { width: 360, display: "flex" }]}>
                        <Text style={FormStyle.btnNextText}>Ok</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )}
        </>
    )
}
