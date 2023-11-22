import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    MiddleText: {
        color: '#222A46',
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 32,
        marginBottom: 15,
        width: 180
    },
    Promo: {
        flexDirection: "row",
    },
    PromoBtn: {
        backgroundColor: '#0093A2',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 10,
        opacity: 0.5,
        padding: 7,
    },

    PromoText: {
        backgroundColor: '#fff',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        color: '#E2195B',
        fontSize: 14,
        fontWeight: "bold",
        letterSpacing: 0.1,
        lineHeight: 22,
        paddingHorizontal: 25,
        paddingVertical: 7,
        textTransform: 'uppercase'
    },
    UnderText: {
        fontSize: 16,
        marginBottom: 10
    },
    img: {
        position: "relative"
    },

    info: {
        left: 50,
        position: "absolute",
        top: 30,
        zIndex: 99
    }
})