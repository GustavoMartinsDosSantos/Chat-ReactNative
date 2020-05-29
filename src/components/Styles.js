import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    pageView:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#d97f52',
    },
    topBarLabel:{
        fontSize:30,
        justifyContent:'center',
        alignItems:'center',
        padding:9,
        color:'#fff',
    },
    topBar:{
        height:60,
        width:'100%',
        backgroundColor:'#f56a14',
        shadowRadius:20,
   },
   inputView:{
       maxHeight:109,
       justifyContent:'space-between',
       paddingHorizontal:5,
       flexDirection:'row',
       marginBottom:5,
       marginTop:10,
   },
   textBar:{
       fontSize: 18,
       backgroundColor:'#fff',
       borderRadius:20,
       width:'82%',
       paddingLeft:15,
   },
   sendButton:{
       width:'13.5%',
       aspectRatio: 1,
       borderRadius:50,
       backgroundColor:'#fa3c32',
       alignItems:'center',
       justifyContent:'center',
       alignSelf:'flex-end',
       paddingLeft:10,
   },
   messages:{
       flex:1,
   },
   othersMessage: {
       backgroundColor:'#ff6f3b',
       justifyContent:'center',
       marginTop:5,
       paddingHorizontal:10,
       paddingVertical:10,
       alignSelf:'flex-start',
       alignContent:'flex-start',
       marginLeft:10,
       borderRadius:15,
       borderTopLeftRadius: 0,
       maxWidth:'90%',
   },
   myMessage: {
    backgroundColor:'#ff6f3b',
    justifyContent:'center',
    marginTop:5,
    paddingHorizontal:10,
    paddingVertical:10,
    alignSelf:'flex-end',
    alignContent:'flex-start',
    marginRight:10,
    borderRadius:15,
    borderTopRightRadius: 0,
    maxWidth:'90%',
},
})

export default styles