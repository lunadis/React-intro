import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'

const alunos = [
    {id: 1, nome:'Jão', nota: 8.3},
    {id: 2, nome:'Paulo', nota: 4.1},
    {id: 3, nome:'Mateus', nota: 6.4},
    {id: 4, nome:'Carlos', nota: 5.7},
    {id: 6, nome:'Henrique', nota: 1.2},
    {id: 7, nome:'Luis', nota: 10.0},
    {id: 8, nome:'Gustavo', nota: 3.7},
    {id: 9, nome:'Eduardo', nota: 5.9},

    {id: 11, nome:'Jão', nota: 8.3},
    {id: 12, nome:'Paulo', nota: 4.1},
    {id: 13, nome:'Mateus', nota: 6.4},
    {id: 14, nome:'Carlos', nota: 5.7},
    {id: 16, nome:'Henrique', nota: 1.2},
    {id: 17, nome:'Luis', nota: 10.0},
    {id: 18, nome:'Gustavo', nota: 3.7},
    {id: 19, nome:'Eduardo', nota: 5.9},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    //cross axes
    alignItems: 'center',
    //invert o axes main
    flexDirection: 'row',
    //main axes
    justifyContent: 'space-between',
};

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props =>{
    const renderItem = ({item}) => {
        return <Aluno {...item}/>
    };

    return(
        <ScrollView>
            <FlatList renderItem={renderItem} data={alunos}
                      keyExtractor={(_, index) => index.toString()}/>
        </ScrollView>
    )
}