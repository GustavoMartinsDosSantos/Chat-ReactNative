console.disableYellowBox = true //Ignoring The warnings

import React, {Component} from 'react'
import {View, ScrollView} from 'react-native'
import Styles from './src/components/Styles'
import TopBar from './src/components/TopBar'
import TextBar from './src/components/TextBar'
import Messages from  './src/components/Messages'
import io from 'socket.io-client'
import { NetworkInfo } from 'react-native-network-info'

export default class App extends Component {

  componentDidMount() {
    NetworkInfo.getIPV4Address().then(ipv4Address => {
      this.ip = ipv4Address
    })

    this.socket = io('https://rn-messaging.herokuapp.com/')

    this.socket.on('chat messages', msgs => {
      this.setState({
        messages: msgs,
      })
      this.forceUpdate()
    })
  }

    sendMessage = text =>{

      if (text.replace(/ /g,'') === '')
        {
          this.setState({
            message:'',
          })
          return
        }

      this.socket.emit('chat message', {text: this.state.message, ip: this.ip})

      this.setState({
        message:'',
      })
    }

    textChanged = text =>{
      this.setState({ message: text })
    }

    state = {
      message: '',
      messages: [],
    }

    render(){
      return (
        <View style={Styles.pageView}>
          <TopBar label = "Chat da Galera" />
          <ScrollView style={Styles.messages}
              ref={ref => {this.scrollView = ref}}
              onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
            <Messages messages={this.state.messages}/>
          </ScrollView>
          <TextBar value={this.state.message} onChangeText={text => this.textChanged(text)} Send={() => this.sendMessage(this.state.message)}/>
        </View>
      )
    }
}