import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Switch
} from 'react-native';

import propTypes from 'prop-types'

export function ToggleOn({on,children}){
    return on ? children : null
  }
  export function ToggleOff({off,children}){
    return off ? null : children
  }
  export function ToggleButton({on,toggle,... props}){
    return <Switch value ={on} onValueChange = {toggle} {... props}/>
  }