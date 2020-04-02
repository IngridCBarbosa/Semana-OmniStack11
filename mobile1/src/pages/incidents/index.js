import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'

import logoImg from '../../assets/logo.png'

import styles from './style.js'

export default function Incidentes(){
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

            <View style={styles.incidentList}>
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    
                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                    
                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>

                    <TouchableOpacity 
                        style={ styles.detailsButton}
                        onPress={() => {}}
                    >
                        <Text style={styles.detailsButtonText} >Ver mais detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}