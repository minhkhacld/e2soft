import React from 'react'
import PageFrame from './page_frame';
import { ListItem } from 'react-native-elements'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Banner from '../admob/banner';
import Tts from 'react-native-tts';
import CustomHeaderbar from '../page_component/custom_header';
import ModalSetting from '../../kits/page_component/modal';

const PageWords = ({ navigation, route, }) => {
    const [language, setLanguage] = React.useState({
        defaultLanguage: "",
        listVoices: [],
        defaultRate: 0.6,
        defaultPitch: 0.5,
    });

    const [word, setWord] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);

    React.useEffect(() => {
        Tts.engines().then(async engines => {
            // console.log(engines)
            let googleEngine = engines.filter(d => d.name === "com.google.android.tts")
            if (googleEngine.length > 0) {
                await Tts.setDefaultEngine(googleEngine[0].name);
                await Tts.voices().then(voices => {
                    let listVoices = voices.filter(d => d.language === "en-US" || d.language === "en-UK");
                    // console.log(listVoices.map(d => d.language));
                    Tts.setDefaultVoice(listVoices[0].id);
                    setLanguage({
                        ...language, listVoices: listVoices,
                    })
                })
            }
        });

    }, [])

    const { item } = route.params;

    const onPressEng = async (word) => {
        if (word === "") return
        // Tts.getInitStatus().then(() => {
        //     Tts.voices().then(voices => console.log(voices))

        // }, (err) => {
        //     if (err.code === 'no_engine') {

        //         Tts.requestInstallEngine();
        //     }
        // });

        Tts.speak(word, {
            androidParams: {
                KEY_PARAM_PAN: 0.5,
                KEY_PARAM_VOLUME: 5,
                KEY_PARAM_STREAM: 'STREAM_MUSIC',
            },
        });
    }

    let renderResult = word === "" ? [...item.data] : [...item.data].filter(d => d.eng.toLowerCase().includes(word.toLowerCase())
        || d.vie.toLowerCase().includes(word.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle='dark-content' />
            <CustomHeaderbar navigation={navigation} word={word} setWord={setWord}
                modalVisible={modalVisible} setModalVisible={setModalVisible} data={item.data}
            />
            <ListItem bottomDivider style={styles.title}>
                <ListItem.Content>
                    <View style={styles.row}>
                        <ListItem.Title style={[styles.row.eng, { fontWeight: 'bold' }]}>Tiếng Anh</ListItem.Title>
                        <ListItem.Title style={[styles.row.pro, { fontWeight: 'bold' }]}>Phiên âm</ListItem.Title>
                        <ListItem.Title style={[styles.row.vie, { fontWeight: 'bold' }]}>Tiếng Việt</ListItem.Title>
                    </View>
                </ListItem.Content>
            </ListItem>
            <FlatList
                data={renderResult}
                extraData={renderResult}
                keyExtractor={(item) => item.id}
                initialNumToRender={10}
                renderItem={({ item, index }) => {
                    return (
                        <ListItem bottomDivider>
                            <ListItem.Content>
                                <View style={styles.row}>
                                    <ListItem.Title style={styles.row.eng} onPress={() => onPressEng(item.eng)} >
                                        {item.eng}
                                    </ListItem.Title>
                                    <ListItem.Title style={styles.row.pro}>{item.pronunce ? item.pronunce : null}</ListItem.Title>
                                    <ListItem.Title style={styles.row.vie}>
                                        {item.vie}
                                    </ListItem.Title>
                                </View>
                            </ListItem.Content>
                        </ListItem>
                    )
                }}

            />
            {modalVisible &&
                <ModalSetting modalVisible={modalVisible} setModalVisible={setModalVisible} language={language} setLanguage={setLanguage} />
            }
            <Banner />
        </SafeAreaView>

    );
};

export default PageWords;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        marginTop: hp('6%'),
    },
    body: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 8,
    },
    row: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        flexWrap: 'wrap', wordWrap: 'break-word',
        eng: {
            width: '37.5%', height: '100%',
        },
        pro: {
            width: '25%',
        },
        vie: {
            width: '37.5%',
        }
    }
})