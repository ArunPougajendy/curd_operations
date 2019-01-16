var axios = require('axios');
var { api_key } = require('./api_key')
var url = 'http://dct-api-data.herokuapp.com/tickets';

var ticket = {
    name: 'Prem',
    department: 'Technical',
    //priority: 'High',
   // message: 'net slow'
};

axios.post(`${url}?api_key=${api_key}`,ticket).then((response) =>{
    var ticket = response.data;
    //console.log(ticket.hasOwnProperty('errors'));
    if(ticket.hasOwnProperty('errors')) {
        //console.log(ticket['errors']);
        var error = ticket.errors;
        console.log('Total Erros: '+Object.keys(error).length);
        for (var key in error) {
            console.log( `${key} : ${error[key].join(', ')}`);
        }
        
    }
    else{
        console.log(ticket);
    }
}).catch((err)=> {
    console.log(err);
});