import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk} from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile () {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authUser;
        }
        this.props.setProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }

    componentDidMount () {
        this.refreshProfile();
    }

    componentDidUpdate (prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {     
            this.refreshProfile();
        }
    }

    render () {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile} 
                                     status={this.props.status} 
                                     savePhoto={this.props.savePhotoThunk}
                                     updateStatus={this.props.updateStatusThunk}
                                     isOwner={!this.props.match.params.userId}/>
        )       
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authUser: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {setProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)