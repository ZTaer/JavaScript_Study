/**
 * Testing: 测试异步函数
 */
const axios = require('axios');

const getPeople = async () => {
    try{
        const getData = await axios('https://swapi.dev/api/people/');
        return {
            count: getData.data.count,
            results: getData.data.results
        };
    }catch(err){
        console.log(err);
        return err;
    }
}

module.exports = {
    getPeople
}
    