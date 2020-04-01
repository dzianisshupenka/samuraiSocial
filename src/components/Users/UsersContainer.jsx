import React from 'react';
import { connect } from 'react-redux';
import Users from './User';
import { toogleFollowingProgress, toogleIsFetching, follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount } from '../../redux/usersReducer';
import Preloader from '../common/Preloader';
import { getUsers } from '../../api/api';

class UsersCc extends React.Component {

  componentDidMount() {
    this.props.toogleIsFetching(true);
      getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toogleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
              });
        }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toogleIsFetching(true);
    getUsers(pageNumber, this.props.pageSize).then(data => {
          this.props.toogleIsFetching(false);
          this.props.setUsers(data.items);
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
                    toogleFollowingProgress={this.props.toogleFollowingProgress}
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

// let mapDispatchToProps = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(followAC(userId));
//     },
//     unfollow: userId => {
//       dispatch(unfollowAC(userId));
//     },
//     setUser: users => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: currentPage => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setTotalUsersCount: totalCount => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toogleIsFetching: isFetching => {
//       dispatch(toogleIsFetchingAC(isFetching));
//     }
//   };
// };
const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
  toogleFollowingProgress
})(UsersCc) ;

export default UsersContainer