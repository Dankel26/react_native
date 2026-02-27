import { Button, Text, View } from "react-native"
import { router } from "expo-router"

const LoginScreen = () => {
    return <View>
        <Text>Hola desde la pantalla de Login</Text>
        <Button
            title="Ir a Dashboard"
            onPress={() => {
                router.navigate("/dashboard")
            }}
        />
    </View>
}
export default LoginScreen