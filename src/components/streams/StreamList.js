import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    };

    adminButtons(stream) {
        if (stream.userId === this.props.currentUser) {
            return (
                <div>
                    <Link to={ `/streams/edit/${stream.id}` } class="btn btn-primary m-1">Edit</Link>
                    <a href="#" class="btn btn-danger">Delete</a>
                </div>
            );
        };
    };

    renderStreams() {
        return this.props.streams.map(stream => {
            return (
                <div className="card m-3" style={{width: '18rem'}} key={ stream.id } >
                    <div className="card-body">
                        <h5 className="card-title">{ stream.title }</h5>
                        <p className="card-text">{ stream.description }</p>
                        { this.adminButtons(stream) }
                    </div>
                </div>
            );
        });
    };

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <Link to="/streams/new" exact>
                        <button className="btn btn-primary m-3">Create Stream</button>
                    </Link>
                </div>
            );
        };
    };

    render() {
        return (
            <div>
                <h2 className="m-3">Streams</h2>
                <div className="d-flex flex-row">
                    { this.renderStreams() }
                </div>
                { this.renderCreate() }
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUser: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(
    mapStateToProps,
    { fetchStreams }
)(StreamList);