import React from 'react';
import { TextInput } from "react-native";
function InputSearch(props) {
    return (
        <TextInput
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderColor}
            style={props.style} />
    );
}

export default InputSearch;