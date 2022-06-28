import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PageFrame from '../../../../../kits/page_component/page_frame';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const WordCategory = ({ navigation, route }) => {

    const { item } = route.params;
    const handleNavigateToWordsScreen = (item) => {
        navigation.navigate('Page_Words', {
            item: item
        });
    }
    return (
        < PageFrame
            content={
                <View>
                    {
                        item.data.length > 0 && item.data.map((dt, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => handleNavigateToWordsScreen(dt)}>
                                    <ListItem bottomDivider>

                                        {/* <Avatar source={{ uri: l.avatar_url }} /> */}
                                        <Icon name={dt.icon} size={wp('6%')} />
                                        <ListItem.Content>
                                            <ListItem.Title>{dt.title}</ListItem.Title>
                                            {/* <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle> */}
                                        </ListItem.Content>
                                    </ListItem>
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
            }
        />
    )
}

export default WordCategory;