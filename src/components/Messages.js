import React, {Component} from 'react'
import {View, Text, FlatList, Image} from 'react-native'
import Styles from './Styles'
import { NetworkInfo } from 'react-native-network-info'

var ip = ''

NetworkInfo.getIPV4Address().then(ipv4Address => {
     ip = ipv4Address
});

const Message = props =>
    props.sentBy === ip ? //Verifying who sent the message.
        <View style={Styles.myMessage}>
            <Text style={{color:'#fff'}}>{props.text}</Text>
            <Text style={{alignSelf:'flex-end', color:'#fff'}}>{props.time}</Text>
        </View>
        :
        <View style={Styles.othersMessage}>
            <Text style={{color:'#fff'}}>{props.text}</Text>
            <Text style={{alignSelf:'flex-start', color:'#fff'}}>{props.time}</Text>
        </View>

export default props =>{
    const renderItem = ({ item }) => {
        return (
            <Message {...item} />
        )
    }
    return (
            <FlatList data={props.messages} renderItem = {renderItem}/>
    )
 }