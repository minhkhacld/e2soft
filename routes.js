import React from 'react';
import { Setting_ContactSP, Setting_General, Setting_Policy, Setting_TermOfUse, Home_WordCategory, } from './src/components/pages/index';
import Page_Words from './src/kits/page_component/page_words';
import CustomHeaderbar from './src/kits/page_component/custom_header';

const routes = [
    //Home
    {
        name: 'Home_WordCategory',
        component: Home_WordCategory,
        option: {
            title: 'Từ vựng chuyên ngành',
            headerStyle: {
                backgroundColor: 'white'
            }, headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold',
            }, headerShadowVisible: false,
        },
    },
    {
        name: 'Page_Words',
        component: Page_Words,
        option: {
            title: 'Từ vựng',
            headerShown: false,
            // headerTitle: (props) => <CustomHeaderbar {...props} />,
            headerStyle: {
                backgroundColor: 'white'
            }, headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            //  headerShadowVisible: true,
        },
    },

    //setting
    {
        name: 'ContactAndSupport',
        component: Setting_ContactSP,
        option: {
            title: 'Liên hệ và hỗ trợ',
            headerStyle: {
                backgroundColor: 'white'
            }, headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold',
            }, headerShadowVisible: false,
        },

    },
    {
        name: 'General',
        component: Setting_General,
        option: {
            title: 'Chung',
            headerStyle: {
                backgroundColor: 'white'
            }, headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold',
            }, headerShadowVisible: false,
        },
    },
    {
        name: 'Policy',
        component: Setting_Policy,
        option: {
            title: 'Chính sách riêng tư',
            headerStyle: {
                backgroundColor: 'white'
            }, headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold',
            }, headerShadowVisible: false,
        },
    },
    {
        name: 'TermOfUse',
        component: Setting_TermOfUse,
        option: {
            title: 'Điều khoản',
            headerStyle: {
                backgroundColor: 'white'
            }, headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold',
            }, headerShadowVisible: false,
        },
    },
];

export default routes;