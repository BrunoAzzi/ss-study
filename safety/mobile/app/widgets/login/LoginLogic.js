import Logic from '../Logic'
import {Alert, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';

/**
 * Define a logica do widget
 */
var STORAGE_KEY = 'id_token';
var urlServidor = "http://192.168.0.71:8080/template/";

class LoginLogic extends Logic{
  constructor () {
    super();
    this.value = 0;  //variável que informa a quantia de agua
  }

  async _onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  async _getProtectedQuote() {
    var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
    fetch(urlServidor + "random-quote", {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + DEMO_TOKEN
      }
    })
    .then((response) => response.text())
    .then((quote) => {
      Alert.alert(
        "Chuck Norris Quote:", quote)
    })
    .done();
  }

  async userLogout() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      Actions.login();
      Alert.alert("Logout Success!")
    } catch (error) {
      alert('AsyncStorage error: ' + error.message);
    }
  }

  _userSignup() {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      fetch(urlServidor + "users", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: value.login,
          password: value.password,
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        this._onValueChange(STORAGE_KEY, responseData.id_token),
        Alert.alert(
          "Signup Success!"
        )
      })
      .done();
    }
  }

  userLogin(value) {
    if (value) { // if validation fails, value will be null
      fetch(urlServidor + "login", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: value.login,
          password: value.password,
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        Alert.alert(
          "Login Success!"
        ),
        this._onValueChange(STORAGE_KEY, responseData.id_token)
        Actions.dashboard();
      })
      .done();
    }
  }
}
/**
 * Define e exporta objeto único para representar a lógica do widget
 */
export default LoginLogic = new LoginLogic()
