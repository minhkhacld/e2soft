import React, { useRef } from 'react';
import { StyleSheet, TextInput, View, StatusBar, Dimensions, Animated } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FocusAwareStatusBar from '../../../../kits/statusBar/statusBar';

const Header = ({ navigation, screenY }) => {
    const HEADER_HEIGHT = 80;

    const diffClamp = Animated.diffClamp(screenY, 0, HEADER_HEIGHT);

    const translateY = diffClamp.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT],
    });

    return (
        <Animated.View style={{
            ...styles.headerGroup, ...{
                transform: [{
                    translateY: translateY
                }],
                // elevation: 4,
                zIndex: 1000,
                height: HEADER_HEIGHT,
                position: 'absolute',
                backgroundColor: 'white',
                top: 0,
                left: 0,
                right: 0,
            }
        }} >
            <View style={styles.header}>
                <View style={[styles.inputGroup]}
                >
                    <Icon name={'search'} size={hp('3%')} style={styles.icon} color={'#14279B'} />
                    <TextInput
                        style={styles.input}
                        // onFocus={() => dispatch(setSearchValue())}
                        placeholder='Tìm kiếm từ vựng...'
                        placeholderTextColor="#14279B"
                    />
                </View>

            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    headerGroup: {
        // height: hp('15%'),
        // minHeight: 100,
        // height: hp('10%'),
        // minHeight: 80,
        // height: 80,
        width: "100%",
        // position: 'absolute',
        // left: 0,
        // top: 0,

    },
    header: {
        width: "100%",
        height: "100%",
    },
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputGroup: {
        height: "100%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        width: '80%',
        height: hp('5%'),
        minHeight: 40,
        paddingLeft: wp('9%'),
        borderRadius: 20,
        color: '#14279B',
        fontSize: hp('1.5%'),
        borderColor: 'black',
        borderWidth: 1,
    },
    icon: {
        position: 'relative',
        transform: [{ translateX: wp('8%') }],
        zIndex: 10000,
    },

})

export default Header
