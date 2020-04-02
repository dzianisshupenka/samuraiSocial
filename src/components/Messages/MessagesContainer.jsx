import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogReducer';
import Messages from './Messages';
import { connect } from 'react-redux';


// const MessagesContainer = () => {
//     return(
//         <StoreContext.Consumer>
//             {
//                (store) => {
//                    let sendMessage = () => {
//                         store.dispatch(sendMessageActionCreator())
//                     }

//                     let onMessageChange = (text) => {
//                         store.dispatch(updateNewMessageActionCreator(text))
//                     }
//                    return <Messages onSendMessage={sendMessage} 
//                              onMessageChange={onMessageChange} 
//                              messagePage={store.getState().messagePage} />
//                } 
//             }
//         </StoreContext.Consumer>       
//     )
// }

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {dispatch(sendMessageActionCreator())},
        onMessageChange: (text) => {dispatch(updateNewMessageActionCreator(text))}
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;