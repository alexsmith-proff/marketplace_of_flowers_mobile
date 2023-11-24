import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    item: {
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E2E4EB',
        backgroundColor: '#FFF',
        // width: 278,
        marginBottom: 20,
        marginRight: 30
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 180,
        padding: 20,
    },
    title: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 22,
        color: '#222A46',
        marginBottom: 10
    },
    priceCart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})