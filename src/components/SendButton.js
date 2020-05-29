import React from 'react'
import {TouchableHighlight, Image} from 'react-native'
import Styles from './Styles'

export default props => {
    return (
        <TouchableHighlight style={Styles.sendButton} onPress={props.Send}>
            <Image
                style={{width:35, height:35}}
                source={require('../icon/MsgIcon.png')
            }/>
        </TouchableHighlight>
    )
}