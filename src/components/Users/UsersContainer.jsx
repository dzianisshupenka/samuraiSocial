import React from 'react';
import { connect } from 'react-redux';
import Users from './User';
import { getUsersThunk, followThunk, unfollowThunk } from '../../redux/usersReducer';
import Preloader from '../common/Preloader';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingProgress } from '../../redux/usersSelectors';

class UsersCc extends React.Component {

  componentDidMount() {

    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
        }
  onPageChanged = (pageNumber) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount = {this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    currentPage ={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollowThunk}
                    follow={this.props.followThunk} 
                    followingProgres={this.props.followingProgres}

                    />
            </>
  }
}

let mapStateToProps = state => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgres: getFollowingProgress(state)
  };
};

export default compose(
  connect(mapStateToProps, {getUsersThunk, followThunk, unfollowThunk }),
  WithAuthRedirect
)(UsersCc)