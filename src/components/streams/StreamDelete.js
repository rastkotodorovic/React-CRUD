import Modal from '../Modal';
import history from '../../history';
import React from 'react';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    renderActions() {
        return (
            <>
                <button
                    onClick={ () => this.props.deleteStream(this.props.match.params.id) }
                    type="button"
                    className="btn btn-danger"
                >
                    Delete
                </button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </>
        )
    };

    renderContent() {
        if (! this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }

        return `Are you sure you want to delete ${this.props.stream.title}`;
    }

    render() {
        return (
            <div>
                <Modal
                    title="Delete stream"
                    content={ this.renderContent() }
                    actions={ this.renderActions() }
                    onDismiss={ () => history.push('/') }
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchStream, deleteStream })
(StreamDelete);