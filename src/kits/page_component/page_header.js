import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const PageHeader = ({
    title
}) => {
    return (
        <View style={styles.header}>
            <Image
                style={styles.header.tinyLogo}
                source={require('../../assets/images/play_store_512.png')}
            />
            <Text style={styles.header.title}>{title}</Text>
        </View>
    )
}



export default PageHeader;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('10%'),
        tinyLogo: {
            width: wp('8%'),
            height: wp('8%'),
            borderRadius: wp('5%'),
        },
        title: {
            marginLeft: wp('3%'),
            fontSize: hp('2%'),
            fontWeight: 'bold',
            flexDirection: "row",
            color: 'black',
        },
    },
})