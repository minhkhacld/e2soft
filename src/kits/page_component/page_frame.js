import React from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet, ScrollView, ActivityIndicator, Text } from 'react-native';
// import Banner from '../admob/banner';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PageFrame = ({ ...prop }) => {

    let backgroundColor = prop.backgroundColor ? prop.backgroundColor : 'white';

    const styles = StyleSheet.create({
        container: {
            backgroundColor: backgroundColor,
            flex: 1,
            paddingBottom: 50,
        },
        body: {
            width: '100%',
            height: '100%',
            paddingHorizontal: 8,
        },
        sending: {
            position: "absolute", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column",
            zIndex: 1000, flex: 1, backgroundColor: "#00000080",
            text: {
                color: 'white', fontWeight: 'bold',
                fontSize: hp('2%'),
                marginTop: 30,
            },
        },
    });


    return (
        <SafeAreaView style={styles.container}>
            {prop.statusbar === 'default' || prop.statusbar === null || prop.statusbar === undefined ?
                <StatusBar backgroundColor={'white'} barStyle='dark-content' />
                :
                prop.statusBar
            }

            <ScrollView style={styles.body}>
                {prop.content === null ? null : prop.content}
            </ScrollView>


            {
                prop.loading ?
                    <View style={styles.sending}>
                        <ActivityIndicator size="large" color="#00ff00" />
                        <Text style={styles.sending.text}>Loading data, please wait...</Text>
                    </View>
                    : null
            }
            {/* {
                prop.bannerVisible ? <Banner /> : null
            } */}
        </SafeAreaView>
    )
}



export default PageFrame;