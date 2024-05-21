import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {

    const navigation = useNavigation();


    return(
        <View style={styles.footer}>
             <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Image source={require('../assets/imagem/lista.png')} style={styles.cadastroIcon}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menuListe: {
        flexGrow: 1
    },
    footer: {
        paddingVertical: 5,
        backgroundColor: '#CAD49D',
        marginTop: 20,
        alignItems: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    cadastroIcon: {
        width: 38,
        height: 38,
        marginBottom: 9,
        marginLeft: 130

    
    }
});

export default Footer;