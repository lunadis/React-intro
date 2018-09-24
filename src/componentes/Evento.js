import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component{
    state = {
        texto: 'teste'
    }

    alterarTexto = texto => {
        this.setState({ texto   })
    }

    render(){
        return(
            <View>
                <Text style={Padrao.font40}>{this.state.texto}</Text>
                <TextInput style={Padrao.input}
                    values={this.state.texto}
                    onChangeText={this.alterarTexto}/>
            </View>
        )
    }
}