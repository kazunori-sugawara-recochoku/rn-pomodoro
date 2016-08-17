// @flow

import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const COLORS = {
    VERY_PALE_BLUE: '#f5fcff',
}
const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.VERY_PALE_BLUE,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})

export default function App() {
    return (
      <View style={STYLES.container}>
        <Text style={STYLES.text}>app</Text>
      </View>
    )
}
