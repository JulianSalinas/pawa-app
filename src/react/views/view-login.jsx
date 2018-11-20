import React, { Component } from 'react';

import { app } from '../../js/firebase';
import Dashboard from '../dashboard/dashboard-layout';
import withFirebaseAuth from 'react-auth-firebase';

class Login extends Component {

    state = {
        email: '',
        password: ''
    };

    render() {

        const { email, password } = this.state;

        if (this.props.user)
            return <Dashboard user={this.props.user} error={this.props.error} signOut={this.props.signOut} />;

        return (
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <input
                        type='text'
                        placeholder='Email'
                        onChange={e => this.setState({ email: e.target.value })}
                    />{' '}
                    <br />
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <br />
                    {!this.props.user && (
                        <button
                            type='submit'
                            onClick={() => this.props.signInWithEmail(email, password)}
                        >
                            SignIn
                        </button>
                    )}
                </form>
                <form onSubmit={e => e.preventDefault()}>
                    <input
                        type='text'
                        placeholder='Email'
                        onChange={e =>
                            this.setState({
                                email: e.target.value
                            })
                        }
                        value={email}
                    />{' '}
                    <br />
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={e => this.setState({ password: e.target.value })}
                        value={password}
                    />{' '}
                    <br />
                    <button
                        type='submit'
                        onClick={() => this.props.signUpWithEmail(email, password)}
                    >
                        SignUp
                    </button>
                </form>
                <br />
                <button onClick={this.props.signInWithGoogle}>Signin with Google</button> <br />
                <button onClick={this.props.signInWithFacebook}>Signin with Facebook</button>{' '}
            </div>
        );
    }
}

const authConfig = {
    email: {
        verifyOnSignup: false,
        saveUserInDatabase: true
    },
    google: {
        // scopes: ['admin.datatransfer', 'contacts.readonly'], // optional
        // customParams: {
        //   login_hint: 'user@example.com'
        // },
        redirect: true, // default is popup: true, redirect: true,
        returnAccessToken: true,
        // scopes: [], // array
        saveUserInDatabase: true
    },
    facebook: {
        // scopes: ['admin.datatransfer', 'contacts.readonly'], // optional
        // customParams: {
        //   login_hint: 'user@example.com'
        // },
        redirect: true, // default is popup: true, redirect: true,
        returnAccessToken: true,
        saveUserInDatabase: true
    }
};

// export default App;
export default withFirebaseAuth(Login, app, authConfig);
