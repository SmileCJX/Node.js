const crypto = require('crypto');

// const hash = crypto.createHash('md5');
const hmac = crypto.createHmac('sha256','secret-key');

//可任意多次调用update();
hmac.update('Hello,world');
hmac.update('Hello,nodejs!');

console.log(hmac.digest('hex'));