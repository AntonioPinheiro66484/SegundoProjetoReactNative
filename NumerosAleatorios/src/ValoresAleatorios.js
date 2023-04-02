import React from 'react'
import {Text, View, Button, StyleSheet, Alert}  from 'react-native'


const gerarNumeroAleatorio=()=>{
    var numero_aleatorio= Math.random();
    var numero_aleatorio1= Math.random();
    var numero_aleatorio2= Math.random();
    var numero_aleatorio3= Math.random();
    var numero_aleatorio4= Math.random();

    numero_aleatorio  = Math.floor(numero_aleatorio*50)
    numero_aleatorio1 = Math.floor(numero_aleatorio1*50)
    numero_aleatorio2 = Math.floor(numero_aleatorio2*50)
    numero_aleatorio3 = Math.floor(numero_aleatorio3*50)
    numero_aleatorio4 = Math.floor(numero_aleatorio4*50)
    var operacao = numero_aleatorio+numero_aleatorio1+numero_aleatorio3+numero_aleatorio2+numero_aleatorio4;
    alert("São escolhidos 5 numeros aleatoriamente dentro de um range de 0 a 49 ao clicar no botão")
    alert(numero_aleatorio)
    alert(numero_aleatorio1)
    alert(numero_aleatorio2)
    alert(numero_aleatorio3)
    alert(numero_aleatorio4)

     alert(" E uma conta é feita com os numero Aleatorios sorteados como foi pedido!\n"+numero_aleatorio+"+"+numero_aleatorio1+"+"+numero_aleatorio2+"+"+numero_aleatorio3+"+"+numero_aleatorio4+"="+operacao);

}
export default (param)=>{
    console.warn(param)
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Gerando numeros Aleatórios</Text>
 
            <Text style={styles.texto1}>Descrição do App: Dentro de um range de 0 até 49 é escolhido 1 numero aleatorio 5 vezes</Text>
            <Text style={styles.texto1}>Após escolher os numeros o app uma operação conforme foi pedido na tarefa uma operação</Text>
            <Text style={styles.texto}>Os numeros estão sendo reenderizados no App.js onde o componente ValoresAleatorios está sendo chamado</Text>



            <Button style={styles.botao}
                title="Gerar numeros Aleatorios"
                onPress={gerarNumeroAleatorio}
                color="red"
            > 
            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'beige',
      borderWidth: 5,
    },
    titulo:{
        paddingBottom:40,
    },
    texto:{
        paddingBottom:30,
    },
    botao:{
        flex:1,
        paddingBottom:20,
    }
  });

  