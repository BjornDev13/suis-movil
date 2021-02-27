import { Platform, StyleSheet, Dimensions } from "react-native";
const Form = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? 40 : 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    /**
     * ? styles by paginator of steps
     */
    PaginatorSteps: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        backgroundColor: '#293241',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: "center"
    },
    PaginatorStepsNumber: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 25,
        height: 25,
        borderWidth: 1,
        backgroundColor: "#293241",
        borderColor: "#98C1D9",
    },
    PaginatorStepsText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#98C1D9",
    },
    /**
     * ? class actives
     */
    PaginatorStepsTextActive: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    PaginatorStepsNumberActive: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 25,
        height: 25,
        borderWidth: 1,
        backgroundColor: "#E63946",
        borderColor: "#FFFFFF"
    },
    /**
     * ! end
     */
    /**
     * ? styles by form 
     */
    formContent: {
        flex: 3,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: "scroll"
    },
    /**
     * ? styles btn next and back
     */
    contButtons: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnNext: {
        backgroundColor: '#E63946',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 15,
    },
    btnNextText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    btnBack: {
        backgroundColor: '#293241',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 15,
    },
    btnBackText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    /**
     * ! end styles btn next and back
     */
    /**
     * ! end
     */
    /**
     * ? styles by Form 
     */
    Form: {
        flex: 3,
        marginTop: 10,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: '100%',
        zIndex: 99
    },
    FormHead: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    FormHeadText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#E63946"
    },
    FormSubHead: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "flex-start"
    },
    FormSubHeadText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#293241",
        textAlign: "left"
    },
    /**
     * ? style Input
     */
    InputContOne: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        width: "100%"
    },
    InputContTwo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "49%",
        //borderColor:"red",
        //borderWidth:3
    },
    InputLabel: {
        color: "#BBBBBB",
        fontWeight: "bold"
    },
    Input: {
        width: "100%",
        height: 40,
        color: "#E63946",
        paddingHorizontal: 10,
        borderBottomColor: "#A9A9A9",
        borderBottomWidth: 0.5
    },
    InputAndButton: {
        width: "90%",
        height: 40,
        color: "#E63946",
        paddingHorizontal: 10,
        borderBottomColor: "#A9A9A9",
        borderBottomWidth: 0.5
    },
    BtnSeaerchInput: {
        width:30,
        height:30,
        borderRadius:50,
        backgroundColor:'#E63946',
        display:'flex',
        flexDirection: 'row',
        color:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
    },
    /**
     * ! end 
     */
    multiSelect: {
        width:'90%', 
        display:"flex", 
        flexDirection:'row', 
        justifyContent:'flex-start', 
        alignItems:'center'
    },
    multiSelectItems: {
        width:90, 
        height:40, 
        backgroundColor: "#BBBBBB",
        borderRadius:50,
        display:"flex", 
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center',
        marginRight:7
    },

    /**
     * ?styled modal drop down
     */
    DropDownContainer: {
        width: "100%",
        height: 50,
    },
    DropDown: {
        backgroundColor: "transparent",
        borderRadius: null,
        borderColor: "transparent",

    },
    InputAndBtnSearch:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    centeredView:{
        backgroundColor:'rgba(0,0,0,0.5)',
        display:'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        paddingVertical:10,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        width:'90%',
        height:'100%',
        borderRadius: 20,
        paddingVertical:10,
        paddingHorizontal:15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})

export default Form;