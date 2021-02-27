import React from 'react'
import { Modal, View } from 'react-native'
import Form from '../../assets/styles/formStyle';
export default function MyModal(props) {
    return (
        <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
            >
                <View style={Form.centeredView}>
                    <View style={Form.modalView}>
                        {props.children}
                    </View>
                </View>
            </Modal>
    )
}
