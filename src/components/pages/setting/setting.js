import React from 'react';
import { Linking, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Banner from '../../admob/banner';
import PageFrame from '../../../kits/page_component/page_frame';
import settingData from './setting_data';


const SettingTab = ({ navigation }) => {

    const _onNavigateToChildSetting = (item) => {
        // console.log(item)
        if (item.navigateName === "Sharing") {
            let options = {
                title: 'Sharing application',
                message: 'Scan To Google Sheets',
                url: 'https://play.google.com/store/apps/details?id=com.minhkhacld.easyenglish'
            }
            Share.open(options)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    err && console.log(err);
                });
        }
        else if (item.navigateName === "Rating") {
            Linking.openURL('https://play.google.com/store/apps/details?id=com.minhkhacld.easyenglish');
        }
        else if (item.navigateName === "Premium") {
            setPremiumModalVisible(!premiumModalVisible);
        }
        else {
            navigation.navigate(item.navigateName, { item: item });
        }
    };


    return (
        <PageFrame statusbar="default" content={
            <View style={{ paddingBottom: 100 }}>
                {
                    settingData.map((item, index) => {
                        return (<View key={index}>
                            <TouchableOpacity onPress={() => _onNavigateToChildSetting(item)} >
                                <ListItem>
                                    <View >
                                        <Icon name={item.icon} size={25} color={'#009DAE'} />
                                    </View>
                                    <ListItem.Content>
                                        <ListItem.Title>{item.itemTitle}</ListItem.Title>
                                        <ListItem.Subtitle>{item.itemSubtitle}</ListItem.Subtitle>
                                    </ListItem.Content>
                                    <ListItem.Chevron />
                                </ListItem>
                            </TouchableOpacity>
                        </View>
                        )
                    })
                }
            </View>
        }
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        // backgroundColor: 'white',
        // paddingBottom:50,
    },
    body: {
        flex: 1,
        top: StatusBar.currentHeight,
        paddingBottom: 20,
    },
    scroolView: {
        width: '100%',
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        // backgroundColor: 'pink',
        item: {
            backgroundColor: 'white',
            width: '100%',
            height: 50,
            minHeight: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 8,
            touch: {
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                title: {
                    width: '65%',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    // backgroundColor: 'yellow',
                    icon: { width: '15%', paddingLeft: 8 },
                    text: {
                        width: '85%',
                        alignItems: 'center',
                        color: 'black',
                    },
                },
                option: {
                    width: '35%',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    // backgroundColor: 'pink',
                    leftSide: {
                        width: '45%',
                        height: '70%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        text: {
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            fontSize: 12,
                        },
                    },
                    middle: {
                        width: '1%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 8,
                        marginRight: 8,
                    },
                    rightSide: {
                        width: '45%',
                        height: '70%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        text: {
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            fontSize: 12,
                        },
                    }
                },
            },

        }
    },
})


export default SettingTab;
