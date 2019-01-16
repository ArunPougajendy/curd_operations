var value = {
    errors: {
        email: ['invalid id'],
        password: ['cant be empty' , 'minimum length  8']
    }
};


console.log(Object.values(value.errors).length);

var count = 0;
Object.values(value.errors).forEach(function(err) {
    count+=err.length;
})

console.log(count);