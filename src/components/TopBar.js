import React from 'react'
import {View, Text} from 'react-native'
import Styles from './Styles'

export default props => {
    return (
        <View elevation={1} style={Styles.topBar}>
            <Text style={Styles.topBarLabel}>{props.label}</Text>
        </View>
    )
}