import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile} from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
          this.props.setUserProfile(response.data);
        });
    }

    render () {
        
        return (
            <Profile {...this.props} userProfile={this.props.userProfile}/>
        )       
    }
}

let mapStateToProps = (state) => ({userProfile: state.profilePage.userProfile})

let WithRouterProfile = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithRouterProfile) ;