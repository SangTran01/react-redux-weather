import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {
			term:''
		}
	}

	onInputChange = (event) => {
		this.setState({term: event.target.value});
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		
		this.props.fetchWeather(this.state.term);

		this.setState({term:''});
	}

	render(){
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favorite city"
					value={this.state.term}
					className="form-control"
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToState(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToState)(SearchBar);