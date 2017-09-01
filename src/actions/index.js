import axios from 'axios';
const API_KEY = '4bc522c0608824b007bab01a7b28635f';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

// request payload to reducers
export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},ca&units=metric`;
	const request = axios.get(url);
	return {
		type:FETCH_WEATHER,
		payload:request
	};
}