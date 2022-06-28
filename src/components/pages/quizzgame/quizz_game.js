import React from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet, Text } from 'react-native';
import PageFrame from '../../../kits/page_component/page_frame';


const Quizzgame = ({ navigation }) => {
    return (
        <PageFrame statusbar="default" content={<Text>Kha</Text>} />
    )
}

export default Quizzgame