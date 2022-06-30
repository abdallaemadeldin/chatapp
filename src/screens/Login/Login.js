import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useLogin } from '../../hooks/login.hook';
import styles from './styles';

export const Login = () => {
    const { name, onSubmit, setName } = useLogin();

    return (
        <View style={styles.container}>
            <View style={styles.inputHolder}>
                <TextInput style={styles.input} placeholderTextColor={'#000'} placeholder="Please enter your name" value={name} onChangeText={setName} />
            </View>

            <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonLabel}>Start Chatting</Text>
            </TouchableOpacity>
        </View>
    );
};