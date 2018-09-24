import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import { Avo } from './componentes/ComunicacaoDireta'
import {TextoSincronizado} from "./componentes/ComunicacaoIndireta";
import ListaFlex from './componentes/ListaFlex'

export default createDrawerNavigator({
    ListaFlex:{
        screen:()=> <ListaFlex/>
    },
    TextoSinconizado:{
      screen:() => <TextoSincronizado/>
    },
    Avo:{
      screen:()=> <Avo nome='Joao' sobrenome='silva' />
    },
    Evento:{
      screen: Evento
    },
    ValidarProps:{
      screen:()=> <ValidarProps ano={20}/>
    },
    Plataformas:{
        screen:() => <Plataformas/>
    },
    Contador:{
        screen:() => <Contador/>
    },
    MegaSena:{
        screen: () => <MegaSena numeros={6}/>,
        navigationOptions:{title: 'Mega Sena'}
    },
    Inverter:{
        screen: () => <Inverter texto={'Luis'}/>,
    },
    ParImpar:{
        screen:()=> <ParImpar numero={20}/>,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples:{
        screen:()=> <Simples texto='Flexivel'/>,
        navigationOptions: {title: 'Simples'}
    }
},{drawerWidth: 300})

