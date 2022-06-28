import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';

const CustomHeaderbar = ({ navigation, data, word, setWord, modalVisible, setModalVisible }) => {

    // const store = useSelector((store) => store.Reducer);
    // const dispatch = useDispatch();


    const onChangeText = (e) => {
        setWord(e);
    };

    const onFocus = () => {
        setModalVisible(true);
    };

    const setBlur = () => {
        setModalVisible(false);
        setWord('');
    };

    const handleGoback = () => {
        navigation.goBack();
    };

    const handleOpenSetting = () => {
        setModalVisible(true);

    };


    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <AntIcon name={'arrowleft'} size={wp('7%')} style={styles.left.icon} color='black' onPress={() => handleGoback()} />
            </View>

            <View style={styles.ipGroup}>
                <AntIcon name={'search1'} style={styles.ipGroup.icon} color={'black'} size={wp('5%')} />
                <TextInput style={styles.ipGroup.input} value={word} onChangeText={(e) => onChangeText(e)}
                    onFocus={() => onFocus()} onBlur={() => setBlur()}
                    placeholder="Nhập từ cần tra" selectTextOnFocus
                />
                {
                    word !== "" && <AntIcon name={'closecircle'} size={wp('5%')} style={styles.ipGroup.iconClose} color='black'
                        onPress={() => setBlur()}
                    />
                }

            </View>
            <View style={styles.menuGroup}>
                <Icon name={'menu'} size={wp('7%')} style={styles.menuGroup.icon} color='black' onPress={() => handleOpenSetting()} />
            </View>

            {/* {
                modalVisible && <ModalSearch
                    navigation={navigation} word={word} setWord={setWord}
                    modalVisible={modalVisible} setModalVisible={setModalVisible} data={data}
                />
            } */}

        </View>
    )
}

export default CustomHeaderbar;


const styles = StyleSheet.create({
    container: {
        width: '100%', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000,
        display: 'flex', flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center',
    },
    left: {
        width: '20%', display: 'flex', flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center',
    },
    ipGroup: {
        width: '60%', display: 'flex', flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center',
        icon: {
            position: 'absolute', zIndex: 1000, left: wp('2%'),
        },
        input: {
            width: '100%', borderRadius: 50, borderColor: 'black', borderWidth: 0.25,
            paddingLeft: wp('9%')
        },
        iconClose: {
            position: 'absolute', zIndex: 1000, right: wp('2%'),
        }
    },
    menuGroup: {
        width: '20%', display: 'flex', flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center',
        icon: {
            marginLeft: wp('1%'),
        }
    },
})