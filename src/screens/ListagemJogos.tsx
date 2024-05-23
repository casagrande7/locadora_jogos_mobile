import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";

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

      const renderProdutoItem = ({ item }: { item: Jogos }) => (
        <View style={styles.item}>
            <Text style={styles.textJogos}>{item.nome}</Text>
            <Text style={styles.textPreco}>{item.preco}</Text>
            <Text style={styles.textJogos}>{item.descricao}</Text>
            <Text style={styles.textJogos}>{item.classificacao}</Text>
            <Text style={styles.textJogos}>{item.plataformas}</Text>
            <Text style={styles.textJogos}>{item.desenvolvedor}</Text>
            <Text style={styles.textJogos}>{item.distribuidora}</Text>
            <Text style={styles.textJogos}>{item.categoria}</Text>
            <TouchableOpacity onPress={() => adicionarAoCarrinho(item)}>
            <Image source={require('./assets/imagens/mais.png')} style={styles.maisImagem}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removerCarrinho(item)}>
        <Image source={require('./assets/imagens/subtracao.png')} style={styles.subtracaoImagem}></Image>
        </TouchableOpacity>
        </View>
    );

    return (
        <View>
            
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#484538'
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

})

export default JogosListagem;