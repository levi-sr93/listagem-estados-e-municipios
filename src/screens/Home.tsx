import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StateItem } from '../components/StateItem';
import { api } from '../services/api';

export interface IState {
  id: number;
  nome: string;
  sigla: string;
  regiao: string;
}

export function Home() {
  const [states, setStates] = useState<IState[]>([]);
  const navigation = useNavigation();

  async function loadStates(){
    const response = await api.get("?orderBy=nome");

    setStates(response.data);
  }

  function handleToCity(state: IState){
    navigation.navigate('City', {
      state
    })
    navigation.setOptions({title: 'Estados'})

  }

  useEffect(() => {
    loadStates()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <FlatList<IState>
        style={styles.stateList}
        data={states}
        keyExtractor={(state) => String(state.id)}
        renderItem={({item}) => {
          return (
            <StateItem item={item} onPress={() => handleToCity(item)} />
          )
        }}
        showsVerticalScrollIndicator={false}
        
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#253031',
    paddingHorizontal: 40,
    justifyContent: "center",
    padding: 40
  },
  stateList:{
    flex: 1,
    padding: 20,
  },
  
});

// 61E294
// FFB30F