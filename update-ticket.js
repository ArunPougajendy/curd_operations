var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/tickets';
var key = '3365d6164cbf875a'

var code ='DCT-5088';

var updateTicket ={
    status: 'completed',
    //department: ''
};

axios.patch(`${url}/${code}?api_key=${key}`,updateTicket).then((response)=>{
    var ticket = response.data;
    if(ticket.errors) {
        console.log(ticket.errors);
        /*var error = ticket.errors;
        console.log('Total Erros: '+Object.keys(error).length);
        for (var key in error) {
            console.log( `${key} : ${error[key].join(', ')}`);
        }*/
    }
    else {
        console.log(ticket);
    }
    }).catch((err)=> {
        console.log(err);
    });