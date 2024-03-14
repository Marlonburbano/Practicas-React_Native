import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,StatusBar,FlatList} from 'react-native';
import repositories from '../data/repositories.js'


const RepositoryList = () => {
    return (
                <FlatList  data ={repositories} 
                    renderItem={({item:repositories}) => (
                        <View>
                                                        <Text></Text>

                            <Text style={styles.item}>{repositories.id}</Text>
                            <Text style={styles.item}>{repositories.fullname}</Text>
                            <Text style={styles.item}>{repositories.description}</Text>
                            <Text style={styles.item}>{repositories.languaje}</Text>
                            <Text style={styles.item}>{repositories.forksCount}</Text>
                            <Text style={styles.item}>{repositories.stargazersCount}</Text>
                            <Text style={styles.item}>{repositories.ratingAverage}</Text>
                        </View>
                    )}
                > 
                </FlatList>            
    )
}
export default RepositoryList

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 5,
      marginVertical: 1,
      marginHorizontal: 16,
    }
  });