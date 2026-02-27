import {Slot, Stack} from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const DashboardLayout = () =>{
 return <View>
    <Text style = {styles.header}>APP NAME</Text>
    <Slot/>
 </View>
}

export default DashboardLayout;

const styles = StyleSheet.create({
    header:{
        height: 120,
        backgroundColor: '#09ff00',
        color:'#000000'
    }
})
