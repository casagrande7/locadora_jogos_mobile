import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {

    const navigation = useNavigation();


    return(
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../assets/images/')} style={styles.footerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PesquisaProduto')}>
                <Image source={require('../assets/images/')} style={styles.footerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image source={require('../assets/images/')} style={styles.footerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image source={require('../assets/images/')} style={styles.footerIcon}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menuListe: {
        flexGrow: 1
    },
    footer: {
        paddingVertical: 50,
        backgroundColor: '#98FB98',
        marginTop: 20,
        alignItems: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    footerIcon: {
        width: 30,
        height: 30
    }
});

export default Footer;