import React from "react";
export const GlobalContext = React.createContext();
export default class GlobalContextProvider extends React.Component {
  constructor(props) {
    super(props);
    //this.resetAllState = this.resetAllState.bind(this);
    this.setDataGlobal = this.setDataGlobal.bind(this);
    this.setIdUser = this.setIdUser.bind(this);
    this.setEstado = this.setEstado.bind(this);
    this.setMunicipio = this.setMunicipio.bind(this);
    this.setEstadoTwo = this.setEstadoTwo.bind(this);
    this.setMunicipioTwo = this.setMunicipioTwo.bind(this);
    this.setEstadoByEstablecimiento = this.setEstadoByEstablecimiento.bind(this);
    this.setHasPermission = this.setHasPermission.bind(this);
    this.setPasswordUser = this.setPasswordUser.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setSpinner = this.setSpinner.bind(this);
    /**
     * ? DECLARE THE STATE
     */
    this.state = {
      dataGlobal:[],
      estado: '',
      municipio:'',
      setEstado: this.setEstado,
      setMunicipio: this.setMunicipio,
      estadoTwo: '',
      municipioTwo:'',
      setEstadoTwo: this.setEstadoTwo,
      setMunicipioTwo: this.setMunicipioTwo,
      setDataGlobal: this.setDataGlobal,
      idUser: null,
      username: null,
      password: null,
      setUsername: this.setUsername,
      setPasswordUser: this.setPasswordUser, 
      setIdUser: this.setIdUser,
      estadoByEstablecimiento:null,
      hasPermission:null,
      setEstadoByEstablecimiento: this.setEstadoByEstablecimiento,
      setHasPermission: this.setHasPermission,
      spinner:false,
      setSpinner: this.setSpinner
    };
  }
  setSpinner() {
    this.setState({spinner: !spinner})
  }
  setDataGlobal(data) {
    this.setState({dataGlobal:data})
  }
  setIdUser(val) {
    this.setState({idUser:val})
  }
  setEstado(val) {
    this.setState({estado:val})
  }
  setMunicipio(val) {
    this.setState({municipio: val})
  }

  setEstadoTwo(val) {
    this.setState({estadoTwo:val})
  }
  setMunicipioTwo(val) {
    this.setState({municipioTwo: val})
  }
  setEstadoByEstablecimiento(arr) {
    this.setState({estadoByEstablecimiento: arr})
  }
  setHasPermission(val) {
    this.setState({hasPermission: val})
  }
  setPasswordUser(val) {
    this.setState({password: val})
  }
  setUsername(val) {
    this.setState({username: val})
  }
  /**
  * ! Renderiza el componente
  */
  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
