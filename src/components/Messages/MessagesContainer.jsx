import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogReducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Messages)