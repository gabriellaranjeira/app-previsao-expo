import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button, FlatList, Keyboard, Text, Image } from 'react-native';
import PrevisaoItem from './Components/PrevisaoItem';

export default function App() {
	
	
  const appid = 'b0e6961731293592376eadacad101a4e';
  const endPoint = "https://api.openweathermap.org/data/2.5/weather?lang=pt&units=metric&q=";

  const [cidade, setCidade] = useState('');
  const [dataApi, setDataApi] = useState([]);
  const [loading, setLoading] = useState(false);
  
  

  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }

  const obtemPrevisoes = () => {
	setLoading(true);
	setDataApi([]);

	const urlApi = endPoint + cidade + "&appid=" + appid;
	
    fetch(urlApi)
    .then((dados) => dados.json())
    .then((dados) => {
      setDataApi([dados]);
	  setLoading(false);
      Keyboard.dismiss();
	  setCidade('');
    });
  }

  return (
    <View style={styles.container}>
	
      <View style={styles.header}>
	  
      <TextInput
		  style={styles.cidadeText}
		  placeholder="Digite o nome de uma cidade"
		  value={cidade}
		  onChangeText={capturarCidade} />
		  
      <Button title="Pesquisar" color="#000" onPress={obtemPrevisoes}/>
		
      </View>
	  
	  {
		  loading ? (
		  <View style={{width:230,flex:10, marginLeft:75, marginTop:40}}>
			<Image style={styles.loading} source={require('./assets/load.gif')} />
		   </View>) : (<View></View>)
	  }
	  
	  
      {
        <FlatList
          data={dataApi}
          renderItem = {
            data => ( <PrevisaoItem previsao={data} /> )
			}
        />
      }
	  
	  
    </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FFF'
  },
  cidadeText: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
	borderStyle: 'dotted',
	borderRadius: 10,
    textAlign: 'center',
    flexGrow: 0.7,
	marginBottom: 10,
	fontSize: 18,
	
  },
  loading: {
	  flex: 1,
	  width: '65%',
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
});
