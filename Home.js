import react from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";
const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.discription}> SEX EDUCATION</Text>
            </View>
            <View style={styles.buttonNew}>
                <Button title="Male anatomy" onPress={() => navigation.navigate('male')}/>
            </View>
            <View style={styles.buttonNew}>
                <Button title="Female anatomy" onPress={() => navigation.navigate('female')}/>
            </View>
        </View>
    )
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
        },
        tasksWrapper:{
            paddingTop: 10,
            paddingHorizontal: 20,
            paddingLeft: 20,
        },
        discription:{
            fontSize: 24,
            fontWeight: 'bold',
            alignSelf: 'center',
            color: 'black',
        },
        buttonNew:{
            paddingTop: 50,
            alignSelf: 'center',
            width:200,
            borderRadius: 20,
            marginTop:20,
        },
    
    });
export default HomeScreen
