import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/SideBar/SideBar';
import Content from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';



const App = () => {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Nav />
          <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <Content />} />
            <Route path='/messages' render={() => <MessagesContainer />}/>
            <Route path='/users' render={() => <UsersContainer />}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </div>
        </div>
    </BrowserRouter>

  );
}

export default App;
