import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { IStateCities } from '../screens/City';

interface ICityItemProps extends TouchableOpacityProps {
    item: IStateCities
}

export function CityItem({item, ...rest}: ICityItemProps) {
    return (
        <TouchableOpacity style={styles.itemState} {...rest}>
            <View>
                <Text style={styles.stateSigla}>{item.nome.substring(0, 2)}</Text>
            </View>
            <Text style={styles.stateName}>
                {item.nome.toUpperCase()}
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