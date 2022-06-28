import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView, Animated, SafeAreaView, StatusBar } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import Header from './header/header';
import DoubleTapToClose from '../../../kits/exitApp/exitApp';
// import RemotePushController from '../../../kits/notyfication/remotePushController';
import category from '../../../assets/database/categories';
import Content from './content/content';
// import { SafeAreaView } from 'react-native-safe-area-context';
import FocusAwareStatusBar from '../../../kits/statusBar/statusBar';

const Home = ({ navigation }) => {

    const screenY = useRef(new Animated.Value(0)).current;
    return (
        <SafeAreaView style={[styles.container]}>
            {/* <FocusAwareStatusBar backgroundColor={'white'} translucent={true} barStyle="dark-content" /> */}
            <Header screenY={screenY} />
            <ScrollView style={styles.scrollView}
                onScroll={(e) => {
                    screenY.setValue(e.nativeEvent.contentOffset.y)
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                bounces={false}
            >
                {/* <DoubleTapToClose /> */}
                <Content category={category} navigation={navigation} />
            </ScrollView>
            <KeepAwake />

            {/* <View>
                <RemotePushController />
            </View> */}


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%', height: '100%',
        backgroundColor: 'white',
    },
    scrollView: {
        paddingTop: 80,
        flex: 1, backgroundColor: 'white'
    }
});


export default Home