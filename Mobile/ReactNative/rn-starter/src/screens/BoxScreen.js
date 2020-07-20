import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <Text style={styles.viewOneStyle}>Box Screen #1</Text>
            <Text style={styles.viewTwoStyle}>Box Screen #2</Text>
            <Text style={styles.viewThirdStyle}>Box Screen #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        //alignItems: 'flex-start'
        //alignItems: 'flex-end'
        //alignItems: 'center'
        //alignItems: 'stretch'
        //flexDirection: 'column'
        //flexDirection: 'row',
        height: 200,
        //justifyContent: 'space-between'
        alignItems: 'center'
    },
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',        
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //flex: 4
        //marginVertical: 20,
        //marginHorizontal: 20
        //margin: 20
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'center',
        //flex: 4
        //marginVertical: 20,
        //marginHorizontal: 20
        //margin: 20
        //position: 'absolute',
        fontSize: 18,
        //top: 0,
        //right: 0,
        //bottom: 0,
        //left: 0
        ...StyleSheet.absoluteFillObject
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        //marginTop: 50
        //alignSelf: 'flex-end'
        justifyContent: 'flex-end'
    },
    textThirdStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //flex: 2
        //marginVertical: 20,
        //marginHorizontal: 20
        //margin: 20
    },
    viewThirdStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }
})

export default BoxScreen