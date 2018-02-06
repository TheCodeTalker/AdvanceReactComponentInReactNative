/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Switch
} from 'react-native';

import propTypes from 'prop-types'

import {ToggleOn,ToggleOff,ToggleButton} from './ExportClass'

class Toggle extends Component {
  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton
  state = {on:false}
  toggle=()=>{
    this.setState({on:!this.state.on},
      ()=>{this.props.onToggle(this.state.on)})
    }  
  render() {
    const children = React.Children.map(this.props.children,
      child=>
      React.cloneElement(child,
        {on:this.state.on,
          toggle:this.toggle}))
          
    return (
      <View style={styles.container}>
     {children}
      </View>
    );
  }
}
Toggle.defaultProps ={onToggle:()=>{}} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
   paddingTop:70
  }
});

export default class App extends Component{
  render(){
  return (
      <Toggle>
         <Toggle.Button/>
      <Toggle.On><Text>The button is on</Text></Toggle.On> 
      <Toggle.Off><Text>The button is off</Text></Toggle.Off> 
      </Toggle>
  )
}
}