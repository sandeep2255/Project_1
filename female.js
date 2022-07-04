import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-web";

const female =  () => {
    return(
        <View style={styles.container}>
                <Text style={styles.discription}>The female reproductive system is made up of the internal and external sex organs that function in reproduction of new offspring.
                 In humans, the female reproductive system is immature at birth and develops to maturity at puberty to be able to produce gametes, and to carry a foetus to full term. The internal sex organs are the vagina, uterus, Fallopian tubes, and ovaries. The vagina allows for sexual intercourse and birth, and is connected to the uterus at the cervix. The uterus or womb accommodates the embryo which develops into the foetus. The uterus also produces secretions which help the transit of sperm to the Fallopian tubes, where sperm fertilize ova (egg cells) which are produced by the ovaries. The external sex organs are also known as the genitals and these are the organs of the vulva including the labia, clitoris, and vaginal opening</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    newtaskitem:{
        backgroundColor: 'red',
        paddingTop: 10,
        alignSelf:'center',
        width:300,
        paddingBottom: 20,
        borderRadius: 10,
        marginTop:20,
        marginBottom:20,
    },
    discription:{
        fontSize: 24,
        fontWeight: '100',
        color: 'black',
    },

});

export default female;