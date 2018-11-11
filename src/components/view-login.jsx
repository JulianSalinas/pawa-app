import React, { Component } from 'react';

import { app } from '../js/firebase';
import Dashboard from './view-scratchpad';
import withFirebaseAuth from 'react-auth-firebase';

// const email = 'test@test.com';
// const password = 'password';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: `test@test.com`,
            password: `password`
        }
    }

    render() {
        const {
            signInWithEmail,
            signUpWithEmail,
            signInWithGoogle,
            signInWithFacebook,
            signInWithGithub,
            signInWithTwitter,
            user,
            error,
            signOut
        } = this.props;

        const { email, password } = this.state;

        if (user) {
            return <Dashboard user={user} error={error} signOut={signOut} />;
        }
        return (
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <input
                        type='text'
                        placeholder='Email'
                        onChange={e => this.setState({ email: e.target.value })}
                    />{'' ''}
                    <br />
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <br />
                    {!user && (
                        <button
                            type='submit'
                            onClick={() => signInWithEmail(email, password)}
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
                    />{'' ''}
                    <br />
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={e => this.setState({ password: e.target.value })}
                        value={password}
                    />{'' ''}
                    <br />
                    <button
                        type='submit'
                        onClick={() => signUpWithEmail(email, password)}
                    >
                        SignUp
                    </button>
                </form>
                <br />
                <button onClick={signInWithGoogle}>Signin with Google</button> <br />
                <button onClick={signInWithFacebook}>Signin with Facebook</button>{'' ''}
                <br />
                <button onClick={signInWithGithub}>Signin with Github</button> <br />
                <button onClick={signInWithTwitter}>Signin with Twitter</button> <br />
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
    },
    github: {
        // redirect: true,
        returnAccessToken: true,
        saveUserInDatabase: true
    },

    twitter: {
        // redirect: true,
        returnAccessToken: true,
        returnSecret: true,
        saveUserInDatabase: true
    }
};

// export default App;
export default withFirebaseAuth(Login, app, authConfig);