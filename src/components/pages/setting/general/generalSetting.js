import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
// import { Switch } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
// import Banner from '../../../admob/banner';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PageFrame from '../../../../kits/page_component/page_frame';
import PageHeader from '../../../../kits/page_component/page_header';


const SettingTab = ({ navigation, route, state, setState }) => {

    const { item } = route.params;

    const dispatch = useDispatch();
    const reducer = useSelector(store => store.Reducer);

    return (

        <PageFrame statusBar="default"
            content={
                <>
                    <PageHeader title={item.itemTitle} />

                    {/* {
                        settingData.map((item, index) => {
                            return (
                                <View style={styles.scroolView.item} key={index}>
                                    <View style={styles.scroolView.item.touch}>
                                        <View style={[styles.scroolView.item.touch.title]}>
                                            {
                                                item.type !== "sendAnimated" ?
                                                    <Icon name={item.icon} color={'#009DAE'} size={wp('6%')} style={styles.scroolView.item.touch.title.icon} />
                                                    :
                                                    <AntDesign name={item.icon} color={'#009DAE'} size={wp('6%')} style={styles.scroolView.item.touch.title.icon} />

                                            }
                                            <Text style={styles.scroolView.item.touch.title.text}>{item.title}</Text>
                                        </View>
                                        <View style={styles.scroolView.item.touch.option}>
                                            <Switch
                                                value={item.value}
                                                onValueChange={(value) => _onChangeSetting(item, value)}
                                                color="#009DAE"
                                                style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    } */}

                </>
            }
        />

    );
};

const styles = StyleSheet.create({

})

export default SettingTab;
