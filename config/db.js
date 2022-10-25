// <!--  File name: midterm
// Student ID: 301236167
// Name: Chung Hin Ng
// Data: Oct 25, 2022 -->
// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://dbuser:DCLDerLzVnVPfEtD@cluster005.acpzluh.mongodb.net/midterm?retryWrites=true&w=majority";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}