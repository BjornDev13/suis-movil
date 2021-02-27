import React from 'react';
import { Text, View, TouchableHighlight } from "react-native";
function Paginator(props) {
    return (
        <View style={props.styleCont}>
            <TouchableHighlight>
                <View style={props.styleNumber}>
                    <Text style={props.styleText}>
                        1
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

export default Paginator;