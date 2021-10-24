import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, TouchableOpacityProps} from "react-native";

interface IButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({title, ...rest}: IButtonProps){
    return (
        <View>
            <TouchableOpacity style={styles.button} {...rest}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        minWidth: 100,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "green",
        borderRadius: 12,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    }


})