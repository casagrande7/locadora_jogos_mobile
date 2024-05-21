import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {

    const navigation = useNavigation();


    return(
        <View style={styles.footer}>
             <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Image source={require('../assets/imagem/lista.png')} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Pesquisa')}>
                <Image source={require('../assets/imagem/lupa.png')} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menuListe: {
        flexGrow: 1
    },
    footer: {
        paddingVertical: 2,
        backgroundColor: '#CAD49D',
        marginTop: 15,
        alignItems: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        flexDirection:'row'
    },
    cadastroIcon: {
        width: 38,
        height: 38,
        marginBottom: 9,
        
    },
    icon: {
        width: 38,
        height: 38,
        marginBottom: 50,
        marginLeft: 15,
        marginVertical:10
    }
});

export default Footer;