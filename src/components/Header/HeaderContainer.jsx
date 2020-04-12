import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {logoutThunk} from './../../redux/authReducer.js';


class HeaderContainer extends React.Component {
   
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({auth: state.auth })

export default connect(mapStateToProps, {logoutThunk})(HeaderContainer) ;