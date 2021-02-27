import { Platform, StyleSheet } from "react-native";

const principal = StyleSheet.create({
    bgGroundLight: {
        flex: 1,
        marginTop: Platform.OS === "android" ? 40 : 0,
    },
    container: {
        flex: 1
    },
    bgImage: {
        flex: 1,
        justifyContent: "center",
        alignContent: "flex-start",
        alignItems: "center",
        resizeMode: "cover",
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "column",
        marginBottom: 20
    },
    titleOne: {
        color: "white",
        fontSize: 50,
        fontWeight: "bold",
    },
    titleTwo: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    headerTable: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 5
    },
    InputSearch: {
        height: 45,
        width: 190,
        borderRadius: 10,
        backgroundColor: "white",
        color: "#707070",
        fontWeight: "bold",
        fontSize: 14,
        paddingLeft: 10,
    },
    buttonAdd: {
        backgroundColor: "#293241",
        height: 45,
        width: 160,
        borderRadius: 10,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    textButtonAdd: {
        color: "white",
        fontWeight: "bold"
    },
    contTable: {
        
        backgroundColor: "#ffffff",
        borderRadius: 10,
        width: "100%",
        height: 330,
        paddingVertical: 10,

    },
    /**
     * * begind styles paginator
     */
    btnLogout: {
        marginRight:"auto",
        marginLeft:"auto",
        position:"relative",
        marginTop: "2%",
        marginBottom:"-1%",
        zIndex: 9999,
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor: "#293241",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    btnSync: {
        marginRight:0,
        marginLeft:"auto",
        position:"relative",
        zIndex: 9999,
        width:40,
        height:40,
        borderRadius:50,
        backgroundColor: "#E63946",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    PaginatorCont: {
        marginTop: 20,
        width: 300,
        height: 45,
        backgroundColor: "#E63946",
        borderRadius: 10,
        overflow: "scroll",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        marginBottom:5
    },
    styleNumber: {
        borderRadius: 50,
        backgroundColor: "#ffffff",
        width: 30,
        height: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    styleText: {
        color: "#293241",
        fontSize: 14,
        fontWeight: "bold"
    },
    /**
     * *end styles paginator
     */
    /**
     * * styles table
     */
    contItemList: {
        flex:1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        width: "100%",
        padding: 10,
        overflow:"visible",
    },
    itemList: {
        marginRight: 20,
        color: "#C6C6C6",
        fontSize: 14,
        fontWeight: "bold"
    },
    theadTable: {
        backgroundColor: "#293241",
        height: 45,
        width: "100%",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 10,
    },
    theadTableText: {
        color: "#98C1D9",
        fontWeight: "bold",
        fontSize: 14,
        marginRight: 20
    },
    styleInfoTable: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    styleIconTables: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    styleIconStatusDone: {
        marginRight:10,
        width:30,
        height:30,
        borderColor:"#E63946",
        borderRadius:50,
        borderStyle: "dashed",
        borderWidth:1,
        display:"flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center"
    },
    styleIconStatusProcessing: {
        marginRight:10,
        width:30,
        height:30,
        borderColor:"#E63946",
        borderRadius:50,
        borderStyle: "dashed",
        borderWidth:1,
        display:"flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center"
    },
    styleIconUpdate: {
        marginRight:10,
        width:30,
        height:30,
        borderColor:"#E63946",
        borderRadius:50,
        borderStyle: "dashed",
        borderWidth:1,
        display:"flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center"
    },
    styleIconTrash: {
        width:30,
        height:30,
        borderColor:"#E63946",
        borderRadius:50,
        borderStyle: "dashed",
        borderWidth:1,
        display:"flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center"
    },
    /**
     * * styles table
     */
})
export default principal;
