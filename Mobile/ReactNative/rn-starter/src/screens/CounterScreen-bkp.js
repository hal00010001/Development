import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {

    //let counter = 0 Não funciona como no JavaScript

    const [counter, setCounter] = useState(0)


    return (
        <View>
            <Button title='Increase' onPress={() => {
                //counter++ Não funciona como no JavaScript
                setCounter(counter + 1)
            }} />
            <Button title='Decrease' onPress={() => {
                //counter-- Não funciona como no JavaScript
                setCounter(counter - 1)
            }} />
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen
