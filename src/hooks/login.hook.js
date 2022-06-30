import { useState } from "react";
import Auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export const useLogin = () => {
    const [name, setName] = useState('');
    const { reset } = useNavigation();

    const onSubmit = () => {
        if (name.trim().length === 0) alert('Please enter your name to procced');
        else {
            Auth().signInAnonymously().then(({ user }) => {
                const UUID = user.uid;
                reset({
                    index: 0, routes: [{ name: 'Chat', params: { UUID, name } }]
                });
            });
        }
    };

    return {
        name,
        setName,
        onSubmit
    }
}