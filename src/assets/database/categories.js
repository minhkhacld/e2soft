import {
    oxford_3000_words, irregular,
    sewing_voca,
    mechanical_voca, bank_finance_voca,
} from './index';

const category = [
    {
        title: "Từ vựng chuyên ngành",
        picture: require('../images/home/Kha.jpg'),
        description: "Tổng hợp từ vựng các chuyên ngành",
        navigation: "Home_WordCategory",
        data: [
            {
                navigation: "sewing_voca",
                title: "Từ vựng ngành May",
                data: sewing_voca,
                icon: "tshirt-crew",
            },
            {
                navigation: "mechanical_voca",
                title: "Từ vựng ngành Cơ khí",
                data: mechanical_voca,
                icon: "hammer-screwdriver",
            },
            {
                navigation: "bank_finance_voca",
                title: "Từ vựng ngành Tài chính - Ngân hàng",
                data: bank_finance_voca,
                icon: "bank",
            },
        ],
    },
    {
        title: "3000 từ vựng oxford",
        picture: require('../images/home/Kha.jpg'),
        description: "Tổng hợp 3000 từ vựng tiếng nah Oxford",
        navigation: "oxford_3000_words",
        data: oxford_3000_words,
    },
    {
        title: "Động từ bất quy tắc",
        picture: require('../images/home/Kha.jpg'),
        description: "Tổng hợp 3000 từ vựng tiếng nah Oxford",
        navigation: "irregular",
        data: irregular,
    },
    {
        title: "3000 từ vựng oxford",
        picture: require('../images/home/Kha.jpg'),
        description: "Tổng hợp 3000 từ vựng tiếng nah Oxford",
        navigation: "tu_vung_chuyen_nganh",
        data: [],
    },
    {
        title: "3000 từ vựng oxford",
        picture: require('../images/home/Kha.jpg'),
        description: "Tổng hợp 3000 từ vựng tiếng nah Oxford",
        navigation: "tu_vung_chuyen_nganh",
        data: [],
    },
    {
        title: "3000 từ vựng oxford",
        picture: require('../images/home/Kha.jpg'),
        description: "Tổng hợp 3000 từ vựng tiếng nah Oxford",
        navigation: "tu_vung_chuyen_nganh",
        data: [],
    },
    {
        title: "3000 từ vựng oxford",
        picture: require('../images/home/Kha.jpg'),
        description: "Tổng hợp 3000 từ vựng tiếng nah Oxford",
        navigation: "tu_vung_chuyen_nganh",
        data: [],
    },
    {
        title: "3000 từ vựng oxford",
        picture: require('../images/home/Kha.jpg'),
        description: "Tổng hợp 3000 từ vựng tiếng nah Oxford",
        navigation: "tu_vung_chuyen_nganh",
        data: [],
    },
    {
        title: "3000 từ vựng oxford",
        picture: require('../images/home/Kha.jpg'),
        description: "Tổng hợp 3000 từ vựng tiếng nah Oxford",
        navigation: "tu_vung_chuyen_nganh",
        data: [],
    },

];

export default category;