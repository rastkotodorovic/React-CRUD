import React from "react";
import { fetchStream } from '../../actions';
import { connect } from 'react-redux';

class StreamShow extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    render() {
        if (! this.props.stream) {
            return null;
        };

        return (
            <div>
                <h2 className="mb-3">{ this.props.stream.title }</h2>
                <h4>{ this.props.stream.description }</h4>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(
    mapStateToProps,
    { fetchStream }
)(StreamShow);