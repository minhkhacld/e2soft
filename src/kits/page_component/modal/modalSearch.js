import React from 'react';
import { ListItem } from 'react-native-elements'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ModalSearch = ({ navigation, data, word, setWord,
    modalVisible, setModalVisible, }) => {

    let renderResult = word === "" ? [] : [...data].filter(d => d.eng.toLowerCase().includes(word.toLowerCase())
        || d.vie.toLowerCase().includes(word.toLowerCase())
    );

    return (
        <View style={styles.container}>
            {
                renderResult.length > 0 && renderResult.slice(0, 50).map((row, index) => {
                    return (
                        <ListItem>
                            <View style={styles.row}>
                                <ListItem.Title style={[styles.row.eng,]}>{row.eng}:</ListItem.Title>
                                <ListItem.Title style={[styles.row.vie,]}>{row.vie}</ListItem.Title>
                            </View>
                        </ListItem>
                    )
                })
            }

        </View>
    )
}

export default ModalSearch;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        minHeight: Dimensions.get('window').height,
        position: 'absolute', backgroundColor: 'white', zIndex: 10000, overflowY: 'scroll',
        top: hp('7%'),
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
    },
    row: {
        flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',
        flexWrap: 'wrap', wordWrap: 'break-word', width: '100%', marginBottom: 8,
        eng: {
        },
        vie: {
            paddingLeft: 10,
        }
    }
})