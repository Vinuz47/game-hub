import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5b7e179c308841b59431446a0f437f9d'
    }
})