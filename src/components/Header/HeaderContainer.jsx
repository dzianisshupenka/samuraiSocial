import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setAuthUserData} from './../../redux/authReducer.js';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        .then(response => {
            debugger
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
    }
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({auth: state.auth })

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer) ;