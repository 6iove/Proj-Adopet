import { View, Text, ImageBackground, ScrollView, StyleSheet } from "react-native";
import Header from './components/Header'
import Footer from './components/Footer'
import { SafeAreaView } from 'react-native-safe-area-context';

const backgroundImg = require('@/assets/images/adopet-background.jpeg')

export default function Index() {
  return(
    <SafeAreaView style={styles.container}>

      <Header />

      <ImageBackground source={backgroundImg} style={styles.backgroungImage} resizeMode="cover">
        <ScrollView style={styles.scrollContent}>
          <View>

            <Text style={styles.titleText}>Sobre Nós</Text>

            <Text style={styles.bodyText}>
              O Adopet é uma ideia que surgiu com a reflexão sobre causas sociais, 
              a causa dos abrigos de adoção e a realidade presenciada no meio. 
              Mais do que criar um sistema funcional, a proposta do grupo também 
              está em criar uma ponte entre quem pode acolher e quem precisa ser acolhido.{"\n\n"}
              
              Durante a construção deste documento, nos deparamos com questões que 
              vão muito além da tecnologia. Pensamos em responsabilidade, afeto abandono, 
              confiança e impacto que um sistema pode ter quando é feito com um propósito.{"\n\n"}
              
              Cada funcionalidade aqui descrita foi pensada com base em situações reais, 
              que pedem sensibilidade e rigor ao mesmo tempo: a verificação dos adotantes, 
              o cuidado no pós‐adoção, o limite de animais por tutor, os relatórios detalhados. 
              Tudo foi discutido com a consciência de que estamos lidando com vidas.{"\n\n"}
              
              Sabemos que um sistema, por si só, não resolve problemas complexos. 
              Mas acreditamos que ele possa ser parte da solução ‐ organizando, conectando e 
              facilitando processos que antes eram incertos ou manuais.{"\n\n"}
              
              O Adopet carrega em si um propósito: aproximar pessoas dispostas a cuidar de 
              animais que só precisam de uma chance.
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>

      <Footer />

    </SafeAreaView>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }, 
  backgroungImage: {
    flex: 1,
    width: '100%',
  }, 
  scrollContent: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingVertical: 32,
    paddingHorizontal: 24, 
    alignItems: 'center', 
    flex: 1
  }, 
  titleText: {
    color: '#fff', 
    fontSize: 28, 
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginVertical: 20, 
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  }, 
  bodyText: {
    color: '#fff', 
    fontSize: 16, 
    marginHorizontal: 15,
    textAlign: 'center', 
    textShadowColor: 'rgba(0, 0, 0, 0.3)', 
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2, 
  }, 

})