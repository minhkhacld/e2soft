import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PageFrame from '../../../../kits/page_component/page_frame';
import PageHeader from '../../../../kits/page_component/page_header';

const TermOfUse = ({ route }) => {

    const { item } = route.params;

    return (
        <PageFrame statusBar="default"
            content={
                <>
                    <PageHeader title={item.itemTitle} />
                    <View style={styles.body.content}>
                        <View style={styles.body.content.shortExplan}>
                            <Text style={{ flex: 1, color: 'black' }}>These Terms of Use, together with the documents referenced herein (collectively the "Terms"), apply to the mobile application named "Scan To Google Sheets" (the "App").
                                We permits you to use the App in generation QR code, scan QR code, Bar code and store send these scanning data, form data on your phone or sending it to google sheets and subject to these Terms and any applicable rules applied by Google Inc. ("Play Store Rules") with respect to the use of their App Store and Play Store respectively located at https:play.google.com/store ("Play Store"). You ("you", the App user) may only utilize the App in accordance with these Terms.</Text>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>1. IMPORTANT NOTICES:</Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>1.1. Please read these Terms carefully before downloading, installing or using the App.
                                    By downloading, installing, accessing, browsing or using the App, you accept and agree to these Terms which bind you legally.
                                    The Terms are entered into for Scan To Sheets who may each enforce against you. If you do not agree to these Terms you are not permitted to use the App and you must immediately cease downloading, installing or using the App.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>1.2. If you experience any technical issues with the App, or you would like to contact us regarding these Terms, you may contact us by sending an email to</Text>
                                <TouchableOpacity onPress={() => Linking.openURL('mailto:' + 'pmkha92@gmail.com')}>
                                    <Text style={{ color: '#009DAE', marginBottom: 8 }}>pmkha92@gmail.com.</Text>
                                </TouchableOpacity>
                                <Text style={styles.body.content.group.paragraph.text}>1.3. In order to use the App, you must have a compatible device which meets the following minimum specifications: for Apple devices,for Android, 4.4 and up, with both accelerometer and gyroscope sensors. Any compatible device to which you download the App will be known as a "Device" for the purposes of these Terms. You confirm that you either own the applicable Device or if not owned by you, you have obtained permission to install and use the App on such Device. You accept responsibility for any use of the App on or in relation to such Device, whether or not such Device is owned by you or such use was made by you.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>2. ACKNOWLEDGEMENTS</Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>2.1. These Terms apply to the App, including any updates or supplements thereto. Scan To Google Sheets may change or revise these Terms from time to time in its sole discretion, with or without notice to you. You are bound by any such revisions and should therefore periodically visit this page to review the then-current terms and conditions. Your access and use will be subject to the most current version of the Terms. Your use of the App after such revised Terms are made available will signify your acceptance of such revised Terms and your agreement to be bound by them.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>2.2. From time to time, updates to the App may be made available through the Play Store. Depending on the update, and whether you utilized the App Store or Play Store to download and access the App, you may not be able to use the App until you have installed the latest version.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>2.3. You confirm that you are of legal age in your country to form a binding contract and hereby agree to be bound by these Terms. If you are an employee or other representative of a business or other entity and you are using the App in your representative capacity, then you hereby represent that you are authorised to use the App as a representative of the entity and agree to these Terms on behalf such entity.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>3. PRIVACY</Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>3.1. The app doesn't require, collect any your information data. All your QR code, Bar code and additional data that are stored in your device and google sheets that are belong to you. Please read our Privacy Policy for more information.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>4. THIRD PARTY CONTENT
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>4.1 The App may contain links to independent third party websites or other applications ("Third Party Sites"). Third Party Sites are not under our control, and you agree that we are not responsible for and do not endorse or monitor their content or privacy policies (if any). We expressly disclaim any liability for loss or damage sustained by you as a result of the accessing and use of Third Party Sites.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>5. LICENSE
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>5.1 Subject to these Terms, the Privacy Policy and Play Store Rules (as applicable),
                                    we grant to you a non-exclusive, non-transferable, non-sublicensable, personal, limited, revocable license to use the App on the Devices for the purposes of helping users better understand and improve their driving behaviors. Any other use of the App is strictly prohibited. We reserve all rights in and to the App. We reserves the right to revoke this license at any time, in its sole discretion.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>6. LICENSE RESTRICTIONS
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>6.1 Except as expressly permitted under these Terms, and unless prohibited by applicable law, you agree: </Text>
                                <Text style={styles.body.content.group.paragraph.text}>(a) not to copy, reproduce, republish, reuse, upload, post, transmit or distribute any content presented in or provided by the App, including without limitation for public or commercial purposes, including any text, images, audio and video, except as permitted by the App's sharing function; </Text>
                                <Text style={styles.body.content.group.paragraph.text}>(b) not to rent, lease, sub-license, loan, distribute, time-share, or translate the App in any way; </Text>
                                <Text style={styles.body.content.group.paragraph.text}>(c) not to make alterations to, or modifications of, the whole or any part of the App, or permit the App or any part of it to be combined with, or become incorporated in, any other programs;</Text>
                                <Text style={styles.body.content.group.paragraph.text}>(d) not to disassemble, decompile, reverse-engineer or create derivative works based on the whole or any part of the App;</Text>
                                <Text style={styles.body.content.group.paragraph.text}>(e) not to sell, resell, or exploit the App in whole or in part (including object and source code), in any form to any person without prior written consent from us; </Text>
                                <Text style={styles.body.content.group.paragraph.text}>(f) not to remove any copyright, trademark or other proprietary rights notices from the App; </Text>
                                <Text style={styles.body.content.group.paragraph.text}>(g) that you represent and warrant that you are not located in a country that is subject to a U.S Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and that you are not listed on any U.S. Government list of prohibited or restricted parties.</Text>
                            </View>
                        </View>

                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>7. ADDITIONAL RESTRICTIONS
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>7.1. You agree: </Text>
                                <Text style={styles.body.content.group.paragraph.text}>(a) not to use the App in any unlawful manner, for any unlawful or criminal purpose, or in any manner inconsistent with these Terms, or act fraudulently or maliciously, for example, by hacking into or inserting malicious code, including viruses, or harmful data, into the App; </Text>
                                <Text style={styles.body.content.group.paragraph.text}>(b) not to use the App to record, post or transmit any information that is defamatory, threatening, abusive, offensive, obscene, indecent, discriminatory or is otherwise objectionable or infringes on third party rights; </Text>
                                <Text style={styles.body.content.group.paragraph.text}>(c) not to use the App in a way that could damage, disable, overburden, impair or compromise our systems or security or interfere with other users, or restrict or inhibit any other users from using the App (including by hacking or defacing the App); and </Text>
                                <Text style={styles.body.content.group.paragraph.text}>(d) not to collect or harvest any information or data from the App or our systems or attempt to decipher any transmissions to or from the servers running the App, including, without limitation, by using any robot, spider, site search/retrieval application or other manual or automatic device to retrieve, index, "scrape," "data mine" or in any way gather the App content or reproduce or circumvent the navigational structure or presentation of the App without our prior written consent.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>8.INTELLECTUAL PROPERTY RIGHTS
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>8.1.  acknowledge that (i) all intellectual property rights in and to the App
                                    belong to the Scan To Google Sheets, (ii) the rights granted herein are licensed (not sold) to you, and (iii) you have no rights in, or to,
                                    the App or its content other than the right to use the App in accordance with these Terms.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>8.2. All trademarks, service marks, trade names, and logos are proprietary to the Scan To Google Sheets or used by Scan ToGoogle Sheet with the permission of its third party providers. Nothing contained on in this App should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademark displayed on this website without the written permission of Scan To Google Sheets.
                                    Your use of the trademarks displayed in this App, or any other content in this App, except as provided herein, is strictly prohibited. You acknowledge that you have no right to have access to the App in source code form.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>9. DISCLAIMER
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>9.1. The App is provided 'as is' and, to the extent permitted by applicable law, Scan To Google Sheets and its' third party providers and affiliates, exclude all representations or warranties of any kind, express or implied including, but not limited to, implied warranties of merchantability, satisfactory quality, fitness for a particular purpose and non-infringement. Any reliance on or use of the App shall be at your sole risk. The Scan To Google Sheets, the Play Store, shall not have any obligation to furnish any maintenance and/or support services with respect to the App. We expressly disclaim any liability for loss or damage sustained by you as a result of the accessing and use of the App.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>9.2. We make no representation or warranty as to the completeness, accuracy or currentness of information or content provided in the App. Such information is also subject to change at any time without notice.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>9.3. We do not warrant that the functions contained in the App will be uninterrupted or error-free, that defects will be corrected or that the App is free of viruses or other harmful components. We do not warrant or make any representations regarding the use or the results of the use of the App. You agree to conduct your own due diligence to assess the accuracy, reliability and quality of all content provided by the App.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>9.4. You (and not us) assume the entire cost of all necessary servicing, repair or correction in respect of your Device.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>10. AVAILABILITY
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>10.1. We reserve the right, temporarily or permanently, in whole or in part, to modify, suspend or discontinue the App without notice for any reason without liability to you, except where prohibited by applicable law.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>10.2. In addition, you acknowledge that the App is provided over the Internet and mobile networks and so the quality and availability of the App may be affected by factors outside our reasonable control. Accordingly, we do not accept any responsibility for any connectivity issues that you may experience when using the App. In addition, you acknowledge and agree that you (and not us) are responsible for obtaining and maintaining all telecommunications, broadband and computer hardware, equipment and services needed to access and use the App, and for paying any data charges that may be charged to you by your network provider in connection with your use of the App. In the event you choose to share information from the App by utilizing SMS/text functionality, you acknowledge and agree that you (and not us) are responsible for paying any related fees that may be charged to you by your network or telecommunications provider.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>11. LIMITATION OF LIABILITY
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>11.1. You agree that you use the App and/or any Third Party Sites at your own risk. You further understand and agree that we are not responsible or liable for your illegal, unauthorized, or improper use of information transmitted, monitored, stored or received using the App.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>11.2. To the fullest extent permitted under applicable law, in no event shall we be liable to you personally for any loss, injury or damages (including but not limited to any special, indirect, consequential or punitive damages, lost profits, lost revenues or other incidental damages) arising out of the use, inability to use, or the results of use of the App.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>12.INDEMNIFICATION
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>12.1. To the extent permitted by applicable law, you agree to indemnify us for any claims, actions, demands, losses, liabilities, damages, costs and expenses (including legal expenses and other costs, such as attorneys' fees) reasonably incurred by us that arise out of your use of the App in breach of these Terms. We reserve the right to assume the exclusive defense and control of any claim brought by a third party in connection with your use of the App and you agree to assist and co-operate with us in relation to any such claim.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>13.TERMINATION
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>13.1. The Scan To Google Sheets may discontinue, suspend or modify the App at any time without notice and may block, terminate or suspend your access to the App at any time without notice for any reason in its sole discretion, even if access continues to be allowed to others. Upon termination, you must cease use of the App and remove it from all applicable Devices.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>14.EVENTS OUTSIDE OUR CONTROL
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>14.1. We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations under these Terms that is caused by any act or event beyond our reasonable control, including any failure of public or private telecommunications networks.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>15.THIRD-PARTY BENEFICIARIES AND APP STORE / PLAY STORE
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>15.1. With respect to downloading the App, you agree to comply with the App Store Rules and Play Store Rules, as applicable. You acknowledge that the availability of the App may be dependent on the App Store or Play Store from which you receive the App. You acknowledge these Terms are between you and AIG and not with the App Store or Play Store. The App Store and Play Store are not responsible for the App, the content thereof, maintenance, support services, and warranty therefor, and addressing any claims relating thereto (e.g., product liability, legal compliance, or intellectual property infringement). You acknowledge that the App Store and Play Store (and their respective subsidiaries) are third party beneficiaries to these Terms and will have the right to enforce these Terms against you.</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>16.LAW AND JURISDICTION
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>16.1. To the extent permitted by applicable law, these Terms are governed and construed by the laws of the state of New York, U.S.A. and you consent to the non-exclusive jurisdiction of the New York courts. We retain the right to bring proceedings against you for breach of these Terms in your country of residence or other relevant country</Text>
                            </View>
                        </View>
                        <View style={styles.body.content.group}>
                            <Text style={styles.body.content.group.title}>17.OTHER IMPORTANT TERMS
                            </Text>
                            <View style={styles.body.content.group.paragraph}>
                                <Text style={styles.body.content.group.paragraph.text}>17.1. We may transfer our rights and obligations under these Terms to another organization, but this will not affect your rights or your obligations under these Terms. You may not transfer your rights or obligations under these Terms.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>17.2. If we fail to insist that you perform any of your obligations under these Terms, or if we do not enforce our rights against you, or if we delay in doing so, that will not mean that we have waived our rights against you and will not mean that you do not have to comply with those obligations.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>17.3. Each of the conditions of these Terms operates separately. If any court or competent authority decides that any of them are unlawful or unenforceable, the remaining conditions will remain in full force and effect.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>17.4. These Terms constitute the entire agreement between us with respect to your use of the App. Such Terms supersede all prior understandings or agreements between us. In addition, in entering into these Terms you have not relied on and (in the absence of fraud) you shall have no right or remedy in respect of any statement, representation, assurance or warranty other than as set out in these Terms.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>17.5. Except to the extent specified in sections 15.1 and 17.1 hereof, or otherwise permitted by applicable law, a person or entity who is not party to these Terms may not enforce these Terms.</Text>
                                <Text style={styles.body.content.group.paragraph.text}>17.6. No agency, partnership, joint venture or employment relationship is created as a result of these Terms and neither of us has any authority of any kind to bind the other in any respect.</Text>

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
            shortExplan: { flexGrow: 1, flexDirection: 'row', marginTop: 15, color: 'black' },
            group: {
                marginTop: 15,
                title: { flex: 1, fontSize: 15, fontWeight: 'bold', marginBottom: 8, color: 'black', },
                paragraph: {
                    flexGrow: 1,
                    text: { flex: 1, marginBottom: 8, color: 'black' },
                }
            },
        },
    }
})

export default TermOfUse
