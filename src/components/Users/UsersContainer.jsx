import React from 'react';
import { connect } from 'react-redux';
import Users from './User';
import { getUsersThunk, followThunk, unfollowThunk } from '../../redux/usersReducer';
import Preloader from '../common/Preloader';

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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgres: state.usersPage.followingProgres
  };
};

const UsersContainer = connect(mapStateToProps, {
  getUsersThunk,
  followThunk,
  unfollowThunk
})(UsersCc) ;

export default UsersContainer