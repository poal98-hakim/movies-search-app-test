import axios from 'axios';
import config from '../../config.json';
import resolver from './resolver';

// Wrapper to add authentication and pass through parameters to the api
export async function apiGet<T>(url : string, apiKey: string, params:{query: string, offset?: number}, always: () => void){
    return resolver<T>(() => axios.get(config.BASE_URL + url, { params: { "api-key": apiKey, ...params } }), always);
}