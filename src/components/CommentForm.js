import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CommentForm extends React.Component {
	renderError({ error, touched }) {

		if (touched && error ) {
			return(
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({input, label, meta}) => {
		const className = `field ${meta.error && meta.touched ? 'error': ''}`;
		return (
			<div className={className}>
				<label>{ label }</label>
				<input { ...input } autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	}	

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	}


	render() {
		return (
			<form 
			onSubmit={this.props.handleSubmit(this.onSubmit)} 
			className="ui form error">
				<Field name="name" component={this.renderInput} label="Enter Name" />
				<Field name="email" component={this.renderInput} label="Enter Email" />
				<Field name="body" component={this.renderInput} label="Enter Comment" />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	
	if (!formValues.name) {
		errors.name = 'You must enter the name';
	}

	if (!formValues.email) {
		errors.email = 'You must enter the email';
	}

	if (!formValues.body) {
		errors.body = 'You must enter the body';
	}

	return errors;
};



export default reduxForm({
	form: 'commentForm',
	validate
})(CommentForm);
