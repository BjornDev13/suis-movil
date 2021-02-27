import { Platform, StyleSheet } from "react-native";

const login = StyleSheet.create({
  container:{
    flex:1
  },
  bgGroundDark: {
    flex: 1,
    backgroundColor: "#293241",
    marginTop: Platform.OS === "android" ? 40 : 0,
  },
  textBgDark: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  logoLogin: {
    marginTop: 20,
    alignItems: "center",
  },
  inputContainerDark: {
    marginTop: 40,
    alignItems: "center",
  },
  inputDark: {
    marginTop: 20,
    color: "#FFFFFF",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
    width: 300,
    height: 40,
    fontSize: 14,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  contentButonLogin: {
    marginTop: 50,
    alignItems:"center"
  },
  buttLogin: {
    width: 300,
      alignItems: "center",
      padding: 10,
      height: 50,
      borderRadius:10,
      justifyContent:"center",
      backgroundColor: "#E63946"
    
  },
  textButoon: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#FFFFFF"
  },
  singInFingerCont: {
    marginTop: 45,
    marginLeft:45,
    marginRight:45,
    height:60,
    width: 300,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center"
  },
  buttLoginFinger: {
    width: 300,
    backgroundColor: "transparent",
    height: 60,
    borderRadius:10,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignContent:"center"
    
  },
  textFingerCont:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center"
  },
  textButoonFinger: {
    fontSize:14,
    color:"white",
    fontWeight:"bold"
  },
  huellaSingin: {
    width:45,
    height:60
  },
  suisContText: {
    width:"100%",
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center",
    alignSelf:"flex-end"
  },
  suisText:{
    fontSize:30,
    fontWeight:"bold",
    color:"#98C1D9"
  }
});

export default login;
