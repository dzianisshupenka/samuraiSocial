import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const WithAuthRedirect = (Component) => {

    let mapStateToPropsForRedirect = (state) => ({auth: state.auth.isAuth});

    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.auth) return <Redirect to={'/login'} />
            return <Component {...this.props}/>
        }
    }
    let authProfieContainer = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return authProfieContainer;
}
