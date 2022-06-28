import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PageFrame from '../../../../kits/page_component/page_frame';
import PageHeader from '../../../../kits/page_component/page_header';

const Policy = ({ route, navigate }) => {

    const { item } = route.params;

    return (

        <PageFrame statusBar="default"
            content={
                <>
                    <PageHeader title={item.itemTitle} />
                    <View style={styles.body.content}>
                        <View style={styles.body.content.shortExplain}>
                            <Text style={styles.body.content.shortExplain.des}>This privacy policy governs your use of the software application "Scan To Google Sheets (Pro)" (later
                                referred as
                                the/this “Application”) for Android™ mobile devices that was created by Minh Kha.</Text>
                            <Text style={{ flex: 1, color: 'black' }}>The Application is a mobile Android application intended to help you use your mobile phone to scan
                                the Qr code, bar code and storage it to google sheets. The app is also built in function that allow
                                you to send form data to google sheets and generate QR code through the mobile device.</Text>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.bighead}>What information does the Application obtain and how is it used?</Text>
                            <View style={{ flexGrow: 1, }}>
                                <Text style={styles.body.content.group.mediumhead}>User Provided Information</Text>
                                <Text style={styles.body.content.group.text}>The Application does not require any user registration.</Text>
                                <Text style={styles.body.content.group.text}>The Application does not require the user to provide any personal information.</Text>
                            </View>
                            <View style={{ flexGrow: 1, }}>
                                <Text style={styles.body.content.group.mediumhead}>Automatically Collected Information</Text>
                                <Text style={styles.body.content.group.text}>The Application does not collect automatically any information.</Text>
                                <Text style={styles.body.content.group.text}>The app generate data by reading QR code, Bar code, store on the mobile device's local storage
                                    and google sheet that are belong to the user account.
                                    The app does not collect, share or modify any part of your data.</Text>
                                <Text style={styles.body.content.group.text}>The Application does not share any information automatically with third parties.
                                    When user confirmed and send data to google sheets, these data belongs to the user and google
                                    sheet which is provide by google Inc.</Text>
                                <Text style={styles.body.content.group.text}>The Application does not collect precise information about the location of your mobile device.</Text>
                            </View>
                            <View style={{ flexGrow: 1, }}>
                                <Text style={styles.body.content.group.mediumhead}>Google Sheet Information</Text>
                                <Text style={styles.body.content.group.text}>The App require public google sheet URL in order to indentify and transfer data through that
                                    sheet URL.</Text>
                                <Text style={styles.body.content.group.text}>The app does not share user google sheets URL, sheet columns details or any sheet configurations
                                    to third party.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.bighead}>Data Retention Policy, Managing Your Information</Text>
                            <View style={{ flexGrow: 1, }}>
                                <Text style={styles.body.content.group.text}>The app doest not collect and use any user data and the app only use itselt data</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.bighead}>Children</Text>
                            <View style={{ flexGrow: 1, }}>
                                <Text style={styles.body.content.group.text}>Our Application does not address anyone under the age of 13. We do not knowingly collect personally
                                    identifiable information from anyone under the age of 13. We do not use the Application to knowingly
                                    solicit data from or market to children under the age of 13.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.bighead}>Security</Text>
                            <View style={{ flexGrow: 1, }}>
                                <Text style={styles.body.content.group.text}>We are concerned about safeguarding the confidentiality of your information stored locally on your
                                    mobile device.</Text>
                                <Text style={styles.body.content.group.text}>Please be aware that, although we endeavor provide reasonable security for information we process
                                    and
                                    maintain, no security system can prevent all potential security breaches (e.g., a zero-day attack
                                    targeting
                                    mobile Operating System – OS).</Text>
                                <Text style={styles.body.content.group.text}>In order to ensure an optimal security, you shall regularly install any Application’s update
                                    available
                                    from
                                    the mobile application marketplace.</Text>
                                <Text style={styles.body.content.group.text}>We also advise you to regularly check for any Android OS update(s) that could be available and to
                                    enable
                                    automatic updates.</Text>

                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.bighead}>Changes</Text>
                            <View style={{ flexGrow: 1, }}>
                                <Text style={styles.body.content.group.text}>This Privacy Policy may be updated from time to time for any reason. We will
                                    notify you of any
                                    changes to
                                    our Privacy Policy by posting the new Privacy Policy and update the "Last updated" date at the top
                                    of this Privacy Policy at:</Text>
                                <TouchableOpacity onPress={() => Linking.openURL('https://minhkhacld.github.io/scantogooglesheetspolicy')}
                                    style={{
                                        flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',
                                        marginBottom: 8, width: '100%',
                                    }}
                                >
                                    <Icon name={'web'} color={'#009DAE'} size={20} />
                                    <Text style={{ color: '#009DAE', textDecorationLine: 'underline', paddingLeft: 8, flex: 1 }}>https://minhkhacld.github.io/scantogooglesheetspolicy</Text>
                                </TouchableOpacity>
                                <Text style={styles.body.content.group.text}>You are advised to review this Privacy Policy periodically for any changes, as continued use is
                                    deemed
                                    approval of all changes. Changes to this Privacy Policy are effective when they are posted on this
                                    page.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.bighead}>Contact Us</Text>
                            <View style={{ flexGrow: 1, }}>
                                <Text style={styles.body.content.group.text}>If you have any questions regarding privacy while using the Application, or have questions about our
                                    practices, please contact us via email at:</Text>
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
                            </View>
                        </View>
                    </View>
                </>
            }
        />
    )
}

const styles = StyleSheet.create({
    body: {
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
    }

})

export default Policy
