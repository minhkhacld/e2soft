import React from 'react';
import { Image, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
// import Banner from '../../../admob/banner';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { API_SHEET_URL, API_MY_PROJECT } from '@env';
import PageHeader from '../../../../kits/page_component/page_header';
import PageFrame from '../../../../kits/page_component/page_frame';

const ContactAndSupport = ({ route, navigation }) => {

    const { item } = route.params;
    const [projectData, setProjectData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        const data = {
            sheetName: "MyProject",
            sheetUrl: `${API_SHEET_URL}`
        }
        axios.post(`${API_MY_PROJECT}`, { data: data })
            .then(response => {
                // console.log('respone api', response.data.headers);
                if (response.data.data.length > 0) {
                    let obj = {};
                    let arr = []
                    response.data.data.forEach((row, index) => {
                        let headersArr = response.data.headers;
                        obj = row.reduce((a, v, currentIndex) => ({ ...a, [headersArr[currentIndex]]: v }), {});
                        arr.push(obj);
                    })
                    setProjectData(arr);
                    setLoading(false);
                }
            }).catch(err => {
                alert(err);
                setLoading(false);
            });
    }, []);

    return (
        <PageFrame statusBar="default"
            content={
                <>
                    <PageHeader title={item.itemTitle} />
                    <View style={styles.body.content}>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.bighead}>{item.subTileDetail}</Text>
                            <View style={{ flexGrow: 1, }}>
                                <Text style={styles.body.content.group.text}>{item.appName}: Scan To Google Sheets</Text>
                                <Text style={styles.body.content.group.text}>{item.appVersion}: 1.3.3</Text>
                                <Text style={styles.body.content.group.text}>{item.pubDate}: May, 27, 2022</Text>
                                <Text style={styles.body.content.group.text}>{item.appOwner}: Pham Minh Kha</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.bighead}>{item.subTileCont}</Text>
                            <View style={{ flexGrow: 1, }}>
                                <Text style={styles.body.content.group.text}>{item.remark}</Text>
                                <TouchableOpacity onPress={() => Linking.openURL('mailto:' + 'pmkha92@gmail.com')}
                                    style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
                                    <Icon name={'email'} color={'#009DAE'} size={20} />
                                    <Text style={{ color: '#009DAE', textDecorationLine: 'underline', paddingLeft: 8 }}>Email: pmkha92@gmail.com</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL(`tel:+84355210716`)}
                                    style={{
                                        flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'
                                        , marginBottom: 10
                                    }}
                                >
                                    <Icon name={'cellphone'} color={'#009DAE'} size={20} />
                                    <Text style={{ color: '#009DAE', textDecorationLine: 'underline', paddingLeft: 8 }}>Mobile: +84355210716</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL(`https://portfolio-minhkhacld.vercel.app/`)}
                                    style={{
                                        flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'
                                        , marginBottom: 10
                                    }}
                                >
                                    <Icon name={'web'} color={'#009DAE'} size={20} />
                                    <Text style={{ color: '#009DAE', textDecorationLine: 'underline', paddingLeft: 8 }}>Website: https://portfolio-minhkhacld.vercel.app/</Text>
                                </TouchableOpacity>
                                <Text style={styles.body.content.group.text}>{item.byMeCoffee}</Text>
                                <TouchableOpacity onPress={() => Linking.openURL(`https://www.buymeacoffee.com/pmkha`)}
                                    style={{
                                        flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'
                                        , marginBottom: 10
                                    }}
                                >
                                    <Icon name={'coffee'} color={'#009DAE'} size={20} />
                                    <Text style={{ color: '#009DAE', paddingLeft: 8 }}>Buy me a coffee at: https://www.buymeacoffee.com/pmkha</Text>
                                </TouchableOpacity>
                                {projectData.length > 0 &&
                                    <View style={{ marginTop: 10, width: '100%', height: 'auto' }}>
                                        <Text style={{ color: 'black', marginBottom: 8, fontSize: 15, fontWeight: 'bold' }}>{item.myOtherApp}</Text>
                                        {
                                            projectData.map((item, index) => {
                                                return (
                                                    <TouchableOpacity key={index} onPress={() => Linking.openURL(`${item.Link}`)}
                                                        style={{
                                                            flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                                                            , marginBottom: 10, width: '100%', height: hp('6%')
                                                        }}
                                                    >
                                                        <Text style={{ width: '70%', color: 'black' }}>{item.Descripton}</Text>
                                                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Image
                                                                style={{
                                                                    width: wp('10%'),
                                                                    height: wp('10%'),
                                                                    borderRadius: wp('2%'),
                                                                }}
                                                                source={{ uri: item.Picture }}
                                                            />
                                                        </View>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </View>
                                }
                            </View>
                        </View>
                    </View>

                </>
            }
            loading={loading}
        />

    )
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 8,
        content: {
            flex: 1,
            shortExplain: {
                flexGrow: 1, flexDirection: 'column', marginTop: 15,
                des: { flex: 1, color: 'black', marginBottom: 8 },
            },
            group: {
                marginTop: 15,
                bighead: { flex: 1, fontSize: 18, color: 'black', fontWeight: 'bold', marginBottom: 8, },
                mediumhead: { flex: 1, fontSize: 15, color: 'black', fontWeight: 'bold', marginBottom: 8, },
                text: { flex: 1, marginBottom: 8, color: 'black' },
            },
        },
    },

})

export default ContactAndSupport
