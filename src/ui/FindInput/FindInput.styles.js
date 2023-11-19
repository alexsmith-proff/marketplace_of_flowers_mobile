const { StyleSheet } = require("react-native");

export const s = StyleSheet.create({
    wrap:{
        width: 200,
        position: "relative",
        // backgroundColor: '#eee',
    },
    input:{
        fontSize: 14,
        paddingVertical: 0,
        paddingLeft: 12,
        paddingRight: 27,
        borderWidth: 1,
        borderRadius: 50,
    },
    btn: {
        position: "absolute",
        top: 7,
        right: 7
    },
    img:{
        width: 15,
        height: 15,
    },
})