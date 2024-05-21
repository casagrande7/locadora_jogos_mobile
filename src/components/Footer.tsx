import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {

    const navigation = useNavigation();


    return(
        <View style={styles.footer}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    menuListe: {
        flexGrow: 1
    },
    footer: {
        paddingVertical: 50,
        backgroundColor: '#8FBC8F',
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