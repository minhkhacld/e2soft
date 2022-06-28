import React, { useEffect } from 'react'
import PushNotification, { Importance } from 'react-native-push-notification';
import { Linking } from 'react-native';

 const RemotePushController = () => {
    // useEffect(() => {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister:  (token)=> {
                console.log('TOKEN:', token)
            },
            // (required) Called when a remote or local notification is opened or received
            onNotification:async  (notification) =>{
                console.log('REMOTE NOTIFICATION ==>', notification);
                // process the notification here       
            if(notification.title!==""){
                PushNotification.localNotification({
                    channelId: `${notification.channelId}`,
                    autoCancel: true,
                    // bigText:
                    //     'This is local notification demo in React Native app. Only shown, when expanded.',
                    // subText: 'Local Notification Demo',
                    title: `${notification.title}`,
                    message: `${notification.message}`,
                    vibrate: `${notification.vibrate}`,
                    vibration: `${notification.vibration}`,
                    playSound: `${notification.playSound}`,
                    soundName: 'default',
                    actions: '["Play store", "No"]',
                    // actions: '["Go to Premium version", "Go to current version"]',
                    invokeApp: false,
                    largeIcon: "ic_launcher",
                    smallIcon: "ic_launcher",
                    link: `${notification.data.link}`,
                });     
            }                         
            },
            onAction: function (notification) {
                console.log("ACTION:", notification.action);
                console.log("NOTIFICATION:", notification);      
                if (notification.action === "Play store") {
                    Linking.openURL(notification.link);
                    // Linking.openURL('https://play.google.com/store/apps/details?id=com.scantogooglesheets');
                } else {
                    Linking.openURL('https://play.google.com/store/apps/details?id=com.hocexcel');
                }     
                // process the action
              },
            onRegistrationError: function(err) {
                console.error(err.message, err);
              },
            // Android only: GCM or FCM Sender ID
            senderID: '625582448507',    
            popInitialNotification: true,
            requestPermissions: true,
        })
    // }, []);
    return null;
};

export default RemotePushController


// import React, {Component} from "react";
// import PushNotification from "react-native-push-notification";
// // var PushNotification = require("react-native-push-notification");

// export default class RemotePushController extends Component{
//     componentDidMount(){
//         PushNotification.configure({
//             // (optional) Called when Token is generated (iOS and Android)
//             onRegister: function(token) {
//               console.log("TOKEN:", token);
//             },
          
//             // (required) Called when a remote or local notification is opened or received
//             onNotification: function(notification) {
//               console.log("NOTIFICATION:", notification);
          
//               // process the notification here
          
//               // required on iOS only 
//               notification.finish(PushNotificationIOS.FetchResult.NoData);
//             },
//             // Android only
//             senderID: "625582448507",
//             // iOS only
//             permissions: {
//               alert: true,
//               badge: true,
//               sound: true
//             },
//             popInitialNotification: true,
//             requestPermissions: true
//           });
//     }

//     render(){
//         return null;
//     }
// }