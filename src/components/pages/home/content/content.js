import React from 'react'
import { ScrollView, Flatlist, View, TouchableOpacity, Text, StyleSheet, Image, } from 'react-native';
import { ListItem, Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Content = ({ category, navigation }) => {


    const onNavigateContent = (item) => {
        navigation.navigate(item.navigation, {
            item: item
        });
    };

    return (
        <View style={styles.content}>
            {
                category.length > 0 && category.map((item, index) => {
                    return (
                        <View style={styles.content.child} key={index}
                        >
                            <TouchableOpacity onPress={() => onNavigateContent(item)}>
                                <Image source={item.picture} style={styles.content.child.image} resizeMode='cover' />
                            </TouchableOpacity>

                            <View style={styles.content.child.bot}>
                                <Text style={styles.content.child.bot.title}>
                                    The idea with React Native Elements
                                </Text>
                                <View style={{
                                    display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',
                                }}>
                                    <Text style={styles.content.child.bot.subTitle}>
                                        12 chủ đề
                                    </Text>
                                    <Text style={styles.content.child.bot.subTitle}>
                                        12%
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View >
    );
};


const styles = StyleSheet.create({
    content: {
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',
        width: '100%',
        //  height: '100%',
        paddingBottom: 120,
        child: {
            width: '100%', height: 'auto', marginBottom: 20,
            image: {
                width: '100%',
                height: hp('30%'),
                maxHeight: 250,
            },
            bot: {
                height: hp('7%'),
                maxHeight: 75,
                minHeight: 60,
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItem: 'center',
                title: {
                    color: 'black', paddingHorizontal: wp('2%'), paddingVertical: wp('2%'), fontWeight: 'bold',
                },
                subTitle: {
                    fontSize: 12, color: 'black', paddingLeft: wp('2%'), width: '50%',
                }
            },
        },


    },


});


export default Content;