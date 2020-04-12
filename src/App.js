import React, { Component } from 'react';
import './App.css';
import Nav from './components/SideBar/SideBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login';
import { connect } from 'react-redux';
import { initializeThunk } from './redux/appReducer';
import Preloader from './components/common/Preloader';



class App extends Component {
  componentDidMount() {
    this.props.initializeThunk();
}
  render() {
    if(!this.props.initialize) {
      return <Preloader />;
    }
    
    return (
      <BrowserRouter>
          <div className='app-wrapper'>
            <HeaderContainer />
            <Nav />
            <div className='app-wrapper-content'>
              <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
              <Route path='/messages' render={() => <MessagesContainer />}/>
              <Route path='/users' render={() => <UsersContainer />}/>
              <Route path='/news' component={News}/>
              <Route path='/music' component={Music}/>
              <Route path='/settings' component={Settings}/>
              <Route path='/login' render={() => <Login />} />
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({initialize: state.app.initialize})

export default connect(mapStateToProps, {initializeThunk})(App) ;
