/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class App extends React.Component {
  // State com os Numeros

  state = {
    NumberHolder: 0,
    numerosMin: 0,
    numerosMax: 0,
  };

  result = () => {
    var RandomNumber = Math.ceil(
      Math.random() * this.state.numerosMax + this.state.numerosMin,
    );
    this.setState({
      NumberHolder: RandomNumber,
    });
  };
  // Arquivos de Renderização
  render() {
    return (
      <KeyboardAvoidingView>
        <View>
          <View style={styles.container}>
            <Text style={styles.mainText}>SORTEADOR</Text>
          </View>
          <View style={styles.viewTextInput1}>
            <Text style={styles.textMin}>Escolha o menor número  🔽</Text>
            <TextInput
              style={styles.inputName}
              keyboardType={'number-pad'}
              keyboardAppearance={'dark'}
              fontFamily={'bahnschrift'}
              fontSize={25}
              textAlign={'center'}
              onChangeText={(valorMin) => {
                this.setState({numerosMin: valorMin});
              }}
              autoCorrect={false}
            />
          </View>
          <View style={styles.viewTextInput1}>
            <Text style={styles.textMax}>Escolha o maior número    🔽</Text>
            <TextInput
              style={styles.inputName}
              keyboardType={'number-pad'}
              keyboardAppearance={'dark'}
              fontFamily={'bahnschrift'}
              fontSize={25}
              textAlign={'center'}
              onChangeText={(valorP) => {
                this.setState({numerosMax: valorP});
              }}
              autoCorrect={false}
            />
          </View>
          <View>
            <View style={styles.view2Button}>
              <TouchableOpacity style={styles.button2} onPress={this.result}>
                <Text style={styles.appButtonText}>Sortear</Text>
              </TouchableOpacity>
              <View style={styles.viewpadding} >
                <Text style={styles.textResult}>{this.state.NumberHolder}</Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
// ESTILIZAÇÃO
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
  },
  mainText: {
    textAlign: 'center',
    fontSize: 44,
    color: 'white',
    fontFamily: 'bahnschrift',
  },
  botao: {
    borderRadius: 50,
    marginVertical: 50,
    width: 150,
    alignSelf: 'center',
  },
  inputName: {
    width: '17%',
    color: 'black',
    margin: 10,
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3.17,
    alignSelf: 'center',
  },
  nomes: {
    textAlign: 'center',
    fontSize: 32,
    color: 'black',
    fontFamily: 'bahnschrift',
  },
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 25,
  },
  SortearButton: {
    color: '#e67e22',
  },
  view2Button: {
    marginTop: 20,
    alignItems: 'center',
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#95a5a6',
    padding: 10,
    width: 400,
    color: 'white',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#e67e22',
    padding: 10,
    width: 300,
    color: '#fff',
    borderRadius: 50,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  textMin: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontFamily: 'bahnschrift',
  },
  textMax: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontFamily: 'bahnschrift',
  },
  textResult: {
    textAlign: 'center',
    fontSize: 150,
    fontFamily: 'bahnschrift',
  },
  viewTextInput1: {
    padding: 10,
  },
  viewpadding: {
    padding: 15
  },
});
