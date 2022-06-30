import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    messageCard: {
        minHeight: 30,
        maxWidth: '80%',
        minWidth: 50,
        backgroundColor: '#f1f1f1',
        marginVertical: 5,
        alignSelf: 'flex-start',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 10
    },
    myMessageCard: {
        minHeight: 30,
        maxWidth: '80%',
        minWidth: 50,
        backgroundColor: '#639',
        marginVertical: 5,
        alignSelf: 'flex-end',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10
    },
    message: {
        color: '#000'
    },
    myMessage: {
        color: '#fff'
    },
    userInfoHolder: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#681',
        marginEnd: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userInfo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    inputHolder: {
        width: '100%',
        height: 60,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#0005',
        paddingHorizontal: 10
    },
    input: {
        flex: 1,
        color: '#000',
    },
    sendBtn: {
        height: '100%',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyView: {
        flex: 1,
        alignItems: 'center',
        marginTop: '40%'
    },
    emptyMsg: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold'
    }
});