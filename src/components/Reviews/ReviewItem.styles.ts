import { StyleSheet} from 'react-native'

export const s = StyleSheet.create({
    slider: {
        backgroundColor: '#fff',
        // boxShadow: '0px 4px 15px rgba(34, 42, 70, 0.08)',
        borderRadius: 10,
        padding: 25,
        // padding: '40px 50px',
        marginBottom: 40,
        // boxSizing: 'border-box',
        // width: calc(100% - 100px);
        height: 500
    },

    sliderContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'center',
        height: '100%',
        
    },
    sliderLeft: {},

    sliderName: {
        fontWeight:'700',
        fontSize: 16,
        lineHeight: 22,
        color: '#222A46',
        paddingTop: 10,
        marginBottom: 10,

    },

    sliderText: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        color: '#222A46',
        marginBottom: 15,
        // textAlign: 'justify'
        // width: 800,
    },

    sliderBouquet: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        color: '#222A46',
        marginBottom: 15

        // span {
            // color: #0093A2,
        // }
    },
    sliderBouquetText:{
        fontWeight: '400',        
    },

    sliderRight:{
        width: 110,
        height: 110,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#0093A2',
        borderRadius: 150,
    },
    img: {
        // display: 
        // padding: 8,


        // img {
            // display: block;

        // }
    }
})
