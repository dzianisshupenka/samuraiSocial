import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setProfileThunk} from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 6800;
        }
        this.props.setProfileThunk(userId)
    }

    render () {
 
        return (
            <Profile {...this.props} userProfile={this.props.userProfile}/>
        )       
    }
}

let mapStateToProps = (state) => ({userProfile: state.profilePage.userProfile});

export default compose(
    connect(mapStateToProps, {setProfileThunk}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)