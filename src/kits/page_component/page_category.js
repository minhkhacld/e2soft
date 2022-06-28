import React from 'react'
import PageFrame from './page_frame';
import { ListItem } from 'react-native-elements'
import { View, Text, TouchableOpacity } from 'react-native';


const PageWords = ({ navigation, item }) => {

    return (
        < PageFrame
            content={
                <View>
                    {
                        item.data.length > 0 && item.data.map((dt, index) => {
                            return (
                                <TouchableOpacity>
                                    <ListItem key={index} bottomDivider>

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
    );
};

export default PageCategories;