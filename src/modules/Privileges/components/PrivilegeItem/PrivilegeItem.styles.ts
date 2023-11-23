import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 12px rgba(34, 42, 70, 0.03)',
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: '#F2F3F5',
        borderRadius: 5,
        height: 100,
        marginRight: 15,
    },        
    text: {
        fontSize: 14,
        width: 130,
        marginLeft: 10,
    }
})
