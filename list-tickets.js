var axios = require('axios');
var { api_key } = require('./api_key')
var url = 'http://dct-api-data.herokuapp.com/tickets';


axios.get(`${url}?api_key=${api_key}`).then((response) => {
    var tickets = response.data;
    if( tickets.length == 0 ) {
        console.log('No tickets found');
    }
    else {
        tickets.forEach(function(ticket) {
            console.log(ticket);
        })
    }
}).catch(function(err) {
    console.log(err);
})
