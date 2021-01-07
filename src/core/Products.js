import axios from 'axios';

import appConfig from './appConfig';

export default class Products {
    static getRequest(url) {
        return axios.get(url);
    }

    static postRequest(url) {
        return axios.post(url);
    }

    static getProducts(type) {
        return Products.getRequest(`${appConfig.apiUrl}/order?type=${type}`);
    }
}
