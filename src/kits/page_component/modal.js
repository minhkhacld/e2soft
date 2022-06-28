import React from 'react';
import { Modal, Text, View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SelectDropdown from 'react-native-select-dropdown';

const ModalSetting = ({
    modalVisible, setModalVisible, language, setLanguage,
}) => {

    const CloseModal = () => {
        setModalVisible(!modalVisible);
    };

    const setting = [
        { name: 'language' }
    ]


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.header}>
                            <View style={styles.header.leftSide}>
                                <Text style={styles.headerText}>Cài đặt</Text>
                            </View>
                            <View style={styles.header.rightSide}>
                                <AntIcon name={'close'} size={wp('7%')} color='black' onPress={() => CloseModal()} />
                            </View>
                        </View>
                        <View style={styles.body}>
                            <SelectDropdown
                                data={language.listVoices}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                            />


                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    );
}

export default ModalSetting;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1, width: '100%', height: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F3F4F6',
    },
    modalView: {
        backgroundColor: "white", width: '90%',
        borderRadius: 20,
        padding: wp('5%'),
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    header: {
        flexDirection: 'row', justifyContent: "center", alignItems: "center",
        borderBottomColor: '0.25px solid grey', width: '100%', borderBottomWidth: 0.25,
        width: '100%', height: hp('5%'),
        leftSide: {
            width: '90%', height: '100%',
        },
        rightSide: {
            width: '10%', height: '100%',
        },
    },
    body: {
        width: '100%', height: '90%',
    },
    headerText: {
        color: 'black', fontWeight: 'bold', fontSize: hp('2%'),
    },

});