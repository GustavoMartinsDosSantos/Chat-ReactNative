import React from 'react'
import {View, TextInput} from 'react-native'
import Styles from './Styles'
import SendButton from './SendButton'

export default props =>{
    return (
        <View style={Styles.inputView}>
            <TextInput style={Styles.textBar}
            multiline={true}
            placeholder="Digite uma mensagem..."
            onChangeText={props.onChangeText}>
                {props.value}
            </TextInput>
            <SendButton Send={props.Send} />
        </View>
    )
}