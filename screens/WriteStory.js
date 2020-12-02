import * as React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import{Header} from 'react-native-elements'


export default class WriteStory extends React.Component{
    constructor(){
        super()
        this.state = {
            title: ' ',
            author: ' ',
            story: ' '
        }
    }
  render(){
    return(
      <View style = {styles.container}>
          <Header 
          backgroundColor = {'#00adb5'}
          centerComponent = {{
              text : 'Story Hub',
              style : { color: 'black', fontSize: 30}
          }}
          />

<TextInput 
                    placeholder="Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}
                    placeholderTextColor='black'/>
                <TextInput
                    placeholder="Author"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    onChangeText= {(text)=>{
                        this.setState({
                            story: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.story}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                   
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#eeeeee'
  },
  title:{
    height: 40,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
    color:'black',
    padding: 6,

},
author: {
    height: 40,
    borderWidth: 2,
    margin: 10,
     padding: 6,
},
storyText: {
    height: 250,
    borderWidth: 2,
    margin: 10, 
    padding: 6,
},
submitButton:{
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#393e46',
    width: 80,
    height: 40,color:'black',
},
buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    
}
})