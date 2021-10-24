import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { IState } from '../screens/Home';

interface IStateItemProps extends TouchableOpacityProps {
    item: IState
}

export function StateItem({item, ...rest}: IStateItemProps) {
    return (
        <TouchableOpacity style={styles.itemState} {...rest}>
            <View style={[styles.avatar]}>
                <Text style={styles.stateSigla}>{item.sigla}</Text>
            </View>
            <Text style={styles.stateName}>
                {item.nome}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemState: {
        width: "100%",
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: "#878C8F",
        borderRadius: 12,
        alignItems: "center",
      },
      avatar: {
        width: 60,
        height: 60,
        backgroundColor: "#FFB30F",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
      },
      stateName: {
        color: "#FCF7FF",
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14
      },
      stateSigla:{
        color: "#FCF7FF"
      }
})