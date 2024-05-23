import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

function JogosListagem(): React.JSX.Element {
    const [jogos, setJogos] = useState<Jogos[]>([]);
    const [nome, setNome] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [classificacao, setClassificacao] = useState<string>("");
    const [plataformas, setPlataformas] = useState<string>("");
    const [desenvolvedor, setDesenvolvedor] = useState<string>("");
    const [distribuidora, setDistribuidora] = useState<string>("");
    const [categoria, setCategoria] = useState<string>("");
    const [carrinho, setCarrinho] = useState<{ [key: string]: number }>({});
    const [mensagemSucesso, setMensagemSucesso] = useState('');

    

    

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get('http://10.137.11.234/api/return/all/games');
                setJogos(response.data);
                //console.log(response);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    const adicionarAoCarrinho = (item: Jogos) => {
        if (carrinho[item.id]) {
          setCarrinho({ ...carrinho, [item.id]: carrinho[item.id] + 1 });
        } else {
          setCarrinho({ ...carrinho, [item.id]: 1 });
        }
        setMensagemSucesso('Produto adicionado com sucesso');
        return carrinho;
      };

      const removerCarrinho = (item: Jogos ) => {
        if(carrinho[item.id]) {
            setCarrinho({... carrinho, [item.id]: carrinho[item.id] - 1});
        } else {
            setCarrinho({...carrinho, [item.id]: 0});
            return carrinho;
        }
      };
    
      const totalCarrinho = Object.values(carrinho).reduce((total, quantidade) => total + quantidade, 0);

      const renderJogosItem = ({ item }: { item: Jogos }) => (
        <View style={styles.item}>
            <Text style={styles.textJogos}>{item.nome}</Text>
            <Text style={styles.textPreco}>{item.preco}</Text>
            <Text style={styles.textJogos}>{item.descricao}</Text>
            <Text style={styles.textJogos}>{item.classificacao}</Text>
            <Text style={styles.textJogos}>{item.plataformas}</Text>
            <Text style={styles.textJogos}>{item.desenvolvedor}</Text>
            <Text style={styles.textJogos}>{item.distribuidora}</Text>
            <Text style={styles.textJogos}>{item.categoria}</Text>
            
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#CAD49D'} barStyle='light-content'></StatusBar>
            <FlatList
            data={jogos}
            renderItem={renderJogosItem}
            keyExtractor={(item) => item.id ? item.id.toString(): Math.random().toString()}
            contentContainerStyle={styles.menuList}
            />
            <Footer />
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#484538'
    },
    item :{
        backgroundColor: '#D2B48C',
        padding: 20,
        marginBottom: 10,
        marginHorizontal: 16,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#3CB371',
    },
    header: {
        backgroundColor: '#CAD49D',
        alignItems: 'center',
        paddingVertical: 100,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 100,
        height: 10,
        marginTop: -35
    },
    form: {
        width: 360,
        marginLeft: 10,
        marginTop: -25,

    },
    input: {
        backgroundColor: '#D2B48C',
        marginTop: 40,
        fontWeight: 'bold',
        height: 42,
        borderRadius: 15,
        color: 'white',
        paddingLeft: 3,
        marginLeft: 10,
        marginRight: 10
    },
    imagem: {
        height: 150,
        width: 150,
        marginTop: -60,
        marginRight: 15,
        borderRadius: 50,
        marginLeft: -20
    },
    button: {
        backgroundColor: "white",
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 20,
        height: 50,
        width: 250,
        marginLeft: 65,
    },
    buttonText: {
        color: "#2E8B57",
        fontWeight: "bold",
        textAlign: "center",
    },
    imageButtonText: {
        color: '#3CB371',
        fontWeight: 'bold',
        marginTop: -40,
        marginLeft: 125
    },
    errorText: {
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'white'
    },
    menuList: {
        flexGrow: 1
    },
    textJogos: {

    },
    textPreco: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 170,
        color: 'white',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        marginLeft: 0

    }
})

export default JogosListagem;