import { useEffect, useState } from "react";
import DB from '@react-native-firebase/database';
import { useRoute } from '@react-navigation/native';

export const useChat = () => {
    const [message, setMessage] = useState('');
    const [messagesList, setMessagesList] = useState([]);
    const { params: { UUID, name } } = useRoute();

    useEffect(() => {
        DB().ref('/chat').on('value', snapshot => {
            if (snapshot.val()) {
                const arr = Object.keys(snapshot.val())
                    .map(function (key, i, arr) {
                        if (arr.length <= 0) return;
                        return { ...snapshot.val()[key], mine: UUID === snapshot.val()[key].UUID }
                    });
                setMessagesList([...arr].sort(function (a, b) {
                    var keyA = new Date(a.created_at),
                        keyB = new Date(b.created_at);

                    if (keyA < keyB) return 1;
                    if (keyA > keyB) return -1;
                    return 0
                }));
            }
        })
    }, []);

    const sendMessage = () => {
        if (message.trim().length === 0) alert("Please enter message");
        else {
            DB().ref(`/chat`).push().set({
                created_at: new Date().getTime(),
                message,
                UUID,
                name
            }).then(() => {
                setMessage('');
            });
        }
    }

    return {
        messagesList,
        message,
        sendMessage,
        setMessage
    }
}