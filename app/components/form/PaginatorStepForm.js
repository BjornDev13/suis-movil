import React from 'react';
import { Text, View } from "react-native";
import Form from '../../assets/styles/formStyle'
function PaginatorStepForm(props) {
    const { CurrentState } = props
    return (
        <View style={Form.PaginatorSteps}>
            <View style={Form.PaginatorStepsNumberActive}>
                <Text style={Form.PaginatorStepsTextActive}>
                    1
                </Text>
            </View>
            <View style={CurrentState > 1 ? Form.PaginatorStepsNumberActive : Form.PaginatorStepsNumber}>
                <Text style={CurrentState > 1 ? Form.PaginatorStepsTextActive : Form.PaginatorStepsText}>
                    2
                </Text>
            </View>
            <View style={CurrentState > 2 ? Form.PaginatorStepsNumberActive : Form.PaginatorStepsNumber}>
                <Text style={CurrentState > 2 ? Form.PaginatorStepsTextActive : Form.PaginatorStepsText}>
                    3
                </Text>
            </View>
            <View style={CurrentState > 3 ? Form.PaginatorStepsNumberActive : Form.PaginatorStepsNumber}>
                <Text style={CurrentState > 3 ? Form.PaginatorStepsTextActive : Form.PaginatorStepsText}>
                    4
                </Text>
            </View>
            <View style={CurrentState > 4 ? Form.PaginatorStepsNumberActive : Form.PaginatorStepsNumber}>
                <Text style={CurrentState > 4 ? Form.PaginatorStepsTextActive : Form.PaginatorStepsText}>
                    5
                </Text>
            </View>
        </View>
    )
}

export default PaginatorStepForm;