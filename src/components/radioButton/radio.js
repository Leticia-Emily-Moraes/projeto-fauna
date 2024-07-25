import { Text  } from "react-native";
import { ContainerRButton, RadioBg, RadioButtonCon, TxtRButton,RadioBall} from "./style"
import {MaterialIcons} from "@expo/vector-icons"
import { StyleSheet } from "react-native";
import { useEffect } from "react";

const Radio = ({options, checkedValue, onChange}) => {

    return (
        <ContainerRButton>
            {options.map((option) => {  
                let active = checkedValue == option.value 
                return  (   
                    <RadioButtonCon 
                    onPress = {() => {
                        onChange(option.value)
                    }}
                    key={option.value}
                    >
                        <MaterialIcons name={ active ? "radio-button-checked": "radio-button-unchecked"}
                        size={25}
                        color={active ? '#06b6d4' : "#FFF" }
                        />
                        <TxtRButton>{option.label}</TxtRButton>
                    </RadioButtonCon>
                )
            })}
        </ContainerRButton>
    );
}
   
export default Radio;

