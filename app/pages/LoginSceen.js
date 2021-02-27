import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Image, View, TextInput, Text, TouchableHighlight, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import login from "../assets/styles/loginStyles";
import { database } from "../db/database";
import Loader from '../components/modal-loader/Loader'
import Spinner from 'react-native-loading-spinner-overlay';
import { GlobalContext } from '../context/MyContext'
export default function LoginSceen({ navigation }) {
  const [dataUser, setDataUser] = useState(null);
  const [dataUserPermission, setDataUserPermission] = useState(null);
  const [dataUserRoles, setDataUserRoles] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  const [active, setActive] = useState(false);
  const gC = useContext(GlobalContext);



  const funcSetDataUser = (val) => {
    setDataUser(val)
  }

  /*
   * Crea las tablas en BD al inicio
   */
  useEffect(() => {
    database.setupDatabaseAsync();
    database.setupDatabaseUserAsync();
    //database.dropDatabaseTablesAsync();
    //database.updateFichaAll();
  }, []);

  /*
   * Al cambiar dataUser realiza la accion segun su valor 
   */
  useEffect(() => {
    // ? Si es null, no hace nada
    if (!dataUser) return;

  // ? Si no se encontro el usuario en la BD busca en el suis
  if (Object.keys(dataUser).length === 0) {
    console.log("No encontro el usuario en BD");
    const formData = new FormData();
    formData.append("user", username);
    formData.append("password", password);
    axios.post(`http://sistemas.mpps.gob.ve/index.php/api/login`,
      formData,
      {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(r => {
        if (r.data) {
          //console.log(r.data)
          /**
           * ? convertimos el array de estados en string
           */
          const estados = r.data.idEstados.toString()
          /**
           * ? ahora verificamos que el usuario tenga el permiso para registrar los resultados
           */
          const permission = r.data.permissions.find(p => p === 'covid19RegistrarResultadoFia')
          //console.log(estados);
          database.insertUser(r.data.id, username, password, funcSetDataUser, estados, permission);
          } else {
            gC.setIdUser(null);
            setDataUser(null);
          }
        })
        .catch(e => {
          console.error(e)
          alert('Sus datos son incorrectos');
          gC.setIdUser(null);
          setDataUser(null);
          setActive(false);
        });
    } else {
      //Encontro el usuario en BD, asigna los valores
      setActive(false);
      gC.setIdUser(dataUser.idsuis);
      gC.setPasswordUser(dataUser.password)
      gC.setUsername(dataUser.username)
      gC.setEstadoByEstablecimiento(dataUser.id_estados.split(','));
      gC.setHasPermission(dataUser.has_permission);
      database.getFicha(gC.setDataGlobal, dataUser.idsuis);
      navigation.navigate('PrincipalPages');
    }
  }, [dataUser]);

  /*
   * Busca el usuario en BD
   */
  const searchUser = () => {
    if (!username || !password) {
      alert("No se ingresaron los datos");
      return;
    }

    database.getUser(username, password, funcSetDataUser);
    //database.dropDatabaseTablesUserAsync()
    //database.dropDatabaseTablesAsync()
    setActive(true);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={login.container}
    >
      <Spinner
                visible={active}
                textContent={'Cargando...'}
                textStyle={styles.spinnerTextStyle}
            />
      <View style={login.bgGroundDark}>
        <View style={login.logoLogin}>
          <Image source={require("../assets/images/mpps-logo.png")} />
        </View>
        <View style={login.inputContainerDark}>
          <TextInput
            style={login.inputDark}
            autoCompleteType="username"
            autoFocus
            placeholder="Usuario"
            placeholderTextColor="white"
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={login.inputDark}
            autoCompleteType="password"
            placeholder="Contraseña"
            placeholderTextColor="white"
            textContentType="password"
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={login.contentButonLogin}>
          <TouchableHighlight onPress={searchUser} underlayColor='transparent'>
            <View style={login.buttLogin}>
              <Text style={login.textButoon}>Iniciar</Text>
            </View>
          </TouchableHighlight>
        </View>
        {/**
      <View style={login.singInFingerCont}>
        <TouchableHighlight>
          <View style={login.buttLoginFinger}>
            <View style={login.textFingerCont}>
              <Text style={login.textButoonFinger}>
                Ingresar con huella dactilar
              </Text>
            </View>
              * ?paradespues TODO <View style={{ marginLeft: 44 }}>
              <Image
                style={login.huellaSingin}
                source={require("../assets/images/huella-dactilar.png")}
              />
          </View>
        </TouchableHighlight>
      </View>
            </View> */}
        <View style={login.suisContText}>
          <Text style={login.suisText}>SUIS</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
      color: '#FFF'
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
  }
});