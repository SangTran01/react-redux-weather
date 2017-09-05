import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';


class GoogleMap extends Component {
	constructor(props) {
    	super(props);
  	}

	render() {
	return (
		<GoogleMapReact
			defaultCenter={[this.props.lat, this.props.lon]}
			defaultZoom={10}
		>
		</GoogleMapReact>
	);
  }
}

export default GoogleMap;