import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';

import {FlatList, StyleSheet, Text, View} from 'react-native';
import { CityItem } from '../components/CityItem';
import { api } from '../services/api';
import { IState } from './Home';

interface ICityParams {
    state: IState;
}

export interface IStateCities {
    id: number,
    nome: string,
}
export function City(){
    const [cities, setCities] = useState<IStateCities[]>([])
    const route = useRoute();
  const navigation = useNavigation();

    const {state} = route.params as ICityParams;

    async function loadCityState(){
        const response = await api.get<IStateCities[]>(`/${state.id}/municipios?orderBy=nome`);
        console.log(response.data)
        setCities(response.data);
      }

    useEffect(() => {
        loadCityState()
        navigation.setOptions({title: state.nome.toUpperCase()})
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Municipios do estado: {state.nome}</Text>

            <FlatList<IStateCities>
                data={cities}
                keyExtractor={(city) => String(city.id)}
                renderItem={({item}) => {
                    return (
                        <CityItem item={item} />
                    )
                } }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#253031',
        paddingHorizontal: 40,
        justifyContent: "center",
        padding: 40
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    }
})