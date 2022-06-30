import React from 'react';
import { View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { useChat } from '../../hooks/chat.hook';

export const Chat = () => {
    const { top, bottom } = useSafeAreaInsets(); // This return the notch height from bottom side.
    const { message, messagesList, setMessage, sendMessage } = useChat();

    const renderItem = ({ item }) => {
        const splitted = item.name.split(' ');
        const tag = splitted.length > 1 ? splitted[0].substr(0, 1) + splitted[1].substr(0, 1) : splitted[0].substr(0, splitted[0].length > 1 ? 2 : 1);
        return (
            <View style={{ flexDirection: 'row', justifyContent: item.mine ? 'flex-end' : 'flex-start' }}>
                {!item?.mine && <View style={styles.userInfoHolder}>
                    <Text style={styles.userInfo}>{tag}</Text>
                </View>}
                <View style={item.mine ? styles.myMessageCard : styles.messageCard}>
                    <Text style={item.mine ? styles.myMessage : styles.message}>{item.message}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={[styles.container, { paddingBottom: bottom }]}>
            <FlatList
                data={messagesList}
                renderItem={renderItem}
                maxToRenderPerBatch={10}
                style={{ width: '100%' }}
                inverted
                contentContainerStyle={{ paddingHorizontal: 5, paddingBottom: top + 20 }}
            />
            <View style={styles.inputHolder}>
                <TextInput style={styles.input} placeholder='Type here...' placeholderTextColor="#0005"
                    multiline value={message} onChangeText={setMessage} />
                <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
                    <Icon name='send' color='#639' size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )

};