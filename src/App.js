import React, { Component } from 'react';
import './App.css';
import Nav from './components/SideBar/SideBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, HashRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login';
import { connect, Provider } from 'react-redux';
import { initializeThunk } from './redux/appReducer';
import Preloader from './components/common/Preloader';
import store from './redux/reduxStore';
import { WithSuspense } from './hoc/WithSuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));


class App extends Component {
  componentDidMount() {
    this.props.initializeThunk();
}
  render() {
    if(!this.props.initialize) {
      return <Preloader />;
    }
    
    return (
          <div className='app-wrapper'>
            <HeaderContainer />
            <Nav />
            <div className='app-wrapper-content'>
              <Route path='/profile/:userId?' render= {WithSuspense(ProfileContainer)} /> 
              <Route path='/messages' render={WithSuspense(MessagesContainer)}/>
              <Route path='/users' render={() => <UsersContainer />}/>
              <Route path='/news' component={News}/>
              <Route path='/music' component={Music}/>
              <Route path='/settings' component={Settings}/>
              <Route path='/login' render={() => <Login />} />
            </div>
          </div>
    );
  }
}

const mapStateToProps = (state) => ({initialize: state.app.initialize})

let AppContainer = connect(mapStateToProps, {initializeThunk})(App);

const SamuraiJSApp = (props) => {
  return <HashRouter >
        <Provider store={store}>
                <AppContainer />
        </Provider>              
  </HashRouter>
}

export default SamuraiJSApp;
