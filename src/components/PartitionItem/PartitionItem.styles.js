import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    img: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5

    },
    info: {
        alignItems: "center",
        paddingVertical: 15
    },
    item: {
        backgroundColor: '#FFF',
        borderColor: '#E2E4EB',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        boxShadow: '0px 4px 12px 0px rgba(34, 42, 70, 0.03)',
        marginRight: 30
    },
    price: {
        color: '#222A46',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 22,
    },
    priceText: {
        fontWeight: '700'
    },
    title: {
        color: '#222A46',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 22,
        paddingBottom: 5
    },
})