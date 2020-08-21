import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        debugger
        render() {
            if (!this.props.isAuthenticated) return <Redirect to='/login' />

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}



let mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});