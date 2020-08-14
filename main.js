require('dotenv').config()

const {Wit, log} = require('node-wit');

const client = new Wit({accessToken: process.env.MY_TOKEN});
client.message('what is the temperature', {})
.then((data) => {
  console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
})
.catch(console.error);

