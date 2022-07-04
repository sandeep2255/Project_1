import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-web";

const male =  () => {
    return(
        <View style={styles.container}>
                <Text style={styles.discription}>The male reproductive system consists of a number of sex organs that play a role in the process of human reproduction. These organs are located on the outside of the body and within the pelvis.
                    The main male sex organs are the penis and the testicles which produce semen and sperm, which, as part of sexual intercourse, fertilize an ovum in the female's body; the fertilized ovum (zygote) develops into a fetus, which is later born as an infant.</Text>
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

export default male;