import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    inputHolder: {
        width: '90%',
        height: 50,
        backgroundColor: '#f1f1f1',
        borderRadius: 4,
        overflow: 'hidden'
    },
    input: {
        flex: 1,
        paddingHorizontal: '4%'
    },
    button: {
        width: '75%',
        height: 44,
        borderRadius: 4,
        backgroundColor: '#639',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    buttonLabel: {
        color: '#fff'
    }
});