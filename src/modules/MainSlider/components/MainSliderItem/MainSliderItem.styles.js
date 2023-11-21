import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    img: {
        position: "relative"
    },
    info: {
        position: "absolute",
        left: 50,
        top: 30,
        zIndex: 99
    },
    MiddleText: {
        width: 180,
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 32,
        color: '#222A46',
        marginBottom: 15
    },

    UnderText: {
        fontSize: 16,
        marginBottom: 10
    },
    Promo: {
        flexDirection: "row",
    },
    PromoText: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
        textTransform: 'uppercase',
        letterSpacing: 0.1,
        color: '#E2195B',
        paddingVertical: 7,
        paddingHorizontal: 25,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },

    PromoBtn: {
        backgroundColor: '#0093A2',
        opacity: 0.5,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 0,
        padding: 7,
    }
})