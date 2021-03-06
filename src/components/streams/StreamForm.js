import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    renderInput({ input, label, meta }) {
        return (
            <div className="form-group mt-3">
                <label>{ label }</label>
                <input className={`form-control ${meta.error && meta.touched ? "is-invalid" : ""}`}  { ...input } />
                <div className="invalid-feedback">
                    { meta.error }
                </div>
            </div>
        );
    };

   onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form onSubmit={ this.props.handleSubmit(this.onSubmit) } >
                <Field name="title" component={ this.renderInput } label="Title" />
                <Field name="description" component={ this.renderInput } label="Description" />
                <button type="submit" className="btn btn-primary mt-3">Create</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if(! formValues.title) {
        errors.title = 'You must enter title!';
    }

    if(! formValues.description) {
        errors.description = 'You must enter description!';
    }

    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);