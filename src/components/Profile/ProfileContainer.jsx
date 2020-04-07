import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setProfileThunk, getStatusThunk, updateStatusThunk} from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 6800;
        }
        this.props.setProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }
    render () {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile} status={this.props.status} updateStatus={this.props.updateStatusThunk}/>
        )       
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {setProfileThunk, getStatusThunk, updateStatusThunk}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)