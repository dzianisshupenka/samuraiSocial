import React from 'react';
import { connect } from 'react-redux';
import Users from './User';
import * as axios from 'axios';
import { toogleIsFetchingAC, followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/usersReducer';
import Preloader from '../common/Preloader';

class UsersCc extends React.Component {

  componentDidMount() {
    this.props.toogleIsFetching(true);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.toogleIsFetching(false);
          this.props.setUser(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toogleIsFetching(true);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.toogleIsFetching(false);
          this.props.setUser(response.data.items);
        });
  }

  render() {
    return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount = {this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    currentPage ={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow} 
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
    isFetching: state.usersPage.isFetching
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUser: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: currentPage => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: totalCount => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    toogleIsFetching: isFetching => {
      dispatch(toogleIsFetchingAC(isFetching));
    }
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCc) ;

export default UsersContainer