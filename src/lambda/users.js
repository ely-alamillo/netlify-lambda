const axios = require('axios');

exports.handler = (event, ctx, cb) => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(x => {
      cb(null, { statusCode: 200, body: x.data });
    })
    .catch(err => {
      cb({ error: err });
    });
};
