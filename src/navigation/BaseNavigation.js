import React, { Component } from 'react'
import {View,Text} from 'react-native'
export class BaseNavigation extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Hi</Text>
            </View>
        )
    }
}

export default BaseNavigation