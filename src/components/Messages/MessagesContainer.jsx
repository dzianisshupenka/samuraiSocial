import { sendMessage} from '../../redux/dialogReducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         onSendMessage: () => {dispatch(sendMessage())},
//         onMessageChange: (text) => {dispatch(updateNewMessage(text))}
//     }
// }

export default compose(
    connect(mapStateToProps, {sendMessage}),
    WithAuthRedirect
)(Messages)