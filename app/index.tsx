import { Link, Redirect } from 'expo-router';


import React, { useState } from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native'
// cada objeto que se quiera crear, DEBE IMPORTASE AQUI


type TSaludo = {
    show: Boolean
}

const Saludo = (props: TSaludo) => {
    if (props.show){
        return <Text>Hola :v</Text>;
    }
    return <></>
}

const indexPage = () => {
    //ESTRUCTURA DE LOS ESTADOS
    const [show, setShow] = useState<Boolean>(false);
    const [textBtn, setTextBtn] = useState<string>('saludar');

    return <View style={estilos.contianer // debemos llamar al objeto
        // podemos documentar por medio de objetos (clases)
        // flex: 1,
        // padding: 16,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#0af802'
    }>
        <Button
            title={textBtn}
            onPress={() => {
                setShow(valor => !valor);
                setTextBtn(!show ? 'Ocultar saludos' : 'Saludar')
            }}
        />
        {show ? <Text>Hola !!!</Text> : <></>}
        <Saludo show={show}/>
        <TextInput
            placeholder='Ingrese el nombre'
            value={textBtn}
            // onChangeText={setTextBtn}
            onChangeText={(value)=>{setTextBtn(value)}}
        />

        {/* <Redirect href={'/login'}/>  */}
        {/* // REDIRECT es para direccionar automanticamente una pagina */}
        <Link href={'/login'}>INICIAR SESION</Link>
        {/* // LINK es para definir una ruta para direccionar manualmente, a modo de boton */}

    </View>
}

export default indexPage;

const estilos = StyleSheet.create({ // los objetos (o clases en js) debe ir despue de export
    contianer:{
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0af802'
    }

});