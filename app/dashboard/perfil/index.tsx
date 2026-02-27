import { StyleSheet, Text, View } from "react-native"

const PerfilScreen =() => {
    return <View>
        <Text style = {styles.header}>APP name</Text>
        <Text>Hola desde la pantalla de perfil del usuario</Text>
    </View>
}
export default PerfilScreen

const styles = StyleSheet.create({
    header:{
        height: 120,
        backgroundColor: '#006eff',
        color:'#fff'
    }
})