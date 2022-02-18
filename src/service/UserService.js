import axios from "axios";

class UserService {
    api = 'http://localholst:4000/users'
    async getUser() {
        try {
            const {data} = await axios.get(this.api);
            return data;
        } catch(e) {
            
        }

    }
}

export default new UserService();
