import React from 'react'
import { Feather } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'

import logoImg from '../../assets/logo.png'

import styles from './style.js'

export default function Incidentes() {

    const navigation = useNavigation()

    function navigateToDetail() {
        navigation.navigate('Detail')
    }



    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Image source={logoImg} />
                <Text style={styles.container}>
                    Total de <Text style={styles.headerTextBold}>0 casos.</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text>Escolha um dos casos abaixo e salve o dia</Text>

            <FlatList
                style={styles.incidentList}
                data={[1, 2, 3]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>APAD</Text>


                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>


                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>R$ 120,00</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={navigateToDetail}
                        >
                            <Text style={styles.detailsButtonText} >Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}