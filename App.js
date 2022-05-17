import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Video } from 'react-native';
import img from './assets/cat.png';
import jon from './assets/jhon.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.div}>        
      <Image
        style={styles.cat}
        source={img}
      />
      <Text style={styles.legenda}>Hmm quero lasanha meu criado</Text>
      </View>
      
      <View style={styles.di}>  
      <Image
        style={styles.jon}
        source={jon}
      />
      <Text style={styles.legenda}>Não sou seu criado</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cat: {
    width: 275,
    height: 375,
    borderStyle: 'solid', 
    borderColor: '#000', 
    borderWidth: 50,
    borderRadius: 500,
    borderTopColor: 'red',
    borderBottomColor: 'green',
    borderLeftColor: 'blue',
    borderRightColor: 'yellow',
    margin: 0,
    borderTopRightRadius: 0,
  },
  jon: {
    width: 400,
    height: 376,
    borderStyle: 'solid', 
    borderColor: '#000', 
    borderWidth: 50,
    borderRadius: 500,
    borderTopColor: 'red',
    borderBottomColor: 'green',
    borderLeftColor: 'blue',
    borderRightColor: 'yellow',
    marginBottom: 20,
    borderTopLeftRadius: 0,
  },
  div: {
    margin: 70,
  },
  di: {
    margin: 30,
  },
  legenda: {
    backgroundColor: '#fff',
  }

});
