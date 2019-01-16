var axios = require('axios');
var { api_key } = require('./api_key')
var url = 'http://dct-api-data.herokuapp.com/tickets';

var code ='DCT-295a';

axios.delete(`${url}/${code}?api_key=${api_key}`).then((response)=> {
    console.log(response.data);
}).catch((error)=> {
    console.log(error);
});