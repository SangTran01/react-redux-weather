import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;

		return (
			<tr key={name}>
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td><Chart data={temps} color='blue' units="C" /></td>
				<td><Chart data={pressures} color='red' units="hPa"/></td>
				<td><Chart data={humidities} color='orange' units="%" /></td>
			</tr>
		);	
	}


	render(){
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (Celcius)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps(state){
	return {
		weather:state.weather
	};
}

export default connect(mapStateToProps)(WeatherList);