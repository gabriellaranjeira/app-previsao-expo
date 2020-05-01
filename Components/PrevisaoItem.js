import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Card from './Card';

const PrevisaoItem = (props) => {
    return (
        <Card>
            <View style={estilos.conteiner}>
                <View>
                    <View style={estilos.header}>
                        <Text style={estilos.titulo}>{props.previsao.item.name}</Text>
                    </View>
                    <View style={estilos.body}>
                        <Text style={estilos.bodyText}>
                            <Image style={estilos.imagem} source={require('../assets/celsius.png')}/>
                            &nbsp;&nbsp;
                            Sensção térmica: {props.previsao.item.main.feels_like + " \u00B0" + "C" } 
                        </Text>
                        <Text style={estilos.bodyText}>
                            <Image style={estilos.imagem} source={require('../assets/sun.png')}/>
                            &nbsp;&nbsp;Hora do pôr do sol: {new Date(props.previsao.item.sys.sunset * 1000).toLocaleTimeString()}
                        </Text>
                        <Text style={estilos.bodyText}>
                            <Image style={estilos.imagem} source={require('../assets/sun1.png')}/>
                            &nbsp;&nbsp;Hora do nascer so sol: {new Date(props.previsao.item.sys.sunrise * 1000).toLocaleTimeString()}
                        </Text>
                    </View>
                </View>
            </View>
        </Card> 
    );
}

const estilos = StyleSheet.create({
	titulo: {
		color: "#FFF",
		fontSize: 30
	},
    conteiner: {
        flexDirection: 'row',
    },
    imagem: {
        width: 20,
        height: 20
    },
    header: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#CCC',
		padding: 5,
		paddingTop: 20,
        flexWrap: 'wrap',
		marginTop: 5,
    },
    bodyText: {
		color: '#FFF',
        marginHorizontal: 2,
    }
});

export default PrevisaoItem;