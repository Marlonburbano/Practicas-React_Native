import React from 'react'
import { Text, View , StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import RepositoryList from './RepositoryList'

const Main = () => {
    return(
        <View style={styles.tittle}>
            <RepositoryList/>
        </View>
    )
}
export default Main

const styles= StyleSheet.create({
    tittle: {
    marginTop:Constants.statusBarHeight,
    flexGrow:1,
    },
});