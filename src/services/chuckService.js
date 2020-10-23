const Chuck  = require('chucknorris-io')
    
class ChuckService {
    constructor(){
        this.client = new Chuck();
    }
    async getCategories(){
       const categories =  await this.client.getJokeCategories();
       return categories;
    }

}
const chuckService = new ChuckService();
export default chuckService;