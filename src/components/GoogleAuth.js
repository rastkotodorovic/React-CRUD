import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
            .init({
                clientId:
                '1057645245824-hfp76fo1041sg5g6jq65mgt7258k3crq.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    signIn = () => {
        this.auth.signIn();
    };

    signOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return <button onClick={this.signOut} type="button" className="btn btn-danger">Sign Out</button>;
        } else {
            return <button onClick={this.signIn} type="button" className="btn btn-primary">Sign In with Google</button>;
        }
    }

    render() {
        return (
            <div className="nav-item">
                { this.renderAuthButton() }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
};

export default connect(
    mapStateToProps, { signIn, signOut }
    )
    (GoogleAuth);